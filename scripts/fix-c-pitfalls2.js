'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');
function extractYicuo(an) {
  const m = String(an).match(/【易错】([\s\S]*?)(?=\n?【|$)/);
  if (!m) return [];
  return m[1].split(/[；;。]/).map((s) => s.replace(/^\d+[.、)）]\s*/, '').trim()).filter((s) => s.length >= 4).slice(0, 3);
}
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));
for (const q of questions) {
  if (q.subject === 'C语言程序设计' && (q.pitfalls || []).join(' ').indexOf('5/2=2不是2.5') >= 0) {
    const ys = extractYicuo(q.analysis);
    q.pitfalls = ys.length ? ys : ['把 sizeof 相关的类型大小记混'];
    console.log('fix', q.id, JSON.stringify(q.pitfalls));
  }
}
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('done');
