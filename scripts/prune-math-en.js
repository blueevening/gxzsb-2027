/* 题库提纯：数学/英语剔除坏题与真重复，补入考纲优质题（保持每科300）
 * 剔除：nm101(与mc01真重复)、en4103(options坏/无干扰项)、enx26(与e25同搭配弱题)、en5101(题型元题)
 * 补入：nm501(基本积分表·反三角)、ne501(look after搭配)、ne502(hear sb do)、ne503(be used to doing)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

const DROP = new Set(['nm101', 'en4103', 'enx26', 'en5101']);

const NEW_Q = [
  {
    id: 'nm501', module: 'public', subject: '高等数学', chapter: 'ch-math-4', knowledgePoint: '不定积分',
    type: 'calc', typeLabel: '解答', difficulty: 2, difficultyLabel: '高频',
    stem: '求 ∫ 1/(1+x²) dx。',
    options: null, answer: 'arctan x + C',
    analysis: '【审题】关键词：∫ 1/(1+x²) dx。考点是基本积分表中的反三角导数公式。\n\n【思路】被积函数 1/(1+x²) 是反正切函数 arctan x 的导数，因此积分结果直接就是 arctan x + C。这属于基本积分表必背条目，考场上应做到秒写。\n\n【步骤】\n① 识别被积函数形状：分母是 1+x²，分子是 1。\n② 联想导数公式：(arctan x)′ = 1/(1+x²)。\n③ 逆用公式写出原函数：arctan x。\n④ 不定积分补常数 C。\n\n【答案】∫ 1/(1+x²) dx = arctan x + C。\n\n【易错】1. 写成 ln|1+x²|+C（把加法分母当成乘积型）。2. 漏写 +C。3. 与 ∫ 1/√(1−x²) dx = arcsin x + C 混淆。\n\n【口诀】分母 1 加 x 方，积分就是反正切；加 C 千万不能忘。',
    source: 'highfreq', tags: ['不定积分', '基本积分表'], pitfalls: ['1/(1+x²) 积分是 arctan x，不是 ln(1+x²)', '不定积分结果必须加常数 C'],
    explainLevel: 'subject-specific',
    steps: ['【秒懂考点】1/(1+x²) 是 arctan x 的导数', '【第一步】识别形状：分母 1+x²、分子 1', '【第二步】逆用公式 (arctan x)′ = 1/(1+x²)', '【第三步】写出原函数 arctan x', '【答案】arctan x + C'],
    hint: '【结论】arctan x + C 【考点】基本积分表 · 反三角 【一步步】① 看分母 1+x²。② 想到 (arctan x)′ = 1/(1+x²)。③ 直接写出 arctan x + C。'
  },
  {
    id: 'ne501', module: 'public', subject: '英语', chapter: 'ch-en-1', knowledgePoint: '词汇与搭配',
    type: 'single', typeLabel: '单选', difficulty: 1, difficultyLabel: '基础',
    stem: 'Could you please help me look ____ the children while we are out?',
    options: ['after', 'at', 'for', 'on'], answer: 'after',
    analysis: '【审题】题干：Could you please help me look ____ the children while we are out. 考固定搭配 look after。\n【语法点/词汇】look after = 照看、照顾；look at 看；look for 寻找；look on 旁观。\n【步骤】① 空格后是 the children（被照顾的对象）→ 需要「照顾」义。② look after sb. 照看某人 ✓。③ look at sb. 只是「看着」，没有照顾含义。④ look for sb. 是「寻找某人」。⑤ look on 是「旁观」。\n【答案】A. after。\n【易错】look for（寻找）与 look after（照看）一字之差，考场上极易看混；带宾语时两个短语都要背全。\n【口诀/模板句】look after 照看人，look for 找东西；children 要照看，after 填进去。',
    source: '2027考纲补充', tags: ['词汇与搭配', '动词短语', '考纲补充'], pitfalls: ['look for 是「寻找」不是「照看」', 'look after = take care of'],
    explainLevel: 'subject-specific',
    steps: ['【秒懂考点】look after 照看', '【第一步】宾语是 children，需要「照顾」义', '【第二步】look after sb. 照看某人', '【第三步】排除 look at（看）/ look for（找）/ look on（旁观）', '【答案】after'],
    hint: '【结论】after 【考点】look 短语辨析 【一步步】① children 要人照看。② look after = take care of。③ 其余选项义不符。'
  },
  {
    id: 'ne502', module: 'public', subject: '英语', chapter: 'ch-en-4', knowledgePoint: '非谓语动词',
    type: 'single', typeLabel: '单选', difficulty: 2, difficultyLabel: '高频',
    stem: 'I often hear her ____ beautiful songs in the next room.',
    options: ['sing', 'sang', 'to sing', 'sings'], answer: 'sing',
    analysis: '【审题】题干：I often hear her ____ beautiful songs in the next room. 考感官动词 hear 的宾补形式。\n【语法点/词汇】hear sb. do sth.（听见某人做某事全过程/经常性动作）；hear sb. doing sth.（听见某人正在做，片段）。often 提示经常性，用 do 形式（动词原形）。\n【步骤】① 宾语是 her，后接宾补。② often（经常）→ 经常性动作 → hear sb. do。③ do 形式用动词原形 sing ✓。④ sang 是过去式，不用于宾补 do 形式。⑤ to sing 不定式不用于 hear 的宾补。⑥ sings 是第三人称单数，不用于宾补。\n【答案】A. sing。\n【易错】1. 与 hear sb. doing 混：do=全过程/经常，doing=正在进行。2. 宾补里误加 to（see/hear/watch/help 的省 to 特例要背）。\n【口诀/模板句】感官动词三兄弟 see hear watch：do 全程 doing 片；often 出现选原形，to 要省略记心间。',
    source: '2027考纲补充', tags: ['非谓语', '感官动词', '考纲补充'], pitfalls: ['hear sb do 用动词原形，不加 to', 'often 提示经常性，选 do 不选 doing'],
    explainLevel: 'subject-specific',
    steps: ['【秒懂考点】hear sb do，经常性用原形', '【第一步】often → 经常性动作', '【第二步】hear sb. do sth. 宾补用动词原形', '【第三步】排除 sang / to sing / sings', '【答案】sing'],
    hint: '【结论】sing 【考点】感官动词宾补 【一步步】① often 经常用 do。② hear sb do，原形不带 to。③ 其余形式全排除。'
  },
  {
    id: 'ne503', module: 'public', subject: '英语', chapter: 'ch-en-4', knowledgePoint: '非谓语动词',
    type: 'single', typeLabel: '单选', difficulty: 1, difficultyLabel: '基础',
    stem: 'We are used to ____ English for half an hour every morning.',
    options: ['read', 'reading', 'reads', 'to read'], answer: 'reading',
    analysis: '【审题】题干：We are used to ____ English for half an hour every morning. 考 be used to 结构。\n【语法点/词汇】be used to doing sth. = 习惯于做某事（to 是介词，后接动名词）；used to do sth. = 过去常常做（to 后接动词原形）；get used to doing = 逐渐习惯。\n【步骤】① 结构是 are used to（be + used to）→ 介词 to → 后接 doing。② reading ✓。③ read 原形不跟在介词 to 后。④ reads 三单形式错。⑤ to read 是 used to do（过去常常）的搭配，与 are 以及「每天早上」的现在习惯语境不符。\n【答案】B. reading。\n【易错】三大结构混：be/get used to doing（习惯做，to 是介词）；used to do（过去常做）；be used to do（被用来做，被动）。题干有 are，只能是 be used to doing。\n【口诀/模板句】be used to 后接 doing，介词 to 要记清；used to do 过去常，be done 被用来三分明。',
    source: '2027考纲补充', tags: ['非谓语', '固定搭配', '考纲补充'], pitfalls: ['be used to doing 的 to 是介词，后接动名词', 'used to do（过去常常）与 be used to doing（习惯于）勿混'],
    explainLevel: 'subject-specific',
    steps: ['【秒懂考点】be used to doing 习惯做', '【第一步】识别 are used to 结构', '【第二步】to 是介词 → 后接动名词 reading', '【第三步】排除 read / reads / to read', '【答案】reading'],
    hint: '【结论】reading 【考点】used to 三大结构 【一步步】① are → be used to。② to 介词 → doing。③ 唯 reading 合适。'
  }
];

// —— 文本手术 ——
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const qLineIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
if (qLineIdx < 0) throw new Error('questions line not found');
const qPrefix = 'window.STUDY_DATA.questions = ';
const qSuffix = lines[qLineIdx].trimEnd().endsWith(';') ? ';' : '';
const arrText = lines[qLineIdx].slice(qPrefix.length, lines[qLineIdx].length - qSuffix.length);
const questions = JSON.parse(arrText);

const before = questions.length;
const kept = questions.filter((q) => !DROP.has(q.id));
const removed = before - kept.length;
if (removed !== DROP.size) throw new Error('expected remove ' + DROP.size + ', got ' + removed);

const keptIds = new Set(kept.map((q) => q.id));
for (const q of NEW_Q) {
  if (keptIds.has(q.id)) throw new Error('new id collision: ' + q.id);
  kept.push(q);
}

const by = {};
for (const q of kept) by[q.subject] = (by[q.subject] || 0) + 1;
console.log('before', before, '→ after', kept.length, by);
if (kept.length !== before) throw new Error('count mismatch');

// 每科必须仍为 300
for (const [s, n] of Object.entries(by)) {
  if (n !== 300) throw new Error(s + ' = ' + n + ', expected 300');
}

const newQLine = qPrefix + JSON.stringify(kept) + qSuffix;
lines[qLineIdx] = newQLine;
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('wrote all-bank.js');
