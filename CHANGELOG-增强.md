# CHANGELOG · 增强与修复

## A. 仓库整理
- 删除垃圾：`app.js.bak` `index.html.bak` `index.html.working` `tmp-words.js`
- 从 git 移除并删除 `node_modules/`（误提交的 expect 依赖树）；`package.json` 去掉无用 `expect`
- 新增 `.gitignore`（node_modules / *.bak / .DS_Store 等）
- 新增 `README.md`（简介、科目、功能、本地打开、账号数据、目录）
- **题库分片整理**：`all-bank.js` 已是全量合集（2913 题，含原 bank/bank-q/bank-p/bank-new-* 全部 id）
  - 未再引用的碎片/旧入口归档到 `_archive/`（bank-new-*、bank-q*、bank-p*、bank.js、learn-book*、extras、real-exam*、wordbook-extra* 等）
  - `index.html` 只加载合集，不再重复加载碎片
  - 公开 API `window.STUDY_DATA` 不变

## B. Bug 修复
- **B1 顺序练习乱序**：`startSession` 支持 `ordered`；`seq-practice` / `seq-obj` / `seq-subj` 传入后按题库录入顺序稳定取前 N；session 保存 ids，restore 同序
- **B2 今日任务膨胀**：每日 30 题按日期种子锁定固定题组（`gxzsb.daily30`）；`todayDone` 只统计该组内已作答去重题数，上限 30
- **B3 登录/账号**
  - 注册增加二次密码确认
  - 注册成功后备份并清空本机旧学习数据（防串号）
  - 退出登录：隐藏侧栏/底栏并回登录页；**不**清学习数据
  - 「清除本机数据」与「退出」分离；新增「重置学习数据」只清学习记录
- **B4 全局**
  - 补上未定义的 `bindEvents`（登录页原本会 ReferenceError）
  - 错题列表分页（默认 40，可加载更多）
  - 笔记/搜索/昵称输出已 `esc`，无 XSS 拼接
  - localStorage 读写 try/catch；空态与 NaN 防护沿用并加强

## C. 性能
- 移除「每次打开卸载 SW + 清 Cache」反模式；改为 http(s) 下注册网络优先 `sw.js`，file:// 跳过
- 归档未引用大文件，仓库体积显著下降；运行时不再有重复脚本
- `qById` 改 Map 查找；错题列表分页降低大 DOM

## D. 功能增强
- **模拟考试**（`#mock`）：多套卷入口、限时交卷出分、对答案、历史记录（`gxzsb.his3`）
- **数据分析看板**（`#stats`）：近 7 日学习量柱状、正确率趋势、科目进度、薄弱知识点 TOP、模拟考历史
- **云同步加固**：push 失败重试 ×2、离线写入 `gxzsb.syncQueue` 稍后冲掉；无 Supabase 配置时纯本地
- **重置学习数据**入口（我的 → 账号与数据）

## 兼容说明
- localStorage key 未改（`gxzsb.a3/w3/f3/n3/m3/his3/rep3/theme/...`），旧数据可继续用
- 新增 key：`gxzsb.daily30`、`gxzsb.syncQueue`、`gxzsb.bak.<ts>`
- `window.STUDY_DATA` / `window.WORDS` API 不变
- 双击 `file://` 打开仍可用（懒加载未做破坏性改造）

## 自测
- `node --check app.js` 通过
- `node scripts/smoke.js` 通过（题库 API、每日种子稳定、ordered 稳定、引用文件齐全）
