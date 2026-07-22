---
theme: default
title: 'Construction AI Application'
info: |
  ## Construction AI Application
  Main AI Introduction
  Ref: CL26Q3 · v2
  Presented by: Charles Lo · 2026-07
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
canvasWidth: 980
aspectRatio: '16/9'
---

<style>
:root {
  --slidev-theme-primary: #FF6B35;
  --accent-orange: #FF6B35;
  --soft-grey: #F8F8F8;
  --dark-text: #2C2C2C;
}
h1, h2 { color: var(--dark-text); }
h1 { max-width: 940px; margin-left: auto; margin-right: auto; font-size: 28px !important; line-height: 1.2 !important; padding: 0 20px; box-sizing: border-box; white-space: nowrap; }
h2, h3, p { max-width: 940px; }
h1 strong, h2 strong { color: var(--accent-orange); }
.slidev-layout {
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F4 100%);
}
.section-divider {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: white;
}
.orange-btn {
  display: inline-block;
  padding: 14px 22px;
  background: #FF6B35;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(255, 107, 53, 0.35);
  letter-spacing: 0.3px;
}
.orange-btn:hover { background: #FF8C42; }
.est-note { font-size: 10px; opacity: 0.55; margin-top: 8px; }

/* Slide 5 — bubble-cloud panorama */
.bub {
  position: absolute; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 600; line-height: 1; color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.10);
  text-align: center;
}
.h5 { width:108px; height:108px; font-size:17px; }
.h4 { width: 90px; height: 90px; font-size:14px; }
.h3 { width: 72px; height: 72px; font-size:12px; }
.h2 { width: 58px; height: 58px; font-size:10.5px; }
.h1 { width: 42px; height: 42px; font-size:9.5px; }
.c-vision     { background: #4A78C9; }
.c-language   { background: #4FA85C; }
.c-multimodal { background: #8E5DB7; }
.c-generative { background: #D8556A; }
.c-sequential { background: #D9A93B; }
.c-reasoning  { background: #3FA8A0; }

/* Slide 5 — interactive bubble cloud */
/* Modern interactive bubble cloud */
  @keyframes cl-pulse {
    0% { box-shadow: 0 0 0 0 rgba(255,107,53,0.6); }
    70% { box-shadow: 0 0 0 6px rgba(255,107,53,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,107,53,0); }
  }
  /* Bubble interactivity — hover scale + dim siblings */
  .bub { transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease, filter .15s ease; }
  .bub:hover,
  .bub:focus {
    transform: scale(1.25);
    box-shadow: 0 8px 22px rgba(0,0,0,0.20), 0 0 0 3px rgba(255,255,255,0.6);
    z-index: 50 !important;
  }
  /* When ANY bubble is hovered, dim the other bubbles in the same parent */
  div:has(> .bub:hover) .bub:not(:hover) { opacity: 0.45; filter: saturate(0.7); }
  div:has(> .bub:focus) .bub:not(:focus) { opacity: 0.45; filter: saturate(0.7); }
  /* CSS-only tooltip on hover — appears above the bubble with construction context */
  .bub::before {
      content: attr(data-name);
      position: absolute;
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(-4px);
      background: rgba(44,44,44,0.96);
      color: white;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.3px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity .15s ease, transform .15s ease;
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }
  .bub::after {
      content: attr(data-desc);
      position: absolute;
      top: calc(100% + 28px);
      left: 50%;
      transform: translateX(-50%) translateY(-4px);
      background: white;
      color: #2C2C2C;
      padding: 8px 11px;
      border-radius: 8px;
      font-size: 11px;
      font-weight: 400;
      line-height: 1.4;
      width: 210px;
      text-align: left;
      pointer-events: none;
      opacity: 0;
      transition: opacity .15s ease, transform .15s ease;
      z-index: 100;
      box-shadow: 0 8px 22px rgba(0,0,0,0.20);
      border-top: 3px solid #888;
  }
  .bub:hover::before, .bub:focus::before,
  .bub:hover::after, .bub:focus::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  /* Cluster-coloured top border for tooltip card */
  .bub[data-cluster="Vision"]::after     { border-top-color: #4A78C9; }
  .bub[data-cluster="Language"]::after   { border-top-color: #4FA85C; }
  .bub[data-cluster="Multimodal"]::after { border-top-color: #8E5DB7; }
  .bub[data-cluster="Generative"]::after { border-top-color: #D8556A; }
  .bub[data-cluster="Sequential"]::after { border-top-color: #D9A93B; }
  .bub[data-cluster="Reasoning"]::after  { border-top-color: #3FA8A0; }


  /* === Slide 5 — clean grid panorama (CSS-only tooltips) === */
  .cl-footer-ref { position: absolute; top: 6px; left: 14px; font-size: 10px; color: #888; }

  .cat-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 7px;
    border-left: 3px solid;
    border-radius: 6px;
    background: rgba(250, 250, 250, 0.95);
    position: relative;
    transition: background 0.18s ease;
  }
  .cat-row:hover { background: rgba(238, 238, 238, 0.98); }
  .cat-row[data-cat-name="Vision"]    { border-left-color: #4A78C9; }
  .cat-row[data-cat-name="Language"]  { border-left-color: #4FA85C; }
  .cat-row[data-cat-name="Multimodal"]{ border-left-color: #8E5DB7; }
  .cat-row[data-cat-name="Generative"]{ border-left-color: #D8556A; }
  .cat-row[data-cat-name="Sequential"]{ border-left-color: #D9A93B; }
  .cat-row[data-cat-name="Reasoning"] { border-left-color: #3FA8A0; }

  .cat-label {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 12px;
    color: white;
    font-size: 10px;
    font-weight: 600;
    align-self: flex-start;
  }
  .bubs-row {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    position: relative;
  }
  .bub {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 10px;
    border-radius: 14px;
    background: rgba(255,255,255,0.9);
    border: 1px solid rgba(0,0,0,0.12);
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
    z-index: 1;
  }
  .bub span {
    font-size: 10.5px;
    font-weight: 600;
    color: #2C2C2C;
    white-space: nowrap;
    letter-spacing: 0.2px;
  }
  .bub:hover {
    transform: scale(1.06);
    background: white;
    border-color: rgba(0,0,0,0.3);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 50;
  }
  .trend-bub {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.18);
    border: 1.5px solid rgba(255,255,255,0.7);
    border-radius: 10px;
    padding: 5px 4px;
    cursor: pointer;
    transition: transform 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
    min-height: 48px;
    z-index: 1;
  }
  .trend-bub:hover {
    transform: translateY(-2px) scale(1.04);
    background: rgba(255,255,255,0.38);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    z-index: 50;
  }
  .trend-bub .bn { font-size: 12px; font-weight: 800; color: white; letter-spacing: 0.3px; line-height: 1.1; }
  .trend-bub .bd { font-size: 8.5px; font-weight: 600; color: rgba(255,255,255,0.85); text-transform: uppercase; letter-spacing: 0.5px; }

  /* CSS-only tooltips via ::before (label) + ::after (description) */
  .bub::before,
  .trend-bub::before {
    content: attr(data-name);
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    background: #2C2C2C;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.3px;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease;
    z-index: 100;
  }
  .bub::after,
  .trend-bub::after {
    content: attr(data-desc);
    position: absolute;
    bottom: calc(100% + 30px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    background: white;
    color: #2C2C2C;
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 10.5px;
    font-weight: 400;
    line-height: 1.35;
    width: 240px;
    text-align: left;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.18s ease, transform 0.18s ease;
    z-index: 100;
    box-shadow: 0 4px 14px rgba(0,0,0,0.18);
    border-top: 3px solid #888;
  }
  .bub:hover::before,
  .trend-bub:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  .bub:hover::after,
  .trend-bub:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  /* Cluster-coloured top borders for tooltips (via parent .cat-row's data-cat-name) */
  .cat-row[data-cat-name="Vision"] .bub::after    { border-top-color: #4A78C9; }
  .cat-row[data-cat-name="Language"] .bub::after  { border-top-color: #4FA85C; }
  .cat-row[data-cat-name="Multimodal"] .bub::after{ border-top-color: #8E5DB7; }
  .cat-row[data-cat-name="Generative"] .bub::after{ border-top-color: #D8556A; }
  .cat-row[data-cat-name="Sequential"] .bub::after{ border-top-color: #D9A93B; }
  .cat-row[data-cat-name="Reasoning"] .bub::after { border-top-color: #3FA8A0; }
  .trend-bub::after { border-top-color: #FFE3D6; }

  /* === Mermaid mindmap line cleanup === */
  .mermaid svg path.edge {
    stroke-width: 1.5px !important;
    opacity: 0.4 !important;
  }
  .mermaid svg .edgePath path {
    stroke-width: 1.5px !important;
    opacity: 0.4 !important;
  }
  .mermaid svg .section-root path {
    stroke-width: 2px !important;
    opacity: 0.5 !important;
  }

  /* === Mermaid mindmap: separate connection lines from bubble interiors === */
  .mermaid svg .mindmap-node,
  .mermaid svg .node,
  .mermaid svg .mindmap-node-rect,
  .mermaid svg rect,
  .mermaid svg .basic {
    stroke: #FFFFFF !important;
    stroke-width: 4px !important;
    paint-order: stroke fill !important;
  }

  /* === Center Mermaid mindmap within canvas === */
  .mermaid {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 460px !important;
  }
  .mermaid svg {
    margin: 0 auto !important;
  }
</style>

<div class="cl-footer-ref">CL26Q3-COV-001 · v2</div>

<div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: white;">
  <div style="text-align: center; max-width: 900px; padding: 0 24px;">
  <div style="font-size: 14px; letter-spacing: 6px; opacity: 0.85;">CL26Q3 · 2026-Q3</div>
    <h1 style="color: white; font-size: 64px; margin-top: 24px; line-height: 1.05;">Construction AI<br/>Application</h1>
  <div style="font-size: 24px; margin-top: 18px; opacity: 0.95;">Main AI Introduction</div>
  <div style="margin-top: 40px; font-size: 15px; opacity: 0.85;">
      Charles Lo · Construction Industry Briefing
  </div>
  <div style="margin-top: 28px;">
      <span style="display: inline-block; padding: 8px 18px; border: 1px solid rgba(255,255,255,0.6); border-radius: 999px; font-size: 12px; letter-spacing: 2px;">
        PRESS SPACE →
      </span>
  </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-AGD-001 · v2</div>

# Agenda

<div class="grid grid-cols-3 gap-4 pt-4">
  <div class="rounded-lg p-5" style="background: #FFF8F4; border-left: 6px solid #FF6B35;">
  <div class="text-3xl" style="color: #FF6B35;">a</div>
    <h3 class="text-lg mt-2">All AI</h3>
    <p class="text-sm opacity-70 mt-2">
      Why now — what changed in the last 18 months. The paradigms
      that matter, in one page.
    </p>
  </div>
  <div class="rounded-lg p-5" style="background: #FFF8F4; border-left: 6px solid #FF6B35;">
  <div class="text-3xl" style="color: #FF6B35;">b</div>
    <h3 class="text-lg mt-2">Trend AI in Construction</h3>
    <p class="text-sm opacity-70 mt-2">
      The six application patterns we see on real building sites
      today — with photos and ROI notes.
    </p>
  </div>
  <div class="rounded-lg p-5" style="background: #FFF8F4; border-left: 6px solid #FF6B35;">
  <div class="text-3xl" style="color: #FF6B35;">c</div>
    <h3 class="text-lg mt-2">Audience Brainstorm</h3>
    <p class="text-sm opacity-70 mt-2">
      Your ideas, live. Drop a use-case in the form on the next page.
    </p>
  </div>
</div>

<div class="mt-8 text-sm opacity-60">
  37 slides · ~25 minutes · Q&amp;A friendly
</div>

---

<div class="cl-footer-ref">CL26Q3-WHY-001 · v2</div>

# Why AI Matters for Construction

<div class="grid grid-cols-2 gap-6 pt-1">
  <div>
    <h2 class="text-2xl">Four hard numbers</h2>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4; margin-top: 10px;">
    <div class="text-3xl" style="color: #FF6B35;">40%</div>
    <div class="text-sm">of construction projects finish over budget</div>
  </div>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
    <div class="text-3xl" style="color: #FF6B35;">62%</div>
    <div class="text-sm">PPE-violation drop after AI monitoring (LTA Singapore)</div>
  </div>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
    <div class="text-3xl" style="color: #FF6B35;">80%</div>
    <div class="text-sm">of project data is unstructured (photos, forms, drawings)</div>
  </div>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
    <div class="text-3xl" style="color: #FF6B35;">3×</div>
    <div class="text-sm">skilled-labour shortage impact in HK since 2020</div>
  </div>
  </div>
  <div>
    <h2 class="text-2xl">Hong Kong policy backdrop</h2>
  <div class="rounded-lg p-2 mb-2" style="background: #FFE3D6; margin-top: 10px;">
    <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Development Bureau · DEVB</div>
      <p class="text-sm mt-1">
        Construction 2.0 initiative and the smart-site subsidies explicitly call for digital monitoring, AI-assisted site supervision, and BIM-driven compliance — making AI procurement-eligible, not optional.
      </p>
  </div>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
    <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">4S Site Supervision Spec</div>
      <p class="text-sm mt-1">
        The Site Supervision System (4S) requires digital logs of supervision, photo evidence, and structured handover. AI fits naturally as the "first-pass reviewer" before a human RE signs off.
      </p>
  </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-AI101-001 · v2</div>

# AI 101 — How We Got Here

<div class="grid grid-cols-2 gap-6 pt-1">
  <div>
    <h2 class="text-2xl">History in seven dates</h2>
  <div class="text-sm" style="margin-top: 8px;">
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">1956</strong> · Dartmouth workshop — "Artificial Intelligence" is named</div>
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">1997</strong> · Deep Blue beats Kasparov — rule-driven AI peaks</div>
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">2012</strong> · AlexNet wins ImageNet — deep learning takes over vision</div>
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">2017</strong> · "Attention is all you need" — the Transformer paper</div>
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">2020</strong> · ViT — vision becomes a token problem</div>
    <div class="rounded p-1 mb-1" style="background: #FFF8F4;"><strong style="color: #FF6B35;">2022</strong> · ChatGPT — LLMs become a daily tool</div>
    <div class="rounded p-1" style="background: #FFE3D6;"><strong style="color: #FF6B35;">2024–2026</strong> · Vision + Language merge inside one model</div>
  </div>
  </div>
  <div>
    <h2 class="text-2xl">Three classifications today</h2>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4; margin-top: 8px;">
    <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Discriminative</div>
      <p class="text-sm mt-1"><strong>Learns a boundary.</strong> "Is this a hardhat?" CNN, ViT, anomaly detection. The workhorse on cameras.</p>
  </div>
  <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
    <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Generative</div>
      <p class="text-sm mt-1"><strong>Learns the data distribution.</strong> Diffusion, LLMs. They <em>produce</em> — images, text, audio, code.</p>
  </div>
  <div class="rounded-lg p-2" style="background: #FFE3D6;">
    <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Multimodal</div>
      <p class="text-sm mt-1"><strong>Sees and speaks.</strong> VLM, MLLM, agent loops. The category reshaping 2024–2026 — and the one we focus on.</p>
  </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-MAP-001 · v58</div>

# AI capabilities — 30+ Hugging Face tasks

<AICapabilityMap />

<!--
Slide 5 v58: Vue + SVG/D3 mindmap; centered trend legend, warm panel palette, and hover/focus information dock.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-001 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.1);">
<img src="/images/image-to-text-workers.jpg" alt="Construction site with two ironworkers erecting steel beams" style="display:block;width:100%;height:100%;object-fit:cover;min-height:0;" />
<div style="position:absolute;left:12px;top:12px;display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Construction site photo</span>
</div>
<div style="position:absolute;right:12px;bottom:12px;display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">Readable text</span>
</div>
</div>
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;min-height:0;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">1</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Image-to-Text</h2>
</div>
</div>
<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Image-to-Text models turn photos, scans, or screenshots into text. In construction, that means hardcopy forms, site photos, handwritten notes, and PDFs can become searchable records.</p>
</div>
<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:8px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> daily site photo with workers and steel members</div>
<div style="margin-top:6px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:6px;">"Two workers in safety harnesses are erecting steel beams under clear sky conditions."</div>
</div>
<div style="margin-top:8px;font-size:12px;color:#5B6472;">Use case: site diary extraction, daily report text generation, safety documentation</div>
<div style="margin-top:8px;padding:8px 12px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:11px;line-height:1.45;color:#1e4a7a;">
<strong>日常熱門用途：</strong>Google Lens 文字識別 · AI掃描名片 · 掃描翻譯 · AI讀圖解題
</div>
</div>
<div style="margin-top:auto;font-size:11px;color:#8A766A;">Source: Wikimedia Commons — Construction Workers.jpg (CC BY 2.0)</div>
</div>
</div>

<!--
Insert the first current high-use / fast-growing capability detail slide (Image-to-Text) between the mindmap and the Audience Brainstorm. Uses a safe Wikimedia Commons construction-site image with visible PPE and an illustrative model-style output sample.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-001 · prototype</div>

# Live demo — turn an image into text

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload an image</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Generate caption</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review the result</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://prithivmlmods-florence-2-image-caption.hf.space" title="Florence-2 image captioning demo" loading="eager" allow="camera; clipboard-read; clipboard-write" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> use the sample or a non-sensitive image. AI output still needs human review.</span>
<a href="https://prithivmlmods-florence-2-image-caption.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Interactive Image-to-Text prototype embedded from the public Hugging Face Space prithivMLmods/Florence-2-Image-Caption. Use Florence-2-base during the live demo for faster CPU inference. Use only the included sample or a non-sensitive image; uploaded images are processed by a third-party Space. If the embed is slow or unavailable, open the demo in a new tab and use a prepared screenshot as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-002 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:10px;overflow:hidden;min-height:0;height:100%;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:14px;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Text prompt</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">PROMPT</div>
<div style="font-size:12.5px;line-height:1.45;color:#263247;font-style:italic;">"Modern Hong Kong waterfront office tower at dusk, double-skin parametric facade, viewed from the harbour promenade."</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:linear-gradient(180deg,#1a2438 0%,#2a3a55 60%,#5a6b85 100%);">
<div style="position:absolute;left:0;top:0;right:0;height:55%;background:linear-gradient(180deg,rgba(255,180,120,.18) 0%,rgba(20,30,55,0) 100%);"></div>
<div style="position:absolute;left:8%;top:18%;width:18%;height:62%;background:linear-gradient(180deg,rgba(255,255,255,.85) 0%,rgba(220,230,245,.55) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35),0 8px 18px rgba(0,0,0,.35);"></div>
<div style="position:absolute;left:30%;top:8%;width:24%;height:72%;background:linear-gradient(180deg,rgba(255,255,255,.95) 0%,rgba(200,215,235,.65) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45),0 10px 24px rgba(0,0,0,.4);"></div>
<div style="position:absolute;left:58%;top:22%;width:16%;height:58%;background:linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(210,220,235,.5) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3),0 8px 18px rgba(0,0,0,.35);"></div>
<div style="position:absolute;left:0;right:0;bottom:0;height:14%;background:linear-gradient(180deg,rgba(20,30,55,.0) 0%,rgba(15,25,45,.85) 100%);"></div>
<div style="position:absolute;left:12px;bottom:12px;right:12px;display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">AI-generated image</span>
</div>
</div>
</div>
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;min-height:0;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">2</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Text-to-Image</h2>
</div>
</div>
<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Text-to-Image models turn written descriptions into pictures. In AEC, that means concept renders, mood boards, material studies, and progress mockups can be produced in minutes instead of days.</p>
</div>
<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:8px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> a short written prompt describing a building, material, or scene</div>
<div style="margin-top:6px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:6px;">A high-resolution render suitable for a pitch deck, client mood board, or preliminary concept discussion.</div>
</div>
<div style="margin-top:8px;font-size:12px;color:#5B6472;">Use case: client pitch visualization, mood board, material exploration, progress mockup</div>
<div style="margin-top:8px;padding:8px 12px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:11px;line-height:1.45;color:#1e4a7a;">
<strong>日常熱門用途：</strong>Midjourney AI繪圖 · AI頭像生成 · 電商AI模特圖 · 小紅書AI封面
</div>
</div>
<div style="margin-top:auto;font-size:11px;color:#8A766A;">Output shown is an illustrative mockup, not a live inference result.</div>
</div>
</div>

<!--
Second current high-use / fast-growing capability detail slide (Text-to-Image) between the Image-to-Text demo (Page 7) and the Audience Brainstorm. Uses an illustrative prompt-to-image mockup since the capability is generative rather than descriptive.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-002 · prototype</div>

# Live demo — turn text into an image

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Type a prompt</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Run the model</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review the image</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://black-forest-labs-flux-1-schnell.hf.space" title="FLUX.1 Schnell text-to-image demo" loading="eager" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not enter client, project, or personnel details. AI output still needs human review.</span>
<a href="https://black-forest-labs-flux-1-schnell.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Interactive Text-to-Image prototype embedded from the public Hugging Face Space black-forest-labs/FLUX.1-schnell. FLUX Schnell is fast on CPU and gives a clean baseline image. Use only generic building or material prompts; never enter client, project, or personnel details into the public demo. If the embed is slow or unavailable, open the demo in a new tab and use a prepared screenshot as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-003 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:10px;overflow:hidden;min-height:0;height:100%;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:14px;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Text prompt</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">PROMPT</div>
<div style="font-size:12.5px;line-height:1.45;color:#263247;font-style:italic;">"Cinematic drone shot rising along a Hong Kong high-rise tower at golden hour, harbour in the background, slow upward tilt."</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#0f1626;display:flex;gap:4px;padding:4px;">
<div style="flex:1;position:relative;overflow:hidden;border-radius:6px;background:linear-gradient(180deg,#1a2440 0%,#3b3a5e 50%,#c2724b 95%);">
<div style="position:absolute;left:18%;top:8%;width:14%;height:84%;background:linear-gradient(180deg,rgba(40,55,80,.92) 0%,rgba(180,200,220,.55) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);"></div>
<div style="position:absolute;left:42%;top:12%;width:18%;height:80%;background:linear-gradient(180deg,rgba(50,65,95,.95) 0%,rgba(195,210,225,.68) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);"></div>
<div style="position:absolute;left:70%;top:18%;width:14%;height:74%;background:linear-gradient(180deg,rgba(45,60,90,.85) 0%,rgba(170,195,215,.5) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);"></div>
<div style="position:absolute;left:0;right:0;bottom:0;height:18%;background:linear-gradient(180deg,rgba(20,30,55,0) 0%,rgba(8,14,28,.95) 100%);"></div>
<div style="position:absolute;left:0;right:0;top:0;padding:6px 8px;display:flex;justify-content:space-between;align-items:flex-start;">
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">0.0s</span>
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">FRAME 1/3</span>
</div>
</div>
<div style="flex:1;position:relative;overflow:hidden;border-radius:6px;background:linear-gradient(180deg,#2a1f3e 0%,#8b4a5e 50%,#e8965f 95%);">
<div style="position:absolute;left:24%;top:8%;width:14%;height:84%;background:linear-gradient(180deg,rgba(45,60,90,.9) 0%,rgba(195,210,225,.65) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2);"></div>
<div style="position:absolute;left:44%;top:4%;width:18%;height:90%;background:linear-gradient(180deg,rgba(55,70,100,.95) 0%,rgba(210,225,238,.75) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3);"></div>
<div style="position:absolute;left:66%;top:6%;width:14%;height:88%;background:linear-gradient(180deg,rgba(48,62,95,.88) 0%,rgba(180,205,225,.55) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.22);"></div>
<div style="position:absolute;left:0;right:0;bottom:0;height:14%;background:linear-gradient(180deg,rgba(20,30,55,0) 0%,rgba(8,14,28,.95) 100%);"></div>
<div style="position:absolute;left:0;right:0;top:0;padding:6px 8px;display:flex;justify-content:space-between;align-items:flex-start;">
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">2.0s</span>
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">FRAME 2/3</span>
</div>
</div>
<div style="flex:1;position:relative;overflow:hidden;border-radius:6px;background:linear-gradient(180deg,#4d2a4a 0%,#d96e63 50%,#f7c97b 95%);">
<div style="position:absolute;left:30%;top:6%;width:14%;height:90%;background:linear-gradient(180deg,rgba(50,65,95,.85) 0%,rgba(210,225,238,.75) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.22);"></div>
<div style="position:absolute;left:46%;top:0;width:20%;height:96%;background:linear-gradient(180deg,rgba(60,75,105,.98) 0%,rgba(225,235,245,.82) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.32);"></div>
<div style="position:absolute;left:68%;top:2%;width:14%;height:94%;background:linear-gradient(180deg,rgba(50,65,95,.9) 0%,rgba(195,215,230,.6) 100%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.24);"></div>
<div style="position:absolute;left:0;right:0;bottom:0;height:10%;background:linear-gradient(180deg,rgba(20,30,55,0) 0%,rgba(8,14,28,.95) 100%);"></div>
<div style="position:absolute;left:0;right:0;top:0;padding:6px 8px;display:flex;justify-content:space-between;align-items:flex-start;">
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">4.0s</span>
<span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.92);background:rgba(0,0,0,.5);padding:3px 6px;border-radius:4px;backdrop-filter:blur(2px);">FRAME 3/3</span>
</div>
</div>
<div style="position:absolute;left:12px;bottom:12px;right:12px;display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">AI-generated video · 6s</span>
</div>
</div>
</div>
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;min-height:0;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">3</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Text-to-Video</h2>
</div>
</div>
<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Text-to-Video models turn a written description into a short video clip. In construction, that means site walk-throughs, construction sequence animations, and concept pitches can be visualised without a render farm or on-site filming.</p>
</div>
<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:8px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> a written prompt describing camera motion and the scene</div>
<div style="margin-top:6px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:6px;">A 4–6 second clip suitable for a stakeholder pitch, social media teaser, or preliminary design study.</div>
</div>
<div style="margin-top:8px;font-size:12px;color:#5B6472;">Use case: stakeholder pitch teaser, concept walk-through, construction sequence, marketing video</div>
<div style="margin-top:8px;padding:8px 12px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:11px;line-height:1.45;color:#1e4a7a;">
<strong>日常熱門用途：</strong>AI動畫 · 抖音AI短劇 · AI廣告影片 · TikTok AI特效
</div>
</div>
</div>
</div>

<!--
Third current high-use / fast-growing capability detail slide (Text-to-Video) following the Text-to-Image pair (Pages 8-9). Uses an illustrative 3-frame strip mockup since the capability is generative and not safe to render live on stage without a fast preview.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-003 · prototype</div>

# Live demo — turn text into a short video

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Type a prompt</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Generate 6s clip</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review the clip</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://zai-org-cogvideox-5b-space.hf.space" title="CogVideoX-5B text-to-video demo" loading="eager" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> use generic building or landscape prompts. Generation takes 1–3 min. AI output still needs human review.</span>
<a href="https://zai-org-cogvideox-5b-space.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Interactive Text-to-Video prototype embedded from the public Hugging Face Space zai-org/CogVideoX-5B-Space. Generation takes 1–3 minutes on a CPU Space — set expectations with the audience before clicking Run, or use a pre-rendered clip as fallback. Use only generic building or landscape prompts; never enter client, project, or personnel details.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-004 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:10px;overflow:hidden;min-height:0;height:100%;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:14px;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Document + question</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">CONTRACT PAGE</div>
<div style="position:relative;flex:1;min-height:0;background:#fff;border:1px solid #eadfd8;border-radius:8px;padding:10px 12px;overflow:hidden;">
<div style="font-size:9.5px;font-weight:700;color:#263247;letter-spacing:.5px;">SUBCONTRACT AGREEMENT — CLAUSE 4.2</div>
<div style="margin-top:6px;font-size:9.5px;line-height:1.45;color:#3b3f4a;">"The Subcontractor shall complete all structural works on Level 17 by 30 November 2026. Liquidated damages shall be applied at HK$ 25,000 per calendar day of delay beyond the agreed handover date, subject to a maximum cap of 10% of the subcontract value."</div>
<div style="margin-top:6px;font-size:8.5px;line-height:1.4;color:#6b7280;font-style:italic;">Signed: AC Construction Ltd · Main Contractor · 12 March 2026</div>
</div>
<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:#fff;border:1px solid #eadfd8;border-radius:8px;">
<span style="font-size:10px;color:#6b7280;font-weight:700;">Q:</span>
<span style="font-size:10.5px;color:#263247;">What is the daily liquidated damages amount?</span>
</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#0f1626;padding:14px 16px;">
<div style="position:absolute;left:14px;top:14px;font-size:9.5px;font-weight:700;color:#94a3b8;letter-spacing:.5px;">EXTRACTED ANSWER</div>
<div style="margin-top:28px;font-size:14px;line-height:1.5;color:#fff;font-weight:700;">HK$ 25,000 per calendar day</div>
<div style="margin-top:8px;font-size:11px;line-height:1.45;color:#cbd5e1;">Subcontractor: AC Construction Ltd · Cap: 10% of subcontract value</div>
<div style="margin-top:10px;display:flex;gap:6px;flex-wrap:wrap;">
<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(255,107,53,.18);border:1px solid #FF6B35;border-radius:6px;font-size:9px;font-weight:700;color:#FFB48A;">CLAUSE 4.2</span>
<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(124,92,191,.18);border:1px solid #7C5CBF;border-radius:6px;font-size:9px;font-weight:700;color:#c4b0e6;">LEVEL 17</span>
<span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;background:rgba(57,116,197,.18);border:1px solid #3974C5;border-radius:6px;font-size:9px;font-weight:700;color:#a4c4f0;">30 NOV 2026</span>
</div>
<div style="position:absolute;left:12px;bottom:12px;right:12px;display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">AI-extracted answer with citations</span>
</div>
</div>
</div>
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;min-height:0;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">4</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Document AI</h2>
</div>
</div>
<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Document AI models read scanned contracts, blueprints, delivery notes, and inspection reports as documents — and answer questions about them. In construction, that means sub-clauses, line items, dates, and signatures can be extracted in seconds instead of minutes.</p>
</div>
<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:8px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> a subcontract agreement page plus a question</div>
<div style="margin-top:6px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:6px;">A direct answer with clause reference, applicable parties, and key dates — ready to drop into a daily report or email.</div>
</div>
<div style="margin-top:8px;font-size:12px;color:#5B6472;">Use case: contract clause extraction, RFI drafting, inspection report Q&amp;A, blueprint reading, delivery note digitisation</div>
<div style="margin-top:8px;padding:8px 12px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:11px;line-height:1.45;color:#1e4a7a;">
<strong>日常熱門用途：</strong>合約AI審查 · 掃描發票報銷 · AI讀報告 · 稅務文件分析
</div>
</div>
</div>
</div>

<!--
Fourth current high-use / fast-growing capability detail slide (Document AI) following the Multimodal pair Pages 6-11. Uses an illustrative contract clause + Q&A mockup with citation tags, since real Document AI demos depend on third-party Spaces that may be unstable.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-004 · prototype</div>

# Live demo — try Document AI on AI Arena

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open AI Arena</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload a document</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Ask a question</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:18px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:flex;align-items:center;gap:14px;">
<div style="width:54px;height:54px;border-radius:14px;background:#fff;border:2px solid #FF6B35;display:flex;align-items:center;justify-content:center;font-weight:800;color:#FF6B35;font-size:18px;">A</div>
<div>
<div style="font-size:22px;font-weight:800;color:#263247;letter-spacing:-.3px;">AI Arena</div>
<div style="font-size:12px;color:#5B6472;margin-top:2px;">Anonymous chat with frontier models · file upload supported</div>
</div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;width:100%;max-width:560px;">
<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;">
<span style="font-size:14px;font-weight:800;color:#FF6B35;">Code</span>
<span style="font-size:10.5px;color:#5B6472;text-align:center;">Code generation</span>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;">
<span style="font-size:14px;font-weight:800;color:#FF6B35;">Search</span>
<span style="font-size:10.5px;color:#5B6472;text-align:center;">Web search</span>
</div>
<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;">
<span style="font-size:14px;font-weight:800;color:#FF6B35;">Image / Video</span>
<span style="font-size:10.5px;color:#5B6472;text-align:center;">Multimodal</span>
</div>
</div>
<a href="https://arena.ai" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;background:#FF6B35;color:#fff!important;border:none!important;border-radius:10px;box-shadow:0 6px 18px rgba(255,107,53,.4);font-size:14px;font-weight:800;letter-spacing:.2px;text-decoration:none;">
Open AI Arena in new tab ↗
</a>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;max-width:520px;">
<span>Click <strong style="color:#B84518;">Add files</strong> on AI Arena → upload a PDF, photo, or contract → ask any question.</span>
<span>Free · Anonymous · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not upload client, project, or personnel documents. Use sample contracts only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">arena.ai</span>
</div>
</div>

<!--
Interactive Document AI redirect to AI Arena (https://arena.ai). Embedding AI Arena's chat UI is not feasible (anti-embed + login prompts + privacy of uploaded documents), so the demo slide presents AI Arena's capabilities inline (Code / Search / Image / Video modes, Add files support) with a direct deep-link button. Audience can open AI Arena in a new tab, upload a sample document, and ask construction-related questions. AI Arena is anonymous, free, and Hong Kong accessible.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-005 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;min-height:0;height:100%;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Prompt + context</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">SITE PROMPT</div>
<div style="font-size:11px;line-height:1.4;color:#263247;font-style:italic;">"Draft a Request for Information (RFI) about a structural discrepancy on Level 17. Reference clause 4.2 of the subcontract. Use a professional tone, English, ~150 words, ready to send to the main contractor."</div>
<div style="margin-top:auto;display:flex;align-items:center;gap:6px;padding:5px 8px;background:#fff;border:1px solid #eadfd8;border-radius:8px;">
<span style="font-size:10px;color:#6b7280;font-weight:700;">Context:</span>
<span style="font-size:10px;color:#263247;">Subcontract clause 4.2 + site photos from 18 March 2026</span>
</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);padding:12px 14px;">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">RFI DRAFT</span>
<span style="font-size:9.5px;color:#6b7280;">18 March 2026 · To: Main Contractor</span>
</div>
<div style="font-size:10px;line-height:1.5;color:#263247;">Subject: <strong>RFI-017 — Structural Discrepancy on Level 17</strong></div>
<div style="margin-top:4px;font-size:10px;line-height:1.5;color:#3b3f4a;">"Dear Sir/Madam,</div>
<div style="font-size:10px;line-height:1.5;color:#3b3f4a;">We refer to Subcontract Clause 4.2 and the attached site photographs dated 18 March 2026. A structural discrepancy has been observed on Level 17 that may affect the agreed handover programme.</div>
<div style="font-size:10px;line-height:1.5;color:#3b3f4a;">We respectfully request clarification on: (a) the revised structural detail; (b) extension of time implications; (c) whether the liquidated damages provision under Clause 4.2 still applies."</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:8px;align-items:center;padding:6px 10px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">Drafted text ready to send</span>
</div>
</div>
</div>
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;min-height:0;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">5</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Text Generation</h2>
</div>
</div>
<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Text Generation models turn a prompt and context into a written response. In construction, that means RFIs, daily reports, incident summaries, and stakeholder emails can be drafted in seconds instead of typed from scratch.</p>
</div>
<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> a written instruction plus site context (clause, photos, dates)</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">A professional draft (RFI, daily report, incident summary) ready for human review and minor edits before sending.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: RFI drafting, daily report, incident summary, stakeholder email, safety briefing text</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>Qwen/寫小說 · AI客服機械人 · AI寫代碼 · AI翻譯
</div>
</div>
<div style="margin-top:auto;font-size:11px;color:#8A766A;">Output shown is an illustrative mockup, not a live inference result.</div>
</div>
</div>

<!--
Fifth current high-use / fast-growing capability detail slide (Text Generation / LLM). Uses an illustrative RFI draft mockup because chat AIs cannot be embedded reliably and the construction workflow story (clause reference + photos + draft) is the value proposition.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-005 · prototype</div>

# Live demo — draft a construction document with chat AI

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open a chat AI</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Paste your prompt</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review the draft</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
<a href="https://qianwen.aliyun.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#FF6A00;">Qwen</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Qwen AI · Reasoning · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">qianwen.aliyun.com ↗</span>
</a>
<a href="https://kimi.moonshot.cn" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#6C5CE7;">Kimi</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Moonshot AI · Long context · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">kimi.moonshot.cn ↗</span>
</a>
<a href="https://gemini.google.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#4285F4;">Gemini</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Google · 1M context · Google account</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">gemini.google.com ↗</span>
</a>
</div>
<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS PROMPT</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"Draft a Request for Information (RFI) about a structural discrepancy on Level 17. Reference subcontract clause 4.2. Use a professional tone, English, ~150 words."</div>
</div>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Paste the prompt above into any chat AI · review the draft · edit before sending.</span>
<span>Free · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not paste client, project, or personnel details. Use sample clauses only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">All free tier</span>
</div>
</div>

<!--
Interactive Text Generation redirect to three popular chat AIs (Qwen, Kimi, Gemini). Embedding chat AIs is not feasible (login walls + privacy of conversation history), so the demo slide presents three clickable redirect cards plus a ready-to-paste construction prompt (RFI draft). Audience can open any chat AI in a new tab, paste the prompt, and get a working draft in seconds. All three are free, Hong Kong accessible, and support file upload.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-006 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">English contract clause</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">SOURCE TEXT</div>
<div style="font-size:11px;line-height:1.45;color:#263247;font-style:italic;">"The Subcontractor shall complete the works by 30 November 2026. In the event of delay, liquidated damages shall be payable at the rate of HK$25,000 per calendar day."</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);padding:12px 14px;">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">TRANSLATION</span>
<span style="font-size:9.5px;color:#6b7280;">繁體中文 · 專業合約用語</span>
</div>
<div style="font-size:10px;line-height:1.5;color:#263247;">「承辦商須於2026年11月30日前完成工程。如有延誤，須按每日港幣25,000元支付違約金。」</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:8px;align-items:center;padding:6px 10px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">專業翻譯 · 保留法律用語</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">6</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Translation</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Translation models convert text from one language to another while preserving meaning and tone. In construction, this means contracts, RFIs, safety guidelines, and progress reports can be accurately translated between English and Chinese.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> English contract clause with legal terminology</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Accurate Traditional Chinese translation using professional legal terminology, ready for bilingual contract use.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: bilingual contracts, RFI translation, safety guidelines, progress reports</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>合約中英翻譯 · RFI 自動翻譯 · 安全指引雙語版 · 跨境項目文件
</div>
</div>
</div>
</div>

<!--
Sixth current high-use / fast-growing capability detail slide (Translation). Follows the Language family after Text Generation. Uses a contract clause English → Traditional Chinese mockup.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-006 · prototype</div>

# Live demo — translate construction documents with AI

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Install extension</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Choose AI model</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Translate page / PDF</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:16px;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<div style="text-align:center;">
<span style="font-size:20px;font-weight:800;color:#FF6B35;">Immersive Translate</span>
<span style="font-size:13px;color:#5B6472; margin-left:8px;">沉浸式翻譯</span>
</div>
<div style="font-size:12px;color:#5B6472;text-align:center;max-width:420px;">
Browser extension that brings high-quality AI translation to any webpage or PDF.<br>
Supports GPT-4o, Claude, Gemini, Qwen, and more.
</div>
<a href="https://immersivetranslate.com/" target="_blank" rel="noopener" style="margin-top:8px;display:inline-flex;align-items:center;justify-content:center;padding:10px 24px;background:#FF6B35;color:#fff;font-weight:700;border-radius:10px;text-decoration:none;font-size:13px;">
Install Immersive Translate ↗
</a>
<div style="font-size:10px;color:#8A766A;margin-top:4px;">Free • Chrome / Edge / Firefox • Hong Kong accessible</div>
</div>

<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS TEXT</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"The Subcontractor shall complete the works by 30 November 2026. In the event of delay, liquidated damages shall be payable at the rate of HK$25,000 per calendar day."</div>
</div>

<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Install the extension → select an AI model → translate any contract page or PDF.</span>
<span>Free tier available • No credit card required</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not translate client, project, or personnel documents. Use sample clauses only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">Free tier available</span>
</div>
</div>

<!--
Revised Translation demo focusing on Immersive Translate browser extension. Guides users to install the extension and use its AI translation feature on construction documents. Includes installation link and example contract clause.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-007 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Long daily report</span>
</div>
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">SOURCE TEXT</div>
<div style="font-size:10.5px;line-height:1.4;color:#263247;font-style:italic;">"08:00–17:30: Steel beam installation on Level 17. 3 workers from AC Construction. Minor delay due to crane availability (30 mins). Safety inspection passed. 2 near-miss reports filed..."</div>
</div>
<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>
<div style="position:relative;flex:1;min-height:0;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);padding:12px 14px;">
<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">SUMMARY</span>
</div>
<div style="font-size:10.5px;line-height:1.5;color:#263247;">Level 17 steel installation completed with 30-min delay due to crane. Safety passed. 2 near-miss incidents logged. No major issues.</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:8px;align-items:center;padding:6px 10px;background:rgba(36,50,71,.92);border-radius:10px;box-shadow:0 6px 14px rgba(36,50,71,.22);">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:12px;font-weight:700;color:#fff;">Concise • Actionable</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#7C5CBF;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">7</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#7C5CBF;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Summarization</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Summarization models condense long documents into shorter, actionable summaries while preserving key facts. In construction, this means daily reports, meeting minutes, incident logs, and lengthy specifications can be quickly turned into digestible updates for managers and clients.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Full daily site report (800+ words)</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">3–4 bullet points highlighting progress, delays, safety issues, and required actions.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: daily report summary, meeting minutes, incident log digest, specification overview</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>每日報告摘要 · 會議記錄總結 · 事故報告精簡 · 長文件快速閱讀
</div>
</div>
</div>
</div>

<!--
Seventh current high-use / fast-growing capability detail slide (Summarization). Follows Translation in the Language family. Uses a daily site report → concise summary mockup.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-007 · prototype</div>

# Live demo — summarize construction documents

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open a chat AI</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Paste your document</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Ask for summary</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
<a href="https://qianwen.aliyun.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#FF6A00;">Qwen</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Qwen AI · Long context · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">qianwen.aliyun.com ↗</span>
</a>
<a href="https://kimi.moonshot.cn" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#6C5CE7;">Kimi</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Moonshot AI · 200K+ context · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">kimi.moonshot.cn ↗</span>
</a>
<a href="https://gemini.google.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#4285F4;">Gemini</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Google · 1M context · Google account</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">gemini.google.com ↗</span>
</a>
</div>
<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS PROMPT</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"Summarize the following daily site report in 4 bullet points: progress, delays, safety issues, and required actions."</div>
</div>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Paste your long report or minutes → ask for a concise summary.</span>
<span>Free · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not paste client, project, or personnel details. Use sample reports only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">All free tier</span>
</div>
</div>

<!--
Revised Summarization demo following Page 15 format. Uses Qwen, Kimi, and Gemini — all Hong Kong accessible services. Removed ChatGPT and Claude as requested.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-008 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Site photo</span>
</div>

<div style="flex:1;min-height:0;position:relative;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#f8f1eb;">
<img src="/images/object-detection-input.jpg" alt="Site photo before object detection" style="width:100%;height:100%;object-fit:contain;">
<div style="position:absolute;left:10px;top:10px;padding:4px 9px;background:rgba(255,255,255,.92);border:1px solid #FFD7BE;border-radius:6px;font-size:10px;font-weight:700;color:#FF6B35;">INPUT</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<div style="flex:1;min-height:0;position:relative;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#f8f1eb;">
<img src="/images/object-detection-output.jpg" alt="Site photo with detected objects and bounding boxes" style="width:100%;height:100%;object-fit:contain;">
<div style="position:absolute;left:10px;top:10px;padding:4px 9px;background:rgba(255,255,255,.92);border:1px solid #FFD7BE;border-radius:6px;font-size:10px;font-weight:700;color:#FF6B35;">OUTPUT</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Detected:</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Person · Hard hat · Safety vest · Crane</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#3974C5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">8</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#3974C5;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Object Detection</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Object Detection models identify and locate multiple objects within an image. In construction, this enables automated safety monitoring (hard hats, safety vests), equipment tracking, progress measurement, and hazard detection on site photos or live camera feeds.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Daily site progress photo</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Detected objects with bounding boxes and labels — ready for safety compliance reports or automated alerts.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: PPE compliance check, equipment inventory, progress tracking, hazard identification</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>安全帽偵測 · 反光衣檢查 · 設備盤點 · 工地違規警示
</div>
</div>
</div>
</div>

<!--
Object Detection detail slide restored to use the user-supplied Before.png (input) and After.png (output) images. Page 22 (Image Segmentation) now uses the Miro animated gif per user clarification.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-008 · prototype</div>

# Live demo — detect objects on construction sites

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload site photo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Run detection</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">View bounding boxes</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://Ultralytics-YOLO11.hf.space" title="YOLO11 object detection demo" loading="eager" allow="camera; clipboard-read; clipboard-write" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> use the sample or a non-sensitive site photo. Do not upload photos with identifiable personnel.</span>
<a href="https://Ultralytics-YOLO11.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Interactive Object Detection prototype embedded from the public Hugging Face Space Ultralytics/YOLO11. YOLO11 is a real-time object detection model supporting many common classes including person, vehicles, and safety equipment. Use a sample or non-sensitive site photo during the live demo; uploaded images are processed by a third-party Space. If the embed is slow or unavailable, open the demo in a new tab and use the prepared Before/After images from Page 20 as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-009 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Street / site scene</span>
</div>

<div style="flex:1;min-height:0;position:relative;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#0a0a0a;">
<img src="/images/segmentation-demo.gif" alt="Animated demo — segmentation masks appearing frame by frame on a street scene" style="width:100%;height:100%;object-fit:contain;">
<div style="position:absolute;left:10px;top:10px;padding:4px 9px;background:rgba(255,255,255,.92);border:1px solid #FFD7BE;border-radius:6px;font-size:10px;font-weight:700;color:#FF6B35;">SEGMENTATION</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Animated demo</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Pixel masks appear frame-by-frame</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#3974C5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">9</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#3974C5;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Image Segmentation</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Image Segmentation models classify every pixel in an image into categories such as building, road, vegetation, or machinery. In construction, this enables automated drone-survey analysis, BIM update from photos, facade defect zoning, and volumetric earthwork tracking.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Photo of a construction scene (street, equipment, workers)</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Per-pixel colour masks for buildings, vehicles, road, vegetation — ready for area or volume calculation.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: drone survey analysis, BIM update, facade defect zoning, earthwork volume</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>航拍地盤分析 · BIM 自動更新 · 缺陷區域識別 · 土地測量
</div>
</div>
</div>
</div>

<!--
Image Segmentation detail slide. Uses the animated Miro Medium demo gif (800×266 — street scene with vehicles/people, pixel masks appearing frame-by-frame) as the visual. Dark background (#0a0a0a) + object-fit:contain to preserve aspect ratio. Single image replaces earlier CSS mockup.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-009 · prototype</div>

# Live demo — segment images on construction sites

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open SAM3 demo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload site photo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Click pixels to mask</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://prithivMLmods-SAM3-Demo.hf.space" title="SAM3 image segmentation demo" loading="eager" allow="camera; clipboard-read; clipboard-write" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> use the sample or a non-sensitive site photo. Do not upload photos with identifiable personnel.</span>
<a href="https://prithivMLmods-SAM3-Demo.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Image Segmentation demo using the public Hugging Face Space prithivMLmods/SAM3-Demo (third-generation Segment Anything model). If the embed is slow or unavailable, use the open-in-new-tab link as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-010 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Street scene photo</span>
</div>

<div style="flex:1;min-height:0;position:relative;border-radius:10px;overflow:hidden;border:1px solid #eadfd8;background:#0a0a0a;">
<img src="/images/depth-estimation-keras.png" alt="Depth estimation sample from Keras docs — predicted depth map of a street scene" style="width:100%;height:100%;object-fit:contain;">
<div style="position:absolute;left:10px;top:10px;padding:4px 9px;background:rgba(255,255,255,.92);border:1px solid #FFD7BE;border-radius:6px;font-size:10px;font-weight:700;color:#FF6B35;">DEPTH MAP</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Source: keras.io</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Predicted per-pixel distance</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#3974C5;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">10</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#3974C5;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Depth Estimation</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Depth Estimation models predict the distance from the camera to every pixel in a photo. In construction, this supports facade defect measurement (knowing the real size of a crack), off-site crane clearance planning, BIM dimension extraction, and progress checking against design dimensions.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Street-level photo of a building elevation</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Per-pixel distance map (lighter = farther, darker = closer) plus estimated real-world measurements — ready for as-built verification.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: facade crack measurement, crane clearance check, as-built BIM</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>裂縫尺寸量測 · 吊機淨空檢查 · BIM 尺寸提取 · 工程測量
</div>
</div>
</div>
</div>

<!--
Depth Estimation detail slide. Uses the official Keras.io sample image (2721×3898 PNG, predicted depth map of a street scene) as the visual. Image is portrait orientation; object-fit:contain preserves aspect ratio within the card. Source attribution kept inline.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-010 · prototype</div>

# Live demo — estimate depth on construction sites

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open DPT demo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload site photo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">View depth map</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://nielsr-dpt-depth-estimation.hf.space" title="DPT depth estimation demo" loading="eager" allow="camera; clipboard-read; clipboard-write" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not upload photos with identifiable personnel without consent.</span>
<a href="https://nielsr-dpt-depth-estimation.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Depth Estimation demo embedded from the public Hugging Face Space nielsr/dpt-depth-estimation (DPT — Dense Prediction Transformer, by Intel ISL). Monocular depth estimation from a single image. If the embed is slow, use the open-in-new-tab link as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-011 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<!-- LEFT: agent steps flowchart -->
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Multi-step task</span>
</div>

<!-- Source -->
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">SOURCE TASK</div>
<div style="font-size:10.5px;line-height:1.4;color:#263247;font-style:italic;">"Find the latest concrete cube test results for Level 17, summarise pass/fail, and draft an email to the consultant."</div>
</div>

<!-- Agent steps — three boxes connected by arrows -->
<div style="display:flex;flex-direction:column;gap:6px;flex:none;">
<div style="display:flex;align-items:center;gap:8px;">
<div style="flex:1;display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:#FFF1E6;border:1px solid #FFB48A;border-radius:8px;min-height:0;">
<div style="display:flex;align-items:center;gap:4px;">
<span style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#FF6B35;color:#fff;font-size:9px;font-weight:800;">1</span>
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;">THINK</span>
</div>
<div style="font-size:9.5px;color:#263247;line-height:1.3;">Plan steps: search documents → read results → summarise → draft email</div>
</div>
<span style="color:#FF6B35;font-size:12px;">→</span>
<div style="flex:1;display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:#fff;border:1px solid #eadfd8;border-radius:8px;">
<div style="display:flex;align-items:center;gap:4px;">
<span style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#3974C5;color:#fff;font-size:9px;font-weight:800;">2</span>
<span style="font-size:9.5px;font-weight:700;color:#3974C5;">CALL TOOL</span>
</div>
<div style="font-size:9.5px;color:#263247;line-height:1.3;">Search QA database → retrieve test cube reports</div>
</div>
<span style="color:#FF6B35;font-size:12px;">→</span>
<div style="flex:1;display:flex;flex-direction:column;gap:2px;padding:6px 8px;background:#fff;border:1px solid #eadfd8;border-radius:8px;">
<div style="display:flex;align-items:center;gap:4px;">
<span style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#3F9460;color:#fff;font-size:9px;font-weight:800;">3</span>
<span style="font-size:9.5px;font-weight:700;color:#3F9460;">RESPOND</span>
</div>
<div style="font-size:9.5px;color:#263247;line-height:1.3;">Summarise + draft consultant email</div>
</div>
</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<!-- Output box -->
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);border:1px solid #eadfd8;border-radius:10px;overflow:hidden;position:relative;">
<div style="display:flex;align-items:center;gap:6px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">OUTPUT</span>
</div>
<div style="font-size:10px;line-height:1.45;color:#263247;">
<strong>Result:</strong> 18/20 cubes passed Level 17 (avg 32.5 MPa). 2 borderline — see doc IDs #4471, #4472.<br>
<strong>Email draft:</strong> "Dear Consultant, please find attached the Level 17 cube test summary. 2 cubes require your review…"
</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Multi-step agent response</span>
</div>
</div>
</div>

<!-- Right column -->
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#C65368;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">11</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#C65368;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Agent</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Agent models can break a goal into multiple steps, call tools (search, documents, spreadsheets, email), and respond with a single integrated answer. In construction, this supports end-to-end tasks: pull data from the QA system, summarise findings, draft the email, and follow up.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Multi-step request spanning documents, data, and writing</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Sequenced reasoning: search → retrieve → summarise → draft — ready for human review.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: QA report flow, document + email workflow, project status briefing</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>AI 助理自動處理 Email · 多工具串接 · 跨系統數據整合 · 任務編排
</div>
</div>
</div>
</div>

<!--
Eleventh current high-use / fast-growing capability detail slide (Agent). First topic in the Reasoning family. Uses a CSS-only flowchart mockup of plan → tool call → respond, with a concrete Level-17 cube-test example.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-011 · prototype</div>

# Live demo — run an AI agent on a construction task

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open a chat AI</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Ask agent task</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review plan + reply</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
<a href="https://qianwen.aliyun.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#FF6A00;">Qwen</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Qwen AI · Agent & tools · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">qianwen.aliyun.com ↗</span>
</a>
<a href="https://kimi.moonshot.cn" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#6C5CE7;">Kimi</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Moonshot AI · Web + tools · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">kimi.moonshot.cn ↗</span>
</a>
<a href="https://gemini.google.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#4285F4;">Gemini</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Google · 1M context · Google account</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">gemini.google.com ↗</span>
</a>
</div>

<!-- Forward-looking teaser for the next AI training session -->
<div style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;background:linear-gradient(120deg,#FFF1E0 0%,#FFE3D6 100%);border:1px solid #FFB48A;border-left:5px solid #C65368;border-radius:10px;">
<div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex:none;">
<div style="background:#C65368;color:#fff;font-weight:800;font-size:9.5px;letter-spacing:.4px;padding:3px 8px;border-radius:6px;">NEXT</div>
<div style="background:#fff;color:#C65368;font-weight:800;font-size:14px;padding:3px 8px;border-radius:6px;border:1px solid #C65368;">AI Training</div>
</div>
<div style="flex:1;min-width:0;">
<div style="font-size:12px;font-weight:800;color:#263247;line-height:1.3;">Want to run an agent on your real project files?</div>
<div style="font-size:10.5px;color:#5B6472;line-height:1.45;margin-top:3px;">The next AI training session will cover <strong style="color:#C65368;">AI Agent · Hermes Agent</strong> in detail — multi-step planning, tool-calling, file access, and project-specific automations for construction workflows.</div>
</div>
</div>

<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS TASK</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"Plan how to find the latest concrete cube test results for Level 17, summarise pass/fail, and draft a short email to the consultant. Show your steps."</div>
</div>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Paste the task above into any chat AI → ask it to plan first, then act.</span>
<span>Free · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not grant the AI access to your project documents without review.</span>
<span style="flex:none;color:#B84518;font-weight:700;">All free tier</span>
</div>
</div>

<!--
Agent demo using the Page 15 redirect-link pattern (Qwen / Kimi / Gemini — all Hong Kong accessible, free tier). Ready-to-paste multi-step task plan using a Level-17 concrete cube test scenario. Detailed coverage of AI Agent (including Hermes Agent) — multi-step planning, tool-calling, file access, project-specific automations — is deferred to the next AI training session.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-012 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<!-- LEFT: document search workflow -->
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Question + document set</span>
</div>

<!-- Source question -->
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">QUESTION</div>
<div style="font-size:10.5px;line-height:1.4;color:#263247;font-style:italic;">"What is the latest approved extension of time granted on this project?"</div>
</div>

<!-- Document set chips + arrow -->
<div style="display:flex;align-items:center;gap:10px;">
<div style="display:flex;flex:1;flex-wrap:wrap;gap:5px;padding:8px;background:#fff;border:1px solid #eadfd8;border-radius:10px;">
<div style="display:inline-block;padding:3px 8px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:6px;font-size:9.5px;color:#1e4a7a;font-weight:600;">📄 Subcontract.pdf</div>
<div style="display:inline-block;padding:3px 8px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:6px;font-size:9.5px;color:#1e4a7a;font-weight:600;">📄 EOT-Letter.pdf</div>
<div style="display:inline-block;padding:3px 8px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:6px;font-size:9.5px;color:#1e4a7a;font-weight:600;">📄 Minutes-2026-05.docx</div>
<div style="display:inline-block;padding:3px 8px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:6px;font-size:9.5px;color:#1e4a7a;font-weight:600;">📄 Variation-014.pdf</div>
</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<!-- Output box (answer + citations) -->
<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);border:1px solid #eadfd8;border-radius:10px;overflow:hidden;position:relative;">
<div style="display:flex;align-items:center;gap:6px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">ANSWER + CITATIONS</span>
</div>
<div style="font-size:10px;line-height:1.45;color:#263247;">
<strong>Answer:</strong> An EOT of <strong style="color:#C2703A;">42 days</strong> was approved on 12 May 2026, citing Clause 11.6 of the subcontract for unforeseen ground conditions.
</div>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">
<div style="display:inline-block;padding:2px 6px;background:#fff;border:1px solid #c4d8ed;border-radius:5px;font-size:8.5px;color:#1e4a7a;font-weight:700;">[1] EOT-Letter.pdf · p.2</div>
<div style="display:inline-block;padding:2px 6px;background:#fff;border:1px solid #c4d8ed;border-radius:5px;font-size:8.5px;color:#1e4a7a;font-weight:700;">[2] Minutes-2026-05.docx · ¶3</div>
</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Grounded answer with citations</span>
</div>
</div>
</div>

<!-- Right column -->
<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#C65368;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">12</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#C65368;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Retrieval</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Retrieval models (also called RAG — Retrieval-Augmented Generation) ground an answer in your own documents. They search a knowledge base, find the most relevant passages, and generate a cited response. In construction, this turns scattered contracts, RFIs, minutes, and drawings into a single searchable source of truth.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Question + contract / minutes / letters document set</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Answer with quoted passages and citations to the source PDFs/DOCX — every claim traceable.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: contract Q&A, EOT search, drawing note lookup, audit support</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>合約即時問答 · RFI 自動搜尋 · 文件庫智能搜尋 · 審計證據追溯
</div>
</div>
</div>
</div>

<!--
Twelfth current high-use / fast-growing capability detail slide (Retrieval). Second topic in the Reasoning family. Uses a CSS-only mockup of a question + document set + grounded answer with citations.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-012 · prototype</div>

# Live demo — ground answers in your own documents

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open retrieval AI</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload documents</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Ask question</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
<a href="https://copilot.microsoft.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#0078D4;">Copilot</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Microsoft · File upload · Free</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">copilot.microsoft.com ↗</span>
</a>
<a href="https://huggingface.co/chat" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#FF9D00;">HF Chat</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Web-grounded · Citations · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">huggingface.co/chat ↗</span>
</a>
<a href="https://huggingface.co/spaces?search=rag+chat" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#FFB800;">HF RAG Spaces</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Browse public RAG demos</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">search → RAG ↗</span>
</a>
</div>
<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS PROMPT</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"I just uploaded my contract and meeting minutes. What extension of time has been approved on this project so far? Cite the source PDFs."</div>
</div>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Upload PDFs / DOCX → ask a question → read the answer with citations.</span>
<span>Free · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not upload project, client, or personnel documents. Use sample contracts only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">All free tier</span>
</div>
</div>

<!--
Retrieval demo using a diversified set of tools — Microsoft Copilot (upload up to 50 docs, free), HF Chat (RAG, citations, free tier, with citations), and a HF Spaces search URL for exploring public RAG demos. Differs from Pages 15/19/27 to avoid the identical Qwen card pattern.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-013 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Logic problem</span>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">PROBLEM</div>
<div style="font-size:10.5px;line-height:1.4;color:#263247;font-style:italic;">"If clause 4.2 grants LD of HK$25k/day after 30 Nov, but EOT letter #2 adds 42 days, what is the revised completion date and LD start point?"</div>
</div>

<div style="display:flex;flex-direction:column;gap:5px;flex:none;">
<div style="display:flex;gap:6px;padding:6px 8px;background:#FFF1E6;border:1px solid #FFB48A;border-radius:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#FF6B35;color:#fff;font-size:9px;font-weight:800;flex:none;">1</div>
<div style="font-size:10px;color:#263247;line-height:1.35;"><strong style="color:#FF6B35;">Extract</strong> facts: LD rate, original date, EOT days</div>
</div>
<div style="display:flex;gap:6px;padding:6px 8px;background:#FFF1E6;border:1px solid #FFB48A;border-radius:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#FF6B35;color:#fff;font-size:9px;font-weight:800;flex-none;">2</div>
<div style="font-size:10px;color:#263247;line-height:1.35;"><strong style="color:#FF6B35;">Deduce</strong> revised date = 30 Nov + 42 days = 11 Jan 2027</div>
</div>
<div style="display:flex;gap:6px;padding:6px 8px;background:#FFF1E6;border:1px solid #FFB48A;border-radius:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:14px;height:14px;border-radius:50%;background:#FF6B35;color:#fff;font-size:9px;font-weight:800;flex:none;">3</div>
<div style="font-size:10px;color:#263247;line-height:1.35;"><strong style="color:#FF6B35;">Conclude</strong> LD starts from 12 Jan 2027 if not delivered</div>
</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);border:1px solid #eadfd8;border-radius:10px;overflow:hidden;position:relative;">
<div style="font-size:10px;line-height:1.45;color:#263247;">
<strong>Conclusion:</strong> Revised completion date is <strong style="color:#C2703A;">11 January 2027</strong>. Liquidated damages of HK$25,000/day would begin accruing from <strong style="color:#C2703A;">12 January 2027</strong> if works remain incomplete.
</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Step-by-step logic</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#C65368;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">13</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#C65368;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Reasoning</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Reasoning models break a logic problem into explicit steps and follow each deduction to a conclusion. In construction, this supports multi-clause contract analysis, extension-of-time calculations, compliance checking, and structured decisions on site disputes.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Multi-clause logic question spanning contract + EOT letter</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Chain of reasoning: extract facts → combine rules → state revised date → trigger LD point.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: contract clause logic, EOT calculation, compliance check, dispute support</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>合約邏輯計算 · EOT 工期核算 · 法規合規檢查 · 爭議輔助
</div>
</div>
</div>
</div>

<!--
Thirteenth current high-use / fast-growing capability detail slide (Reasoning). Third topic in the Reasoning family. CSS-only mockup of an extract → deduce → conclude chain on a contract + EOT scenario.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-013 · prototype</div>

# Live demo — reason step by step

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open reasoning AI</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Ask for steps</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Review conclusion</span>
</div>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:10px;padding:14px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
<a href="https://kimi.moonshot.cn" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#6C5CE7;">Kimi</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Moonshot · Step-by-step · Free tier</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">kimi.moonshot.cn ↗</span>
</a>
<a href="https://gemini.google.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#4285F4;">Gemini</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Google · 1M context · Reasoning</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">gemini.google.com ↗</span>
</a>
<a href="https://copilot.microsoft.com" target="_blank" rel="noopener" style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px;background:#fff;border:1px solid #eadfd8;border-radius:10px;text-decoration:none;border-bottom:none!important;box-shadow:0 4px 12px rgba(92,68,56,.06);">
<span style="font-size:14px;font-weight:800;color:#0078D4;">Copilot</span>
<span style="font-size:10px;color:#5B6472;text-align:center;">Microsoft · Document reasoning · Free</span>
<span style="margin-top:4px;font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">copilot.microsoft.com ↗</span>
</a>
</div>
<div style="padding:10px 14px;background:#fff;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:10.5px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;margin-bottom:4px;">TRY THIS PROMPT</div>
<div style="font-size:11.5px;line-height:1.5;color:#263247;font-style:italic;">"If clause 4.2 grants LD of HK$25k/day after 30 Nov, and EOT letter #2 adds 42 days, walk me through step by step: what is the revised completion date, and when does LD start accruing? Show your reasoning."</div>
</div>
<div style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:#725B4E;line-height:1.4;text-align:center;">
<span>Paste the prompt → ask the AI to show its reasoning before giving the answer.</span>
<span>Free · Hong Kong accessible · No credit card</span>
</div>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not paste client, project, or personnel details. Use sample clauses only.</span>
<span style="flex:none;color:#B84518;font-weight:700;">All free tier</span>
</div>
</div>

<!--
Reasoning demo using a diversified set (Kimi + Gemini + HF Chat — all verified 200, uses Qwen (verified 200)). Ask the AI to show its step-by-step reasoning before giving the conclusion — this is the key behaviour to compare across models.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-014 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Audio recording</span>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">AUDIO INPUT</div>
<div style="position:relative;height:60px;display:flex;align-items:center;gap:2px;justify-content:center;background:#fff;border:1px solid #eadfd8;border-radius:6px;padding:6px;">
<div style="width:3px;height:20%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:48%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:32%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:60%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:24%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:78%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:42%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:64%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:36%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:54%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:80%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:28%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:50%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:38%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:72%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:44%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:62%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:30%;background:#FF6B35;border-radius:2px;"></div>
<div style="width:3px;height:58%;background:#FF6B35;border-radius:2px;"></div>
</div>
<div style="font-size:10px;color:#5B6472;font-style:italic;line-height:1.3;">🎤 Safety toolbox talk · Level 17 · 02:14 · Cantonese / English mixed</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);border:1px solid #eadfd8;border-radius:10px;overflow:hidden;position:relative;">
<div style="display:flex;align-items:center;gap:6px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">TRANSCRIPT</span>
</div>
<div style="font-size:10px;line-height:1.45;color:#263247;">"各位到咗 Level 17 記住帶齊安全帶同 helmet。 下午三點 crane lift 已經 cancel 咗, 改聽日早上九點。 Incoming material 已經 on-site, please confirm 收貨。"</div>
<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px;">
<div style="display:inline-block;padding:2px 6px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:5px;font-size:8.5px;color:#1e4a7a;font-weight:700;">⏱ 02:14</div>
<div style="display:inline-block;padding:2px 6px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:5px;font-size:8.5px;color:#1e4a7a;font-weight:700;">中英混合</div>
</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Timestamped transcript</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#D0832F;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">14</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#D0832F;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Speech-to-Text</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Speech-to-Text (ASR) models transcribe spoken audio — meetings, toolbox talks, site instructions — into accurate, timestamped text. In construction, this enables automatic meeting minutes, searchable safety briefings, spoken progress updates, and fast conversion of Cantonese/English site recordings into written records.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Cantonese/English site voice note</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Timestamped transcript in mixed-language text — ready for the daily log.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: toolbox-talk minutes, meeting notes, voice-to-daily-log, voice-to-RFI</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>會議記錄 · 工具箱講話轉錄 · 語音留言 → 工作日誌 · 訪問記錄
</div>
</div>
</div>
</div>

<!--
Fourteenth current high-use / fast-growing capability detail slide (Speech-to-Text). First topic in the Audio family. CSS-only mockup of an audio waveform → mixed Cantonese/English transcript.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-014 · prototype</div>

# Live demo — transcribe site voice notes

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open Whisper</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Upload voice note</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Get transcript</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://openai-whisper.hf.space" title="OpenAI Whisper speech-to-text demo" loading="eager" allow="microphone; camera; clipboard-read; clipboard-write" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not upload voice notes containing client or personnel information. Use sample audio only.</span>
<a href="https://openai-whisper.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Speech-to-Text demo embedded from the public Hugging Face Space openai/whisper (OpenAI Whisper). Microphone capture or file upload supported; covers Cantonese / Mandarin / English with timestamped transcript. If the embed is slow, open in a new tab as fallback.
-->

---

<div class="cl-footer-ref">CL26Q3-DET-015 · v1</div>

<div style="display:grid;grid-template-columns:1.05fr .95fr;gap:22px;height:468px;margin-top:6px;overflow:hidden;grid-template-rows:minmax(0,1fr);">
<div style="position:relative;display:flex;flex-direction:column;gap:8px;overflow:hidden;border:1px solid #eadfd8;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);background:#fff;padding:10px;min-height:0;height:100%;">
<div style="display:inline-flex;gap:8px;align-items:center;padding:7px 11px;background:rgba(255,255,255,.94);border:1px solid #FFD7BE;border-radius:10px;box-shadow:0 6px 14px rgba(92,68,56,.16);align-self:flex-start;">
<span style="font-size:10px;font-weight:700;color:#FF6B35;">Input</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Written text</span>
</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;background:#FFF8F4;border:1px dashed #FFB48A;border-radius:10px;">
<div style="font-size:11px;color:#8A5A3A;font-weight:700;letter-spacing:.4px;">TEXT INPUT</div>
<div style="font-size:10.5px;line-height:1.45;color:#263247;font-style:italic;">"Attention all Level 17 workers: please confirm your safety harness and hard hat before entering the working zone."</div>
</div>

<div style="display:flex;justify-content:center;align-items:center;color:#B84518;font-size:14px;font-weight:700;">↓</div>

<div style="flex:1;min-height:0;display:flex;flex-direction:column;gap:6px;padding:10px 12px;background:linear-gradient(180deg,#fff 0%,#fdf6f0 100%);border:1px solid #eadfd8;border-radius:10px;overflow:hidden;position:relative;">
<div style="display:flex;align-items:center;gap:6px;">
<span style="font-size:9.5px;font-weight:700;color:#FF6B35;letter-spacing:.5px;">AUDIO OUTPUT</span>
<span style="font-size:9px;color:#6b7280;">🔊 8.2s · English (UK)</span>
</div>
<div style="position:relative;height:54px;display:flex;align-items:center;gap:2.5px;justify-content:center;background:#f8f9fb;border:1px solid #eadfd8;border-radius:6px;padding:6px;">
<div style="width:3px;height:30%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:62%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:46%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:78%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:38%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:88%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:54%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:72%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:42%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:68%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:50%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:82%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:36%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:60%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:48%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:76%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:44%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:66%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:52%;background:#3974C5;border-radius:2px;"></div>
<div style="width:3px;height:80%;background:#3974C5;border-radius:2px;"></div>
</div>
<div style="position:absolute;left:10px;bottom:10px;right:10px;display:inline-flex;gap:6px;align-items:center;padding:5px 9px;background:rgba(36,50,71,.92);border-radius:8px;overflow:hidden;">
<span style="font-size:10px;font-weight:700;color:#cbd5e1;">Output</span>
<span style="font-size:11px;font-weight:700;color:#fff;">Natural speech waveform</span>
</div>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;overflow:hidden;">
<div style="display:flex;align-items:center;gap:10px;">
<div style="width:28px;height:28px;border-radius:50%;background:#D0832F;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;font-weight:800;">15</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#D0832F;font-weight:700;">Capability</div>
<h2 style="margin:6px 0 0;font-size:26px;">Text-to-Speech</h2>
</div>
</div>

<div style="padding:14px;background:#FFF8F4;border-left:5px solid #FF6B35;border-radius:12px;">
<p style="margin:0;font-size:13px;line-height:1.5;">Text-to-Speech models convert written text into natural-sounding audio in many languages and voices. In construction, this turns safety briefings, work permits, and progress updates into spoken announcements for workers on site, supporting hands-free operations, training videos, and multilingual communication.</p>
</div>

<div style="padding:10px;background:#F7F6F4;border:1px solid #e7e0d9;border-radius:12px;">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Construction sample</div>
<div style="margin-top:6px;font-size:13px;line-height:1.5;"><strong style="color:#263247;">Input:</strong> Safety briefing text</div>
<div style="margin-top:4px;padding:10px;background:#fff;border:1px solid #eadfd8;border-radius:10px;font-size:13px;line-height:1.5;">
<div class="text-xs uppercase tracking-wide" style="color:#6b7280;font-weight:700;">Possible output</div>
<div style="margin-top:4px;">Audio file (8-10 seconds) read aloud in natural voice — broadcast-ready for site PA or training video.</div>
</div>
<div style="margin-top:6px;font-size:12px;color:#5B6472;">Use case: site PA announcements, training videos, multilingual briefings, hands-free updates</div>
<div style="margin-top:6px;padding:6px 10px;background:#eef4fb;border:1px solid #c4d8ed;border-radius:8px;font-size:10.5px;line-height:1.4;color:#1e4a7a;">
<strong>日常熱門用途：</strong>AI 配音 · 培訓影片旁白 · 智能語音助手 · 多語言語音
</div>
</div>
</div>
</div>

<!--
Fifteenth and final current high-use / fast-growing capability detail slide (Text-to-Speech). Second topic in the Audio family. CSS-only mockup of text input → natural speech waveform output, with construction PA / training video example.
-->

---

<div class="cl-footer-ref">CL26Q3-DEM-015 · prototype</div>

# Live demo — turn text into natural speech

<div style="display:flex;flex-direction:column;gap:8px;height:408px;margin-top:2px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">1</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Open Bark demo</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">2</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Type your text</span>
</div>
<div style="display:flex;align-items:center;gap:8px;padding:7px 11px;background:#FFF8F4;border:1px solid #FFD7BE;border-radius:10px;">
<span style="display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#FF6B35;color:#fff;font-size:11px;font-weight:800;">3</span>
<span style="font-size:12px;font-weight:700;color:#263247;">Play audio</span>
</div>
</div>

<div style="position:relative;flex:1;min-height:0;overflow:hidden;background:#fff;border:1px solid #eadfd8;border-radius:14px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<iframe src="https://suno-bark.hf.space" title="Suno Bark text-to-speech demo" loading="eager" allow="autoplay" style="display:block;width:100%;height:100%;border:0;background:#fff;"></iframe>
</div>

<div style="display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:20px;font-size:10.5px;line-height:1.25;color:#725B4E;">
<span><strong style="color:#B84518;">Privacy:</strong> do not type client, project, or personnel details. Use sample announcements only.</span>
<a href="https://suno-bark.hf.space" target="_blank" rel="noopener" style="flex:none;color:#B84518;font-weight:700;text-decoration:none;border-bottom:none!important;">Open demo in new tab ↗</a>
</div>
</div>

<!--
Text-to-Speech demo embedded from the public Hugging Face Space suno/bark (Suno AI's Bark model). If the embed is slow or unavailable, the open-in-new-tab fallback is essential.
-->

---

<div class="cl-footer-ref">CL26Q3-BRN-001 · v3</div>

# Audience Brainstorm

<div style="display:grid;grid-template-columns:1.08fr .92fr;gap:24px;height:382px;margin-top:8px;">
<div style="display:grid;grid-template-columns:210px 1fr;align-items:center;gap:22px;padding:24px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:18px;box-shadow:0 10px 26px rgba(92,68,56,.10);">
<div style="display:flex;align-items:center;justify-content:center;padding:11px;background:#fff;border:3px solid #FF6B35;border-radius:16px;box-shadow:0 8px 18px rgba(92,68,56,.13);">
<a href="https://forms.gle/faQ5AJiXnqYGzQBHA" target="_blank" rel="noopener" aria-label="Open the audience brainstorm form" style="display:block;line-height:0;border-bottom:none!important;">
<img src="/form-qr.png" alt="QR code for the audience brainstorm form" style="display:block;width:180px;height:180px;" />
</a>
</div>
<div>
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Step 1 · Submit</div>
<h2 style="font-size:24px;line-height:1.15;margin:8px 0 10px;">Scan. Share one idea.</h2>
<p style="font-size:14px;line-height:1.5;margin:0;color:#5B6472;">What construction problem should AI help solve next?</p>
<div style="margin-top:18px;font-size:12px;color:#725B4E;">No name required · one idea per submission</div>
<a href="https://forms.gle/faQ5AJiXnqYGzQBHA" target="_blank" rel="noopener" style="display:inline-block;margin-top:10px;color:#B84518;font-size:12px;font-weight:700;text-decoration:none;border-bottom:none!important;white-space:nowrap;">forms.gle/faQ5AJiXnqYGzQBHA</a>
</div>
</div>

<div style="display:flex;flex-direction:column;gap:14px;">
<div style="flex:1;padding:22px;background:#FFF8F4;border-left:6px solid #FF6B35;border-radius:14px;box-shadow:0 8px 20px rgba(92,68,56,.08);">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Step 2 · Group</div>
<h3 style="font-size:20px;margin:8px 0 6px;">We cluster the responses</h3>
<p style="font-size:13px;line-height:1.45;margin:0;color:#5B6472;">Safety · Productivity · Quality · Sustainability · Other</p>
</div>
<div style="flex:1;padding:22px;background:#FFE3D6;border-left:6px solid #FF6B35;border-radius:14px;box-shadow:0 8px 20px rgba(92,68,56,.08);">
<div class="text-xs uppercase tracking-wide" style="color:#FF6B35;font-weight:700;">Step 3 · Discuss</div>
<h3 style="font-size:20px;margin:8px 0 6px;">Pick one theme to unpack</h3>
<p style="font-size:13px;line-height:1.45;margin:0;color:#5B6472;">30 seconds: problem → user → data → possible AI capability</p>
</div>
<a href="https://docs.google.com/forms/d/1grv-OgPojBO09x6tQvZaKQyg7aWWUxAwcHlvTCUg4_w/viewanalytics" target="_blank" rel="noopener" style="align-self:center;display:inline-block;padding:10px 18px;background:#FF6B35;color:#fff!important;border:none!important;border-radius:8px;box-shadow:0 4px 14px rgba(255,107,53,.35);font-size:13px;font-weight:700;letter-spacing:.2px;text-decoration:none;">Presenter: open live summary →</a>
<div style="font-size:10px;text-align:center;color:#8A766A;margin-top:-6px;">Organizer access may require Google sign-in</div>
</div>
</div>

<!--
Slide 6 v3: replaced the clipped embedded Google Form with a projection-safe QR interaction flow. The form URL remains public; the analytics link is presenter-only and may require Google sign-in.
-->

---

<div class="cl-footer-ref">CL26Q3-BRN-002 · v1</div>

# Q & A · Thank you

<div style="display:flex;flex-direction:column;gap:14px;height:380px;margin-top:18px;">
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;height:280px;">

<div style="display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:18px;background:linear-gradient(145deg,#FFF8F4 0%,#FFE3D6 100%);border:1px solid #FFD7BE;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:flex;align-items:center;gap:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#FF6B35;color:#fff;font-size:14px;font-weight:800;">?</div>
<span style="font-size:11px;font-weight:800;color:#FF6B35;letter-spacing:.6px;">OPEN</span>
</div>
<h3 style="margin:0;font-size:18px;color:#263247;line-height:1.25;">Audience questions</h3>
<p style="margin:0;font-size:12px;line-height:1.5;color:#5B6472;">Open floor for any construction-AI question — demo workflow, model choice, deployment, safety, or cost.</p>
</div>

<div style="display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:18px;background:linear-gradient(145deg,#F4F0FF 0%,#E2D6FF 100%);border:1px solid #C4B0F0;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:flex;align-items:center;gap:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#6C5CE7;color:#fff;font-size:13px;font-weight:800;">N</div>
<span style="font-size:11px;font-weight:800;color:#6C5CE7;letter-spacing:.6px;">NEXT TRAINING</span>
</div>
<h3 style="margin:0;font-size:18px;color:#263247;line-height:1.25;">AI Agent · Hermes Agent</h3>
<p style="margin:0;font-size:12px;line-height:1.5;color:#5B6472;">Deep dive on multi-step planning, tool-calling, and project-specific automations for construction workflows.</p>
<div style="display:inline-block;margin-top:auto;padding:5px 10px;background:#6C5CE7;color:#fff;border-radius:8px;font-size:11px;font-weight:700;">2026 Q4 · [TBD]</div>
</div>

<div style="display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:18px;background:linear-gradient(145deg,#F0F8FF 0%,#D6E9FF 100%);border:1px solid #B0D4F0;border-radius:16px;box-shadow:0 10px 24px rgba(92,68,56,.10);">
<div style="display:flex;align-items:center;gap:8px;">
<div style="display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:50%;background:#0078D4;color:#fff;font-size:12px;font-weight:800;">@</div>
<span style="font-size:11px;font-weight:800;color:#0078D4;letter-spacing:.6px;">CONTACT</span>
</div>
<h3 style="margin:0;font-size:18px;color:#263247;line-height:1.25;">Charles Lo</h3>
<p style="margin:0;font-size:12px;line-height:1.5;color:#5B6472;">
GitHub:&nbsp;<strong>loadingcloud001</strong><br>
Email:&nbsp;<strong>[TBD]</strong><br>
Phone:&nbsp;<strong>[TBD]</strong>
</p>
</div>

</div>

<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding-top:14px;">
<p style="margin:0;font-size:18px;font-weight:800;color:#263247;letter-spacing:.4px;">Thank you for your time</p>
<p style="margin:0;font-size:11px;color:#8A766A;">© CL26Q3 · Construction AI Application · 2026</p>
</div>
</div>

<!--
Closing slide: Q&A open + Next AI Training teaser (AI Agent · Hermes Agent, 2026 Q4) + Contact card with [TBD] placeholders for the user's email/phone. Three cards use the existing deck design tokens (orange, purple, blue gradients). Total deck is now 37 slides — final closing after Brainstorm (Page 36).
-->
