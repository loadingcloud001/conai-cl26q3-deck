# conai-cl26q3-deck

**Ref:** `CL26Q3` · **Version:** v1 · **Built:** 2026-Q3
**Author:** loadingcloud001
**Site:** [cl26q3.loadingtechnology.app](https://cl26q3.loadingtechnology.app)

## Construction AI Landscape 2026Q3

> 28 AI Paradigms × The Building Site

A Slidev presentation deck for colleagues explaining how mainstream AI
paradigms map to real construction-industry use cases.

## Quick reference

| Item          | Value                              |
|---------------|------------------------------------|
| Deck file     | `slides.md`                        |
| Ref prefix    | `CL26Q3`                           |
| Cloudflare    | Worker `conai-cl26q3`              |
| Custom domain | `cl26q3.loadingtechnology.app`     |
| Slide count   | 17                                 |
| Theme         | Orange `#FF6B35` + White           |

## Local development

```bash
npm install
npm run dev          # http://localhost:3030
npm run build        # produces dist/
```

## Deployment

Push to `main` → Cloudflare auto-builds via `wrangler.jsonc` config.
The `postbuild` hook removes the Slidev-generated `dist/_redirects`
that conflicts with Cloudflare's asset upload (100324).

## Slidev refs

- Slide IDs follow `CL26Q3-<SECTION>-<NNN>`
- Sections: COV · AGD · WHY · VLM · 28P · ACT · END
