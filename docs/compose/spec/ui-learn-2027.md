---
feature: ui-learn-2027
status: designed
updated: 2026-10-12
branch: feat/ui-learn-2027
commits: 
---

# 公式页排版 · 我的页重构 · 学习一刻 2027 大纲全量重构

## Report

## [S1] Problem
1. 公式界面布局拥挤，长内容阅读吃力。
2. 「我的」页列表项后跟灰色小字（.s），视觉杂乱，不符合要求。
3. 「学习一刻」内容过浅，未严格按 2027 考纲展开，深度远不及公式手册。

## [S2] Design

### 公式页布局
- 卡片：标题行（公式名 + 科目徽章 + 超纲标签）独立；公式区加大留白。
- 正文分区：说人话 / 怎么用 / 例题 / 步骤 / 答案 / 口诀 / 易错 —— 标签块与正文分行，步骤缩进编号清晰。
- 列表：分组标题吸顶感；科目 chips 固定一行；搜索框吸顶可选。
- 宽屏 max-width 阅读栏；长文滚动区不撑破卡片。

### 我的页
- 列表项仅保留主标题 + 右侧数值/箭头；**删除或隐藏全部 `.s` 灰色小字**。
- 统计卡保持；分组标题保留；按钮/入口层级不变。
- 样式 class 兼容：`.list-row .s { display:none }` 仅我的页作用域，避免误伤别处。

### 学习一刻（重中之重）
- 数据源 `all-learn.js`（或新 `learn-book-2027.js`）按 **2027 三科大纲** 重建五科章节。
- 每个知识点字段对齐公式手册深度：
  `id, name, outline, plain, steps[], example, answer, warn, examTip, relatedFormula`
- 覆盖大纲小节（数学微积分+ODE；英语词汇语法/翻译/写作；电工 1–10；C 1–10；计网 1–6）。
- 详情页布局复用公式卡排版（含真分数渲染；英语用 `/`）。
- 列表页：科目 → 章节（大纲小节名）→ 知识点卡片（难度/时长/考纲标签）。

## [S3] Out of Scope
- 不改题库 all-bank.js 题目正文
- 不引入框架/构建器
- 阅读理解长文精讲（英语阅读仅给技巧条目）

## Tasks
- [ ] T1: 公式页布局重构 — acceptance: 分区标签清晰、步骤可读、宽屏限宽 (covers: S2)
- [ ] T2: 我的页去灰色小字 — acceptance: 我的列表无 .s 灰字 (covers: S2)
- [ ] T3: 学习一刻数据按 2027 大纲重建五科 — acceptance: 每科章节覆盖大纲小节，字段齐 (covers: S2)
- [ ] T4: 学习一刻列表+详情 UI — acceptance: 详情含 plain/steps/example/answer/warn/tip (covers: S2; depends: T3)
- [ ] T5: 自测 smoke + 抽查内容 — acceptance: node --check + smoke PASS (covers: S2; depends: T1-T4)
