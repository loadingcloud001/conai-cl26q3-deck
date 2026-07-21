# Reveal.js comparison — Slide 5

A standalone Reveal.js recreation of Slidev Slide 5 (`v51`) using a custom SVG mind-map renderer.

## Run

```bash
cd /tmp/conai-cl26q3-deck/reveal-comparison
npm install
PORT=4173 npm run dev
```

Open:

- `http://127.0.0.1:4173/#/0` — r1, filled nodes; closest visual match to Mermaid
- `http://127.0.0.1:4173/#/1` — r2, controlled borders; Object Detection highlighted

Use Left/Right arrows to compare the two Reveal.js variants.

## Why custom SVG

Reveal.js provides the presentation shell, navigation, transitions, and scaling, but it does not include a mind-map layout engine. The diagram is rendered as SVG so node borders, emphasis, connector ordering, and spacing remain fully controllable.

## Source files

- `index.html` — Reveal.js deck and the two slides
- `mindmap.js` — task data, layout, SVG rendering, Reveal configuration
- `styles.css` — presentation and diagram styling
- `screenshots/` — 1280×720 captures for direct comparison
