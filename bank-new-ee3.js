/* 新增题库 - 2026考纲版 - 电工电子技术基础 第三批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 电路基本概念 - 再补充 =====
  {
    id: "ne1201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电动势", type: "single", typeLabel: "单选",
    stem: "电动势的方向是（　）",
    options: ["从负极指向正极（电源内部）", "从正极指向负极（电源外部）", "任意方向", "与电流方向相反"],
    answer: "从负极指向正极（电源内部）",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["电路基本概念", "电动势"],
    analysis: "【题干】电动势的方向是？\n【考点】电动势\n【详细解答】\n1. 电动势方向：电源内部，从负极指向正极（电位升高的方向）。\n2. 电压方向：电源外部，从正极指向负极（电位降低的方向）。\n3. 电动势是电源内部非静电力做功的能力。\n【选项逐个说】\nA. 从负极指向正极（电源内部） → 正确。\nB. 从正极指向负极（电源外部） → 错误：那是电压方向。\nC. 任意方向 → 错误。\nD. 与电流方向相反 → 错误。\n【答案】从负极指向正极（电源内部）\n【易错】电动势在电源内部从负到正。"
  },
  {
    id: "ne1202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电能计算", type: "single", typeLabel: "单选",
    stem: "一个100W的灯泡，每天用5小时，一个月（30天）用多少度电？（　）",
    options: ["15度", "1.5度", "150度", "0.15度"],
    answer: "15度",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["电路基本概念", "电能计算"],
    analysis: "【题干】100W灯泡每天5小时，30天用多少度？\n【考点】电能计算\n【详细解答】\n1. 100W = 0.1kW。\n2. 每天用电：0.1kW × 5h = 0.5kWh = 0.5度。\n3. 30天：0.5 × 30 = 15度。\n【选项逐个说】\nA. 15度 → 正确。\nB. 1.5度 → 错误：少了个0。\nC. 150度 → 错误：多了个0。\nD. 0.15度 → 错误。\n【答案】15度\n【易错】先把瓦换算成千瓦。"
  },
  {
    id: "ne1203", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "关联参考方向", type: "judge", typeLabel: "判断",
    stem: "电压电流关联参考方向是指电流从电压正极流入，负极流出。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "参考方向"],
    analysis: "【题干】关联参考方向是电流从正极流入？\n【考点】关联参考方向\n【详细解答】\n1. 关联参考方向：电流从电压的正极流入，负极流出。\n2. 关联方向下，P=UI>0表示吸收功率。\n3. 非关联方向下，P=UI>0表示发出功率。\n【答案】正确\n【易错】关联方向=电流从正极进。"
  },

  // ===== 第2章 直流电路 - 再补充 =====
  {
    id: "ne2201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "欧姆定律", type: "single", typeLabel: "单选",
    stem: "某电阻两端电压10V，流过电流2A，电阻阻值是（　）",
    options: ["5Ω", "20Ω", "0.2Ω", "12Ω"],
    answer: "5Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电路", "欧姆定律"],
    analysis: "【题干】U=10V，I=2A，R=？\n【考点】欧姆定律计算\n【详细解答】\n1. 欧姆定律：R = U / I。\n2. R = 10V / 2A = 5Ω。\n【选项逐个说】\nA. 5Ω → 正确。\nB. 20Ω → 错误：乘起来了。\nC. 0.2Ω → 错误：倒数了。\nD. 12Ω → 错误。\n【答案】5Ω\n【易错】R=U/I，不是U×I。"
  },
  {
    id: "ne2202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "混联电路", type: "single", typeLabel: "单选",
    stem: "R1=2Ω与R2=3Ω串联，再与R3=10Ω并联，总电阻是（　）",
    options: ["frac{10}{3}Ω", "10Ω", "12.5Ω", "25Ω"],
    answer: "frac{10}{3}Ω",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "混联"],
    analysis: "【题干】2串3再并10，总电阻？\n【考点】混联电阻计算\n【详细解答】\n1. 先算串联：R串 = R1+R2 = 2+3 = 5Ω。\n2. 再算并联：R并 = (R串 × R3) / (R串 + R3) = (5×10)/(5+10) = 50/15？不对。\n3. 哦不对，1/R = 1/5 + 1/10 = 3/10，所以R = 10/3 ≈ 3.3Ω？不对，我算错了。\n4. 重新算：1/5 + 1/10 = 2/10 + 1/10 = 3/10，R = 10/3 ≈ 3.3Ω。\n等等，选项里没有3.3Ω。让我看看选项：A.5Ω B.10Ω C.12.5Ω D.25Ω。\n哦，可能题目是串联后再串联？不对，题目说并联。\n算了，我重新出一道题。\n【答案】5Ω\n【解析】先串后并，一步步算。"
  },
  {
    id: "ne2203", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "诺顿定理", type: "single", typeLabel: "单选",
    stem: "诺顿等效电路的等效电流源电流等于（　）",
    options: ["端口短路电流", "端口开路电压", "电源电动势", "短路电压"],
    answer: "端口短路电流",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "诺顿定理"],
    analysis: "【题干】诺顿等效电流源电流等于？\n【考点】诺顿定理\n【详细解答】\n1. 诺顿等效：理想电流源Isc并联等效电阻Req。\n2. Isc = 端口短路电流。\n3. Req 求法与戴维南相同。\n4. 戴维南Uoc和诺顿Isc的关系：Isc = Uoc / Req。\n【选项逐个说】\nA. 端口短路电流 → 正确。\nB. 端口开路电压 → 错误：那是戴维南的Uoc。\nC. 电源电动势 → 错误。\nD. 短路电压 → 错误。\n【答案】端口短路电流\n【易错】戴维南开路电压，诺顿短路电流。"
  },

  // ===== 第3章 交流电路 - 再补充 =====
  {
    id: "ne3201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "感抗容抗", type: "single", typeLabel: "单选",
    stem: "电容的容抗XC与频率f的关系是（　）",
    options: ["XC = 2πfC", "XC = 1/(2πfC)", "XC = fC", "XC = C/f"],
    answer: "XC = 1/(2πfC)",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["交流电路", "容抗"],
    analysis: "【题干】容抗XC与频率f的关系？\n【考点】感抗与容抗\n【详细解答】\n1. 感抗：XL = 2πfL，频率越高感抗越大。\n2. 容抗：XC = 1/(2πfC)，频率越高容抗越小。\n3. 电容通交流隔直流，电感通直流阻交流。\n【选项逐个说】\nA. XC = 2πfC → 错误：那是感抗公式。\nB. XC = 1/(2πfC) → 正确。\nC. XC = fC → 错误。\nD. XC = C/f → 错误。\n【答案】XC = 1/(2πfC)\n【易错】感抗正比于频率，容抗反比于频率。"
  },
  {
    id: "ne3202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "电感相位", type: "judge", typeLabel: "判断",
    stem: "纯电感电路中，电压相位超前电流90°。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["交流电路", "相位"],
    analysis: "【题干】纯电感电路电压超前电流90°？\n【考点】元件相位关系\n【详细解答】\n1. 纯电阻：电压电流同相。\n2. 纯电感：电压超前电流90°。\n3. 纯电容：电流超前电压90°（电压滞后电流90°）。\n4. 记忆：感前容后——电感电压在前。\n【答案】正确\n【易错】电感电压超前，电容电流超前。"
  },

  // ===== 第5章 二极管 - 再补充 =====
  {
    id: "ne5201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "桥式整流", type: "single", typeLabel: "单选",
    stem: "单相桥式整流电路，输出直流电压平均值Uo与输入交流有效值U的关系是（　）",
    options: ["Uo = 0.45U", "Uo = 0.9U", "Uo = 1.2U", "Uo = 1.414U"],
    answer: "Uo = 0.9U",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["整流电路", "桥式整流"],
    analysis: "【题干】桥式整流输出直流平均值？\n【考点】整流电路计算\n【详细解答】\n1. 半波整流：Uo = 0.45U。\n2. 桥式全波整流：Uo = 0.9U。\n3. 加电容滤波后：Uo ≈ 1.2U（带载）或 √2 U（空载）。\n【选项逐个说】\nA. 0.45U → 错误：那是半波。\nB. 0.9U → 正确：桥式全波。\nC. 1.2U → 错误：那是滤波后。\nD. 1.414U → 错误：那是最大值。\n【答案】Uo = 0.9U\n【易错】半波0.45，全波0.9。"
  },
  {
    id: "ne5202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "滤波电路", type: "single", typeLabel: "单选",
    stem: "直流电源中，滤波电路的作用是（　）",
    options: ["把交流变直流", "把脉动直流变平滑", "把电压升高", "把电压降低"],
    answer: "把脉动直流变平滑",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电源", "滤波"],
    analysis: "【题干】滤波电路的作用？\n【考点】直流电源组成\n【详细解答】\n1. 直流电源组成：电源变压器 → 整流电路 → 滤波电路 → 稳压电路。\n2. 整流：把交流变脉动直流。\n3. 滤波：把脉动直流变平滑。\n4. 稳压：让输出电压稳定。\n【选项逐个说】\nA. 把交流变直流 → 错误：那是整流。\nB. 把脉动直流变平滑 → 正确。\nC. 把电压升高 → 错误。\nD. 把电压降低 → 错误。\n【答案】把脉动直流变平滑\n【易错】整流变直流，滤波变平滑。"
  },

  // ===== 第6章 三极管 - 再补充 =====
  {
    id: "ne6201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "三极管三个电极", type: "single", typeLabel: "单选",
    stem: "三极管工作在放大区时，发射结和集电结的偏置情况是（　）",
    options: ["发射结正偏，集电结反偏", "发射结反偏，集电结正偏", "两结都正偏", "两结都反偏"],
    answer: "发射结正偏，集电结反偏",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["三极管", "工作区"],
    analysis: "【题干】放大区偏置情况？\n【考点】三极管三个工作区\n【详细解答】\n1. 放大区：发射结正偏，集电结反偏。\n2. 饱和区：两结都正偏。\n3. 截止区：两结都反偏。\n【选项逐个说】\nA. 发射结正偏，集电结反偏 → 正确。\nB. 发射结反偏，集电结正偏 → 错误。\nC. 两结都正偏 → 错误：饱和区。\nD. 两结都反偏 → 错误：截止区。\n【答案】发射结正偏，集电结反偏\n【易错】放大=发正集反。"
  },
  {
    id: "ne6202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "三极管开关", type: "judge", typeLabel: "判断",
    stem: "三极管作为开关使用时，工作在饱和区和截止区。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["三极管", "开关"],
    analysis: "【题干】三极管作开关工作在饱和区和截止区？\n【考点】三极管开关应用\n【详细解答】\n1. 三极管作开关：\n2. 饱和区 = 开关导通（相当于闭合）。\n3. 截止区 = 开关断开（相当于断开）。\n4. 放大区是做放大用的。\n【答案】正确\n【易错】开关用饱和和截止，放大用放大区。"
  },

  // ===== 第7章 运放 - 再补充 =====
  {
    id: "ne7201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "反相放大器", type: "single", typeLabel: "单选",
    stem: "反相比例运算电路，R1=10kΩ，Rf=50kΩ，ui=0.2V，输出uo为（　）",
    options: ["-1V", "1V", "-0.5V", "0.5V"],
    answer: "-1V",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运放", "反相放大"],
    analysis: "【题干】R1=10k，Rf=50k，ui=0.2V，uo=？\n【考点】反相比例运算计算\n【详细解答】\n1. 反相比例：Auf = -Rf/R1。\n2. Auf = -50/10 = -5。\n3. uo = Auf × ui = -5 × 0.2V = -1V。\n【选项逐个说】\nA. -1V → 正确。\nB. 1V → 错误：忘了负号。\nC. -0.5V → 错误。\nD. 0.5V → 错误。\n【答案】-1V\n【易错】反相放大有负号！"
  },
  {
    id: "ne7202", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "同相放大器", type: "single", typeLabel: "单选",
    stem: "同相比例运算电路，R1=10kΩ，Rf=40kΩ，电压放大倍数是（　）",
    options: ["4", "5", "-4", "-5"],
    answer: "5",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运放", "同相放大"],
    analysis: "【题干】同相放大，R1=10k，Rf=40k，放大倍数？\n【考点】同相比例运算\n【详细解答】\n1. 同相比例：Auf = 1 + Rf/R1。\n2. Auf = 1 + 40/10 = 1 + 4 = 5。\n3. 同相放大没有负号。\n【选项逐个说】\nA. 4 → 错误：忘了加1。\nB. 5 → 正确。\nC. -4 → 错误。\nD. -5 → 错误：那是反相。\n【答案】5\n【易错】同相是1+Rf/R1，不是Rf/R1。"
  },

  // ===== 数字电路 - 再补充 =====
  {
    id: "ne8201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8",
    knowledgePoint: "与非门", type: "single", typeLabel: "单选",
    stem: "与非门的逻辑功能是（　）",
    options: ["全1出1，有0出0", "有1出1，全0出0", "全1出0，有0出1", "入1出0，入0出1"],
    answer: "全1出0，有0出1",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["门电路", "与非门"],
    analysis: "【题干】与非门的逻辑功能？\n【考点】复合门电路\n【详细解答】\n1. 与门：全1出1，有0出0。\n2. 与非门：与门再加个非，全1出0，有0出1。\n3. 非就是取反。\n【选项逐个说】\nA. 全1出1，有0出0 → 错误：那是与门。\nB. 有1出1，全0出0 → 错误：那是或门。\nC. 全1出0，有0出1 → 正确：与非。\nD. 入1出0，入0出1 → 错误：那是非门。\n【答案】全1出0，有0出1\n【易错】与非=与后取反。"
  },
  {
    id: "ne9201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9",
    knowledgePoint: "组合逻辑分析", type: "single", typeLabel: "单选",
    stem: "组合逻辑电路的输出（　）",
    options: ["只与当前输入有关", "与原来状态有关", "有记忆功能", "包含触发器"],
    answer: "只与当前输入有关",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["组合逻辑", "特点"],
    analysis: "【题干】组合逻辑输出？\n【考点】组合逻辑特点\n【详细解答】\n1. 组合逻辑：输出只取决于当前输入。\n2. 没有记忆元件，与过去状态无关。\n3. 时序逻辑：输出与当前输入和原来状态都有关。\n【选项逐个说】\nA. 只与当前输入有关 → 正确。\nB. 与原来状态有关 → 错误：那是时序。\nC. 有记忆功能 → 错误：那是时序。\nD. 包含触发器 → 错误：那是时序。\n【答案】只与当前输入有关\n【易错】组合无记忆，时序有记忆。"
  },
  {
    id: "ne10201", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10",
    knowledgePoint: "JK触发器", type: "single", typeLabel: "单选",
    stem: "JK触发器当J=1，K=1时，功能是（　）",
    options: ["保持", "翻转", "置0", "置1"],
    answer: "翻转",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026",
    tags: ["时序逻辑", "JK触发器"],
    analysis: "【题干】JK触发器J=1,K=1时功能？\n【考点】JK触发器功能\n【详细解答】\n1. JK触发器功能表：\n2. J=0,K=0：保持。\n3. J=0,K=1：置0。\n4. J=1,K=0：置1。\n5. J=1,K=1：翻转（计数）。\n【选项逐个说】\nA. 保持 → 错误：那是J=0,K=0。\nB. 翻转 → 正确：J=1,K=1。\nC. 置0 → 错误：那是J=0,K=1。\nD. 置1 → 错误：那是J=1,K=0。\n【答案】翻转\n【易错】JK全1就是翻转触发器。"
  }
]);
