import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const VIEWBOX = { width: 980, height: 425 };
const ROOT = { x: 490, y: 220, radius: 46 };

const families = [
  {
    name: 'Reasoning', side: 'left', row: 'top', color: '#46e86f', tint: '#edfff2',
    tasks: ['Agent', 'Planning', 'Retrieval', 'Reasoning', 'Zero-Shot'],
  },
  {
    name: 'Language', side: 'left', row: 'middle', color: '#c653ee', tint: '#faedff',
    tasks: ['Text Generation', 'Text Classification', 'Token Classification', 'Translation', 'Summarization', 'Question Answering'],
  },
  {
    name: 'Multimodal', side: 'left', row: 'bottom', color: '#68e957', tint: '#efffee',
    tasks: ['Image-to-Text', 'Image-Text-to-Text', 'Text-to-Image', 'Text-to-Video', 'Document AI'],
  },
  {
    name: 'Tabular_TimeSeries', side: 'right', row: 'top', color: '#52e6c1', tint: '#eafff9',
    tasks: ['Tabular Classification', 'Time Series', 'Anomaly Detection', 'Recommendation'],
  },
  {
    name: 'Vision', side: 'right', row: 'middle', color: '#6492f5', tint: '#eef3ff',
    tasks: ['Image Classification', 'Image-to-Image', 'Pose Estimation', 'Object Detection', 'Image Segmentation', 'Depth Estimation'],
  },
  {
    name: 'Audio', side: 'right', row: 'bottom', color: '#d8f33f', tint: '#fbffde',
    tasks: ['Text-to-Speech', 'Music Generation', 'Speech-to-Text', 'Audio Classification'],
  },
];

const rows = { top: 80, middle: 210, bottom: 335 };
const familyX = { left: 355, right: 625 };
const taskX = { left: [230, 75], right: [750, 905] };

function svgElement(tag, attrs = {}, text = '') {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
  if (text) element.textContent = text;
  return element;
}

function nodeWidth(label, min = 84, max = 154) {
  return Math.max(min, Math.min(max, 22 + label.length * 6.25));
}

function taskSlots(count, centerY) {
  const columns = count >= 5 ? [3, count - 3] : [Math.ceil(count / 2), Math.floor(count / 2)];
  const slots = [];

  columns.forEach((columnCount, columnIndex) => {
    if (!columnCount) return;
    const gap = columnCount === 3 ? 34 : 38;
    const start = centerY - ((columnCount - 1) * gap) / 2;
    for (let i = 0; i < columnCount; i += 1) {
      slots.push({ columnIndex, y: start + i * gap });
    }
  });

  return slots;
}

function curvePath(from, to, direction) {
  const firstControl = from.x + direction * 46;
  const secondControl = to.x - direction * 32;
  return `M ${from.x} ${from.y} C ${firstControl} ${from.y}, ${secondControl} ${to.y}, ${to.x} ${to.y}`;
}

function addRoot(svg) {
  const root = svgElement('g', { class: 'map-node root-node', style: '--delay: 0ms' });
  root.append(svgElement('circle', { cx: ROOT.x, cy: ROOT.y, r: ROOT.radius }));
  root.append(svgElement('text', { x: ROOT.x, y: ROOT.y - 7 }, 'AI Capabilities'));
  root.append(svgElement('text', { x: ROOT.x, y: ROOT.y + 11, class: 'root-subtitle' }, '30+ HF tasks'));
  svg.append(root);
}

function addRectNode(svg, { x, y, label, width, height, className, fill, stroke, delay }) {
  const group = svgElement('g', {
    class: `map-node ${className}`,
    style: `--delay: ${delay}ms`,
  });
  group.append(svgElement('rect', {
    x: x - width / 2,
    y: y - height / 2,
    width,
    height,
    fill,
    ...(stroke ? { stroke } : {}),
  }));
  group.append(svgElement('text', { x, y: y + 0.5 }, label));
  svg.append(group);
}

function renderMap(svg, variant) {
  svg.setAttribute('viewBox', `0 0 ${VIEWBOX.width} ${VIEWBOX.height}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  const familyLayouts = families.map((family, familyIndex) => {
    const direction = family.side === 'left' ? -1 : 1;
    const point = { x: familyX[family.side], y: rows[family.row] };
    const slots = taskSlots(family.tasks.length, point.y);
    const tasks = family.tasks.map((label, taskIndex) => ({
      label,
      x: taskX[family.side][slots[taskIndex].columnIndex],
      y: slots[taskIndex].y,
    }));
    return { family, familyIndex, direction, point, tasks };
  });

  // Edges are deliberately drawn before nodes, so connectors never cover labels.
  for (const layout of familyLayouts) {
    const delay = 50 + layout.familyIndex * 55;
    svg.append(svgElement('path', {
      class: 'map-edge family-edge',
      d: curvePath(ROOT, layout.point, layout.direction),
      stroke: layout.family.color,
      style: `--delay: ${delay}ms`,
    }));

    for (const task of layout.tasks) {
      svg.append(svgElement('path', {
        class: 'map-edge task-edge',
        d: curvePath(layout.point, task, layout.direction),
        stroke: layout.family.color,
        style: `--delay: ${delay + 80}ms`,
      }));
    }
  }

  for (const layout of familyLayouts) {
    const delay = 90 + layout.familyIndex * 55;
    for (const task of layout.tasks) {
      const isFocus = task.label === 'Object Detection';
      addRectNode(svg, {
        x: task.x,
        y: task.y,
        label: task.label,
        width: nodeWidth(task.label),
        height: 25,
        className: `task-node${isFocus ? ' is-focus' : ''}`,
        fill: variant === 'filled' ? layout.family.color : layout.family.tint,
        stroke: variant === 'outlined' ? layout.family.color : undefined,
        delay: delay + 100,
      });
    }

    addRectNode(svg, {
      x: layout.point.x,
      y: layout.point.y,
      label: layout.family.name,
      width: nodeWidth(layout.family.name, 78, 142),
      height: 27,
      className: 'family-node',
      fill: layout.family.color,
      delay,
    });
  }

  addRoot(svg);
}

document.querySelectorAll('.capability-slide').forEach((slide) => {
  renderMap(slide.querySelector('.capability-map'), slide.dataset.mapVariant);
});

window.revealDeck = Reveal;

await Reveal.initialize({
  width: 980,
  height: 551,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  controls: true,
  controlsLayout: 'edges',
  progress: false,
  hash: true,
  history: true,
  center: false,
  transition: 'none',
  backgroundTransition: 'none',
  slideNumber: 'c/t',
});
