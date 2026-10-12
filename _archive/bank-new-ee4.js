/* 新增题库 - 2026考纲版 - 电工电子技术基础 第四批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 电路基本概念 =====
  { id: "ne1301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电流方向", type: "single", typeLabel: "单选",
    stem: "电流的正方向规定为（　）", options: ["正电荷移动方向", "负电荷移动方向", "电子移动方向", "任意方向"], answer: "正电荷移动方向",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "电流"],
    analysis: "【题干】电流正方向规定？\n【考点】电流方向\n【详细解答】\n1. 电流的正方向规定为正电荷定向移动的方向。\n2. 金属导体中实际移动的是自由电子（负电荷），方向与电流方向相反。\n【选项逐个说】\nA. 正电荷移动方向 → 正确。\nB. 负电荷移动方向 → 错误：电子流方向相反。\nC. 电子移动方向 → 错误。\nD. 任意方向 → 错误。\n【答案】正电荷移动方向\n【易错】电流方向是正电荷移动方向，和电子方向相反。"
  },
  { id: "ne1302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电压单位", type: "single", typeLabel: "单选",
    stem: "电压的国际单位是（　）", options: ["安培(A)", "伏特(V)", "欧姆(Ω)", "瓦特(W)"], answer: "伏特(V)",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "单位"],
    analysis: "【题干】电压单位？\n【考点】基本物理量单位\n【详细解答】\n1. 电压：伏特(V)。\n2. 电流：安培(A)。\n3. 电阻：欧姆(Ω)。\n4. 功率：瓦特(W)。\n【选项逐个说】\nA. 安培(A) → 错误：电流单位。\nB. 伏特(V) → 正确。\nC. 欧姆(Ω) → 错误：电阻。\nD. 瓦特(W) → 错误：功率。\n【答案】伏特(V)\n【易错】电压单位伏特。"
  },
  { id: "ne1303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "功率计算", type: "single", typeLabel: "单选",
    stem: "一个电阻两端电压12V，流过电流2A，消耗功率是（　）", options: ["6W", "24W", "14W", "10W"], answer: "24W",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "功率"],
    analysis: "【题干】U=12V，I=2A，P=？\n【考点】功率计算\n【详细解答】\n1. 功率P = U × I。\n2. P = 12V × 2A = 24W。\n【选项逐个说】\nA. 6W → 错误：除了。\nB. 24W → 正确。\nC. 14W → 错误：加了。\nD. 10W → 错误。\n【答案】24W\n【易错】P=UI。"
  },
  { id: "ne1304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电路组成", type: "single", typeLabel: "单选",
    stem: "完整电路最基本的组成部分不包括（　）", options: ["电源", "负载", "导线", "开关电源"], answer: "开关电源",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "组成"],
    analysis: "【题干】电路基本组成不包括？\n【考点】电路组成\n【详细解答】\n1. 电路基本组成：电源、负载、导线、控制器件（开关）。\n2. 开关电源是具体设备，不是基本组成部分。\n【选项逐个说】\nA. 电源 → 错误：是。\nB. 负载 → 错误：是。\nC. 导线 → 错误：是。\nD. 开关电源 → 正确：不是基本组成。\n【答案】开关电源\n【易错】开关电源是设备不是基本组成。"
  },
  { id: "ne1305", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "开路", type: "single", typeLabel: "单选",
    stem: "电路开路时，电流等于（　）", options: ["0", "无穷大", "额定电流", "短路电流"], answer: "0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "开路"],
    analysis: "【题干】开路时电流？\n【考点】开路与短路\n【详细解答】\n1. 开路（断路）：电路断开，电阻无穷大，电流为0。\n2. 短路：导线直接接电源两端，电阻为0，电流无穷大（危险）。\n【选项逐个说】\nA. 0 → 正确：开路没电流。\nB. 无穷大 → 错误：那是短路。\nC. 额定电流 → 错误。\nD. 短路电流 → 错误。\n【答案】0\n【易错】开路电流0，短路电流大。"
  },

  // ===== 第2章 直流电路 =====
  { id: "ne2301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "串联电阻", type: "single", typeLabel: "单选",
    stem: "R1=10Ω，R2=20Ω，R3=30Ω串联，总电阻是（　）", options: ["10Ω", "30Ω", "60Ω", "20Ω"], answer: "60Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "串联"],
    analysis: "【题干】三个电阻串联总电阻？\n【考点】串联电阻计算\n【详细解答】\n1. 串联：R总 = R1+R2+R3。\n2. R总 = 10+20+30 = 60Ω。\n【选项逐个说】\nA. 10Ω → 错误。\nB. 30Ω → 错误。\nC. 60Ω → 正确。\nD. 20Ω → 错误。\n【答案】60Ω\n【易错】串联电阻相加。"
  },
  { id: "ne2302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "并联电阻", type: "single", typeLabel: "单选",
    stem: "两个10Ω电阻并联，总电阻是（　）", options: ["20Ω", "10Ω", "5Ω", "2.5Ω"], answer: "5Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "并联"],
    analysis: "【题干】两个10Ω并联总电阻？\n【考点】并联电阻计算\n【详细解答】\n1. 并联：1/R总 = 1/R1 + 1/R2。\n2. 1/R = 1/10 + 1/10 = 2/10 = 1/5。\n3. R = 5Ω。\n【选项逐个说】\nA. 20Ω → 错误：那是串联。\nB. 10Ω → 错误。\nC. 5Ω → 正确。\nD. 2.5Ω → 错误。\n【答案】5Ω\n【易错】相同电阻并联，总电阻是一半。"
  },
  { id: "ne2303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "基尔霍夫电流定律", type: "single", typeLabel: "单选",
    stem: "基尔霍夫电流定律（KCL）是指（　）", options: ["节点上流入电流之和等于流出电流之和", "回路电压之和为0", "电阻两端电压等于IR", "功率守恒"], answer: "节点上流入电流之和等于流出电流之和",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "KCL"],
    analysis: "【题干】KCL是指？\n【考点】基尔霍夫定律\n【详细解答】\n1. KCL（基尔霍夫电流定律）：任一节点，流入电流之和=流出电流之和。\n2. KVL（基尔霍夫电压定律）：任一回路，电压升之和=电压降之和。\n【选项逐个说】\nA. 节点上流入电流之和等于流出电流之和 → 正确。\nB. 回路电压之和为0 → 错误：那是KVL。\nC. 电阻两端电压等于IR → 错误：那是欧姆定律。\nD. 功率守恒 → 错误。\n【答案】节点上流入电流之和等于流出电流之和\n【易错】KCL节点电流，KVL回路电压。"
  },
  { id: "ne2304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "基尔霍夫电压定律", type: "single", typeLabel: "单选",
    stem: "基尔霍夫电压定律（KVL）是指（　）", options: ["节点电流守恒", "沿回路绕行一周，各段电压代数和为0", "电阻电压等于IR", "电源电动势等于端电压"], answer: "沿回路绕行一周，各段电压代数和为0",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "KVL"],
    analysis: "【题干】KVL是指？\n【考点】基尔霍夫电压定律\n【详细解答】\n1. KVL：沿任一闭合回路绕行一周，所有电压降的代数和为0。\n2. 本质是能量守恒。\n【选项逐个说】\nA. 节点电流守恒 → 错误：那是KCL。\nB. 沿回路绕行一周，各段电压代数和为0 → 正确。\nC. 电阻电压等于IR → 错误：欧姆定律。\nD. 电源电动势等于端电压 → 错误。\n【答案】沿回路绕行一周，各段电压代数和为0\n【易错】KVL回路电压和为0。"
  },
  { id: "ne2305", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "戴维南定理", type: "single", typeLabel: "单选",
    stem: "戴维南等效电路是指（　）", options: ["理想电压源串联等效电阻", "理想电流源并联等效电阻", "理想电压源并联电阻", "理想电流源串联电阻"], answer: "理想电压源串联等效电阻",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "戴维南"],
    analysis: "【题干】戴维南等效电路？\n【考点】戴维南与诺顿\n【详细解答】\n1. 戴维南等效：理想电压源Uoc 串联 等效电阻Req。\n2. 诺顿等效：理想电流源Isc 并联 等效电阻Req。\n3. 两者可以互相转换。\n【选项逐个说】\nA. 理想电压源串联等效电阻 → 正确。\nB. 理想电流源并联等效电阻 → 错误：那是诺顿。\nC. 理想电压源并联电阻 → 错误。\nD. 理想电流源串联电阻 → 错误。\n【答案】理想电压源串联等效电阻\n【易错】戴维南电压源串电阻，诺顿电流源并电阻。"
  },
  { id: "ne2306", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "电源等效变换", type: "single", typeLabel: "单选",
    stem: "理想电压源与理想电流源之间（　）等效变换", options: ["可以", "不可以", "在一定条件下可以", "不确定"], answer: "不可以",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "电源等效"],
    analysis: "【题干】理想电压源与理想电流源能不能等效变换？\n【考点】电源等效变换条件\n【详细解答】\n1. 理想电压源（内阻为0）和理想电流源（内阻无穷大）之间不能等效变换。\n2. 实际电压源（理想电压源串电阻）和实际电流源（理想电流源并电阻）可以等效变换。\n【选项逐个说】\nA. 可以 → 错误：理想的不行。\nB. 不可以 → 正确：理想源之间不能。\nC. 在一定条件下可以 → 错误。\nD. 不确定 → 错误。\n【答案】不可以\n【易错】理想电压源和理想电流源之间不能等效变换。"
  },
  { id: "ne2307", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "电桥平衡", type: "single", typeLabel: "单选",
    stem: "直流电桥平衡的条件是（　）", options: ["对臂电阻乘积相等", "邻臂电阻相等", "四个电阻都相等", "电源电压相等"], answer: "对臂电阻乘积相等",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["直流电路", "电桥"],
    analysis: "【题干】电桥平衡条件？\n【考点】惠斯通电桥\n【详细解答】\n1. 电桥平衡：检流计中电流为0。\n2. 条件：对臂电阻乘积相等：R1×R4 = R2×R3。\n【选项逐个说】\nA. 对臂电阻乘积相等 → 正确。\nB. 邻臂电阻相等 → 错误。\nC. 四个电阻都相等 → 错误：是特殊情况。\nD. 电源电压相等 → 错误。\n【答案】对臂电阻乘积相等\n【易错】电桥平衡：对角电阻乘积相等。"
  },

  // ===== 第3章 交流电路 =====
  { id: "ne3301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "正弦量三要素", type: "single", typeLabel: "单选",
    stem: "正弦交流电的三要素是（　）", options: ["最大值、角频率、初相位", "电压、电流、功率", "电阻、电感、电容", "周期、频率、角频率"], answer: "最大值、角频率、初相位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "三要素"],
    analysis: "【题干】正弦交流电三要素？\n【考点】正弦量\n【详细解答】\n1. 最大值（幅值）：决定大小。\n2. 角频率（频率）：决定变化快慢。\n3. 初相位：决定初始位置。\n【选项逐个说】\nA. 最大值、角频率、初相位 → 正确。\nB. 电压、电流、功率 → 错误。\nC. 电阻、电感、电容 → 错误。\nD. 周期、频率、角频率 → 错误。\n【答案】最大值、角频率、初相位\n【易错】三要素：幅值、频率、初相。"
  },
  { id: "ne3302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "有效值", type: "single", typeLabel: "单选",
    stem: "市电220V指的是交流电的（　）", options: ["最大值", "有效值", "瞬时值", "平均值"], answer: "有效值",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "有效值"],
    analysis: "【题干】220V是指什么值？\n【考点】有效值概念\n【详细解答】\n1. 市电220V是有效值。\n2. 最大值Um = U × √2 ≈ 220 × 1.414 ≈ 311V。\n3. 电器上标的额定电压都是有效值。\n【选项逐个说】\nA. 最大值 → 错误。\nB. 有效值 → 正确。\nC. 瞬时值 → 错误。\nD. 平均值 → 错误。\n【答案】有效值\n【易错】市电220V是有效值，最大值311V。"
  },
  { id: "ne3303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "频率与周期", type: "single", typeLabel: "单选",
    stem: "我国市电频率是50Hz，周期是（　）", options: ["0.02秒", "0.2秒", "2秒", "50秒"], answer: "0.02秒",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "周期频率"],
    analysis: "【题干】f=50Hz，T=？\n【考点】周期与频率关系\n【详细解答】\n1. T = 1/f。\n2. T = 1/50 = 0.02秒。\n【选项逐个说】\nA. 0.02秒 → 正确。\nB. 0.2秒 → 错误。\nC. 2秒 → 错误。\nD. 50秒 → 错误。\n【答案】0.02秒\n【易错】T=1/f。"
  },
  { id: "ne3304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "相位差", type: "single", typeLabel: "单选",
    stem: "u1=sin(ωt+30°)，u2=sin(ωt-60°)，则（　）", options: ["u1超前u2 90°", "u1滞后u2 90°", "同相", "反相"], answer: "u1超前u2 90°",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "相位差"],
    analysis: "【题干】两个正弦量相位差？\n【考点】相位差计算\n【详细解答】\n1. 相位差 = φ1 - φ2。\n2. = 30° - (-60°) = 90°。\n3. u1超前u2 90°。\n【选项逐个说】\nA. u1超前u2 90° → 正确。\nB. u1滞后u2 90° → 错误。\nC. 同相 → 错误。\nD. 反相 → 错误：那是180°。\n【答案】u1超前u2 90°\n【易错】相位差=初相之差。"
  },
  { id: "ne3305", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "有功功率", type: "single", typeLabel: "单选",
    stem: "纯电阻电路中，有功功率P等于（　）", options: ["UI", "UIcosφ", "UIsinφ", "S"], answer: "UI",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "功率"],
    analysis: "【题干】纯电阻有功功率？\n【考点】交流电路功率\n【详细解答】\n1. 有功功率P = UIcosφ。\n2. 纯电阻电路cosφ=1，所以P=UI。\n3. 纯电感/电容有功功率为0。\n【选项逐个说】\nA. UI → 正确：纯电阻cosφ=1。\nB. UIcosφ → 错误：一般公式。\nC. UIsinφ → 错误：那是无功。\nD. S → 错误：那是视在功率。\n【答案】UI\n【易错】纯电阻cosφ=1。"
  },
  { id: "ne3306", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "功率因数", type: "single", typeLabel: "单选",
    stem: "功率因数cosφ等于（　）", options: ["P/S", "Q/S", "P/Q", "S/Q"], answer: "P/S",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "功率因数"],
    analysis: "【题干】功率因数等于？\n【考点】功率三角形\n【详细解答】\n1. 视在功率S=UI。\n2. 有功功率P=UIcosφ。\n3. 无功功率Q=UIsinφ。\n4. cosφ = P/S。\n【选项逐个说】\nA. P/S → 正确。\nB. Q/S → 错误：那是sinφ。\nC. P/Q → 错误。\nD. S/Q → 错误。\n【答案】P/S\n【易错】cosφ=P/S。"
  },

  // ===== 第4章 暂态分析 =====
  { id: "ne4301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "换路定则", type: "single", typeLabel: "单选",
    stem: "换路定则是指（　）", options: ["电容电压不能突变", "电容电流不能突变", "电阻电压不能突变", "电源电压不能突变"], answer: "电容电压不能突变",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["暂态分析", "换路定则"],
    analysis: "【题干】换路定则？\n【考点】换路定则\n【详细解答】\n1. 换路定则：uc(0+) = uc(0-)，电感电流iL(0+) = iL(0-)。\n2. 电容电压不能突变，电感电流不能突变。\n【选项逐个说】\nA. 电容电压不能突变 → 正确。\nB. 电容电流不能突变 → 错误：电流可以突变。\nC. 电阻电压不能突变 → 错误。\nD. 电源电压不能突变 → 错误。\n【答案】电容电压不能突变\n【易错】电容电压不突变，电感电流不突变。"
  },
  { id: "ne4302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "时间常数", type: "single", typeLabel: "单选",
    stem: "RC电路时间常数τ等于（　）", options: ["RC", "R/C", "C/R", "R+C"], answer: "RC",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["暂态分析", "时间常数"],
    analysis: "【题干】RC时间常数？\n【考点】时间常数\n【详细解答】\n1. RC电路：τ = R × C。\n2. RL电路：τ = L / R。\n3. τ越大，过渡过程越慢。\n【选项逐个说】\nA. RC → 正确。\nB. R/C → 错误。\nC. C/R → 错误。\nD. R+C → 错误。\n【答案】RC\n【易错】RC时间常数=R×C。"
  },

  // ===== 第5章 二极管 =====
  { id: "ne5301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "二极管反向击穿", type: "single", typeLabel: "单选",
    stem: "二极管反向击穿后，（　）", options: ["一定损坏", "只要限制电流就不一定损坏", "一定恢复不了", "变为导线"], answer: "只要限制电流就不一定损坏",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["二极管", "反向击穿"],
    analysis: "【题干】二极管反向击穿后？\n【考点】二极管击穿特性\n【详细解答】\n1. 反向击穿分电击穿（齐纳击穿、雪崩击穿）和热击穿。\n2. 电击穿：只要限制电流，去掉电压还能恢复。\n3. 热击穿：功耗太大烧坏了，不能恢复。\n【选项逐个说】\nA. 一定损坏 → 错误。\nB. 只要限制电流就不一定损坏 → 正确。\nC. 一定恢复不了 → 错误。\nD. 变为导线 → 错误。\n【答案】只要限制电流就不一定损坏\n【易错】稳压二极管就是工作在反向击穿区。"
  },
  { id: "ne5302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "稳压二极管", type: "single", typeLabel: "单选",
    stem: "稳压二极管工作在（　）", options: ["正向导通区", "反向击穿区", "反向截止区", "饱和区"], answer: "反向击穿区",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["二极管", "稳压管"],
    analysis: "【题干】稳压二极管工作在？\n【考点】稳压二极管\n【详细解答】\n1. 稳压二极管特殊设计工作在反向击穿区。\n2. 反向击穿后电压基本不变，起到稳压作用。\n3. 使用时要串联限流电阻。\n【选项逐个说】\nA. 正向导通区 → 错误。\nB. 反向击穿区 → 正确。\nC. 反向截止区 → 错误。\nD. 饱和区 → 错误：那是三极管。\n【答案】反向击穿区\n【易错】稳压管反向击穿稳压。"
  },
  { id: "ne5303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "半波整流", type: "single", typeLabel: "单选",
    stem: "单相半波整流电路，输出直流电压平均值是（　）", options: ["0.45U", "0.9U", "1.2U", "1.414U"], answer: "0.45U",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["整流电路", "半波"],
    analysis: "【题干】半波整流输出直流平均值？\n【考点】整流电路\n【详细解答】\n1. 半波整流：Uo = 0.45U（U是交流有效值）。\n2. 桥式全波整流：Uo = 0.9U。\n3. 滤波后带载：Uo ≈ 1.2U。\n【选项逐个说】\nA. 0.45U → 正确：半波。\nB. 0.9U → 错误：桥式。\nC. 1.2U → 错误：滤波后。\nD. 1.414U → 错误：最大值。\n【答案】0.45U\n【易错】半波0.45，全波0.9。"
  },
  { id: "ne5304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "稳压电路", type: "single", typeLabel: "单选",
    stem: "直流电源中稳压电路的作用是（　）", options: ["把交流变直流", "让输出电压不受电网波动和负载变化影响", "减小纹波", "升高电压"], answer: "让输出电压不受电网波动和负载变化影响",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电源", "稳压"],
    analysis: "【题干】稳压电路作用？\n【考点】直流电源组成\n【详细解答】\n1. 整流：交流变脉动直流。\n2. 滤波：减小脉动。\n3. 稳压：让输出电压稳定，不受电网和负载影响。\n【选项逐个说】\nA. 把交流变直流 → 错误：那是整流。\nB. 让输出电压不受电网波动和负载变化影响 → 正确。\nC. 减小纹波 → 错误：那是滤波。\nD. 升高电压 → 错误。\n【答案】让输出电压不受电网波动和负载变化影响\n【易错】稳压让输出稳定。"
  },

  // ===== 第6章 三极管 =====
  { id: "ne6301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "三极管电流关系", type: "single", typeLabel: "单选",
    stem: "三极管三个电极电流关系正确的是（　）", options: ["IE = IB + IC", "IB = IC + IE", "IC = IB + IE", "IE = IB = IC"], answer: "IE = IB + IC",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["三极管", "电流关系"],
    analysis: "【题干】三极管电流关系？\n【考点】三极管电流分配\n【详细解答】\n1. 发射极电流IE = 基极电流IB + 集电极电流IC。\n2. IC = β × IB。\n3. IE ≈ IC（因为IB很小）。\n【选项逐个说】\nA. IE = IB + IC → 正确。\nB. IB = IC + IE → 错误。\nC. IC = IB + IE → 错误。\nD. IE = IB = IC → 错误。\n【答案】IE = IB + IC\n【易错】发射极电流是基极加集电极。"
  },
  { id: "ne6302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "放大倍数", type: "single", typeLabel: "单选",
    stem: "三极管电流放大系数β等于（　）", options: ["IC / IB", "IB / IC", "IE / IB", "IC / IE"], answer: "IC / IB",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["三极管", "放大倍数"],
    analysis: "【题干】β等于？\n【考点】三极管放大系数\n【详细解答】\n1. β = IC / IB（共射电流放大系数）。\n2. 一般β在几十到几百。\n3. β越大放大能力越强。\n【选项逐个说】\nA. IC / IB → 正确。\nB. IB / IC → 错误：倒数。\nC. IE / IB → 错误。\nD. IC / IE → 错误：那是α。\n【答案】IC / IB\n【易错】β=IC/IB。"
  },
  { id: "ne6303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "分压偏置电路", type: "single", typeLabel: "单选",
    stem: "分压式偏置电路能稳定静态工作点，主要靠（　）", options: ["发射极电阻Re的电流负反馈", "基极电阻Rb", "集电极电阻Rc", "电源Vcc"], answer: "发射极电阻Re的电流负反馈",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["三极管", "静态工作点"],
    analysis: "【题干】分压偏置为什么能稳定工作点？\n【考点】分压式偏置电路\n【详细解答】\n1. 发射极电阻Re上的电压Ve = IE×Re。\n2. 温度升高→IC增大→IE增大→Ve增大→Vbe=Vb-Ve减小→IB减小→IC减小。\n3. 这就是电流负反馈稳定工作点。\n【选项逐个说】\nA. 发射极电阻Re的电流负反馈 → 正确。\nB. 基极电阻Rb → 错误。\nC. 集电极电阻Rc → 错误。\nD. 电源Vcc → 错误。\n【答案】发射极电阻Re的电流负反馈\n【易错】Re负反馈稳工作点。"
  },
  { id: "ne6304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "共射放大电路失真", type: "single", typeLabel: "单选",
    stem: "静态工作点太高会产生（　）", options: ["饱和失真", "截止失真", "双向失真", "线性失真"], answer: "饱和失真",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["三极管", "失真"],
    analysis: "【题干】工作点太高什么失真？\n【考点】放大电路失真\n【详细解答】\n1. 工作点太高→IB太大→三极管进入饱和区→负半周削顶→饱和失真。\n2. 工作点太低→IB太小→三极管进入截止区→正半周削顶→截止失真。\n3. 饱和失真：输出波形负半周被削。\n【选项逐个说】\nA. 饱和失真 → 正确。\nB. 截止失真 → 错误：那是工作点太低。\nC. 双向失真 → 错误：信号太大。\nD. 线性失真 → 错误。\n【答案】饱和失真\n【易错】上饱和下截止。"
  },

  // ===== 第7章 运放 =====
  { id: "ne7301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", knowledgePoint: "运放虚短", type: "single", typeLabel: "单选",
    stem: "理想运放工作在线性区时，同相端和反相端电压相等，称为（　）", options: ["虚短", "虚断", "虚地", "虚接"], answer: "虚短",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运放", "虚短虚断"],
    analysis: "【题干】两端电压相等叫？\n【考点】运放两虚\n【详细解答】\n1. 虚短：u+ ≈ u-（因为开环差模增益无穷大）。\n2. 虚断：i+ ≈ i- ≈ 0（因为输入电阻无穷大）。\n【选项逐个说】\nA. 虚短 → 正确：电压相等。\nB. 虚断 → 错误：电流为0。\nC. 虚地 → 错误：反相端接地时。\nD. 虚接 → 错误。\n【答案】虚短\n【易错】虚短电压等，虚断电流0。"
  },
  { id: "ne7302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", knowledgePoint: "运放虚断", type: "single", typeLabel: "单选",
    stem: "理想运放输入电流为0，称为（　）", options: ["虚短", "虚断", "虚地", "虚接"], answer: "虚断",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运放", "虚短虚断"],
    analysis: "【题干】输入电流为0叫？\n【考点】运放两虚\n【详细解答】\n1. 虚断：流入运放输入端的电流为0。\n2. 因为理想运放输入电阻无穷大。\n【选项逐个说】\nA. 虚短 → 错误：电压。\nB. 虚断 → 正确：电流为0。\nC. 虚地 → 错误。\nD. 虚接 → 错误。\n【答案】虚断\n【易错】虚断=电流为0。"
  },
  { id: "ne7303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", knowledgePoint: "反相求和电路", type: "single", typeLabel: "单选",
    stem: "反相加法电路两个输入ui1=0.2V，ui2=0.3V，R1=R2=Rf=10kΩ，输出uo是（　）", options: ["-0.5V", "0.5V", "-0.1V", "0.1V"], answer: "-0.5V",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["运放", "加法电路"],
    analysis: "【题干】反相加法计算？\n【考点】反相加法运算\n【详细解答】\n1. 反相加法：uo = -Rf(ui1/R1 + ui2/R2)。\n2. Rf=R1=R2=10k，所以：\n3. uo = -(ui1 + ui2) = -(0.2+0.3) = -0.5V。\n【选项逐个说】\nA. -0.5V → 正确。\nB. 0.5V → 错误：忘了负号。\nC. -0.1V → 错误。\nD. 0.1V → 错误。\n【答案】-0.5V\n【易错】反相加法有负号。"
  },
  { id: "ne7304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", knowledgePoint: "电压跟随器", type: "single", typeLabel: "单选",
    stem: "电压跟随器的电压放大倍数是（　）", options: ["1", "0", "-1", "无穷大"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运放", "跟随器"],
    analysis: "【题干】电压跟随器放大倍数？\n【考点】电压跟随器\n【详细解答】\n1. 电压跟随器：输出直接接反相端，同相端输入。\n2. Auf = 1。\n3. 作用：缓冲、隔离、提高带载能力。\n【选项逐个说】\nA. 1 → 正确。\nB. 0 → 错误。\nC. -1 → 错误。\nD. 无穷大 → 错误。\n【答案】1\n【易错】跟随器输出等于输入。"
  },

  // ===== 数字电路 =====
  { id: "ne8301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "数制转换", type: "single", typeLabel: "单选",
    stem: "二进制数1010转换成十进制是（　）", options: ["10", "12", "8", "14"], answer: "10",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数字电路", "数制"],
    analysis: "【题干】1010B转十进制？\n【考点】数制转换\n【详细解答】\n1. 1010B = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8+0+2+0 = 10。\n【选项逐个说】\nA. 10 → 正确。\nB. 12 → 错误。\nC. 8 → 错误。\nD. 14 → 错误。\n【答案】10\n【易错】二进制转十进制按权展开。"
  },
  { id: "ne8302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "十进制转二进制", type: "single", typeLabel: "单选",
    stem: "十进制数13转换成二进制是（　）", options: ["1101", "1011", "1110", "1100"], answer: "1101",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数字电路", "数制"],
    analysis: "【题干】13转二进制？\n【考点】数制转换\n【详细解答】\n1. 13 = 8+4+1 = 2³+2²+2⁰ = 1101B。\n【选项逐个说】\nA. 1101 → 正确。\nB. 1011 → 错误：那是11。\nC. 1110 → 错误：那是14。\nD. 1100 → 错误：那是12。\n【答案】1101\n【易错】除2取余。"
  },
  { id: "ne8303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "八进制十六进制", type: "single", typeLabel: "单选",
    stem: "十六进制数A转换成十进制是（　）", options: ["10", "11", "12", "9"], answer: "10",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数字电路", "数制"],
    analysis: "【题干】十六进制A是多少十进制？\n【考点】十六进制\n【详细解答】\n1. 十六进制：0~9对应0~9，A=10，B=11，...，F=15。\n【选项逐个说】\nA. 10 → 正确。\nB. 11 → 错误：那是B。\nC. 12 → 错误：那是C。\nD. 9 → 错误。\n【答案】10\n【易错】A=10，B=11。"
  },
  { id: "ne8304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "基本逻辑门", type: "single", typeLabel: "单选",
    stem: "或门的逻辑功能是（　）", options: ["全1出1，有0出0", "有1出1，全0出0", "全1出0，有0出1", "入1出0，入0出1"], answer: "有1出1，全0出0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["门电路", "或门"],
    analysis: "【题干】或门逻辑功能？\n【考点】基本逻辑门\n【详细解答】\n1. 与门：全1出1，有0出0。\n2. 或门：有1出1，全0出0。\n3. 非门：入1出0，入0出1。\n【选项逐个说】\nA. 全1出1，有0出0 → 错误：与门。\nB. 有1出1，全0出0 → 正确：或门。\nC. 全1出0，有0出1 → 错误：与非。\nD. 入1出0，入0出1 → 错误：非门。\n【答案】有1出1，全0出0\n【易错】或门只要有1就出1。"
  },
  { id: "ne8305", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "异或门", type: "single", typeLabel: "单选",
    stem: "异或门的逻辑功能是（　）", options: ["相同出1，不同出0", "相同出0，不同出1", "全1出1", "全0出0"], answer: "相同出0，不同出1",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "异或"],
    analysis: "【题干】异或门功能？\n【考点】异或门\n【详细解答】\n1. 异或：A⊕B = A'B + AB'。\n2. 相同出0，不同出1。\n3. 例：0⊕0=0，0⊕1=1，1⊕0=1，1⊕1=0。\n【选项逐个说】\nA. 相同出1，不同出0 → 错误：那是同或。\nB. 相同出0，不同出1 → 正确：异或。\nC. 全1出1 → 错误。\nD. 全0出0 → 错误。\n【答案】相同出0，不同出1\n【易错】异或不同出1。"
  },

  // ===== 第9章 组合逻辑 =====
  { id: "ne9301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", knowledgePoint: "编码器", type: "single", typeLabel: "单选",
    stem: "编码器的功能是（　）", options: ["把输入信号转换成二进制代码", "把二进制代码转换成输出信号", "比较两个数", "加法运算"], answer: "把输入信号转换成二进制代码",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["组合逻辑", "编码器"],
    analysis: "【题干】编码器功能？\n【考点】编码器与译码器\n【详细解答】\n1. 编码器：把某种信号（比如按键）转换成二进制代码。\n2. 译码器：把二进制代码翻译成输出信号。\n3. 编码器是译码器的逆过程。\n【选项逐个说】\nA. 把输入信号转换成二进制代码 → 正确。\nB. 把二进制代码转换成输出信号 → 错误：那是译码器。\nC. 比较两个数 → 错误。\nD. 加法运算 → 错误。\n【答案】把输入信号转换成二进制代码\n【易错】编码是变成代码，译码是翻译出来。"
  },
  { id: "ne9302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", knowledgePoint: "译码器", type: "single", typeLabel: "单选",
    stem: "3线-8线译码器输入3位二进制，输出（　）个信号", options: ["3", "8", "16", "4"], answer: "8",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["组合逻辑", "译码器"],
    analysis: "【题干】3线-8线译码器？\n【考点】译码器\n【详细解答】\n1. n线-2ⁿ线译码器。\n2. 3线-8线：输入3位，输出8个。\n3. 74LS138就是3线-8线译码器。\n【选项逐个说】\nA. 3 → 错误：那是输入。\nB. 8 → 正确：输出8个。\nC. 16 → 错误：那是4线-16线。\nD. 4 → 错误。\n【答案】8\n【易错】n输入，2^n输出。"
  },
  { id: "ne9303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", knowledgePoint: "加法器", type: "single", typeLabel: "单选",
    stem: "半加器实现（　）", options: ["两个1位二进制数相加", "两个多位二进制数相加", "带进位的加法", "减法"], answer: "两个1位二进制数相加",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["组合逻辑", "加法器"],
    analysis: "【题干】半加器实现？\n【考点】加法器\n【详细解答】\n1. 半加器：两个1位二进制数相加，不考虑低位进位。\n2. 全加器：两个1位加数+低位进位，三个数相加。\n【选项逐个说】\nA. 两个1位二进制数相加 → 正确：半加。\nB. 两个多位二进制数相加 → 错误。\nC. 带进位的加法 → 错误：那是全加器。\nD. 减法 → 错误。\n【答案】两个1位二进制数相加\n【易错】半加不考虑进位，全加考虑进位。"
  },

  // ===== 第10章 时序逻辑 =====
  { id: "ne10301", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", knowledgePoint: "时序电路特点", type: "single", typeLabel: "单选",
    stem: "时序逻辑电路的输出取决于（　）", options: ["当前输入", "原来状态", "当前输入和原来状态", "电源电压"], answer: "当前输入和原来状态",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["时序逻辑", "特点"],
    analysis: "【题干】时序电路输出取决于？\n【考点】时序与组合逻辑区别\n【详细解答】\n1. 组合逻辑：输出只取决于当前输入。\n2. 时序逻辑：输出取决于当前输入+原来状态。\n3. 时序逻辑有记忆元件（触发器）。\n【选项逐个说】\nA. 当前输入 → 错误：那是组合。\nB. 原来状态 → 错误：不全面。\nC. 当前输入和原来状态 → 正确。\nD. 电源电压 → 错误。\n【答案】当前输入和原来状态\n【易错】时序=输入+原状态。"
  },
  { id: "ne10302", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", knowledgePoint: "寄存器", type: "single", typeLabel: "单选",
    stem: "寄存器的主要功能是（　）", options: ["存储二进制代码", "计数", "译码", "加法"], answer: "存储二进制代码",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["时序逻辑", "寄存器"],
    analysis: "【题干】寄存器功能？\n【考点】寄存器\n【详细解答】\n1. 寄存器：用来存放二进制代码。\n2. 由触发器组成，一个触发器存1位。\n3. 移位寄存器还能移位。\n【选项逐个说】\nA. 存储二进制代码 → 正确。\nB. 计数 → 错误：那是计数器。\nC. 译码 → 错误。\nD. 加法 → 错误。\n【答案】存储二进制代码\n【易错】寄存器存数据，计数器计数。"
  },
  { id: "ne10303", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", knowledgePoint: "计数器", type: "single", typeLabel: "单选",
    stem: "N进制计数器需要多少个触发器？（　）", options: ["N个", "log2N个（向上取整）", "2N个", "N/2个"], answer: "log2N个（向上取整）",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["时序逻辑", "计数器"],
    analysis: "【题干】N进制计数器要几个触发器？\n【考点】计数器\n【详细解答】\n1. n个触发器有2ⁿ个状态。\n2. N进制需要2ⁿ ≥ N，n = log2N（向上取整）。\n3. 例：十进制需要4个触发器（2⁴=16≥10）。\n【选项逐个说】\nA. N个 → 错误。\nB. log2N个（向上取整） → 正确。\nC. 2N个 → 错误。\nD. N/2个 → 错误。\n【答案】log2N个（向上取整）\n【易错】n触发器最多2^n个状态。"
  },
  { id: "ne10304", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", knowledgePoint: "555定时器", type: "single", typeLabel: "单选",
    stem: "555定时器不能用来构成（　）", options: ["施密特触发器", "单稳态触发器", "多谐振荡器", "计数器"], answer: "计数器",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["555定时器", "应用"],
    analysis: "【题干】555不能构成？\n【考点】555应用\n【详细解答】\n1. 555定时器三种典型应用：\n2. 多谐振荡器（产生方波）。\n3. 单稳态触发器（定时）。\n4. 施密特触发器（波形整形）。\n【选项逐个说】\nA. 施密特触发器 → 错误：能。\nB. 单稳态触发器 → 错误：能。\nC. 多谐振荡器 → 错误：能。\nD. 计数器 → 正确：不能。\n【答案】计数器\n【易错】555做信号产生和整形，不做计数器。"
  },

  // ===== 判断题 =====
  { id: "ne1306", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电流参考方向", type: "judge", typeLabel: "判断",
    stem: "电流的参考方向可以任意选定。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "参考方向"],
    analysis: "【题干】参考方向可以任意选？\n【考点】参考方向\n【详细解答】\n1. 电流电压的参考方向是人为任意选定的。\n2. 算出来为正说明实际方向与参考方向相同。\n3. 算出来为负说明实际方向与参考方向相反。\n【答案】正确\n【易错】参考方向是人为选的。"
  },
  { id: "ne2308", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "并联电路电压", type: "judge", typeLabel: "判断",
    stem: "并联电路中各电阻两端电压相等。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "并联"],
    analysis: "【题干】并联各电阻电压相等？\n【考点】并联电路特点\n【详细解答】\n1. 并联电路：各支路两端电压相等。\n2. 总电流等于各支路电流之和。\n3. 串联电路各电阻电流相等。\n【答案】正确\n【易错】并联电压相等，串联电流相等。"
  },
  { id: "ne3307", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "功率因数", type: "judge", typeLabel: "判断",
    stem: "提高功率因数可以提高电源利用率。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "功率因数"],
    analysis: "【题干】提高功率因数提高电源利用率？\n【考点】功率因数提高\n【详细解答】\n1. cosφ越低，无功功率越大，电源带的有功负载越少。\n2. 提高cosφ可以提高设备利用率，减少线路损耗。\n【答案】正确\n【易错】功率因数越高越好。"
  },
  { id: "ne5305", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "二极管单向导电", type: "judge", typeLabel: "判断",
    stem: "二极管具有单向导电性。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "单向导电"],
    analysis: "【题干】二极管单向导电？\n【考点】二极管特性\n【详细解答】\n1. 二极管核心特性：单向导电性。\n2. 正向导通，反向截止。\n【答案】正确\n【易错】二极管单向导电。"
  },
  { id: "ne8306", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "TTL与非门悬空", type: "judge", typeLabel: "判断",
    stem: "TTL与非门输入端悬空相当于输入高电平。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "TTL"],
    analysis: "【题干】TTL与非门悬空相当于高电平？\n【考点】TTL门电路\n【详细解答】\n1. TTL与非门输入悬空相当于接高电平。\n2. CMOS门电路输入不能悬空（不确定状态）。\n【答案】正确\n【易错】TTL悬空=高，CMOS不能悬空。"
  }
]);
