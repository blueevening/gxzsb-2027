'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));
let n = 0;
for (const q of questions) {
  if (q.subject !== '英语') continue;
  if (/书面表达|写一封|写短文|以\s*[“"'].+[”"']\s*为题|介绍你的|My Plan/.test(String(q.stem)) && q.chapter !== 'ch-en-4') {
    q.chapter = 'ch-en-4';
    n++;
    console.log('→写作', q.id, String(q.stem).slice(0, 30));
  }
}
console.log('moved', n);
const en = {};
questions.filter((q) => q.subject === '英语').forEach((q) => { en[q.chapter] = (en[q.chapter] || 0) + 1; });
console.log('英语分布', en);
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
