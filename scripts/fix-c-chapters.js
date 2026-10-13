/* C 语言章节重构：对齐 2027 考纲 10 个考查内容块
 * 1) 更新 all-bank.js chapters 中 C 语言 children 为 10 章
 * 2) 按 knowledgePoint + 题干关键词把 300 题重映射到正确章节
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

const NEW_CH = [
  { id: 'ch-c-1', title: '程序设计与 C 语言', tags: ['程序结构', '编译运行', '概述'] },
  { id: 'ch-c-2', title: '数据表现与运算', tags: ['数据类型', '常量变量', '运算符', '类型转换'] },
  { id: 'ch-c-3', title: '顺序程序设计', tags: ['表达式', '语句', '输入输出'] },
  { id: 'ch-c-4', title: '选择结构', tags: ['关系逻辑运算', 'if', 'switch', '条件运算符'] },
  { id: 'ch-c-5', title: '循环结构', tags: ['for', 'while', 'do-while', 'break', 'continue'] },
  { id: 'ch-c-6', title: '数组', tags: ['一维数组', '二维数组', '字符数组', '字符串'] },
  { id: 'ch-c-7', title: '函数', tags: ['定义调用', '递归', '作用域', '编译预处理'] },
  { id: 'ch-c-8', title: '指针', tags: ['指针变量', '指针与数组', '字符串指针'] },
  { id: 'ch-c-9', title: '构造数据类型', tags: ['结构体', '共用体', '枚举'] },
  { id: 'ch-c-10', title: '文件', tags: ['文件分类', '打开关闭', '读写'] },
];

const KP2CH = {
  'C程序结构': 'ch-c-1', 'C语言概述': 'ch-c-1', 'C程序编译': 'ch-c-1', '编译运行': 'ch-c-1',
  '编译': 'ch-c-1', '注释': 'ch-c-1', 'main函数': 'ch-c-1', 'main函数位置': 'ch-c-1',
  'C语言特点': 'ch-c-1', '程序开发步骤': 'ch-c-1', 'C语言应用': 'ch-c-1', '程序结构': 'ch-c-1',
  'C程序大小写': 'ch-c-1', 'C语言': 'ch-c-1',
  '数据类型': 'ch-c-2', '常量': 'ch-c-2', '变量': 'ch-c-2', '运算符': 'ch-c-2',
  '逻辑运算符': 'ch-c-2', '关系运算符': 'ch-c-2', '赋值': 'ch-c-2', '转义字符': 'ch-c-2',
  '标识符': 'ch-c-2', '类型转换': 'ch-c-2', '算术运算符': 'ch-c-2', '表达式': 'ch-c-2',
  '字符型': 'ch-c-2', '整型': 'ch-c-2', '浮点型': 'ch-c-2', '运算符优先级': 'ch-c-2',
  '自增运算符': 'ch-c-2', '位运算': 'ch-c-2',
  '输入输出': 'ch-c-3', '语句': 'ch-c-3', '顺序结构': 'ch-c-3', 'printf': 'ch-c-3', 'scanf': 'ch-c-3',
  'if语句': 'ch-c-4', 'switch语句': 'ch-c-4', 'switch': 'ch-c-4', '分支结构': 'ch-c-4',
  '条件运算符': 'ch-c-4', '选择结构': 'ch-c-4',
  '循环': 'ch-c-5', '循环与算法': 'ch-c-5', 'for循环': 'ch-c-5', 'while循环': 'ch-c-5',
  'do-while循环': 'ch-c-5', 'do-while': 'ch-c-5', 'break': 'ch-c-5', 'break语句': 'ch-c-5',
  'continue语句': 'ch-c-5', 'break与continue': 'ch-c-5', '循环嵌套': 'ch-c-5',
  '数组': 'ch-c-6', '一维数组': 'ch-c-6', '二维数组': 'ch-c-6', '字符串': 'ch-c-6',
  '字符数组': 'ch-c-6', '数组应用': 'ch-c-6',
  '算法-求和': 'ch-c-6', '算法-求最大值': 'ch-c-6', '常用算法': 'ch-c-6', '算法': 'ch-c-6',
  '函数': 'ch-c-7', '函数调用': 'ch-c-7', '函数声明': 'ch-c-7', '递归': 'ch-c-7',
  '局部变量': 'ch-c-7', '全局变量': 'ch-c-7', '编译预处理': 'ch-c-7', '预处理': 'ch-c-7',
  '预处理命令': 'ch-c-7', '作用域': 'ch-c-7',
  '指针': 'ch-c-8', '指针基础': 'ch-c-8', '指针与数组': 'ch-c-8', '指针定义': 'ch-c-8',
  '指针概念': 'ch-c-8', '&和*': 'ch-c-8', '指针占几个字节': 'ch-c-8', '空指针': 'ch-c-8',
  '指针运算': 'ch-c-8', '字符串指针': 'ch-c-8', '指针变量': 'ch-c-8',
  '结构体': 'ch-c-9', '共用体': 'ch-c-9', '枚举': 'ch-c-9', '结构体引用': 'ch-c-9',
  '结构体指针': 'ch-c-9', '构造数据类型': 'ch-c-9',
  '文件': 'ch-c-10', '文件操作': 'ch-c-10', '文件指针': 'ch-c-10', '文件打开模式': 'ch-c-10',
  '文件打开方式': 'ch-c-10', '文本文件': 'ch-c-10',
};

function chByStem(q) {
  const t = String(q.stem || '') + ' ' + String(q.knowledgePoint || '');
  if (/fopen|fclose|fread|fwrite|文件/.test(t)) return 'ch-c-10';
  if (/struct|结构体|共用体|枚举|union/.test(t)) return 'ch-c-9';
  if (/指针|\*p|\*s|&a|NULL/.test(t) && !/字符串常量/.test(t)) return 'ch-c-8';
  if (/递归|函数|形参|实参|return|局部变量|全局变量|预处理|#include/.test(t)) return 'ch-c-7';
  if (/数组|字符串|"[^"]*"|'\\0'|\[\d+\]/.test(t)) return 'ch-c-6';
  if (/for\s*\(|while\s*\(|do-?while|循环|break|continue/.test(t)) return 'ch-c-5';
  if (/\bif\b|switch|case|选择|分支/.test(t)) return 'ch-c-4';
  if (/printf|scanf|输入|输出|顺序/.test(t)) return 'ch-c-3';
  if (/数据类型|常量|变量|运算符|char |int |float |double |转义|标识符/.test(t)) return 'ch-c-2';
  return 'ch-c-1';
}

function mapChapter(q) {
  const kp = String(q.knowledgePoint || '');
  if (KP2CH[kp]) return KP2CH[kp];
  return chByStem(q);
}

// ---- 文本手术 ----
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);

const chIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.chapters ='));
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
if (chIdx < 0 || qIdx < 0) throw new Error('lines not found');

const chapters = JSON.parse(lines[chIdx].slice('window.STUDY_DATA.chapters = '.length).replace(/;\s*$/, ''));
const cEntry = chapters.find((c) => c.subject === 'C语言程序设计');
if (!cEntry) throw new Error('C entry not found');
const oldChildren = cEntry.children;
cEntry.children = NEW_CH;

const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));
const CQ = questions.filter((q) => q.subject === 'C语言程序设计');
if (CQ.length !== 300) throw new Error('C count ' + CQ.length);

const distBefore = {};
CQ.forEach((q) => { distBefore[q.chapter] = (distBefore[q.chapter] || 0) + 1; });

const changed = [];
for (const q of CQ) {
  const nc = mapChapter(q);
  if (nc !== q.chapter) {
    changed.push({ id: q.id, from: q.chapter, to: nc, kp: q.knowledgePoint, stem: String(q.stem).slice(0, 36) });
    q.chapter = nc;
  }
}

const distAfter = {};
CQ.forEach((q) => { distAfter[q.chapter] = (distAfter[q.chapter] || 0) + 1; });

console.log('旧章 children:', oldChildren.map((c) => c.id + ' ' + c.title).join(' | '));
console.log('before:', JSON.stringify(distBefore));
console.log('after :', JSON.stringify(distAfter));
console.log('改章题数:', changed.length);
// 每章不能为空
for (const ch of NEW_CH) {
  if (!distAfter[ch.id]) console.log('警告：空章', ch.id, ch.title);
}

lines[chIdx] = 'window.STUDY_DATA.chapters = ' + JSON.stringify(chapters) + ';';
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('wrote all-bank.js');
