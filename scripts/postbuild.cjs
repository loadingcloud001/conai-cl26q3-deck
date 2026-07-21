// Post-build hook for Slidev → Cloudflare Pages
// Creates dist/_redirects with SPA fallback so deep links like /22 work.
const fs = require('fs');
const path = require('path');

const out = path.resolve(__dirname, '..', 'dist', '_redirects');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, '/*    /index.html   200\n');
console.log(`[postbuild] wrote SPA fallback → ${out}`);
