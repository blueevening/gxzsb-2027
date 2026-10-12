---
feature: gxzsb-qa-fixes
status: designed
updated: 2026-10-12
branch: fix/qa-p1-p3
commits: 
---

# gxzsb-2027 全量缺陷修复与深度回归

## Report

## [S1] Problem

2027-10-12 测试报告（Playwright 实测 + 静态审计）累计 26+ 条缺陷：模拟考无限时/无交卷、主观题恒满分、路由 `#practice` 错误、旧缓存白屏、键盘不存进度、注册无反馈、云同步/导出/日界问题、UI 小问题与代码坏味道。需按 P1→P2→P3 全量修复，并再做一轮深度排查（导航跳转、登录、数据）。

## [S2] Design

### 范围与优先级
1. **P1 业务/稳定/账号**（12 项）
2. **P2 体验**（14 项）
3. **P3 优化**（8 项）+ 修复后深度回归

### 关键契约

**模拟考**
- `EXAM_PLANS[].minutes > 0` 时启动倒计时，展示 `mm:ss`；剩余 5 分钟变色；**到时自动交卷**。
- 任何模拟考提供「交卷」按钮：确认后未答题按错计，出报告。
- 倒计时与 `end` 时间戳写入 session（`gxzsb.session`），刷新后恢复；以 **Date.now() 对齐 end**，系统时间回拨则以 `max(now, lastSeenAt)` 保护（本地尽力，不做服务端校验）。
- **主观题智能评分**：对 `translate`/`write`/部分 `fill`，按参考答案/解析要点做 **关键词覆盖率 + 同义/包含匹配** 的 0–1 得分（`score`），UI 显示「智能评分 x%」+ 参考答案；用户可 **自评「我答对了/需加强」** 覆盖对错。无外部 LLM 依赖，离线可用。若将来接入 LLM，只替换 `smartGrade(q, userText)` 实现。

**路由**
- 统一 `#/path`；修复恢复会话 `location.hash = "#/practice"`。
- `parseHash` 对 `#practice`、`#/practice`、`#//practice` 归一化。
- 页面内 `data-nav` / `go()` 全部 `#/`；回归「跳转」全菜单。

**数据兼容**
- `loadFilters` 对缺 `kind` 等字段补默认，不抛错。
- `export-all` 包含 `gxzsb.wb.*`、`gxzsb.filters`、`gxzsb.session`、`gxzsb.daily30`、`gxzsb.dailySession`、`gxzsb.resetAt` 等；import 键白名单 `gxzsb.*`。

**作答**
- 选项防抖（submitted/locked）。
- 键盘路径与点击同构：提交/切换后 `saveSession()`。
- 单条反馈条；未答计入总分母。

**日界**
- 全站 `localDayKey(d)` 本地时区；打卡/今日任务/统计统一。

**账号**
- 注册：成功/失败/超时（15s）明确 toast/文案；Supabase 失败可重试。
- **密码不落 localStorage**（若存在则清除）；仅存 session。
- 「忘记密码」：引导使用 Supabase `resetPasswordForEmail`（可配置邮箱域名），无邮箱服务时提示「联系管理员/使用演示游客模式」。
- 登录超时：可配置闲置（默认 2h）自动 `signOut` 并提示。
- 登录失败次数：本地 5 次锁 60s。

**同步**
- push 失败（含 error）一律 `syncQueue` + 非打扰 toast（可关）。

**P2/P3**
- 错因 `reason` 写入；错因补练可用。
- 真题库文案与 pool/limit 一致；空集禁用按钮。
- 公式：兼容 `frac{` 与 `\frac{`；搜索列表走 `renderMath`。
- 导出下载文件名/扩展名正确。
- 弹窗：点遮罩关闭；主题 class 跟随 `data-theme`。
- 主题持久化加强（异常回退 light 时读备份 key）。
- 窄屏 `.q-actions` 布局（提交独占行）。
- 免责声明区分游客/登录。
- 死代码清理：`showNav`、`renderMath` 死分支、wordbook 内层重复、button type。
- 交互增强：解析一键复制、错题清空确认、答题快捷键说明、模拟考退出确认。

### 测试边界
- 静态站：Node `node --check` + `scripts/smoke.js` 扩展用例 + Playwright 冒烟（路由/每日30/模拟考交卷/导出）。
- 不引入真实 LLM；智能评分可单测 `smartGrade`。

## [S3] Out of Scope
- 真实服务端考试防作弊、SMS/邮件找回的生产配置
- 重写为 Vue/React、引入打包器
- 题库内容勘误与补题（另任务）

## Tasks
- [ ] T1: 路由规范化 `#/practice` + parseHash 兼容 — acceptance: 未完成会话恢复进入练习页；`#practice` 与 `#/bank` 均可解析 (covers: S2)
- [ ] T2: 旧 filters/存储兼容与崩溃防护 — acceptance: 缺 `kind` 的 filters 进科目页不抛错 (covers: S2)
- [ ] T3: 模拟考倒计时 + 交卷 + end 持久化 — acceptance: 显示计时、可中途交卷、到时自动交卷、刷新不丢 end (covers: S2; depends: T1)
- [ ] T4: smartGrade 主观题智能评分 + 自评 — acceptance: translate/write 提交显示得分与参考答案，可自评覆盖 (covers: S2; depends: T3)
- [ ] T5: 作答防抖、键盘 saveSession、单条反馈、未答入分母 — acceptance: 键盘刷新进度保留；无双重提示 (covers: S2)
- [ ] T6: 本地日界统一与打卡统计 — acceptance: 模拟 0–8 点与本地日期一致 (covers: S2)
- [ ] T7: 账号：注册反馈/超时、无密码明文、忘记密码入口、闲置登出、失败锁定 — acceptance: 注册 15s 内有结果；localStorage 无 password；登录 5 次锁 60s (covers: S2)
- [ ] T8: 云同步失败入队 + 提示 — acceptance: 模拟 error 后 syncQueue 有数据 (covers: S2)
- [ ] T9: 导出/导入完整 + 白名单 — acceptance: 含单词与 filters；非法 key 被忽略 (covers: S2)
- [ ] T10: 错因 reason、真题文案/空卷、公式渲染、下载扩展名 — acceptance: 错因可筛；空卷禁用；`\frac` 可渲染 (covers: S2)
- [ ] T11: UI P2：弹窗遮罩/主题、窄屏 q-actions、长文本滚动、主题持久化 — acceptance: 点遮罩关弹窗；窄屏提交独占行 (covers: S2)
- [ ] T12: P3 清理与增强（死代码、免责声明、快捷键说明、复制解析、清空错题） — acceptance: `node --check` + smoke 通过，页面无死逻辑入口 (covers: S2)
- [ ] T13: 深度回归（导航/登录/数据）+ 更新 smoke — acceptance: Playwright 冒烟 0 失败；QA 清单复测关闭 (covers: S2; depends: T1-T12)
