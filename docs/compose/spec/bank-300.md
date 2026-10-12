---
feature: bank-300
status: designed
updated: 2026-10-12
branch: feat/bank-300
commits: 
---

# 题库精选：每科 300 题（大纲题型比例）

## Report

## [S1] Problem
题库约 2900 题含超纲/偏难/重复/错误；需 **每个学科各 300 题** 高质量题，并按大纲题型比例分配，全站题量同步。

## [S2] Design
### 总量
五科 × 300 = **1500 题**（高数 / 英语 / 电工 / C / 计网）

### 每科题型配额（对齐 2027 卷面比例）
**高等数学 300**（卷面 10:4:7:2）  
单选 130 · 填空 52 · 解答 91 · 应用 27

**英语 300**（卷面 词汇20 / 阅读25 / 填空5 / 翻译8 / 写作1 ≈ 59 份）  
词汇语法单选 102 · 阅读 127 · 填空 25 · 翻译 41 · 写作 5

**电工 / C / 计网 各 300**（合卷单科 10:5:10:2 ≈ 27 份）  
单选 111 · 判断 56 · 填空 111 · 解答应用 22

### 质检
剔除超纲、偏难、重复、题干/答案错误；不足配额则按优质优先补位。

### 产出
- `all-bank.js` = 精选 1500 题
- 页面题量按每科 300 展示
- smoke：每科 300、id 唯一

## [S3] Out of Scope
不扩写新题；不改分值结构。

## Tasks
- [ ] T1: 高数 300 — acceptance: 配额达标 (covers: S2)
- [ ] T2: 英语 300 — acceptance: 配额达标 (covers: S2)
- [ ] T3: 电工 300 — acceptance: 配额达标 (covers: S2)
- [ ] T4: C 300 — acceptance: 配额达标 (covers: S2)
- [ ] T5: 计网 300 — acceptance: 配额达标 (covers: S2)
- [ ] T6: 合并 all-bank 1500 + 页面题量 — acceptance: 每科显示 300 (covers: S2; depends: T1-T5)
- [ ] T7: smoke — acceptance: PASS (covers: S2; depends: T6)
