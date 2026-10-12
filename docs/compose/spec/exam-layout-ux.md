---
feature: exam-layout-ux
status: delivered
updated: 2026-10-12
branch: fix/exam-layout-ux
commits: 5368ba3..6d7b0a4
---

# 大纲分值更正 + 答题页按钮与信息层级

## Report

**What was built** — 首页三科题型分值改为 2027 大纲原文硬编码（数学 10×5/4×5/7×8/2×12；英语 20=40、阅读50、填空10、翻译32、写作18；专业 30=120/15=45/30=60/6=75），不再用 mix 估算。答题页操作区改为「上一题/收藏 + 一个主按钮」，提交前「提交答案」、提交后「下一题」，交卷仅出现在模拟考末题，退出考试弱化，去双重下一题。错因改低调 chip，saveSession 轻提示「已保存」。

**Verification** — node --check PASS；scripts/smoke.js PASS。

**Journey log**
- EXAM_PLANS.sections[].n 与大纲展示题量可能不一致，首页展示必须写死大纲文案。
- 操作区同一动作只保留一个主按钮，次要操作降权。

## [S1] Problem
首页专业「10题40分」误导；答题按钮重复堆叠；无保存反馈。

## [S2] Design
见 Report；分值以用户给定 2027 大纲为准。

## [S3] Out of Scope
不改组卷算法与题目内容。

## Tasks
- [x] T1: 首页三科分值文案按大纲硬编码 (covers: S2)
- [x] T2: 答题按钮去重与提交态 (covers: S2)
- [x] T3: 错因样式弱化 + 保存反馈 (covers: S2)
- [x] T4: smoke 回归 (covers: S2)
