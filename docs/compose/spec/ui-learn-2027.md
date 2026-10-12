---
feature: ui-learn-2027
status: delivered
updated: 2026-10-12
branch: feat/ui-learn-2027
commits: 3ebf69a..7d5ef9c
---

# 公式页排版 · 我的页重构 · 学习一刻 2027 大纲全量重构

## Report

**What was built** — 公式页改为讲义式分区排版（标签块+正文分行、步骤加宽、宽屏 720px）；「我的」页列表去掉灰色小字，数值右置；「学习一刻」以 `learn-book-2027.js` 重建五科 110 个知识点，章节对齐 2027 大纲小节，详情字段与公式手册同级（plain/steps/example/answer/warn/examTip）。旧 `all-learn.js` 的 LEARN_BOOK 改为 LEGACY，消除双源静默覆盖。

**Verification** — `node --check` app.js / learn-book-2027.js / all-learn.js PASS；`scripts/smoke.js` PASS（含 T3/T4）；独立评审 PASS-with-nits，major（双 LEARN_BOOK）已修。

**Journey log**
- 英语必须 escKeep，否则 autoFrac 会把 to do / doing 转成假分式。
- 多文件同 key 赋值 last-wins，需防旧数据静默顶回。
- 提交前务必 `git add -A`，否则 untracked 主交付（learn-book 112KB）会丢。

## [S1] Problem
公式布局拥挤；我的页灰字杂乱；学习一刻未严格按 2027 大纲且深度不足。

## [S2] Design
### 公式页
标签块独立成行、步骤 ol、公式区留白、宽屏 max-width 720px。

### 我的页
列表仅主标题+右侧数值/箭头；`.me-page` 作用域隐藏 `.s`。

### 学习一刻
`learn-book-2027.js`：科目→大纲章节→points；字段 id,name,outline,plain,steps[],example,answer,warn,examTip,relatedFormula,level,minutes。英语 escKeep；数理 mathHtml/frac{}。

## [S3] Out of Scope
不改 all-bank 题目正文；不引入构建器；英语阅读长文精讲。

## Tasks
- [x] T1: 公式页布局重构 — acceptance: 分区标签清晰、步骤可读、宽屏限宽 (covers: S2)
- [x] T2: 我的页去灰色小字 — acceptance: 我的列表无 .s 灰字 (covers: S2)
- [x] T3: 学习一刻数据按 2027 大纲重建五科 — acceptance: 每科章节覆盖大纲小节，字段齐 (covers: S2)
- [x] T4: 学习一刻列表+详情 UI — acceptance: 详情含 plain/steps/example/answer/warn/tip (covers: S2; depends: T3)
- [x] T5: 自测 smoke + 抽查内容 — acceptance: node --check + smoke PASS (covers: S2; depends: T1-T4)
