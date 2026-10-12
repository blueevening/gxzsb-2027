const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const major = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'major-questions.json'), 'utf8'));

const cross = {};
for (const q of major) {
  const k = `${q.type}|${q.typeLabel}`;
  cross[k] = (cross[k] || 0) + 1;
}
console.log('type|typeLabel', cross);

const broken = major.filter((q) => q.broken);
const examExclude = major.filter((q) => q.examExclude);
console.log('broken', broken.length, broken.map((q) => q.id + ':' + q.type).join(','));
console.log('examExclude', examExclude.length, examExclude.map((q) => q.id + ':' + q.type + ':' + q.subject).join(','));

const chapKp = {};
for (const q of major) {
  const k = `${q.subject}|${q.chapter}|${q.knowledgePoint}`;
  chapKp[k] = (chapKp[k] || 0) + 1;
}
const entries = Object.entries(chapKp).sort();
for (const [k, v] of entries) console.log(k, v);

const fills = major.filter((q) => q.type === 'fill' || q.type === 'blank' || q.typeLabel === '填空');
console.log('\nFILL-LIKE', fills.length);
const bySubFill = {};
for (const q of fills) {
  bySubFill[q.subject] = (bySubFill[q.subject] || 0) + 1;
}
console.log(bySubFill);
for (const q of fills) {
  console.log(q.id, q.subject, q.type, q.chapter, q.difficulty, String(q.stem).replace(/\s+/g, ' ').slice(0, 80));
}

const groups = (q) => {
  if (q.type === 'single' || q.type === 'choice') return 'SC';
  if (q.type === 'judge') return 'J';
  if (q.type === 'fill' || q.type === 'blank') return 'F';
  if (q.type === 'calc' || q.type === 'apply') return 'C';
  return q.type;
};
const dist = {};
for (const q of major) {
  const k = `${q.subject}|${groups(q)}|d${q.difficulty}`;
  dist[k] = (dist[k] || 0) + 1;
}
console.log('\nsubject|group|diff');
for (const [k, v] of Object.entries(dist).sort()) console.log(k, v);

const withScore = major.filter((q) => q.score != null);
console.log('withScore', withScore.length);

function norm(s) {
  return String(s).replace(/\s+/g, '').replace(/[，。；：、（）()[\]【】"'']/g, '').toLowerCase();
}
const byNorm = {};
for (const q of major) {
  const n = norm(q.stem);
  (byNorm[n] = byNorm[n] || []).push(q.id + '|' + q.type);
}
const dups = Object.entries(byNorm).filter(([, ids]) => ids.length > 1);
console.log('exact-normalized stem dups', dups.length);
for (const [n, ids] of dups.slice(0, 40)) {
  console.log(ids.join(','), '=>', n.slice(0, 70));
}

// calc/apply inventory
const calcs = major.filter((q) => q.type === 'calc' || q.type === 'apply');
console.log('\nCALC-LIKE', calcs.length);
for (const q of calcs) {
  console.log(q.id, q.subject, q.type, q.chapter, q.difficulty, String(q.stem).replace(/\s+/g, ' ').slice(0, 90));
}
