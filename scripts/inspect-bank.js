const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const s = fs.readFileSync(path.join(root, 'all-bank.js'), 'utf8');
const prefix = 'window.STUDY_DATA=Object.assign(window.STUDY_DATA||{},';
if (!s.startsWith(prefix)) throw new Error('prefix mismatch');
const start = prefix.length;
// find matching close paren for Object.assign(...);
let depth = 1; // already inside Object.assign(
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
    if (depth === 0) { end = i; break; }
  }
}
if (end < 0) throw new Error('no end');
const jsonText = s.slice(start, end); // includes leading { ... }
const obj = JSON.parse(jsonText);
console.log('keys', Object.keys(obj));
console.log('questions', obj.questions.length);
const qs = obj.questions;
const bySub = {};
const byType = {};
const bySubType = {};
const byChap = {};
for (const q of qs) {
  const sub = q.subject || '?';
  const ty = q.type || '?';
  bySub[sub] = (bySub[sub] || 0) + 1;
  byType[ty] = (byType[ty] || 0) + 1;
  const k = sub + '|' + ty;
  bySubType[k] = (bySubType[k] || 0) + 1;
  const ch = q.chapter || '?';
  byChap[ch] = (byChap[ch] || 0) + 1;
}
console.log('bySub', bySub);
console.log('byType', byType);
console.log('bySubType', bySubType);
console.log('byChap', byChap);
// field keys present
const fieldCount = {};
for (const q of qs) for (const k of Object.keys(q)) fieldCount[k] = (fieldCount[k] || 0) + 1;
console.log('fields', fieldCount);
// sample one of each type for major subjects
const major = qs.filter((q) => q.module === 'major' || ['电工电子技术基础', 'C语言程序设计', '计算机网络基础'].includes(q.subject));
console.log('major count', major.length);
const samples = {};
for (const q of major) {
  const k = q.subject + '|' + q.type;
  if (!samples[k]) samples[k] = q;
}
for (const k of Object.keys(samples)) {
  const q = samples[k];
  console.log('---', k, q.id);
  console.log(JSON.stringify({ id: q.id, type: q.type, stem: q.stem, options: q.options, answer: q.answer, accept: q.accept, chapter: q.chapter, knowledgePoint: q.knowledgePoint, difficulty: q.difficulty, typeLabel: q.typeLabel }, null, 1).slice(0, 600));
}
// id prefixes
const idPref = {};
for (const q of qs) {
  const p = String(q.id).replace(/[0-9]+$/, '');
  idPref[p] = (idPref[p] || 0) + 1;
}
console.log('id prefixes', idPref);
// dump major question index: id, subject, type, chapter, difficulty, stem first 40
const lines = [];
for (const q of major) {
  lines.push([q.id, q.subject, q.type, q.chapter, q.knowledgePoint, q.difficulty, String(q.stem).slice(0, 50).replace(/\s+/g, ' ')].join('\t'));
}
fs.writeFileSync(path.join(root, 'scripts', 'major-index.tsv'), lines.join('\n'), 'utf8');
console.log('wrote major-index.tsv', lines.length);
// also dump full major questions as JSON for selection work
fs.writeFileSync(path.join(root, 'scripts', 'major-questions.json'), JSON.stringify(major, null, 0), 'utf8');
console.log('wrote major-questions.json');
