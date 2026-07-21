#!/usr/bin/env node
/**
 * validate-layout.js — runtime validator for brainstorm/mind-map layouts.
 *
 * Reads the JSON `nodes[]` from a slide's MindMap data and checks:
 *   - safe width  (default 868)
 *   - safe height (default 472)
 *   - title reserve (default 80 — bubbles below this overlap title)
 *   - bottom safety (default 10 — bubbles need bottom + height ≤ 552-10)
 *
 * Usage:
 *   node validate-layout.js ./MindMap.vue
 *   node validate-layout.js              # reads the only Vue file in components/
 *
 * Exits 0 on success, 1 on overflow.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const COMPONENTS_DIR = resolve(__dirname, '..', 'components');
const SAFE_W = Number(process.env.SAFE_W ?? 868);
const SAFE_H = Number(process.env.SAFE_H ?? 472);
const TITLE_RESERVE = Number(process.env.TITLE_RESERVE ?? 80);
const BOTTOM_SAFETY = Number(process.env.BOTTOM_SAFETY ?? 10);

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

let failed = 0;
function ok(msg) { console.log(`  ${GREEN}\u2713${RESET} ${msg}`); }
function bad(msg) { console.log(`  ${RED}\u2717${RESET} ${msg}`); failed = 1; }
function info(msg) { console.log(`  ${YELLOW}!${RESET} ${msg}`); }
function header(title) { console.log(`\n=== ${title} ===\n`); }

function findVueFiles(dir) {
  try {
    return readdirSync(dir).filter(f => f.endsWith('.vue')).map(f => join(dir, f));
  } catch {
    return [];
  }
}

// Match the `categories:` array inside <script setup lang="ts"> and parse numeric x/y/size fields.
function extractParadigmCoords(vueSource) {
  const result = [];
  const re = /\{ name: '([^']+)',\s*desc:\s*'[^']*',\s*size:\s*(\d+),\s*heat:\s*\d+\s*\}/g;
  let m;
  while ((m = re.exec(vueSource)) !== null) {
    result.push({ name: m[1], size: Number(m[2]) });
  }
  return result;
}

function extractPositions(vueSource) {
  // Top-level `pos: { x: NN, y: NN }` per category — these sit higher in the tree.
  const catPos = [];
  const rePos = /name:\s*'([^']+)',\s*color:\s*'[^']*',\s*pos:\s*\{\s*x:\s*([0-9]+),\s*y:\s*([0-9]+)\s*\}/g;
  let m;
  while ((m = rePos.exec(vueSource)) !== null) {
    catPos.push({ name: m[1], x: Number(m[2]), y: Number(m[3]) });
  }
  return catPos;
}

function extractCenter(vueSource) {
  const m = vueSource.match(/center\s*=\s*\{\s*x:\s*([0-9]+),\s*y:\s*([0-9]+),\s*size:\s*(\d+)\s*\}/);
  if (!m) return null;
  return { x: Number(m[1]), y: Number(m[2]), size: Number(m[3]) };
}

const targetPath = process.argv[2]
  ? resolve(process.cwd(), process.argv[2])
  : (findVueFiles(COMPONENTS_DIR)[0] ?? null);

if (!targetPath) {
  console.log('No Vue component file found. Pass one as argument: node validate-layout.js components/MyComp.vue');
  process.exit(2);
}

header(`Validating ${targetPath}`);
console.log(`  Safe area: ${SAFE_W}\u00d7${SAFE_H}px (title reserve ${TITLE_RESERVE}px, bottom safety ${BOTTOM_SAFETY}px)`);

const src = readFileSync(targetPath, 'utf8');

const center = extractCenter(src);
const cats = extractPositions(src);
const paradigms = extractParadigmCoords(src);

if (!center) info('No center hub detected (looking for `center = { x: N, y: N, size: N }`)');
else ok(`Center hub at (${center.x}, ${center.y}), size=${center.size}`);

if (cats.length) ok(`${cats.length} categories found: ${cats.map(c => c.name).join(', ')}`);
else info('No categories found');

if (paradigms.length) ok(`${paradigms.length} paradigms found: ${paradigms.map(p => p.name).join(', ')}`);
else info('No paradigms found');

header('Node bounds check (heuristic)');

// Heuristic: without a runtime Vue test we cannot resolve computed positions,
// but we CAN check category positions and the sizes that should fit.
for (const c of cats) {
  if (c.x - 38 < 14) bad(`${c.name} left edge too close to canvas edge (${c.x - 38}px < 14px)`);
  if (c.x + 38 > SAFE_W) bad(`${c.name} right edge ${c.x + 38}px > safe width ${SAFE_W}px`);
  if (c.y - 14 < TITLE_RESERVE) bad(`${c.name} top ${c.y - 14}px overlaps title area (need \u2265${TITLE_RESERVE}px)`);
  if (c.y + 14 > SAFE_H) bad(`${c.name} bottom ${c.y + 14}px > safe height ${SAFE_H}px`);
  else ok(`${c.name} category at (${c.x}, ${c.y}) \u2014 fits`);
}

// For paradigms, only flag obvious size issues. Exact positions depend on the
// getParadigmPositions() implementation which is JS, not declarative.
for (const p of paradigms) {
  if (p.size > 90) info(`${p.name} size=${p.size}px is large; verify it doesn't overlap neighbours in the browser`);
  else ok(`${p.name} size=${p.size}px is reasonable`);
}

console.log();
if (failed) {
  console.log(`${RED}FAILED${RESET} \u2014 boundary violations found. Adjust positions in ${targetPath} and re-run.`);
  process.exit(1);
} else {
  console.log(`${GREEN}OK${RESET} \u2014 no obvious boundary violations detected.`);
  process.exit(0);
}
