const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
process.chdir(root);

const allRefs = new Set();

// boot.js: DATA_SCRIPTS and dynamic src
const boot = fs.readFileSync('boot.js','utf8');
const srcRe = /src:\s*"([^"]+\.js)"/g;
let m;
while ((m = srcRe.exec(boot))) allRefs.add(m[1]);

// boot.js: dynamic script src strings
const dynRe = /\.src\s*=\s*"([^"]+\.js)/g;
while ((m = dynRe.exec(boot))) allRefs.add(m[1]);

// app.js: any .js file references
const app = fs.readFileSync('app.js','utf8');
const appRe = /["']([a-zA-Z0-9_\-\/]+\.js)["']/g;
while ((m = appRe.exec(app))) allRefs.add(m[1]);

// sw.js: cache list
const sw = fs.readFileSync('sw.js','utf8');
const swRe = /["']([^"']+\.(?:js|css|html|png|webmanifest|json))["']/g;
while ((m = swRe.exec(sw))) {
  const f = m[1];
  if (!f.startsWith('http') && !f.startsWith('blob') && !f.startsWith('/') && !f.includes('?')) allRefs.add(f);
}

// index.html
const html = fs.readFileSync('index.html','utf8');
const htmlRe = /(?:src|href)="([^"]+)"/g;
while ((m = htmlRe.exec(html))) {
  const f = m[1];
  if (!f.startsWith('http') && !f.startsWith('#') && !f.startsWith('?') && !f.startsWith('data:')) allRefs.add(f);
}

console.log('=== Referenced files ===');
const missing = [];
[...allRefs].sort().forEach(f => {
  const exists = fs.existsSync(f);
  console.log((exists ? '  OK ' : ' MISS ') + f);
  if (!exists) missing.push(f);
});

console.log('\n=== All actual root files ===');
fs.readdirSync('.').filter(f => fs.statSync(f).isFile()).sort().forEach(f => {
  const kb = Math.round(fs.statSync(f).size/1024);
  console.log('  ' + f + ' (' + kb + 'KB)');
});

console.log('\nMissing: ' + (missing.length ? missing.join(', ') : 'none'));
