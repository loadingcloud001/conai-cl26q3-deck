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
</style>

<div class="cl-footer-ref">CL26Q3-COV-001 · v2</div>

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center; max-width: 900px; padding: 0 24px;">
    <div style="font-size: 14px; letter-spacing: 6px; opacity: 0.85;">CL26Q3 · 2026-Q3</div>
    <h1 style="color: white; font-size: 72px; margin-top: 24px; line-height: 1.05;">Construction AI<br/>Application</h1>
    <div style="font-size: 26px; margin-top: 18px; opacity: 0.95;">Main AI Introduction</div>
    <div style="margin-top: 48px; font-size: 16px; opacity: 0.85;">
      Charles Lo · Construction Industry Briefing
    </div>
    <div style="margin-top: 32px;">
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
  15 slides · ~15 minutes · Q&amp;A friendly
</div>

---

<div class="cl-footer-ref">CL26Q3-WHY-001 · v2</div>

# Why AI Matters for Construction

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2 class="text-2xl">Four hard numbers</h2>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">40%</div>
      <div class="text-sm">of construction projects finish over budget <span style="opacity: 0.5;">*</span></div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">62%</div>
      <div class="text-sm">PPE-violation drop after AI monitoring (LTA Singapore)</div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">80%</div>
      <div class="text-sm">of project data is unstructured (photos, forms, drawings)</div>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-3xl" style="color: #FF6B35;">3×</div>
      <div class="text-sm">skilled-labour shortage impact in HK since 2020 <span style="opacity: 0.5;">*</span></div>
    </div>
    <div class="est-note">* estimates — final figures to be confirmed with HK industry data</div>
  </div>
  <div>
    <h2 class="text-2xl">Hong Kong policy backdrop</h2>
    <br/>
    <div class="rounded-lg p-3 mb-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Development Bureau · DEVB</div>
      <p class="text-sm mt-1">
        Construction 2.0 initiative and the smart-site subsidies
        explicitly call for digital monitoring, AI-assisted site
        supervision, and BIM-driven compliance — making AI
        procurement-eligible, not optional.
      </p>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">4S Site Supervision Spec</div>
      <p class="text-sm mt-1">
        The Site Supervision System (4S) requires digital logs of
        supervision, photo evidence, and structured handover. AI
        fits naturally as the "first-pass reviewer" before a human
        RE signs off.
      </p>
    </div>
    <p class="est-note">
      Figures paraphrased from public DevB / DEVB TC(W) papers;
      to be checked against the latest circular before the talk.
    </p>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-AI101-001 · v2</div>

# AI 101 — How We Got Here

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2 class="text-2xl">History in seven dates</h2>
    <br/>
    <div class="text-sm">
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">1956</strong> · Dartmouth workshop — "Artificial Intelligence" is named
      </div>
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">1997</strong> · Deep Blue beats Kasparov — rule-driven AI peaks
      </div>
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">2012</strong> · AlexNet wins ImageNet — deep learning takes over vision
      </div>
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">2017</strong> · "Attention is all you need" — the Transformer paper
      </div>
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">2020</strong> · ViT — vision becomes a token problem
      </div>
      <div class="rounded p-2 mb-1" style="background: #FFF8F4;">
        <strong style="color: #FF6B35;">2022</strong> · ChatGPT — LLMs become a daily tool
      </div>
      <div class="rounded p-2" style="background: #FFE3D6;">
        <strong style="color: #FF6B35;">2024–2026</strong> · Vision + Language merge inside one model
      </div>
    </div>
  </div>
  <div>
    <h2 class="text-2xl">Three classifications today</h2>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Discriminative</div>
      <p class="text-sm mt-1">
        <strong>Learns a boundary.</strong> "Is this a hardhat?"
        CNN, ViT, anomaly detection. The workhorse on cameras.
      </p>
    </div>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Generative</div>
      <p class="text-sm mt-1">
        <strong>Learns the data distribution.</strong> Diffusion, LLMs.
        They <em>produce</em> — images, text, audio, code.
      </p>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Multimodal</div>
      <p class="text-sm mt-1">
        <strong>Sees and speaks.</strong> VLM, MLLM, agent loops.
        The category reshaping 2024–2026 — and the one we focus on.
      </p>
    </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-BIG5-001 · v2</div>

# The Big Five Paradigms

<div class="grid grid-cols-5 gap-3 pt-6 text-center">
  <div class="rounded-lg p-3" style="background: #FFF8F4;">
    <div style="font-size: 40px;">🧱</div>
    <div class="text-base mt-1" style="color: #FF6B35;"><strong>CNN</strong></div>
    <div class="text-xs opacity-70 mt-1">Pixel-to-label.<br/>YOLO still wins on CCTV.</div>
  </div>
  <div class="rounded-lg p-3" style="background: #FFF8F4;">
    <div style="font-size: 40px;">🧩</div>
    <div class="text-base mt-1" style="color: #FF6B35;"><strong>ViT</strong></div>
    <div class="text-xs opacity-70 mt-1">Image as tokens.<br/>The new backbone.</div>
  </div>
  <div class="rounded-lg p-3" style="background: #FFE3D6;">
    <div style="font-size: 40px;">🔗</div>
    <div class="text-base mt-1" style="color: #FF6B35;"><strong>VLM</strong></div>
    <div class="text-xs opacity-70 mt-1">Pixels ↔ words.<br/>The bridge.</div>
  </div>
  <div class="rounded-lg p-3" style="background: #FFE3D6;">
    <div style="font-size: 40px;">🧠</div>
    <div class="text-base mt-1" style="color: #FF6B35;"><strong>LLM</strong></div>
    <div class="text-xs opacity-70 mt-1">Central processor.<br/>Reads, routes, speaks.</div>
  </div>
  <div class="rounded-lg p-3" style="background: #FFF8F4;">
    <div style="font-size: 40px;">🎨</div>
    <div class="text-base mt-1" style="color: #FF6B35;"><strong>Diffusion</strong></div>
    <div class="text-xs opacity-70 mt-1">Denoise to image.<br/>The painter.</div>
  </div>
</div>

<div class="rounded-lg p-3 mt-6" style="background: #FFE3D6;">
  <p class="text-sm">
    <strong>The next six slides zoom in</strong> on the six application
    patterns these paradigms produce on a real building site — each
    one a slide, each one with a photo and a one-line ROI.
  </p>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-DIV · v2</div>

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center;">
    <div style="font-size: 80px;">🏗️</div>
    <h1 style="color: white; font-size: 56px; margin-top: 24px;">Trend AI in Construction</h1>
    <div style="opacity: 0.85; margin-top: 12px;">
      Six patterns — what they look like, what they cost, what they pay back
    </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-001 · v2</div>

# 1 · CNN + ViT — Vision on Site

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>See everything, miss nothing</h2>
    <br/>
    <p class="text-sm">
      Convolutional and Transformer backbones run on the camera feed
      itself. They detect PPE, vehicles, intrusion, and concrete
      cracks in real time — typically 100+ FPS on a single stream.
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">On site today</div>
      <ul class="text-sm mt-1">
        <li>Hardhat / vest / mask detection</li>
        <li>Person &amp; vehicle counting</li>
        <li>Danger-zone intrusion alerts</li>
        <li>Concrete crack &amp; spalling detection</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        ▼ 62% PPE violations (LTA Singapore, public data).
        Edge inference: a single NVR-grade GPU covers 16 streams.
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-cnn-vit.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-002 · v2</div>

# 2 · VLM — Image Meets Language

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>From pixels to paragraphs</h2>
    <br/>
    <p class="text-sm">
      A Vision-Language Model looks at the same CCTV frame your CNN
      flagged, then writes a sentence a supervisor can read:
      <em>"Worker #3 on level 5 missing hardhat, standing 1.2 m
      from unguarded edge."</em>
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Where it lands</div>
      <ul class="text-sm mt-1">
        <li>Incident description auto-drafted for the daily log</li>
        <li>Drawing QA — flag mismatches vs. the latest revision</li>
        <li>Photo-to-BIM asset tagging from site walk-arounds</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        Cuts per-incident review time by an order of magnitude;
        makes weekly reports writeable from the raw photo log.
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-vlm.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-003 · v2</div>

# 3 · LLM + RAG — Regulation &amp; SOP, On Tap

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>Ask the manual, get the clause</h2>
    <br/>
    <p class="text-sm">
      A Large Language Model connected to your building code,
      safety SOP, and contract via Retrieval-Augmented Generation
      becomes a 24/7 staff chatbot that cites the source paragraph.
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Where it lands</div>
      <ul class="text-sm mt-1">
        <li>HK Buildings Ordinance Q&amp;A on WhatsApp / Teams</li>
        <li>Safety SOP lookup at the gatehouse</li>
        <li>Contract clause retrieval during tender review</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        ▼ legal-cost risk from misread clauses. New-hire ramp
        time halved when the manual is conversational.
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-llm-rag.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-004 · v2</div>

# 4 · Agent / MCP — Let It Run

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>From answer to action</h2>
    <br/>
    <p class="text-sm">
      An Agent wraps the LLM with tools: it can open a ticket,
      send a Telegram alert, schedule a follow-up inspection, or
      update the BIM model. MCP is the standard wire format
      between models and those tools.
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Where it lands</div>
      <ul class="text-sm mt-1">
        <li>Auto-routing PPE alerts to the right supervisor</li>
        <li>Permit-status checks against the latest submission</li>
        <li>Material-delivery escalations to logistics</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        ▼ ops team headcount for after-hours triage. Same team,
        wider coverage, audit trail included.
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-agent.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-005 · v2</div>

# 5 · Diffusion + 3DGS — The Visual Pitch

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>Show, don't tell</h2>
    <br/>
    <p class="text-sm">
      Diffusion models generate renovation options from a single
      prompt; 3D Gaussian Splatting turns a phone-walk of the site
      into a photorealistic 3D twin. Together they turn weeks of
      render time into minutes.
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Where it lands</div>
      <ul class="text-sm mt-1">
        <li>Three-option facade pitch in the bid meeting</li>
        <li>Monthly site photogrammetry vs. BIM progress</li>
        <li>Virtual client walk-through before handover</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        Bid-win rate uplift and a single source of truth for
        progress claims.
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-diffusion-3dgs.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-TREND-006 · v2</div>

# 6 · Anomaly / Time-Series — Listen to the Structure

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <h2>The sensor stack that never sleeps</h2>
    <br/>
    <p class="text-sm">
      Recurrent and Transformer time-series models watch tower-crane
      load, tilt, vibration, and structural-strain sensors. They
      flag the deviation long before a human notices the noise
      pattern changed.
    </p>
    <br/>
    <div class="rounded-lg p-3 mb-2" style="background: #FFF8F4;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">Where it lands</div>
      <ul class="text-sm mt-1">
        <li>Structural health monitoring during lift &amp; pour</li>
        <li>Tower-crane predictive maintenance</li>
        <li>Concrete-cure and ambient-condition anomaly alerts</li>
      </ul>
    </div>
    <div class="rounded-lg p-3" style="background: #FFE3D6;">
      <div class="text-xs uppercase tracking-wide" style="color: #FF6B35;">ROI</div>
      <p class="text-sm mt-1">
        ▼ unplanned downtime. Insurance premium reductions on
        monitored lifts (carrier-specific).
      </p>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <img src="/images/trend-anomaly.jpg" class="rounded-lg shadow-xl" style="max-height: 360px;" />
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-BRN-001 · v2</div>

# Audience Brainstorm

<div class="text-sm opacity-70 mb-3">
  Drop your construction-AI use-case here. Anonymous. We read every one live.
</div>

<div class="grid grid-cols-2 gap-6 pt-2">
  <div>
    <div class="rounded-lg p-2 mb-2" style="background: #FFF8F4;">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeQl7nx662lbQKicww9TOcv7GDtGgpmjJp0G6Opi6C2Qn6nDA/viewform?embedded=true"
        width="100%" height="460" frameborder="0" marginheight="0" marginwidth="0"
        style="border: 1px solid #FFD7BE; border-radius: 8px; background: white;"
      >Loading…</iframe>
    </div>
    <div class="text-xs opacity-60 text-center">
      or scan the QR · short link
      <code>forms.gle/faQ5AJiXnqYGzQBHA</code>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="text-xs uppercase tracking-wide mb-2" style="color: #FF6B35;">
      Live response summary
    </div>
    <p class="text-sm text-center mb-5 opacity-80">
      As answers arrive, Charles will skim the live summary and call
      out themes worth a 30-second discussion.
    </p>
    <a
      href="https://docs.google.com/forms/d/1grv-OgPojBO09x6tQvZaKQyg7aWWUxAwcHlvTCUg4_w/viewanalytics"
      target="_blank" rel="noopener"
      class="orange-btn"
    >View live summary →</a>
    <div class="est-note text-center mt-3">
      Opens in a new tab · Google does not allow this page to be embedded
    </div>
  </div>
</div>

---

<div class="cl-footer-ref">CL26Q3-END-001 · v2</div>

<div class="section-divider absolute inset-0 flex flex-col items-center justify-center">
  <div style="color: white; text-align: center; max-width: 700px;">
    <h1 style="color: white; font-size: 64px;">Q&amp;A</h1>
    <div class="mt-6 text-lg">Thank you — Discussion welcome</div>
    <div class="mt-12 text-sm opacity-75">
      Ref: <strong>CL26Q3</strong> · v2 · 2026-Q3<br/>
      Repo: <code>conai-cl26q3-deck</code><br/>
      Site: <code>cl26q3.loadingtechnology.app</code>
    </div>
    <div class="mt-8 text-xs opacity-60">
      Charles Lo · Construction AI Application
    </div>
  </div>
</div>