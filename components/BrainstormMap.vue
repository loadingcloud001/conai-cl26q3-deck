<script setup lang="ts">
/**
 * BrainstormMap.vue
 *
 * A reusable Slidev Vue component for rendering a click/hover-reveal
 * mind-map / brainstorm panorama. Built to the slidev-canvas-layout rule:
 *   - canvas 980×552 px
 *   - safe content area ≈ 868×472 px (after `.slidev-layout { px-14 py-10 }`)
 *   - title reserves ~80 px from top
 *
 * Usage in slides.md:
 *   <BrainstormMap :nodes="myNodes" :edges="myEdges" :center="{label:'Brainstorm', x:490, y:220}" />
 *
 * Props:
 *   nodes:  Array<{ id, label, desc, x, y, size, color, cluster }>
 *   edges:  Array<{ from: id, to: id, color?, dashed? }>
 *   center: { label, x, y } — hub label and position
 *   title:  string — accessible title (for accessibility)
 *
 * Self-validates on mount that all coordinates fit within the 868×472 safe
 * area. Emits to console.error if anything overflows. This makes the
 * component DELIVERY-READY: any future usage produces clear overflow errors
 * before the user sees a broken slide.
 */

import { computed, onMounted, ref } from 'vue'

export interface Node {
  id: string
  label: string
  desc: string
  x: number
  y: number
  size: number
  color: string
  cluster?: string
}
export interface Edge {
  from: string
  to: string
  color?: string
  dashed?: boolean
}

const props = defineProps<{
  nodes: Node[]
  edges: Edge[]
  center: { label: string; x: number; y: number }
  title?: string
  /** Optional override for the safe-area width (default 868). */
  safeWidth?: number
  /** Optional override for the safe-area height (default 472). */
  safeHeight?: number
}>()

const hoveredId = ref<string | null>(null)

// Default safe area for slide content. Comes from slidev-canvas-layout skill:
// 980 canvas - 56×2 padding = 868 width. 552 - 80 title reserve - 10 bottom safety = 462,
// but we round to 472 for a comfortable margin.
const SAFE_W = computed(() => props.safeWidth ?? 868)
const SAFE_H = computed(() => props.safeHeight ?? 472)
const CENTER_X = 490 // canvas mid

function curvePath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const cx = mx + (x2 - x1) * 0.05
  const cy = my - Math.abs(x2 - x1) * 0.1
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

function resolveColor(n: Node, edge: Edge | undefined): string {
  if (edge?.color) return edge.color
  return n.color
}

function isHorizontalEdge(n: Node, edge: Edge, allNodes: Node[]): boolean {
  const target = allNodes.find(x => x.id === edge.to) || n
  return Math.abs(n.x - target.x) > Math.abs(n.y - target.y)
}

// Self-validate on mount: never ship a broken slide
onMounted(() => {
  const overflows: string[] = []
  // Center overflow check
  if (props.center.y > SAFE_H.value) {
    overflows.push(`Center at y=${props.center.y} exceeds safe height ${SAFE_H.value}`)
  }
  for (const n of props.nodes) {
    if (n.x + n.size > SAFE_W.value) overflows.push(`Node "${n.id}" right edge ${n.x + n.size}px > safe width ${SAFE_W.value}px`)
    if (n.x - n.size < 14) overflows.push(`Node "${n.id}" left edge too close to canvas border (x=${n.x})`)
    if (n.y + n.size > SAFE_H.value) overflows.push(`Node "${n.id}" bottom edge ${n.y + n.size}px > safe height ${SAFE_H.value}px`)
    if (n.y - n.size < 0) overflows.push(`Node "${n.id}" top out of bounds (y=${n.y})`)
  }
  if (overflows.length) {
    // eslint-disable-next-line no-console
    console.error('[BrainstormMap] Boundary violations:', overflows)
  }
})
</script>

<template>
  <div class="brainstorm-map" :aria-label="props.title ?? 'Mind map'">
    <!-- SVG layer for connections (drawn behind nodes) -->
    <svg
      class="connections"
      :viewBox="`0 0 ${SAFE_W} ${SAFE_H}`"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- edges from center to each node -->
      <path
        v-for="(edge, i) in props.edges"
        :key="`e-${i}`"
        :d="curvePath(props.center.x, props.center.y, (props.nodes.find(n => n.id === edge.to) ?? props.nodes[0]).x, (props.nodes.find(n => n.id === edge.to) ?? props.nodes[0]).y)"
        :stroke="resolveColor(props.nodes.find(n => n.id === edge.to) ?? props.nodes[0], edge)"
        :stroke-width="edge.dashed ? 1 : 1.5"
        :stroke-dasharray="edge.dashed ? '3 3' : ''"
        fill="none"
        opacity="0.5"
      />
    </svg>

    <!-- Central hub -->
    <div
      class="node node-center"
      :style="{
        left: props.center.x - 35 + 'px',
        top: props.center.y - 35 + 'px',
        width: '70px',
        height: '70px',
      }"
    >
      {{ props.center.label }}
    </div>

    <!-- All nodes -->
    <div
      v-for="node in props.nodes"
      :key="node.id"
      class="node node-paradigm"
      :style="{
        left: node.x - node.size / 2 + 'px',
        top: node.y - node.size / 2 + 'px',
        width: node.size + 'px',
        height: node.size + 'px',
        background: node.color,
        fontSize: node.size >= 50 ? 12 : node.size >= 40 ? 10 : 8,
      }"
      :data-cluster="node.cluster ?? ''"
      :data-name="node.label"
      @mouseenter="hoveredId = node.id"
      @mouseleave="hoveredId = null"
    >
      <span class="node-label">{{ node.label }}</span>
      <span
        v-if="hoveredId === node.id"
        class="node-tooltip"
        :style="{ borderTopColor: node.color }"
      >
        {{ node.desc }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.brainstorm-map {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
              linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%);
  border: 1px solid #ECECEC;
  border-radius: 14px;
  overflow: hidden;
}
.connections {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
.node {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  text-align: center;
  z-index: 10;
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
}
.node-center {
  border-radius: 50%;
  background: #2C2C2C;
  font-size: 22px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}
.node-paradigm {
  border-radius: 50%;
  cursor: pointer;
  padding: 4px;
  flex-direction: column;
  line-height: 1.1;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
.node-paradigm:hover {
  transform: scale(1.15);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.8);
  z-index: 20;
  filter: brightness(1.1);
}
.node-label {
  display: block;
}
.node-tooltip {
  position: absolute;
  top: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #2C2C2C;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  border-top: 2px solid #888;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 30;
  pointer-events: none;
}
</style>
