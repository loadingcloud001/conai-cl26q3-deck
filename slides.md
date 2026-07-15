---
theme: default
title: 'Construction AI Landscape 2026Q3'
info: |
  ## Construction AI Landscape 2026Q3
  28 AI Paradigms × The Building Site
  Ref: CL26Q3 · v1
  Presented by: loadingcloud001 · 2026-07
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Inter, sans-serif'
---

<style>
:root {
  --slidev-theme-primary: #FF6B35;
  --accent-orange: #FF6B35;
  --soft-grey: #F8F8F8;
  --dark-text: #2C2C2C;
}
.cl-footer-ref {
  position: fixed;
  bottom: 12px;
  right: 18px;
  font-size: 10px;
  color: #999;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.5px;
}
h1, h2 { color: var(--dark-text); }
h1 strong, h2 strong { color: var(--accent-orange); }
.slidev-layout {
  background: linear-gradient(180deg, #FFFFFF 0%, #FFF8F4 100%);
}
.section-divider {
  background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%);
  color: white;
}
</style>

<div class="cl-footer-ref">CL26Q3-COV-001 · v1</div>

# Construction AI Landscape 2026Q3

## 28 AI Paradigms × The Building Site

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10" style="background: #FF6B35; color: white;">
    Press Space for next page
  </span>
</div>

<div class="text-xs opacity-50 mt-12">
  loadingcloud001 · 2026-Q3 · Ref CL26Q3
</div>

---

<div class="cl-footer-ref">CL26Q3-AGD-001 · v1</div>

# Agenda

<div class="grid grid-cols-3 gap-4 pt-4">
  <div class="rounded-lg p-4" style="background: #FFF8F4; border-left: 4px solid #FF6B35;">
    <h3 class="text-base">1. What's Happening in AI</h3>
    <p class="text-xs opacity-70">The 5 paradigm shift that reshapes industries</p>
  </div>
  <div class="rounded-lg p-4" style="background: #FFF8F4; border-left: 4px solid #FF6B35;">
    <h3 class="text-base">2. Construction Reality</h3>
    <p class="text-xs opacity-70">What AI is already doing on real building sites</p>
  </div>
  <div class="rounded-lg p-4" style="background: #FFF8F4; border-left: 4px solid #FF6B35;">
    <h3 class="text-base">3. Your Action Plan</h3>
    <p class="text-xs opacity-70">Three paths, one recommendation</p>
  </div>
</div>

<div class="mt-8 text-sm opacity-60">
  <strong>17 slides</strong> · 15 minutes target · Q&A friendly
</div>

<img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" class="absolute right-6 bottom-6 w-32 rounded shadow" />

---

<div class="cl-footer-ref">CL26Q3-WHY-001 · v1</div>

# Why AI Matters for Construction

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2 class="text-3xl">Four hard numbers</h2>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">40%</div>
      <div class="text-sm">of construction projects finish over budget</div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">62%</div>
      <div class="text-sm">PPE violation drop after AI monitoring (LTA Singapore)</div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">80%</div>
      <div class="text-sm">of project data is unstructured (photos, forms, drawings)</div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">3x</div>
      <div class="text-sm">labour shortage impact in HK since 2020</div>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80" class="rounded-lg shadow-xl" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-001 · v1</div>

# Section 1<br/>The Big Five Paradigms

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center;">
    <div style="font-size: 80px;">🏗️</div>
    <h1 style="color: white; font-size: 56px; margin-top: 24px;">The Big Five</h1>
    <div style="opacity: 0.85; margin-top: 12px;">CNN · ViT · VLM · LLM · Diffusion</div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-002 · v1</div>

# CNN — Why YOLO Still Wins On Site

<div class="grid grid-cols-2 gap-6">
  <div>
    <h2>Convolutional Neural Networks</h2>
    <br/>
    <p class="text-sm">Spatial feature extraction via convolutional filters.
    The workhorse of computer vision since 2012.</p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">On site today</div>
      <ul class="text-sm mt-1">
        <li>PPE detection (hardhat, vest, mask)</li>
        <li>Person / vehicle counting</li>
        <li>Danger-zone intrusion alerts</li>
        <li>Concrete crack detection</li>
      </ul>
    </div>
    <div class="text-xs opacity-60 mt-2">
      <strong>Edge speed:</strong> YOLOv10 runs 100+ FPS on a single CCTV stream
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80" class="rounded-lg shadow-xl" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-003 · v1</div>

# ViT — The New Backbone

<div class="grid grid-cols-2 gap-6">
  <div>
    <h2>Vision Transformer (2020, Google)</h2>
    <br/>
    <p class="text-sm">Splits image into patches. Treats them like tokens.
    Self-attention replaces convolution.</p>
    <br/>
    <table class="text-xs">
      <thead><tr><th></th><th>CNN</th><th>ViT</th></tr></thead>
      <tbody>
        <tr><td>Inductive bias</td><td>Strong (local)</td><td>Weak (data-driven)</td></tr>
        <tr><td>Receptive field</td><td>Local → global</td><td>Global from layer 1</td></tr>
        <tr><td>Data need</td><td>Modest (ImageNet)</td><td>Large (JFT-300M)</td></tr>
        <tr><td>Interpretability</td><td>Low</td><td>Attention maps</td></tr>
      </tbody>
    </table>
  </div>
  <div class="flex flex-col items-center justify-center">
    <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&q=80" class="rounded-lg shadow-xl mb-3" />
    <div class="text-xs opacity-60 text-center">
      ViT powers every modern VLM (CLIP, GPT-4V, SAM)
    </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-004 · v1</div>

# VLM — The Bridge Between Pixels and Words

<div class="grid grid-cols-3 gap-4 pt-4">
  <div class="text-center">
    <div style="font-size: 60px;">📷</div>
    <div class="text-xs uppercase mt-2" style="color: #FF6B35;">Input</div>
    <div class="text-sm">Image + Text</div>
  </div>
  <div class="text-center">
    <div style="font-size: 60px;">🧠</div>
    <div class="text-xs uppercase mt-2" style="color: #FF6B35;">VLM</div>
    <div class="text-sm">CLIP · GPT-4V · LLaVA</div>
  </div>
  <div class="text-center">
    <div style="font-size: 60px;">💬</div>
    <div class="text-xs uppercase mt-2" style="color: #FF6B35;">Output</div>
    <div class="text-sm">Human description</div>
  </div>
</div>

<br/>

<div class="rounded-lg p-4" style="background: #FFF8F4;">
  <div class="text-xs uppercase mb-1" style="color: #FF6B35;">Use case on site</div>
  <p class="text-sm">
    Snapshot from CCTV → VLM → "Worker #3 on level 5 missing hardhat,
    standing 1.2m from unguarded edge."
  </p>
</div>

<div class="text-xs opacity-60 mt-3 text-center">
  This is the single biggest shift in 2024-2026: <strong>visual understanding
  becoming a native LLM skill</strong>.
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-005 · v1</div>

# LLM — The Central Processor

<div class="text-center text-sm opacity-70 mb-2">2026 lineup</div>

<div class="grid grid-cols-4 gap-2 text-center">
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>OpenAI</strong><div class="text-xs">GPT-4o · o3</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Anthropic</strong><div class="text-xs">Claude 4 Opus</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Google</strong><div class="text-xs">Gemini 2.5</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Meta</strong><div class="text-xs">Llama 4</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>DeepSeek</strong><div class="text-xs">V3 · R1</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Alibaba</strong><div class="text-xs">Qwen 2.5</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Mistral</strong><div class="text-xs">Mixtral</div></div>
  <div class="rounded p-2" style="background: #FFF8F4;"><strong>Zhipu</strong><div class="text-xs">GLM-4</div></div>
</div>

<br/>

<div class="rounded-lg p-4" style="background: #FF6B35; color: white;">
  <div class="text-xs uppercase mb-1">Why it matters</div>
  <p class="text-sm">
    LLMs are now the central orchestrator: they <strong>read</strong> contracts
    (RAG), <strong>describe</strong> events (via VLM), <strong>route</strong>
    alerts (via Agent), and <strong>speak</strong> to workers (TTS).
  </p>
</div>

---

<div class="cl-footer-ref">CL26Q3-VLM-006 · v1</div>

# Diffusion — The Painter

<div class="grid grid-cols-2 gap-6">
  <div>
    <h2>Reverse denoising</h2>
    <br/>
    <p class="text-sm">Start with static. Remove noise step by step.
    The model learns what "real" looks like by going backwards.</p>
    <br/>
    <div class="rounded-lg p-3" style="background: #FFF8F4;">
      <div class="text-xs uppercase" style="color: #FF6B35;">The 2026 stack</div>
      <ul class="text-sm mt-1">
        <li><strong>Image:</strong> Stable Diffusion 3, Flux, Midjourney</li>
        <li><strong>Video:</strong> Sora, Veo, Runway Gen-3</li>
        <li><strong>Audio:</strong> Stable Audio, Suno</li>
        <li><strong>3D:</strong> Tripo3D, DreamFusion</li>
      </ul>
    </div>
    <div class="text-xs opacity-60 mt-2">
      On site: generate a 3-option renovation proposal in 5 minutes.
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&q=80" class="rounded-lg shadow-xl" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-001 · v1</div>

# Section 2<br/>28 Paradigms × Construction

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center;">
    <div style="font-size: 80px;">🗺️</div>
    <h1 style="color: white; font-size: 56px; margin-top: 24px;">28 Paradigms</h1>
    <div style="opacity: 0.85; margin-top: 12px;">From research to deployment · Mapped to real construction use</div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-002 · v1</div>

# The 28 Paradigms — Core Layer

<div class="grid grid-cols-9 gap-1 text-center text-xs">
  <div class="rounded p-2" style="background: #FFE3D6;">🔴 CNN</div>
  <div class="rounded p-2" style="background: #F8F8F8;">⚪ RNN</div>
  <div class="rounded p-2" style="background: #FFE3D6;">🔴 Transf.</div>
  <div class="rounded p-2" style="background: #FFF8F4;">🟡 SSM</div>
  <div class="rounded p-2" style="background: #FFE3D6;">🔴 ViT</div>
  <div class="rounded p-2" style="background: #FFE3D6;">🔴 Diffus.</div>
  <div class="rounded p-2" style="background: #F8F8F8;">⚪ GAN</div>
  <div class="rounded p-2" style="background: #FFE3D6;">🔴 MoE</div>
  <div class="rounded p-2" style="background: #FFF8F4;">🟡 RL</div>
</div>

<br/>

<div class="text-center text-xs opacity-70 mb-2">Heatmap = deployment maturity on HK sites</div>

<div class="grid grid-cols-9 gap-1 text-center text-2xs">
  <div class="rounded p-2 text-white" style="background: #FF6B35;">YOLO</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">LSTM</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">GPT</div>
  <div class="rounded p-2" style="background: #FFC2A0;">Mamba</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">Swin</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">SD3</div>
  <div class="rounded p-2" style="background: #FFC2A0;">StyleGAN</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">Mixtral</div>
  <div class="rounded p-2" style="background: #FFC2A0;">RLHF</div>
</div>

<br/>

<div class="text-xs opacity-60">
  Core layer governs <em>how</em> AI thinks. 6 of 9 are already
  🔴 production on at least one HK contractor.
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-002B · v1</div>

# The 28 Paradigms — Application Layer (Part 1)

<div class="grid grid-cols-5 gap-1 text-center text-xs">
  <div class="rounded p-2 text-white" style="background: #FF6B35;">LLM</div>
  <div class="rounded p-2" style="background: #FFC2A0;">SLM</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">MLLM</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">VLM</div>
  <div class="rounded p-2" style="background: #FFC2A0;">VLA</div>
  <div class="rounded p-2" style="background: #FFC2A0;">SAM</div>
  <div class="rounded p-2" style="background: #FFC2A0;">TTS</div>
  <div class="rounded p-2" style="background: #FFC2A0;">STT</div>
  <div class="rounded p-2" style="background: #FFC2A0;">World</div>
  <div class="rounded p-2 text-white" style="background: #FF6B35;">Agent</div>
</div>

<div class="grid grid-cols-2 gap-3 mt-4 text-xs">
  <div class="rounded-lg p-2" style="background: #FFF8F4;"><strong style="color: #FF6B35;">🔴 LLM</strong> — contract review, safety SOP Q&A</div>
  <div class="rounded-lg p-2" style="background: #FFF8F4;"><strong style="color: #FF6B35;">🔴 MLLM</strong> — unified image+text+voice in GPT-4o, Gemini</div>
  <div class="rounded-lg p-2" style="background: #FFF8F4;"><strong style="color: #FF6B35;">🔴 VLM</strong> — incident description from CCTV frame</div>
  <div class="rounded-lg p-2" style="background: #FFF8F4;"><strong style="color: #FF6B35;">🔴 Agent/MCP</strong> — automated ticket + alert dispatch</div>
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-002C · v1</div>

# The 28 Paradigms — Application Layer (Part 2)

<div class="grid grid-cols-4 gap-1 text-center text-xs">
  <div class="rounded p-2" style="background: #FFC2A0;">RAG</div>
  <div class="rounded p-2" style="background: #B8E6C8;">LAM</div>
  <div class="rounded p-2" style="background: #B8E6C8;">LCM</div>
  <div class="rounded p-2" style="background: #FFC2A0;">OCR</div>
  <div class="rounded p-2" style="background: #FFC2A0;">Code AI</div>
  <div class="rounded p-2" style="background: #FFC2A0;">Audio</div>
  <div class="rounded p-2" style="background: #FFC2A0;">3DGS</div>
  <div class="rounded p-2" style="background: #FFC2A0;">GNN</div>
  <div class="rounded p-2" style="background: #FFC2A0;">RecSys</div>
  <div class="rounded p-2" style="background: #FFC2A0;">Anomaly</div>
  <div class="rounded p-2" style="background: #B8E6C8;">SSL</div>
  <div class="rounded p-2" style="background: #FFC2A0;">KD</div>
</div>

<br/>

<div class="rounded-lg p-3" style="background: #FFF8F4;">
  <div class="text-xs uppercase mb-1" style="color: #FF6B35;">High-ROI for HK contractors</div>
  <ul class="text-sm">
    <li><strong>RAG</strong> — query HK Buildings Ordinance + safety manual on WhatsApp</li>
    <li><strong>OCR/Doc AI</strong> — digitise drawings, invoices, contracts</li>
    <li><strong>3DGS</strong> — monthly site photogrammetry, progress vs BIM</li>
    <li><strong>Anomaly</strong> — structural health monitoring from sensor streams</li>
  </ul>
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-003 · v1</div>

# Top 6 High-ROI for HK Contractors

<div class="grid grid-cols-3 gap-3 pt-2">
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">1</div>
    <div class="text-base"><strong>CNN + ViT</strong></div>
    <div class="text-xs opacity-90">PPE detection, defect ID</div>
    <div class="text-xs mt-2">▼ 62% violations (LTA)</div>
  </div>
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">2</div>
    <div class="text-base"><strong>VLM</strong></div>
    <div class="text-xs opacity-90">CCTV → human description</div>
    <div class="text-xs mt-2">▼ review time per incident</div>
  </div>
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">3</div>
    <div class="text-base"><strong>LLM RAG</strong></div>
    <div class="text-xs opacity-90">Regulation & SOP Q&A</div>
    <div class="text-xs mt-2">▼ legal-cost risk</div>
  </div>
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">4</div>
    <div class="text-base"><strong>Agent / MCP</strong></div>
    <div class="text-xs opacity-90">Auto-routing + escalation</div>
    <div class="text-xs mt-2">▼ ops team headcount</div>
  </div>
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">5</div>
    <div class="text-base"><strong>Anomaly TS</strong></div>
    <div class="text-xs opacity-90">Tower-crane + SHM</div>
    <div class="text-xs mt-2">▼ unplanned downtime</div>
  </div>
  <div class="rounded-lg p-3" style="background: linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%); color: white;">
    <div style="font-size: 32px;">6</div>
    <div class="text-base"><strong>Tabular ML</strong></div>
    <div class="text-xs opacity-90">Cost / risk prediction</div>
    <div class="text-xs mt-2">▲ margin on bid stage</div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-28P-004 · v1</div>

# Our Existing CCTV POC — How It Maps

<div class="grid grid-cols-2 gap-6 pt-4">
  <div>
    <div class="rounded p-2 mb-2" style="background: #FFE3D6; font-family: monospace; font-size: 11px;">
      [Camera] → [Frigate YOLO] → [MQTT] → [Bridge] → [n8n] → [Telegram]
    </div>
    <table class="text-xs">
      <thead><tr><th>Pipeline stage</th><th>Paradigm</th></tr></thead>
      <tbody>
        <tr><td>Object detection</td><td><strong style="color: #FF6B35;">CNN (YOLO)</strong></td></tr>
        <tr><td>Event description</td><td><strong style="color: #FF6B35;">VLM</strong> (next)</td></tr>
        <tr><td>Routing rules</td><td><strong style="color: #FF6B35;">Agent</strong></td></tr>
        <tr><td>Semantic reasoning</td><td><strong style="color: #FF6B35;">LLM</strong> (planned)</td></tr>
        <tr><td>Historical lookup</td><td><strong style="color: #FF6B35;">RAG</strong> (planned)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="flex items-center justify-center">
    <img src="https://images.unsplash.com/photo-1517089152318-42ec003532d1?w=600&q=80" class="rounded-lg shadow-xl" />
  </div>
</div>

<div class="text-xs opacity-60 mt-4">
  Already on the right path. Three "planned" rows are the next 90 days.
</div>

---

<div class="cl-footer-ref">CL26Q3-ACT-001 · v1</div>

# Section 3<br/>Your Action Plan

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center;">
    <div style="font-size: 80px;">✅</div>
    <h1 style="color: white; font-size: 56px; margin-top: 24px;">Action Plan</h1>
    <div style="opacity: 0.85; margin-top: 12px;">From research to first production deployment</div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-ACT-002 · v1</div>

# Three Paths — And Our Recommendation

<div class="grid grid-cols-3 gap-3 pt-2">
  <div class="rounded-lg p-3" style="border: 2px solid #F8F8F8;">
    <div class="text-xs uppercase" style="color: #FF6B35;">Path A</div>
    <div class="text-lg"><strong>Immediate ROI</strong></div>
    <ul class="text-xs mt-2">
      <li>CNN + ViT (defect ID)</li>
      <li>VLM (incident description)</li>
      <li>LLM RAG (regulation Q&A)</li>
      <li>Anomaly time-series</li>
    </ul>
    <div class="text-xs mt-3" style="color: #999;">1 month · HK$3-5k/mo</div>
  </div>
  <div class="rounded-lg p-3" style="border: 2px solid #FF6B35;">
    <div class="text-xs uppercase" style="color: #FF6B35;">Path B — recommended</div>
    <div class="text-lg"><strong>Add visual pitch</strong></div>
    <ul class="text-xs mt-2">
      <li>Everything in A</li>
      <li>+ Diffusion (design)</li>
      <li>+ 3DGS (digital twin)</li>
    </ul>
    <div class="text-xs mt-3" style="color: #999;">2 months · HK$5-7k/mo</div>
  </div>
  <div class="rounded-lg p-3" style="border: 2px solid #F8F8F8;">
    <div class="text-xs uppercase" style="color: #FF6B35;">Path C</div>
    <div class="text-lg"><strong>Full AI ops demo</strong></div>
    <ul class="text-xs mt-2">
      <li>Everything in B</li>
      <li>+ Agent/MCP full auto</li>
      <li>+ SLM offline bot</li>
    </ul>
    <div class="text-xs mt-3" style="color: #999;">3-4 months · HK$10-15k/mo</div>
  </div>
</div>

<br/>

<div class="rounded-lg p-3" style="background: #FFE3D6;">
  <strong>Our pick: Path B.</strong>
  Reason: A is too conservative for 2026; C burns runway. B is the
  "show, don't tell" path that pays for itself by month 3.
</div>

---

<div class="cl-footer-ref">CL26Q3-END-001 · v1</div>

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center; max-width: 700px;">
    <h1 style="color: white; font-size: 64px;">Q&A</h1>
    <div class="mt-6 text-lg">Thank you — Discussion welcome</div>
    <div class="mt-12 text-sm opacity-75">
      Ref: <strong>CL26Q3</strong> · v1 · 2026-Q3<br/>
      Repo: <code>conai-cl26q3-deck</code><br/>
      Site: <code>cl26q3.loadingtechnology.app</code>
    </div>
    <div class="mt-8 text-xs opacity-60">
      loadingcloud001 · Construction AI Landscape 2026Q3
    </div>
  </div>
</div>
