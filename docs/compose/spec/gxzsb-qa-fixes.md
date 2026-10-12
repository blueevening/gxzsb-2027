---
feature: gxzsb-qa-fixes
status: delivered
updated: 2026-10-12
branch: fix/qa-p1-p3
commits: 2304b79..5771371
---

# gxzsb-2027 全量缺陷修复与深度回归

## Report

**What was built** — 完成测试报告 P1–P3 全量修复：路由 `#/` 归一与旧缓存兼容、模拟考倒计时/中途交卷/到时自动交卷/end 持久化、主观题与部分填空 `smartGrade` 智能评分+自评、按题作答文本保留、键盘 `saveSession`、本地日界统一、账号（注册 15s 反馈、忘记密码、闲置登出、失败锁定、密码不落盘）、云同步失败入队、导出导入白名单、错因补练、公式兼容、弹窗/窄屏/主题持久化、死代码与文案清理。独立评审 3 个 major（作答回看、fill 智能评分 UI、退出考试文案/行为）已闭环。

**Verification** — `node --check app.js|wordbook.js` PASS；`node scripts/smoke.js` PASS（含 T1–T12 断言）；Playwright file:// 冒烟 PASS（路由 7 条、tabbar、模拟考交卷+计时、登录校验、无 password 键、0 pageerror）。

**Journey log**
- 模拟考宣称限时但原先无计时器/交卷按钮，规格落地后需 end+lastSeenAt 防回拨。
- S2 写「部分 fill」智能评分，任务单只写 translate/write，导致 UI 漏口——验收与 S2 对齐。
- `s.sel` 单槽无法回看作答，改为 per-id `answers` map 并入 session。
- 退出考试原「不计入成绩」与自动交卷进历史矛盾：改为放弃本场并清 end。
- 冒烟大量字符串断言，改文案易假红，可接受但后续宜抽纯函数测。

## [S1] Problem
2027-10-12 测试报告 26+ 条缺陷：模拟考无限时/无交卷、主观题恒满分、路由 `#practice`、旧缓存白屏、键盘不存进度、账号与同步问题、UI/代码坏味道。

## [S2] Design
### 范围
P1→P2→P3 全量 + 深度回归（导航/登录/数据）。

### 关键契约（已交付）
- **模拟考**：`minutes>0` 倒计时 mm:ss、≤5min 变色、中途「交卷」、到时自动交卷；`end`/`lastSeenAt` 持久化；回拨 `max(now,lastSeenAt)`。
- **smartGrade(q,userText)**：要点覆盖率 0–1；translate/write/**fill(有分)** 展示智能评分+参考答案+自评。
- **作答**：`answers` map 按题保存文本；防抖；键盘 saveSession；未答计入分母。
- **路由**：`normalizeHashPath`；恢复会话 `#/practice`。
- **账号**：注册超时/成败、scrubPasswords、resetPasswordForEmail、闲置 2h、失败 5 次锁 60s。
- **同步/存储**：enqueueSync；filters 兼容；export 全 `gxzsb.*`；import 白名单。
- **日界**：`localDayKey` 全站统一。

## [S3] Out of Scope
真实服务端防作弊、生产邮件找回配置、换框架、题库内容勘误。

## Tasks
- [x] T1: 路由规范化 `#/practice` + parseHash 兼容 — acceptance: 未完成会话恢复进入练习页；`#practice` 与 `#/bank` 均可解析 (covers: S2)
- [x] T2: 旧 filters/存储兼容与崩溃防护 — acceptance: 缺 `kind` 的 filters 进科目页不抛错 (covers: S2)
- [x] T3: 模拟考倒计时 + 交卷 + end 持久化 — acceptance: 显示计时、可中途交卷、到时自动交卷、刷新不丢 end (covers: S2; depends: T1)
- [x] T4: smartGrade 主观题智能评分 + 自评 — acceptance: translate/write/fill 提交显示得分与参考答案，可自评覆盖 (covers: S2; depends: T3)
- [x] T5: 作答防抖、键盘 saveSession、单条反馈、未答入分母 — acceptance: 键盘刷新进度保留；无双重提示 (covers: S2)
- [x] T6: 本地日界统一与打卡统计 — acceptance: 模拟 0–8 点与本地日期一致 (covers: S2)
- [x] T7: 账号：注册反馈/超时、无密码明文、忘记密码入口、闲置登出、失败锁定 — acceptance: 注册 15s 内有结果；localStorage 无 password；登录 5 次锁 60s (covers: S2)
- [x] T8: 云同步失败入队 + 提示 — acceptance: 模拟 error 后 syncQueue 有数据 (covers: S2)
- [x] T9: 导出/导入完整 + 白名单 — acceptance: 含单词与 filters；非法 key 被忽略 (covers: S2)
- [x] T10: 错因 reason、真题文案/空卷、公式渲染、下载扩展名 — acceptance: 错因可筛；空卷禁用；`\frac` 可渲染 (covers: S2)
- [x] T11: UI P2：弹窗遮罩/主题、窄屏 q-actions、长文本滚动、主题持久化 — acceptance: 点遮罩关弹窗；窄屏提交独占行 (covers: S2)
- [x] T12: P3 清理与增强（死代码、免责声明、快捷键说明、复制解析、清空错题） — acceptance: `node --check` + smoke 通过，页面无死逻辑入口 (covers: S2)
- [x] T13: 深度回归（导航/登录/数据）+ 更新 smoke — acceptance: Playwright 冒烟 0 失败；QA 清单复测关闭 (covers: S2; depends: T1-T12)
