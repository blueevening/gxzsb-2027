/* 新增题库 - 2026考纲版 - 电工电子技术基础 第二批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 电路基本概念 - 补充 =====
  {
    id: "ne1101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "欧姆定律", type: "single", typeLabel: "单选",
    stem: "欧姆定律适用于（　）",
    options: ["线性电阻", "非线性电阻", "任何电路", "金属和半导体"],
    answer: "线性电阻",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "欧姆定律"],
    analysis: "【题干】欧姆定律适用于？\n【考点】欧姆定律适用范围\n【详细解答】\n1. 欧姆定律：U=IR，适用于线性电阻。\n2. 线性电阻：阻值不随电压电流变化，伏安特性是直线。\n3. 非线性电阻（二极管等）不满足欧姆定律。\n【选项逐个说】\nA. 线性电阻 → 正确。\nB. 非线性电阻 → 错误。\nC. 任何电路 → 错误。\nD. 金属和半导体 → 错误：半导体是非线性的。\n【答案】线性电阻\n【易错】欧姆定律只适用于线性电阻。"
  },
  {
    id: "ne1102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电功率", type: "single", typeLabel: "单选",
    stem: "额定值为220V/100W的灯泡，接在110V电源上，实际功率约为（　）",
    options: ["100W", "50W", "25W", "12.5W"],
    answer: "25W",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["电路基本概念", "功率"],
    analysis: "【题干】220V/100W灯泡接110V，实际功率？\n【考点】功率与电压关系\n【详细解答】\n1. 先算电阻：R = U²/P = 220²/100 = 484Ω。\n2. 接110V时：P实 = U实²/R = 110²/484 = 12100/484 = 25W。\n3. 功率与电压平方成正比：电压减半，功率变1/4。\n【选项逐个说】\nA. 100W → 错误：那是额定功率。\nB. 50W → 错误：不是正比关系。\nC. 25W → 正确：电压减半功率1/4。\nD. 12.5W → 错误。\n【答案】25W\n【易错】P与U²成正比，不是正比。"
  },
  {
    id: "ne1103", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电能单位", type: "single", typeLabel: "单选",
    stem: "日常生活中说的1度电等于（　）",
    options: ["1焦耳", "1瓦秒", "1千瓦时", "1千瓦"],
    answer: "1千瓦时",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "电能"],
    analysis: "【题干】1度电等于多少？\n【考点】电能单位\n【详细解答】\n1. 1度电 = 1千瓦时(kWh)。\n2. 1kWh = 1000W × 3600s = 3.6×10⁶ J。\n3. 焦耳(J)是国际单位，度是日常用电单位。\n【选项逐个说】\nA. 1焦耳 → 错误：太小了。\nB. 1瓦秒 → 错误：就是1焦耳。\nC. 1千瓦时 → 正确。\nD. 1千瓦 → 错误：那是功率单位。\n【答案】1千瓦时\n【易错】1度=1kWh=3.6×10⁶J。"
  },
  {
    id: "ne1104", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电流方向", type: "judge", typeLabel: "判断",
    stem: "金属导体中，自由电子移动的方向就是电流的方向。",
    options: ["正确", "错误"],
    answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "电流方向"],
    analysis: "【题干】金属中自由电子移动方向就是电流方向。\n【考点】电流方向\n【详细解答】\n1. 物理学规定：电流方向是正电荷定向移动的方向。\n2. 金属中实际移动的是自由电子（负电荷）。\n3. 电子移动方向与电流方向相反。\n【答案】错误\n【易错】电子带负电，移动方向与电流方向相反。"
  },

  // ===== 第2章 直流电路 - 补充 =====
  {
    id: "ne2101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "电阻串联", type: "single", typeLabel: "单选",
    stem: "两个电阻R1=6Ω，R2=3Ω串联，总电阻为（　）",
    options: ["2Ω", "3Ω", "9Ω", "18Ω"],
    answer: "9Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电路", "串联"],
    analysis: "【题干】6Ω和3Ω串联，总电阻？\n【考点】串联电阻\n【详细解答】\n1. 串联总电阻 = R1 + R2。\n2. R = 6 + 3 = 9Ω。\n3. 串联越串越大。\n【选项逐个说】\nA. 2Ω → 错误：那是并联。\nB. 3Ω → 错误。\nC. 9Ω → 正确。\nD. 18Ω → 错误。\n【答案】9Ω\n【易错】串联相加，并联倒数相加。"
  },
  {
    id: "ne2102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "电阻并联", type: "single", typeLabel: "单选",
    stem: "两个电阻R1=6Ω，R2=3Ω并联，总电阻为（　）",
    options: ["2Ω", "3Ω", "9Ω", "18Ω"],
    answer: "2Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电路", "并联"],
    analysis: "【题干】6Ω和3Ω并联，总电阻？\n【考点】并联电阻\n【详细解答】\n1. 并联：1/R = 1/R1 + 1/R2。\n2. 1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2。\n3. R = 2Ω。\n【选项逐个说】\nA. 2Ω → 正确。\nB. 3Ω → 错误。\nC. 9Ω → 错误：那是串联。\nD. 18Ω → 错误。\n【答案】2Ω\n【易错】并联总电阻比分电阻都小。"
  },
  {
    id: "ne2103", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "KVL", type: "single", typeLabel: "单选",
    stem: "基尔霍夫电压定律KVL，正确的是（　）",
    options: ["任一节点电流和为0", "任一回路电压和为0", "只适用于直流", "只适用于电阻"],
    answer: "任一回路电压和为0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电路", "KVL"],
    analysis: "【题干】KVL正确的是？\n【考点】KVL定律\n【详细解答】\n1. KVL：沿任一闭合回路绕行一周，各段电压代数和为0。\n2. 适用于任何电路，任何回路。\n3. KCL是节点电流和为0。\n【选项逐个说】\nA. 任一节点电流和为0 → 错误：那是KCL。\nB. 任一回路电压和为0 → 正确。\nC. 只适用于直流 → 错误。\nD. 只适用于电阻 → 错误。\n【答案】任一回路电压和为0\n【易错】KCL节点，KVL回路。"
  },
  {
    id: "ne2104", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "戴维南定理", type: "single", typeLabel: "单选",
    stem: "某有源二端网络开路电压12V，等效内阻4Ω，外接负载R=8Ω，负载电流为（　）",
    options: ["1A", "1.5A", "2A", "3A"],
    answer: "1A",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "戴维南"],
    analysis: "【题干】Uoc=12V，Req=4Ω，R=8Ω，求负载电流？\n【考点】戴维南等效计算\n【详细解答】\n1. 戴维南等效：电压源Uoc串Req。\n2. 总电阻 = Req + R = 4 + 8 = 12Ω。\n3. 电流 I = Uoc / 总电阻 = 12V / 12Ω = 1A。\n【选项逐个说】\nA. 1A → 正确。\nB. 1.5A → 错误：没加Req。\nC. 2A → 错误。\nD. 3A → 错误。\n【答案】1A\n【易错】总电阻要加上等效内阻。"
  },
  {
    id: "ne2105", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "最大功率传输", type: "single", typeLabel: "单选",
    stem: "负载获得最大功率的条件是（　）",
    options: ["负载电阻最大", "负载电阻最小", "负载电阻等于电源内阻", "负载电阻等于电源内阻一半"],
    answer: "负载电阻等于电源内阻",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "最大功率"],
    analysis: "【题干】负载获得最大功率的条件？\n【考点】最大功率传输定理\n【详细解答】\n1. 当负载电阻RL = 电源内阻R0时，负载获得最大功率。\n2. 此时 Pmax = Uoc² / (4R0)。\n3. 此时效率只有50%（一半功率消耗在内阻上）。\n【选项逐个说】\nA. 负载电阻最大 → 错误。\nB. 负载电阻最小 → 错误。\nC. 负载电阻等于电源内阻 → 正确。\nD. 负载电阻等于电源内阻一半 → 错误。\n【答案】负载电阻等于电源内阻\n【易错】匹配时功率最大，不是效率最高。"
  },

  // ===== 第3章 交流电路 - 补充 =====
  {
    id: "ne3101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "有效值", type: "single", typeLabel: "单选",
    stem: "民用照明电压220V是指交流电的（　）",
    options: ["最大值", "有效值", "瞬时值", "平均值"],
    answer: "有效值",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["交流电路", "有效值"],
    analysis: "【题干】220V照明电压是指？\n【考点】交流电有效值\n【详细解答】\n1. 日常生活说的220V、380V都是有效值。\n2. 最大值 Um = U × √2 ≈ 220 × 1.414 ≈ 311V。\n3. 有效值是根据热效应定义的：和直流电产生相同热量的直流值。\n【选项逐个说】\nA. 最大值 → 错误：那是311V。\nB. 有效值 → 正确。\nC. 瞬时值 → 错误。\nD. 平均值 → 错误。\n【答案】有效值\n【易错】市电220V是有效值，最大值约311V。"
  },
  {
    id: "ne3102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "频率周期", type: "single", typeLabel: "单选",
    stem: "我国市电的频率是（　）",
    options: ["50Hz", "60Hz", "100Hz", "220Hz"],
    answer: "50Hz",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["交流电路", "频率"],
    analysis: "【题干】我国市电频率？\n【考点】市电参数\n【详细解答】\n1. 我国市电：频率50Hz，电压220V（有效值）。\n2. 周期 T = 1/f = 0.02秒。\n3. 美国日本是60Hz。\n【选项逐个说】\nA. 50Hz → 正确。\nB. 60Hz → 错误：那是美国。\nC. 100Hz → 错误。\nD. 220Hz → 错误：那是电压。\n【答案】50Hz\n【易错】中国50Hz，美国60Hz。"
  },
  {
    id: "ne3103", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "电容特性", type: "judge", typeLabel: "判断",
    stem: "电容在直流电路中相当于开路。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["交流电路", "电容"],
    analysis: "【题干】电容在直流电路中相当于开路。\n【考点】电容特性\n【详细解答】\n1. 电容通交流、隔直流。\n2. 直流稳态时，电容相当于开路（没有电流）。\n3. 电感通直流、阻交流。\n4. 直流稳态时，电感相当于短路。\n【答案】正确\n【易错】电容隔直通交，电感通直阻交。"
  },

  // ===== 第5章 二极管 - 补充 =====
  {
    id: "ne5101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "二极管偏置", type: "single", typeLabel: "单选",
    stem: "二极管正向偏置是指（　）",
    options: ["阳极接正，阴极接负", "阳极接负，阴极接正", "两极接同电位", "两极都悬空"],
    answer: "阳极接正，阴极接负",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["二极管", "偏置"],
    analysis: "【题干】二极管正向偏置是指？\n【考点】二极管偏置\n【详细解答】\n1. 正向偏置：阳极电位高于阴极电位，二极管导通。\n2. 反向偏置：阳极电位低于阴极电位，二极管截止。\n3. 导通时电流从阳极流向阴极。\n【选项逐个说】\nA. 阳极接正，阴极接负 → 正确：正偏导通。\nB. 阳极接负，阴极接正 → 错误：反偏截止。\nC. 两极接同电位 → 错误。\nD. 两极都悬空 → 错误。\n【答案】阳极接正，阴极接负\n【易错】正偏导通，反偏截止。"
  },
  {
    id: "ne5102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "稳压管", type: "single", typeLabel: "单选",
    stem: "稳压管工作在什么区域？（　）",
    options: ["正向导通区", "反向击穿区", "反向截止区", "饱和区"],
    answer: "反向击穿区",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["二极管", "稳压管"],
    analysis: "【题干】稳压管工作在哪个区？\n【考点】稳压二极管\n【详细解答】\n1. 稳压管是特殊二极管，工作在反向击穿区。\n2. 反向击穿时，电流在很大范围内变化，电压基本不变。\n3. 利用这个特性实现稳压。\n4. 普通二极管不能工作在击穿区，会烧坏。\n【选项逐个说】\nA. 正向导通区 → 错误。\nB. 反向击穿区 → 正确。\nC. 反向截止区 → 错误。\nD. 饱和区 → 错误：那是三极管。\n【答案】反向击穿区\n【易错】稳压管反向击穿区工作，实现稳压。"
  },

  // ===== 第6章 三极管 - 补充 =====
  {
    id: "ne6101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "三极管电流放大", type: "single", typeLabel: "单选",
    stem: "三极管电流放大系数β等于（　）",
    options: ["Ic/Ib", "Ic/Ie", "Ib/Ic", "Ie/Ib"],
    answer: "Ic/Ib",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["三极管", "电流放大"],
    analysis: "【题干】β等于？\n【考点】三极管电流关系\n【详细解答】\n1. 三极管三个电流：发射极Ie、基极Ib、集电极Ic。\n2. 关系：Ie = Ib + Ic。\n3. 电流放大系数 β = Ic / Ib。\n4. Ic = βIb，基极小电流控制集电极大电流。\n【选项逐个说】\nA. Ic/Ib → 正确。\nB. Ic/Ie → 错误。\nC. Ib/Ic → 错误：倒数。\nD. Ie/Ib → 错误。\n【答案】Ic/Ib\n【易错】β=Ic/Ib，基极电流放大β倍成集电极电流。"
  },
  {
    id: "ne6102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "共集电极电路", type: "single", typeLabel: "单选",
    stem: "射极输出器（共集电极电路）的特点是（　）",
    options: ["电压放大倍数大", "输出电压与输入反相", "输入电阻高，输出电阻低", "电流放大倍数小于1"],
    answer: "输入电阻高，输出电阻低",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["三极管", "射极输出器"],
    analysis: "【题干】射极输出器的特点？\n【考点】共集电极电路\n【详细解答】\n1. 射极输出器（共集）：\n2. 电压放大倍数≈1（小于1，接近1）。\n3. 输出电压与输入电压同相。\n4. 输入电阻高，输出电阻低。\n5. 常用作缓冲级、输入级、输出级。\n【选项逐个说】\nA. 电压放大倍数大 → 错误：≈1。\nB. 输出电压与输入反相 → 错误：同相。\nC. 输入电阻高，输出电阻低 → 正确。\nD. 电流放大倍数小于1 → 错误：电流放大倍数大。\n【答案】输入电阻高，输出电阻低\n【易错】射极输出器电压跟随，阻抗变换。"
  },

  // ===== 第7章 运放 - 补充 =====
  {
    id: "ne7101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "加法运算", type: "single", typeLabel: "单选",
    stem: "反相加法电路有两个输入信号u1、u2，输出uo等于（　）",
    options: ["-(u1+u2)", "u1+u2", "-(u1-u2)", "u1-u2"],
    answer: "-(u1+u2)",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["运放", "加法器"],
    analysis: "【题干】反相加法电路两个输入，输出？\n【考点】反相加法运算\n【详细解答】\n1. 反相加法：uo = -Rf(u1/R1 + u2/R2)。\n2. 如果R1=R2=Rf，则uo = -(u1+u2)。\n3. 实现两个信号反相相加。\n【选项逐个说】\nA. -(u1+u2) → 正确。\nB. u1+u2 → 错误：反相有负号。\nC. -(u1-u2) → 错误：那是减法。\nD. u1-u2 → 错误。\n【答案】-(u1+u2)\n【易错】反相加法有负号。"
  },
  {
    id: "ne7102", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "电压比较器", type: "single", typeLabel: "单选",
    stem: "电压比较器工作在运放的什么区域？（　）",
    options: ["线性区", "非线性区", "饱和区", "截止区"],
    answer: "非线性区",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运放", "电压比较器"],
    analysis: "【题干】电压比较器工作在什么区？\n【考点】运放应用\n【详细解答】\n1. 运放线性区：加负反馈，做放大运算。\n2. 运放非线性区：开环或正反馈，做电压比较器。\n3. 电压比较器输出只有高电平和低电平两种状态。\n【选项逐个说】\nA. 线性区 → 错误：那是放大器。\nB. 非线性区 → 正确。\nC. 饱和区 → 错误：那是三极管。\nD. 截止区 → 错误。\n【答案】非线性区\n【易错】线性区做放大，非线性区做比较。"
  },

  // ===== 第8-10章 数字电路 - 补充 =====
  {
    id: "ne8101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8",
    knowledgePoint: "或门", type: "single", typeLabel: "单选",
    stem: "或门的逻辑功能是（　）",
    options: ["全1出1，有0出0", "有1出1，全0出0", "相同出1，不同出0", "入1出0，入0出1"],
    answer: "有1出1，全0出0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["门电路", "或门"],
    analysis: "【题干】或门的逻辑功能？\n【考点】基本逻辑门\n【详细解答】\n1. 与门：全1出1，有0出0。\n2. 或门：有1出1，全0出0。\n3. 非门：入1出0，入0出1。\n4. 异或门：相同出0，不同出1。\n【选项逐个说】\nA. 全1出1，有0出0 → 错误：那是与门。\nB. 有1出1，全0出0 → 正确。\nC. 相同出1，不同出0 → 错误：那是同或。\nD. 入1出0，入0出1 → 错误：那是非门。\n【答案】有1出1，全0出0\n【易错】与=都要，或=有一个就行。"
  },
  {
    id: "ne9101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9",
    knowledgePoint: "编码器", type: "single", typeLabel: "单选",
    stem: "8线-3线编码器的输入和输出分别是（　）",
    options: ["8个输入，3个输出", "3个输入，8个输出", "8个输入，8个输出", "3个输入，3个输出"],
    answer: "8个输入，3个输出",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["组合逻辑", "编码器"],
    analysis: "【题干】8线-3线编码器？\n【考点】编码器\n【详细解答】\n1. 编码器：把N个输入信号编成n位二进制代码。\n2. 2ⁿ = N，所以n=3时N=8。\n3. 8线-3线：8个输入，3个二进制输出。\n4. 译码器正好相反：3线-8线，3个输入，8个输出。\n【选项逐个说】\nA. 8个输入，3个输出 → 正确。\nB. 3个输入，8个输出 → 错误：那是译码器。\nC. 8个输入，8个输出 → 错误。\nD. 3个输入，3个输出 → 错误。\n【答案】8个输入，3个输出\n【易错】编码器输入多输出少，译码器输入少输出多。"
  },
  {
    id: "ne10101", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10",
    knowledgePoint: "D触发器", type: "single", typeLabel: "单选",
    stem: "D触发器的特性是（　）",
    options: ["次态等于D", "次态等于现态", "翻转", "保持"],
    answer: "次态等于D",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["时序逻辑", "D触发器"],
    analysis: "【题干】D触发器的特性？\n【考点】常见触发器\n【详细解答】\n1. D触发器：次态Q* = D。\n2. 时钟触发后，输出等于D输入。\n3. JK触发器：Q* = JQ' + K'Q。\n4. RS触发器：Q* = S + R'Q（SR=0约束）。\n【选项逐个说】\nA. 次态等于D → 正确。\nB. 次态等于现态 → 错误：那是保持。\nC. 翻转 → 错误：那是T'触发器。\nD. 保持 → 错误。\n【答案】次态等于D\n【易错】D触发器：来个时钟，D是啥Q是啥。"
  }
]);
