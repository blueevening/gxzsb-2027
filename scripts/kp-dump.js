const fs = require('fs');
const path = require('path');
const major = JSON.parse(fs.readFileSync(path.join(__dirname, 'major-questions.json'), 'utf8'));

// Dump unique knowledge points per subject with counts and sample stems
const map = {};
for (const q of major) {
  const k = q.subject + '||' + q.knowledgePoint;
  if (!map[k]) map[k] = { n: 0, sample: q.stem, chapter: q.chapter };
  map[k].n++;
}
const bySub = {};
for (const [k, v] of Object.entries(map)) {
  const [sub, kp] = k.split('||');
  (bySub[sub] = bySub[sub] || []).push({ kp, ...v });
}
for (const sub of Object.keys(bySub)) {
  console.log('\n====', sub, 'KPs', bySub[sub].length);
  for (const e of bySub[sub].sort((a, b) => b.n - a.n)) {
    console.log(e.n, e.chapter, e.kp, '|', String(e.sample).slice(0, 40));
  }
}
