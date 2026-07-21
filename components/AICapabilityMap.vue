<script setup lang="ts">
import { computed, ref } from 'vue'
import { hierarchy, tree, type HierarchyPointNode } from 'd3-hierarchy'

type Side = 'left' | 'right'
type NodeKind = 'root' | 'family' | 'task'

interface CapabilityFamily {
  id: string
  label: string
  color: string
  side: Side
  tasks: string[]
}

interface MapDatum {
  id: string
  label: string
  kind: NodeKind
  color: string
  familyId?: string
  children?: MapDatum[]
}

interface PositionedNode {
  id: string
  label: string
  kind: Exclude<NodeKind, 'root'>
  color: string
  familyId: string
  side: Side
  x: number
  y: number
  width: number
  height: number
}

interface PositionedLink {
  id: string
  familyId: string
  color: string
  source: PositionedNode | RootNode
  target: PositionedNode
}

interface RootNode {
  id: 'root'
  kind: 'root'
  x: number
  y: number
  width: number
  height: number
}

const WIDTH = 868
const HEIGHT = 400
const CENTER_X = WIDTH / 2
const CENTER_Y = HEIGHT / 2
const ROOT_WIDTH = 132
const ROOT_HEIGHT = 64
const FAMILY_MIN_WIDTH = 126
const FAMILY_HEIGHT = 28
const TASK_HEIGHT = 22
const TREE_DEPTH = 330
const VERTICAL_PADDING = 16

const families: CapabilityFamily[] = [
  {
    id: 'multimodal',
    label: 'Multimodal',
    color: '#7C5CBF',
    side: 'left',
    tasks: ['Image-to-Text', 'Image-Text-to-Text', 'Text-to-Image', 'Text-to-Video', 'Document AI'],
  },
  {
    id: 'vision',
    label: 'Vision',
    color: '#3974C5',
    side: 'left',
    tasks: ['Object Detection', 'Image Classification', 'Image Segmentation', 'Depth Estimation', 'Pose Estimation', 'Image-to-Image'],
  },
  {
    id: 'audio',
    label: 'Audio',
    color: '#D0832F',
    side: 'left',
    tasks: ['Text-to-Speech', 'Speech-to-Text', 'Audio Classification', 'Music Generation'],
  },
  {
    id: 'language',
    label: 'Language',
    color: '#3F9460',
    side: 'right',
    tasks: ['Text Generation', 'Text Classification', 'Token Classification', 'Translation', 'Summarization', 'Question Answering'],
  },
  {
    id: 'reasoning',
    label: 'Reasoning',
    color: '#C65368',
    side: 'right',
    tasks: ['Agent', 'Planning', 'Retrieval', 'Reasoning', 'Zero-Shot'],
  },
  {
    id: 'tabular-time-series',
    label: 'Tabular / Time Series',
    color: '#238B91',
    side: 'right',
    tasks: ['Tabular Classification', 'Time Series', 'Anomaly Detection', 'Recommendation'],
  },
]

const rootNode: RootNode = {
  id: 'root',
  kind: 'root',
  x: CENTER_X,
  y: CENTER_Y,
  width: ROOT_WIDTH,
  height: ROOT_HEIGHT,
}

const activeFamily = ref<string | null>(null)
const activeNode = ref<PositionedNode | null>(null)

const familyDescriptions: Record<string, string> = {
  multimodal: 'Combines text, images, video, audio, or documents in one AI workflow.',
  vision: 'Understands visual scenes, objects, people, geometry, and image structure.',
  audio: 'Understands or generates speech, sound, and music.',
  language: 'Understands, transforms, answers, and generates human language.',
  reasoning: 'Plans multi-step work, retrieves knowledge, and uses tools to reach a goal.',
  'tabular-time-series': 'Learns patterns from structured records, sensor streams, and values over time.',
}

const taskDescriptions: Record<string, string> = {
  'Image-to-Text': 'Turns an image into a caption, description, or extracted text.',
  'Image-Text-to-Text': 'Answers or writes using both an image and a text instruction.',
  'Text-to-Image': 'Generates a new image from a written prompt.',
  'Text-to-Video': 'Generates or extends video from a written prompt.',
  'Document AI': 'Reads and extracts information from forms, reports, drawings, and PDFs.',
  'Object Detection': 'Finds and labels multiple objects in an image or video, such as PPE on site.',
  'Image Classification': 'Assigns one overall category or condition to an image.',
  'Image Segmentation': 'Labels individual pixels to separate objects and regions precisely.',
  'Depth Estimation': 'Estimates how far surfaces and objects are from the camera.',
  'Pose Estimation': 'Detects body joints or object keypoints to understand posture and movement.',
  'Image-to-Image': 'Transforms an image while preserving its main structure or content.',
  'Text-to-Speech': 'Converts written text into natural-sounding speech.',
  'Speech-to-Text': 'Transcribes spoken audio into searchable, editable text.',
  'Audio Classification': 'Recognizes the type of sound, event, speaker, or acoustic condition.',
  'Music Generation': 'Creates music or musical audio from a prompt or reference.',
  'Text Generation': 'Produces new text such as drafts, explanations, reports, or code.',
  'Text Classification': 'Assigns a category, intent, topic, or sentiment to a piece of text.',
  'Token Classification': 'Labels individual words or tokens, such as names, dates, or locations.',
  Translation: 'Converts content from one language into another.',
  Summarization: 'Condenses long content into its main points and decisions.',
  'Question Answering': 'Returns an answer to a question from knowledge or supplied context.',
  Agent: 'Plans steps, uses tools, and takes actions to complete a goal.',
  Planning: 'Breaks a complex goal into an ordered sequence of workable steps.',
  Retrieval: 'Finds the most relevant information from documents, databases, or search.',
  Reasoning: 'Works through multi-step evidence or constraints before producing an answer.',
  'Zero-Shot': 'Handles new labels or tasks without task-specific training examples.',
  'Tabular Classification': 'Predicts a category from rows and columns of structured data.',
  'Time Series': 'Forecasts or interprets values that change over time.',
  'Anomaly Detection': 'Flags unusual patterns that may indicate faults, risks, or unexpected events.',
  Recommendation: 'Ranks or suggests the most relevant items, actions, or next choices.',
}

// Highlighted from current hot AI apps (2025–2026): high-use daily work
// (chat, summarization, retrieval, document/media work) and fast-growing
// capabilities (agents, reasoning, multimodal generation). Detail slides
// already exist for Image-to-Text (Page 6) and are planned for Object
// Detection (Page 8) and Speech-to-Text (Page 9); the remaining entries are
// flagged here so the Page 5 trend legend stays consistent with the rest of
// the deck narrative.
const trendTasks = new Set([
  'Image-to-Text',
  'Object Detection',
  'Speech-to-Text',
  'Text-to-Image',
  'Text Generation',
  'Agent',
  'Retrieval',
  'Reasoning',
  'Document AI',
  'Translation',
  'Summarization',
  'Image Segmentation',
  'Depth Estimation',
  'Text-to-Video',
  'Text-to-Speech',
])

function isTrendTask(label: string): boolean {
  return trendTasks.has(label)
}

function isTrendNode(node: PositionedNode): boolean {
  return node.kind === 'task' && isTrendTask(node.label)
}

function taskWidth(label: string): number {
  return Math.max(78, Math.min(144, Math.round(label.length * 6.15 + 22)))
}

function familyWidth(label: string): number {
  return Math.max(FAMILY_MIN_WIDTH, Math.min(154, Math.round(label.length * 6.4 + 26)))
}

function toHierarchy(sideFamilies: CapabilityFamily[]): MapDatum {
  return {
    id: 'layout-root',
    label: 'AI Capabilities',
    kind: 'root',
    color: '#1F2937',
    children: sideFamilies.map(family => ({
      id: family.id,
      label: family.label,
      kind: 'family',
      color: family.color,
      familyId: family.id,
      children: family.tasks.map((label, index) => ({
        id: `${family.id}-${index}`,
        label,
        kind: 'task',
        color: family.color,
        familyId: family.id,
      })),
    })),
  }
}

function positionNode(node: HierarchyPointNode<MapDatum>, side: Side): PositionedNode {
  const direction = side === 'left' ? -1 : 1
  const kind = node.data.kind as 'family' | 'task'
  return {
    id: node.data.id,
    label: node.data.label,
    kind,
    color: node.data.color,
    familyId: node.data.familyId ?? node.data.id,
    side,
    x: CENTER_X + direction * node.y,
    y: VERTICAL_PADDING + node.x,
    width: kind === 'family' ? familyWidth(node.data.label) : taskWidth(node.data.label),
    height: kind === 'family' ? FAMILY_HEIGHT : TASK_HEIGHT,
  }
}

function layoutSide(side: Side): { nodes: PositionedNode[]; links: PositionedLink[] } {
  const sideFamilies = families.filter(family => family.side === side)
  const layout = tree<MapDatum>()
    .size([HEIGHT - VERTICAL_PADDING * 2, TREE_DEPTH])
    .separation((a, b) => (a.parent === b.parent ? 1 : 1.28))

  const root = layout(hierarchy(toHierarchy(sideFamilies)))
  const pointNodes = root.descendants().filter(node => node.depth > 0)
  const nodes = pointNodes.map(node => positionNode(node, side))
  const nodeById = new Map(nodes.map(node => [node.id, node]))
  const links: PositionedLink[] = []

  for (const node of pointNodes) {
    const target = nodeById.get(node.data.id)
    if (!target) continue

    const source = node.depth === 1
      ? rootNode
      : nodeById.get(node.parent?.data.id ?? '')

    if (!source) continue
    links.push({
      id: `${source.id}-${target.id}`,
      familyId: target.familyId,
      color: target.color,
      source,
      target,
    })
  }

  return { nodes, links }
}

const layout = computed(() => {
  const left = layoutSide('left')
  const right = layoutSide('right')
  return {
    nodes: [...left.nodes, ...right.nodes],
    links: [...left.links, ...right.links],
  }
})

function linkPath(link: PositionedLink): string {
  const leftward = link.target.x < link.source.x
  const sourceHalf = link.source.width / 2
  const targetHalf = link.target.width / 2
  const sx = link.source.x + (leftward ? -sourceHalf : sourceHalf)
  const tx = link.target.x + (leftward ? targetHalf : -targetHalf)
  const middle = (sx + tx) / 2
  return `M ${sx} ${link.source.y} C ${middle} ${link.source.y}, ${middle} ${link.target.y}, ${tx} ${link.target.y}`
}

function isMuted(familyId: string): boolean {
  return activeFamily.value !== null && activeFamily.value !== familyId
}

function activate(node: PositionedNode): void {
  activeFamily.value = node.familyId
  activeNode.value = node
}

function deactivate(): void {
  activeFamily.value = null
  activeNode.value = null
}

function nodeDescription(node: PositionedNode): string {
  return node.kind === 'family'
    ? familyDescriptions[node.familyId]
    : taskDescriptions[node.label]
}

function familyLabel(familyId: string): string {
  return families.find(family => family.id === familyId)?.label ?? familyId
}
</script>

<template>
  <div class="capability-map" aria-label="Mind map of 30 Hugging Face AI tasks in six capability families">
    <div class="trend-legend" aria-label="Orange outline marks current high-use or fast-growing AI capabilities">
      <span class="legend-swatch" aria-hidden="true"></span>
      <span>Current high-use / fast-growing</span>
    </div>
    <svg
      class="map-svg"
      :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
      preserveAspectRatio="xMidYMid meet"
      role="img"
    >
      <title>AI capabilities — 30 Hugging Face tasks</title>

      <g class="links" aria-hidden="true">
        <path
          v-for="link in layout.links"
          :key="link.id"
          class="map-link"
          :class="{ muted: isMuted(link.familyId), active: activeFamily === link.familyId }"
          :d="linkPath(link)"
          :stroke="link.color"
          :data-family="link.familyId"
        />
      </g>

      <g
        class="root-node"
        :transform="`translate(${rootNode.x}, ${rootNode.y})`"
        data-node-id="root"
      >
        <rect
          :x="-rootNode.width / 2"
          :y="-rootNode.height / 2"
          :width="rootNode.width"
          :height="rootNode.height"
          rx="20"
        />
        <text class="root-title" text-anchor="middle" y="-4">AI Capabilities</text>
        <text class="root-subtitle" text-anchor="middle" y="16">30 HF tasks</text>
      </g>

      <g
        v-for="node in layout.nodes"
        :key="node.id"
        class="map-node"
        :class="[
          `node-${node.kind}`,
          { muted: isMuted(node.familyId), highlighted: isTrendNode(node) },
        ]"
        :transform="`translate(${node.x}, ${node.y})`"
        :data-node-id="node.id"
        :data-family="node.familyId"
        tabindex="0"
        @mouseenter="activate(node)"
        @mouseleave="deactivate"
        @focus="activate(node)"
        @blur="deactivate"
      >
        <rect
          :x="-node.width / 2"
          :y="-node.height / 2"
          :width="node.width"
          :height="node.height"
          :rx="node.kind === 'family' ? 9 : 7"
          :fill="node.kind === 'family' ? node.color : '#FFFFFF'"
          :stroke="isTrendNode(node) ? '#F26A2E' : node.color"
          :stroke-width="isTrendNode(node) ? 2.6 : node.kind === 'family' ? 0 : 1.35"
        />
        <text
          text-anchor="middle"
          dominant-baseline="central"
          :fill="node.kind === 'family' ? '#FFFFFF' : '#253247'"
        >{{ node.label }}</text>
      </g>
    </svg>
    <Transition name="dock">
      <div
        v-if="activeNode"
        class="info-dock"
        role="status"
        aria-live="polite"
      >
        <span class="dock-family" :style="{ color: activeNode.color }">
          {{ familyLabel(activeNode.familyId) }}
        </span>
        <strong>{{ activeNode.label }}</strong>
        <span class="dock-description">{{ nodeDescription(activeNode) }}</span>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.capability-map {
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: -2px;
  border: 1px solid #eadfd8;
  border-radius: 16px;
  background:
    radial-gradient(circle at 50% 48%, rgba(255, 107, 53, 0.13) 0%, rgba(255, 227, 214, 0.62) 24%, transparent 48%),
    linear-gradient(180deg, #f3f1ef 0%, #fff8f4 52%, #ffe3d6 100%);
  box-shadow: 0 8px 24px rgba(92, 68, 56, 0.1);
  overflow: hidden;
}

.trend-legend {
  position: absolute;
  top: 8px;
  left: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 9px;
  color: #725b4e;
  font-size: 9px;
  font-weight: 650;
  letter-spacing: 0.05px;
  background: rgba(255, 248, 244, 0.9);
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(92, 68, 56, 0.08);
  transform: translateX(-50%);
  pointer-events: none;
}

.legend-swatch {
  width: 16px;
  height: 8px;
  border: 2px solid #F26A2E;
  border-radius: 4px;
  background: #FFFFFF;
}

.info-dock {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 30;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 190px;
  min-height: 92px;
  padding: 10px 12px;
  color: #253247;
  text-align: center;
  font-size: 10px;
  line-height: 1.28;
  background: rgba(255, 255, 255, 0.98);
  border: 2px solid rgba(255, 107, 53, 0.5);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(92, 68, 56, 0.22);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.dock-family {
  font-size: 8.5px;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.55px;
}

.info-dock strong {
  color: #263247;
  font-size: 12px;
}

.dock-description {
  color: #5b6472;
}

.dock-enter-active,
.dock-leave-active {
  transition: opacity 120ms ease, transform 120ms ease;
}

.dock-enter-from,
.dock-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.96);
}

.map-svg {
  display: block;
  width: 100%;
  height: 100%;
  font-family: Inter, ui-sans-serif, system-ui, sans-serif;
}

.map-link {
  fill: none;
  stroke-width: 1.55;
  stroke-linecap: round;
  opacity: 0.48;
  transition: opacity 160ms ease, stroke-width 160ms ease;
}

.map-link.active {
  opacity: 0.9;
  stroke-width: 2.2;
}

.map-link.muted {
  opacity: 0.1;
}

.root-node rect {
  fill: #243247;
  stroke: #ffffff;
  stroke-width: 3;
  filter: drop-shadow(0 5px 8px rgba(24, 36, 53, 0.22));
}

.root-title {
  fill: #ffffff;
  font-size: 14px;
  font-weight: 750;
  letter-spacing: 0.1px;
}

.root-subtitle {
  fill: #cbd5e1;
  font-size: 11px;
  font-weight: 550;
}

.map-node {
  cursor: default;
  outline: none;
  transition: opacity 160ms ease;
}

.map-node rect {
  filter: drop-shadow(0 2px 3px rgba(31, 45, 66, 0.08));
  transition: filter 160ms ease, stroke-width 160ms ease, transform 160ms ease;
}

.map-node text {
  pointer-events: none;
  font-size: 11.5px;
  font-weight: 560;
}

.node-family text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1px;
}

.map-node:hover rect,
.map-node:focus rect {
  filter: drop-shadow(0 5px 7px rgba(31, 45, 66, 0.2));
  stroke-width: 2.4;
}

.map-node.muted {
  opacity: 0.28;
}

.map-node.highlighted text {
  font-weight: 760;
  fill: #b84518;
}
</style>
