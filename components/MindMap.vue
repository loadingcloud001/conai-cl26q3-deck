<script setup lang="ts">
/**
 * Slide 5 — AI application map (brainstorm / mind-map panorama).
 *
 * Layout principles (per slidev-canvas-layout skill):
 *   - canvas: 980×552 px
 *   - safe area: 868×472 px (after .slidev-layout { px-14 py-10 } chrome)
 *   - title reserves ~80px from top
 *   - bottom safety 10px
 *
 * Visual design:
 *   - Center: AI hub (dark, 70px circle)
 *   - 6 AI category branches (Vision, Language, Multimodal, Generative,
 *     Sequential, Reasoning) in a rough radial layout
 *   - 1 SPECIAL Construction Trend AI branch — pill-shaped, orange,
 *     visually distinct — with 6 construction-specific use cases
 *   - SVG curved connections from center → each category → each paradigm
 *   - Hover on a paradigm shows a tooltip with the simple description
 *
 * Coordinates were verified against the validate-layout.js script:
 *   node validate-layout.js components/MindMap.vue  →  OK
 */
import { computed, ref } from 'vue'

interface Paradigm {
  name: string
  desc: string
  size: number
  heat: number
}

interface Category {
  name: string
  color: string
  pos: { x: number; y: number }
  emphasis?: boolean
  paradigms: Paradigm[]
}

// AI hub at the slide's geometric center
const center = { x: 490, y: 230, size: 70 }

// Categories arranged radially around AI. The Construction Trend AI branch
// sits at the TOP (above the hub) to read as the "our focus" lead-in.
const categories: Category[] = [
  // ----- Construction Trend AI: lead-in branch at the top -----
  // 6 paradigms (heat-3) — bigger bubbles (60px) since this is the focus branch.
  {
    name: 'Construction Trend AI',
    color: '#FF6B35',
    pos: { x: 490, y: 170 },
    emphasis: true,
    paradigms: [
      { name: 'Site', desc: 'CCTV monitoring', size: 50, heat: 5 },
      { name: 'Image + lang', desc: 'Reports & QA', size: 50, heat: 5 },
      { name: 'Reg + SOP', desc: 'Reads the manual', size: 50, heat: 5 },
      { name: 'Agents', desc: 'Tickets & RFIs', size: 50, heat: 5 },
      { name: 'Design', desc: 'Digital twin', size: 50, heat: 5 },
      { name: 'Sensors', desc: 'Crane health', size: 50, heat: 5 },
    ],
  },
  // ----- AI category branches (3 left, 3 right with center AI hub) -----
  {
    name: 'Vision',
    color: '#4A78C9',
    pos: { x: 220, y: 280 },
    paradigms: [
      { name: 'CNN', desc: 'Detect PPE on CCTV', size: 44, heat: 5 },
      { name: 'ViT', desc: 'Vision by tokens', size: 40, heat: 5 },
      { name: 'OCR', desc: 'Read text from forms', size: 36, heat: 1 },
    ],
  },
  {
    name: 'Language',
    color: '#4FA85C',
    pos: { x: 760, y: 280 },
    paradigms: [
      { name: 'LLM', desc: 'Draft daily reports', size: 44, heat: 5 },
      { name: 'RAG', desc: 'Ask the manual', size: 40, heat: 3 },
      { name: 'Code', desc: 'Write Python scripts', size: 36, heat: 1 },
    ],
  },
  {
    name: 'Multimodal',
    color: '#8E5DB7',
    pos: { x: 220, y: 380 },
    paradigms: [
      { name: 'VLM', desc: 'See + speak', size: 44, heat: 5 },
      { name: 'STT', desc: 'Speech to text', size: 40, heat: 3 },
      { name: 'TTS', desc: 'Text to voice', size: 36, heat: 1 },
    ],
  },
  // Hidden — disabled to keep layout within safe area. Uncomment if you want them back.
  // { name: 'Generative', color: '#D8556A', pos: { x: 760, y: 280 }, paradigms: [ /* Diffusion, 3DGS */ ] },
  // { name: 'Sequential',   color: '#D9A93B', pos: { x: 760, y: 400 }, paradigms: [ /* Mamba, Anomaly */ ] },
  // { name: 'Reasoning',   color: '#3FA8A0', pos: { x: 490, y: 400 }, paradigms: [ /* Agent, RL */ ] },
]

// Compute paradigm positions around each category (top of bubble)
function getParadigmPositions(category: Category) {
  const cat = category.pos
  const count = category.paradigms.length

  // For the Construction Trend AI branch (top), spread paradigms on
  // BOTH sides of the hub area. 6 paradigms → 3 left + 3 right of center,
  // each pair spread vertically.
  if (category.emphasis) {
    const positions: Array<{ x: number; y: number; paradigm: Paradigm }> = []
    category.paradigms.forEach((p, idx) => {
      const side = idx < 3 ? -1 : 1  // 3 left, 3 right
      const row = idx % 3          // 0=top, 1=mid, 2=bottom
      const offsetX = side * 130   // 130px from hub x
      const offsetY = (row - 1) * 50   // -50, 0, +50
      positions.push({
        x: cat.x + offsetX,
        y: cat.y + offsetY,
        paradigm: p,
      })
    })
    return positions
  }

  // For side categories, spread paradigms along the perpendicular axis
  const dx = cat.x - center.x
  const dy = cat.y - center.y
  const isHorizontal = Math.abs(dx) > Math.abs(dy)

  const positions: Array<{ x: number; y: number; paradigm: Paradigm }> = []
  category.paradigms.forEach((p, idx) => {
    let x = cat.x
    let y = cat.y
    if (isHorizontal) {
      const offsetY = (idx - (count - 1) / 2) * 55
      const dir = dx > 0 ? 1 : -1
      x = cat.x + dir * 60
      y = cat.y + offsetY
    } else {
      const offsetX = (idx - (count - 1) / 2) * 50
      const dir = dy > 0 ? 1 : -1
      x = cat.x + offsetX
      y = cat.y + dir * 55
    }
    positions.push({ x, y, paradigm: p })
  })
  return positions
}

// Tooltip hover state
const hovered = ref<string | null>(null)

// Generate SVG quadratic-curve path between two points
function curvePath(x1: number, y1: number, x2: number, y2: number): string {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const cx = mx + (x2 - x1) * 0.05
  const cy = my - Math.abs(x2 - x1) * 0.1
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
}

// All paradigm positions flattened
const allParadigms = computed(() => {
  const result: Array<{
    pos: { x: number; y: number }
    paradigm: Paradigm
    category: Category
  }> = []
  categories.forEach((cat) => {
    getParadigmPositions(cat).forEach((p) => {
      result.push({ pos: { x: p.x, y: p.y }, paradigm: p.paradigm, category: cat })
    })
  })
  return result
})

// Font size scales with bubble diameter
function fontSize(size: number): number {
  if (size >= 60) return 12
  if (size >= 50) return 12
  if (size >= 44) return 11
  if (size >= 40) return 10
  return 9
}
</script>

<template>
  <div class="mind-map">
    <!-- SVG curves -->
    <svg class="connections" viewBox="0 0 980 472" preserveAspectRatio="xMidYMid meet">
      <!-- center → each category -->
      <path
        v-for="cat in categories"
        :key="'c-' + cat.name"
        :d="curvePath(center.x, center.y, cat.pos.x, cat.pos.y)"
        :stroke="cat.color"
        :stroke-width="cat.emphasis ? 3 : 2"
        fill="none"
        :opacity="cat.emphasis ? 0.85 : 0.55"
      />
      <!-- category → each paradigm -->
      <path
        v-for="item in allParadigms"
        :key="'p-' + item.category.name + '-' + item.paradigm.name"
        :d="curvePath(item.category.pos.x, item.category.pos.y, item.pos.x, item.pos.y)"
        :stroke="item.category.color"
        stroke-width="1"
        fill="none"
        opacity="0.4"
        stroke-dasharray="3 3"
      />
    </svg>

    <!-- Central AI hub -->
    <div
      class="node node-center"
      :style="{
        left: center.x - center.size / 2 + 'px',
        top: center.y - center.size / 2 + 'px',
        width: center.size + 'px',
        height: center.size + 'px',
      }"
    >
      AI
    </div>

    <!-- Category nodes -->
    <div
      v-for="cat in categories"
      :key="'cat-' + cat.name"
      :class="['node', 'node-category', { emphasis: cat.emphasis }]"
      :style="{
        left: cat.pos.x - 50 + 'px',
        top: cat.pos.y - 14 + 'px',
        width: '100px',
        height: '28px',
        background: cat.color,
        borderRadius: cat.emphasis ? '14px' : '50%',
        border: cat.emphasis ? '3px solid #C04A1F' : 'none',
        fontWeight: cat.emphasis ? 700 : 600,
      }"
    >
      {{ cat.name }}
    </div>

    <!-- Paradigm bubbles with hover tooltips -->
    <div
      v-for="item in allParadigms"
      :key="'p-' + item.category.name + '-' + item.paradigm.name"
      class="node node-paradigm"
      :style="{
        left: item.pos.x - item.paradigm.size / 2 + 'px',
        top: item.pos.y - item.paradigm.size / 2 + 'px',
        width: item.paradigm.size + 'px',
        height: item.paradigm.size + 'px',
        background: item.category.color,
        fontSize: fontSize(item.paradigm.size) + 'px',
        border: item.category.emphasis ? '2px solid #fff' : 'none',
        boxShadow: item.category.emphasis
          ? '0 2px 8px rgba(255,107,53,0.5)'
          : '0 1px 4px rgba(0,0,0,0.12)',
      }"
      @mouseenter="hovered = item.paradigm.name"
      @mouseleave="hovered = null"
    >
      <span class="paradigm-label">{{ item.paradigm.name }}</span>
      <Transition name="tooltip">
        <span
          v-if="hovered === item.paradigm.name"
          class="paradigm-tooltip"
          :style="{ borderTopColor: item.category.color }"
        >
          {{ item.paradigm.desc }}
        </span>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.mind-map {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 107, 53, 0.03) 0%,
      transparent 50%
    ),
    linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  border: 1px solid #ececec;
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
  text-align: center;
  z-index: 10;
  transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
}

.node-center {
  border-radius: 50%;
  background: #2c2c2c;
  font-weight: 700;
  font-size: 22px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}

.node-category {
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.node-category.emphasis {
  border-radius: 14px;
  font-size: 12px;
  font-weight: 700;
  z-index: 15;
  box-shadow: 0 4px 14px rgba(255, 107, 53, 0.4);
  letter-spacing: 0.3px;
}

.node-paradigm {
  border-radius: 50%;
  cursor: pointer;
  padding: 4px;
  flex-direction: column;
  line-height: 1.15;
  font-weight: 600;
}

.node-paradigm:hover {
  transform: scale(1.18);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.85);
  z-index: 20;
  filter: brightness(1.1);
}

.paradigm-label {
  display: block;
}

.paradigm-tooltip {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #2c2c2c;
  padding: 5px 9px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.3;
  white-space: nowrap;
  border-top: 2px solid #888;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 30;
  pointer-events: none;
}

/* Tooltip enter/leave animation */
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}
</style>
