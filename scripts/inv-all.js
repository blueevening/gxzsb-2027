const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const s = fs.readFileSync(path.join(root, 'all-bank.js'), 'utf8');
const prefix = 'window.STUDY_DATA=Object.assign(window.STUDY_DATA||{},';
if (!s.startsWith(prefix)) throw new Error('prefix mismatch');
const start = prefix.length;
let depth = 1, inStr = false, esc = false, end = -1;
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
const obj = JSON.parse(s.slice(start, end));
console.log('keys', Object.keys(obj));
const qs = obj.questions;
console.log('total', qs.length);
const bySub = {}, byST = {}, byMod = {}, byType = {};
for (const q of qs) {
  const sub = q.subject || '?';
  const ty = q.type || '?';
  bySub[sub] = (bySub[sub] || 0) + 1;
  byST[sub + '|' + ty] = (byST[sub + '|' + ty] || 0) + 1;
  byMod[q.module || '?'] = (byMod[q.module || '?'] || 0) + 1;
  byType[ty] = (byType[ty] || 0) + 1;
}
console.log('byMod', byMod);
console.log('bySub', bySub);
console.log('byType', byType);
console.log('byST', byST);
const idPref = {};
for (const q of qs) {
  const p = String(q.id).replace(/[0-9]+$/, '');
  idPref[p] = (idPref[p] || 0) + 1;
}
console.log('idPref', idPref);
// fields
const fieldCount = {};
for (const q of qs) for (const k of Object.keys(q)) fieldCount[k] = (fieldCount[k] || 0) + 1;
console.log('fields', fieldCount);
// fills across all
const fills = qs.filter(q => q.type === 'fill' || q.type === 'blank' || q.typeLabel === '填空');
console.log('fills all', fills.length);
const fillSub = {};
for (const q of fills) fillSub[q.subject || q.module] = (fillSub[q.subject || q.module] || 0) + 1;
console.log('fillSub', fillSub);
