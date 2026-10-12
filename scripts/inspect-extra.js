const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const s = fs.readFileSync(path.join(root, 'all-bank.js'), 'utf8');
const prefix = 'window.STUDY_DATA=Object.assign(window.STUDY_DATA||{},';
const start = prefix.length;
let depth = 1;
let inStr = false;
let esc = false;
let end = -1;
for (let i = start; i < s.length; i++) {
  const ch = s[i];
  if (inStr) {
    if (esc) esc = false;
    else if (ch === '\\') esc = true;
    else if (ch === '"') inStr = false;
    continue;
  }
  if (ch === '"') inStr = true;
  else if (ch === '(' || ch === '{' || ch === '[') depth++;
  else if (ch === ')' || ch === '}' || ch === ']') {
    depth--;
    if (depth === 0) {
      end = i;
      break;
    }
  }
}
const obj = JSON.parse(s.slice(start, end));

console.log('VARIANTS keys sample', Object.keys(obj.VARIANTS || {}).slice(0, 20), 'count', Object.keys(obj.VARIANTS || {}).length);
const vk = Object.keys(obj.VARIANTS || {});
let vFill = 0;
let vMajor = 0;
for (const k of vk) {
  const arr = obj.VARIANTS[k];
  if (!Array.isArray(arr)) continue;
  for (const q of arr) {
    vMajor++;
    if (q.type === 'fill' || q.typeLabel === '填空') vFill++;
  }
}
console.log('VARIANTS items', vMajor, 'fill-like', vFill);
// sample variant
console.log('sample variant', JSON.stringify(obj.VARIANTS[vk[0]], null, 1).slice(0, 500));

console.log('mockPapers', Array.isArray(obj.mockPapers) ? obj.mockPapers.length : typeof obj.mockPapers);
if (Array.isArray(obj.mockPapers) && obj.mockPapers[0]) {
  console.log('mock0 keys', Object.keys(obj.mockPapers[0]));
  console.log(JSON.stringify(obj.mockPapers[0]).slice(0, 400));
}
console.log('schoolAssets', typeof obj.schoolAssets, Array.isArray(obj.schoolAssets) ? obj.schoolAssets.length : '');
console.log('EXAM_PLANS', typeof obj.EXAM_PLANS);

// check if any major calc has fill-like stem (______)
const qs = obj.questions.filter((q) => ['电工电子技术基础', 'C语言程序设计', '计算机网络基础'].includes(q.subject));
const calcFillLike = qs.filter((q) => (q.type === 'calc' || q.type === 'apply') && /______/.test(q.stem));
console.log('calc with blank line', calcFillLike.length);
for (const q of calcFillLike) console.log(q.id, q.type, String(q.stem).replace(/\s+/g, ' ').slice(0, 100));

// also choice/single with ______
const scBlank = qs.filter((q) => (q.type === 'single' || q.type === 'choice') && /______/.test(q.stem));
console.log('SC with blank', scBlank.length);

// unique answers / accept issues for fills
const fills = qs.filter((q) => q.type === 'fill');
for (const q of fills) {
  const issues = [];
  if (!q.answer) issues.push('no-answer');
  if (!q.accept || !q.accept.length) issues.push('no-accept');
  if (!q.stem || q.stem.length < 5) issues.push('short-stem');
  if (issues.length) console.log('FILL issue', q.id, issues.join(','), q.stem);
}
