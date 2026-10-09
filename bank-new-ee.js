/* 新增题库 - 2026考纲版 - 电工电子技术基础 第一批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 电路基本概念 =====
  {
    id: "ne1001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电流与电压", type: "single", typeLabel: "单选",
    stem: "在电路中，参考方向是指（　）",
    options: ["实际方向", "假定的正方向", "电子流动方向", "电源正极方向"],
    answer: "假定的正方向",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "参考方向"],
    analysis: "【题干】在电路中，参考方向是指（ ）\n【考点】参考方向\n【详细解答】\n1. 参考方向是人为假定的正方向，不是实际方向。\n2. 如果计算结果为正，说明实际方向与参考方向一致。\n3. 如果计算结果为负，说明实际方向与参考方向相反。\n4. 引入参考方向后，电流电压都可以是代数量。\n【选项逐个说】\nA. 实际方向 → 错误：参考方向是假定的。\nB. 假定的正方向 → 正确。\nC. 电子流动方向 → 错误。\nD. 电源正极方向 → 错误。\n【答案】假定的正方向\n【易错】参考方向是人为假定的，不是实际方向。"
  },
  {
    id: "ne1002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "功率与能量", type: "single", typeLabel: "单选",
    stem: "某元件两端电压为5V，流过电流为2A，且电压电流为关联参考方向，则该元件（　）",
    options: ["吸收功率10W", "发出功率10W", "吸收功率2.5W", "发出功率2.5W"],
    answer: "吸收功率10W",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["电路基本概念", "功率"],
    analysis: "【题干】某元件两端电压为5V，流过电流为2A，且电压电流为关联参考方向，则该元件（ ）\n【考点】功率的计算\n【详细解答】\n1. 关联参考方向：电流从电压正极流入，负极流出。\n2. 关联方向下：P = UI > 0 表示吸收功率。\n3. P = 5V × 2A = 10W > 0，所以吸收10W功率。\n4. 如果是非关联方向，P = UI > 0 表示发出功率。\n【选项逐个说】\nA. 吸收功率10W → 正确。\nB. 发出功率10W → 错误：关联方向是吸收。\nC. 吸收功率2.5W → 错误：算错了。\nD. 发出功率2.5W → 错误。\n【答案】吸收功率10W\n【易错】关联方向P=UI>0是吸收，非关联是发出。"
  },
  {
    id: "ne1003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "电位计算", type: "single", typeLabel: "单选",
    stem: "电路中a点电位为10V，b点电位为-5V，则Uab为（　）",
    options: ["5V", "-5V", "15V", "-15V"],
    answer: "15V",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "电位"],
    analysis: "【题干】a点电位10V，b点电位-5V，Uab=？\n【考点】电位与电压\n【详细解答】\n1. 两点间电压 = 两点电位之差。\n2. Uab = Va - Vb。\n3. 代入：Va=10V，Vb=-5V。\n4. Uab = 10 - (-5) = 10 + 5 = 15V。\n【选项逐个说】\nA. 5V → 错误：10-5=5，但b是负的。\nB. -5V → 错误。\nC. 15V → 正确。\nD. -15V → 错误：方向反了。\n【答案】15V\n【易错】Uab = Va - Vb，注意b点电位是负的，负负得正。"
  },
  {
    id: "ne1004", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1",
    knowledgePoint: "理想电源", type: "judge", typeLabel: "判断",
    stem: "理想电压源的输出电流不随外电路变化。",
    options: ["正确", "错误"],
    answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["电路基本概念", "理想电源"],
    analysis: "【题干】理想电压源的输出电流不随外电路变化。\n【考点】理想电压源特性\n【详细解答】\n1. 理想电压源：端电压恒定，输出电流由外电路决定。\n2. 外电路电阻变了，电流就会变。\n3. 理想电流源才是输出电流恒定，电压由外电路决定。\n【答案】错误\n【易错】电压源电压恒定，电流源电流恒定。"
  },

  // ===== 第2章 直流电路 =====
  {
    id: "ne2001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "基尔霍夫定律", type: "single", typeLabel: "单选",
    stem: "基尔霍夫电流定律KCL，下列说法正确的是（　）",
    options: ["适用于任一节点", "只适用于闭合回路", "只适用于线性电路", "只适用于直流电路"],
    answer: "适用于任一节点",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["直流电路", "KCL"],
    analysis: "【题干】基尔霍夫电流定律KCL，下列说法正确的是？\n【考点】KCL定律\n【详细解答】\n1. KCL：任一节点，流入电流之和等于流出电流之和。\n2. 不仅适用于节点，也适用于任一闭合面（广义节点）。\n3. 适用于任何电路（线性/非线性、直流/交流）。\n4. KVL适用于任一闭合回路。\n【选项逐个说】\nA. 适用于任一节点 → 正确。\nB. 只适用于闭合回路 → 错误：那是KVL。\nC. 只适用于线性电路 → 错误：任何电路都适用。\nD. 只适用于直流电路 → 错误：交流也适用。\n【答案】适用于任一节点\n【易错】KCL节点，KVL回路，都适用于任何电路。"
  },
  {
    id: "ne2002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "电阻串并联", type: "single", typeLabel: "单选",
    stem: "两个10Ω电阻并联后，再与一个5Ω电阻串联，总电阻为（　）",
    options: ["15Ω", "10Ω", "25Ω", "7.5Ω"],
    answer: "10Ω",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "串并联"],
    analysis: "【题干】两个10Ω并联后，再与5Ω串联，总电阻=？\n【考点】混联电阻计算\n【详细解答】\n1. 先算并联部分：两个10Ω并联。\n2. R并 = 10/2 = 5Ω。\n3. 再算串联：R总 = R并 + 5Ω = 5 + 5 = 10Ω。\n【选项逐个说】\nA. 15Ω → 错误：直接加了。\nB. 10Ω → 正确。\nC. 25Ω → 错误。\nD. 7.5Ω → 错误。\n【答案】10Ω\n【易错】先并后串，一步步算。"
  },
  {
    id: "ne2003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "叠加定理", type: "single", typeLabel: "单选",
    stem: "叠加定理中，当电压源单独作用时，电流源应（　）",
    options: ["短路", "开路", "保留", "并联电阻"],
    answer: "开路",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "叠加定理"],
    analysis: "【题干】叠加定理中，电压源单独作用时，电流源应？\n【考点】叠加定理\n【详细解答】\n1. 叠加定理：某电源单独作用时，其他电源置零。\n2. 电压源置零 = 短路（电压为0）。\n3. 电流源置零 = 开路（电流为0）。\n4. 题目问的是\"电流源怎么处理\"，所以是开路。\n【选项逐个说】\nA. 短路 → 错误：那是电压源置零。\nB. 开路 → 正确：电流源置零=开路。\nC. 保留 → 错误。\nD. 并联电阻 → 错误。\n【答案】开路\n【易错】电压源短路，电流源开路。"
  },
  {
    id: "ne2004", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2",
    knowledgePoint: "戴维南定理", type: "single", typeLabel: "单选",
    stem: "戴维南等效电路中，等效内阻是将有源二端网络内的（　）后求得的。\n",
    options: ["电压源短路，电流源开路", "电压源开路，电流源短路", "全部短路", "全部开路"],
    answer: "电压源短路，电流源开路",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["直流电路", "戴维南"],
    analysis: "【题干】求戴维南等效内阻时，独立源怎么处理？\n【考点】戴维南定理\n【详细解答】\n1. 求等效内阻Req时，要将独立源\"置零\"。\n2. 电压源置零 = 短路（电压为0）。\n3. 电流源置零 = 开路（电流为0）。\n4. 受控源保留，不能置零。\n【选项逐个说】\nA. 电压源短路，电流源开路 → 正确。\nB. 电压源开路，电流源短路 → 错误：反了。\nC. 全部短路 → 错误。\nD. 全部开路 → 错误。\n【答案】电压源短路，电流源开路\n【易错】电压源短路，电流源开路，不要记反！"
  },

  // ===== 第3章 单相正弦交流电路 =====
  {
    id: "ne3001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "正弦交流电三要素", type: "single", typeLabel: "单选",
    stem: "正弦交流电的三要素是（　）",
    options: ["电压、电流、功率", "幅值、频率、初相位", "最大值、有效值、平均值", "电阻、电感、电容"],
    answer: "幅值、频率、初相位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["交流电路", "三要素"],
    analysis: "【题干】正弦交流电的三要素是？\n【考点】正弦交流电三要素\n【详细解答】\n1. 幅值（最大值/有效值）：决定大小。\n2. 频率（角频率/周期）：变化快慢。\n3. 初相位：初始时刻的相位。\n4. 三要素确定了，一个正弦量就完全确定了。\n【选项逐个说】\nA. 电压、电流、功率 → 错误：这是物理量。\nB. 幅值、频率、初相位 → 正确。\nC. 最大值、有效值、平均值 → 错误。\nD. 电阻、电感、电容 → 错误：这是元件。\n【答案】幅值、频率、初相位\n【易错】三要素：幅频相——幅值、频率、初相位。"
  },
  {
    id: "ne3002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "感抗容抗", type: "single", typeLabel: "单选",
    stem: "电感L的感抗XL与频率f的关系是（　）",
    options: ["XL = 2πfL", "XL = 1/(2πfL)", "XL = fL", "XL = L/f"],
    answer: "XL = 2πfL",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["交流电路", "感抗"],
    analysis: "【题干】感抗XL与频率f的关系？\n【考点】感抗与容抗\n【详细解答】\n1. 感抗：XL = ωL = 2πfL。\n2. 频率越高，感抗越大——通直流阻交流。\n3. 容抗：XC = 1/(ωC) = 1/(2πfC)。\n4. 频率越高，容抗越小——通交流隔直流。\n【选项逐个说】\nA. XL = 2πfL → 正确。\nB. XL = 1/(2πfL) → 错误：这是容抗公式。\nC. XL = fL → 错误。\nD. XL = L/f → 错误。\n【答案】XL = 2πfL\n【易错】感抗正比于频率，容抗反比于频率。"
  },
  {
    id: "ne3003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3",
    knowledgePoint: "相位关系", type: "judge", typeLabel: "判断",
    stem: "纯电容电路中，电流相位超前电压90°。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["交流电路", "相位"],
    analysis: "【题干】纯电容电路中，电流相位超前电压90°。\n【考点】元件相位关系\n【详细解答】\n1. 纯电阻：电压电流同相。\n2. 纯电感：电压超前电流90°（电压超前，电流滞后）。\n3. 纯电容：电流超前电压90°（电流超前，电压滞后）。\n4. 记忆口诀：\"感前容后\"——电感电压在前，电容电流在前。\n【答案】正确\n【易错】电感电压超前电流，电容电流超前电压。"
  },

  // ===== 第4章 动态电路 =====
  {
    id: "ne4001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4",
    knowledgePoint: "换路定律", type: "single", typeLabel: "单选",
    stem: "换路定律指出，换路瞬间不能跃变的是（　）",
    options: ["电容电压和电感电流", "电容电流和电感电压", "电阻电压和电阻电流", "电源电压和电源电流"],
    answer: "电容电压和电感电流",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["动态电路", "换路定律"],
    analysis: "【题干】换路瞬间不能跃变的是？\n【考点】换路定律\n【详细解答】\n1. 换路定律：\n2. 电容电压不能跃变：uc(0+) = uc(0-)。\n3. 电感电流不能跃变：iL(0+) = iL(0-)。\n4. 反过来：电容电流可以跃变，电感电压可以跃变。\n【选项逐个说】\nA. 电容电压和电感电流 → 正确。\nB. 电容电流和电感电压 → 错误：这两个可以跃变。\nC. 电阻电压和电阻电流 → 错误。\nD. 电源电压和电源电流 → 错误。\n【答案】电容电压和电感电流\n【易错】记住：电容电压不跳，电感电流不跳。"
  },
  {
    id: "ne4002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4",
    knowledgePoint: "时间常数", type: "single", typeLabel: "单选",
    stem: "RC电路的时间常数τ等于（　）",
    options: ["RC", "R/C", "C/R", "R+C"],
    answer: "RC",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["动态电路", "时间常数"],
    analysis: "【题干】RC电路的时间常数τ=？\n【考点】时间常数\n【详细解答】\n1. RC电路时间常数：τ = RC。\n2. RL电路时间常数：τ = L/R。\n3. τ越大，过渡过程越长。\n4. 一般经过3~5τ，过渡过程基本结束。\n【选项逐个说】\nA. RC → 正确。\nB. R/C → 错误。\nC. C/R → 错误。\nD. R+C → 错误。\n【答案】RC\n【易错】RC电路τ=RC，RL电路τ=L/R。"
  },
  {
    id: "ne4003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4",
    knowledgePoint: "RC充放电", type: "judge", typeLabel: "判断",
    stem: "RC电路充电时，电容电压按指数规律上升。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["动态电路", "充放电"],
    analysis: "【题干】RC电路充电时，电容电压按指数规律上升。\n【考点】RC充放电规律\n【详细解答】\n1. 电容充电：电压从0开始，按指数规律上升，逐渐接近电源电压。\n2. 电容放电：电压从初始值开始，按指数规律下降，逐渐接近0。\n3. 都是指数曲线，变化越来越慢。\n【答案】正确\n【易错】充放电都是指数规律。"
  },

  // ===== 第5章 二极管与直流电源 =====
  {
    id: "ne5001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "二极管单向导电性", type: "single", typeLabel: "单选",
    stem: "二极管的主要特性是（　）",
    options: ["单向导电性", "放大作用", "滤波作用", "稳压作用"],
    answer: "单向导电性",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["二极管", "单向导电"],
    analysis: "【题干】二极管的主要特性是？\n【考点】二极管基本特性\n【详细解答】\n1. 二极管最基本的特性：单向导电性。\n2. 正向偏置时导通（电流从阳极流向阴极）。\n3. 反向偏置时截止（几乎无电流）。\n4. 利用这个特性可以做整流、检波、限幅等电路。\n【选项逐个说】\nA. 单向导电性 → 正确。\nB. 放大作用 → 错误：那是三极管。\nC. 滤波作用 → 错误：那是电容/电感。\nD. 稳压作用 → 错误：那是稳压管（特殊二极管）。\n【答案】单向导电性\n【易错】二极管核心是单向导电。"
  },
  {
    id: "ne5002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "二极管导通压降", type: "single", typeLabel: "单选",
    stem: "硅二极管正向导通时，两端压降约为（　）",
    options: ["0V", "0.3V", "0.7V", "1.5V"],
    answer: "0.7V",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["二极管", "导通压降"],
    analysis: "【题干】硅二极管正向导通压降约为？\n【考点】二极管导通压降\n【详细解答】\n1. 硅二极管正向导通压降：约0.7V。\n2. 锗二极管正向导通压降：约0.3V。\n3. 理想二极管模型：导通压降为0V。\n4. 恒压降模型：硅管0.7V，锗管0.3V。\n【选项逐个说】\nA. 0V → 错误：那是理想模型。\nB. 0.3V → 错误：那是锗管。\nC. 0.7V → 正确：硅管。\nD. 1.5V → 错误。\n【答案】0.7V\n【易错】硅0.7V，锗0.3V。"
  },
  {
    id: "ne5003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5",
    knowledgePoint: "整流电路", type: "single", typeLabel: "单选",
    stem: "单相桥式整流电路中，二极管在一个周期内导通（　）",
    options: ["180°", "90°", "360°", "270°"],
    answer: "180°",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["整流电路", "桥式整流"],
    analysis: "【题干】单相桥式整流电路中，每个二极管导通多久？\n【考点】桥式整流\n【详细解答】\n1. 桥式整流：4个二极管组成电桥。\n2. 交流正半周：两个二极管导通，另外两个截止。\n3. 交流负半周：另外两个二极管导通，这两个截止。\n4. 每个二极管在一个周期内导通180°（半周）。\n5. 负载上全是直流脉动电压，利用率高。\n【选项逐个说】\nA. 180° → 正确：半周导通。\nB. 90° → 错误。\nC. 360° → 错误。\nD. 270° → 错误。\n【答案】180°\n【易错】桥式整流每个二极管导通半周。"
  },

  // ===== 第6章 三极管电路 =====
  {
    id: "ne6001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "三极管结构", type: "single", typeLabel: "单选",
    stem: "三极管有三个电极，分别是（　）",
    options: ["发射极、基极、集电极", "阳极、阴极、栅极", "源极、漏极、栅极", "正极、负极、接地极"],
    answer: "发射极、基极、集电极",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["三极管", "电极"],
    analysis: "【题干】三极管三个电极分别是？\n【考点】三极管结构\n【详细解答】\n1. 三极管三个电极：发射极(E)、基极(B)、集电极(C)。\n2. 三个区：发射区、基区、集电区。\n3. 两个PN结：发射结、集电结。\n4. 场效应管才是源极、漏极、栅极。\n【选项逐个说】\nA. 发射极、基极、集电极 → 正确。\nB. 阳极、阴极、栅极 → 错误：那是晶闸管。\nC. 源极、漏极、栅极 → 错误：那是场效应管。\nD. 正极、负极、接地极 → 错误。\n【答案】发射极、基极、集电极\n【易错】三极管EBC，场效应管SDG。"
  },
  {
    id: "ne6002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "三极管工作区", type: "single", typeLabel: "单选",
    stem: "三极管工作在放大区的外部条件是（　）",
    options: ["发射结正偏，集电结反偏", "发射结反偏，集电结正偏", "两结都正偏", "两结都反偏"],
    answer: "发射结正偏，集电结反偏",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["三极管", "放大区"],
    analysis: "【题干】三极管工作在放大区的条件是？\n【考点】三极管三个工作区\n【详细解答】\n1. 放大区：发射结正偏，集电结反偏。（电流放大）\n2. 饱和区：发射结正偏，集电结正偏。（导通开关）\n3. 截止区：发射结反偏，集电结反偏。（断开开关）\n【选项逐个说】\nA. 发射结正偏，集电结反偏 → 正确：放大区。\nB. 发射结反偏，集电结正偏 → 错误。\nC. 两结都正偏 → 错误：饱和区。\nD. 两结都反偏 → 错误：截止区。\n【答案】发射结正偏，集电结反偏\n【易错】放大=发正集反，饱和=都正，截止=都反。"
  },
  {
    id: "ne6003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6",
    knowledgePoint: "共射放大电路", type: "single", typeLabel: "单选",
    stem: "共发射极放大电路中，输出电压与输入电压的相位关系是（　）",
    options: ["同相", "反相", "超前90°", "滞后90°"],
    answer: "反相",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["三极管", "共射电路"],
    analysis: "【题干】共射放大电路输出与输入的相位关系？\n【考点】共射放大电路\n【详细解答】\n1. 共发射极放大电路：输出与输入反相（相位差180°）。\n2. 共集电极放大电路（射极输出器）：输出与输入同相。\n3. 共基极放大电路：输出与输入同相。\n4. 共射是最常用的放大电路，有电压放大和电流放大作用。\n【选项逐个说】\nA. 同相 → 错误：那是共集/共基。\nB. 反相 → 正确：共射反相。\nC. 超前90° → 错误。\nD. 滞后90° → 错误。\n【答案】反相\n【易错】共射反相，共集同相。"
  },

  // ===== 第7章 运算放大器 =====
  {
    id: "ne7001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "理想运放参数", type: "single", typeLabel: "单选",
    stem: "理想运放的输入电阻为（　）",
    options: ["0", "无穷大", "1kΩ", "100Ω"],
    answer: "无穷大",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["运放", "理想参数"],
    analysis: "【题干】理想运放的输入电阻为？\n【考点】理想运放参数\n【详细解答】\n1. 理想运放参数：\n2. 开环差模增益：无穷大。\n3. 输入电阻：无穷大（所以输入电流为0，即虚断）。\n4. 输出电阻：0。\n5. 共模抑制比：无穷大。\n【选项逐个说】\nA. 0 → 错误：那是输出电阻。\nB. 无穷大 → 正确。\nC. 1kΩ → 错误。\nD. 100Ω → 错误。\n【答案】无穷大\n【易错】输入电阻无穷大=虚断的原因。"
  },
  {
    id: "ne7002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "反相放大器", type: "single", typeLabel: "单选",
    stem: "反相比例运算电路中，已知R1=10kΩ，Rf=100kΩ，则电压放大倍数为（　）",
    options: ["10", "-10", "11", "-11"],
    answer: "-10",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["运放", "反相放大"],
    analysis: "【题干】反相比例运算，R1=10k，Rf=100k，放大倍数=？\n【考点】反相比例运算\n【详细解答】\n1. 反相比例运算公式：Auf = -Rf / R1。\n2. 代入：Rf=100kΩ，R1=10kΩ。\n3. Auf = -100/10 = -10。\n4. 负号表示输出与输入反相。\n【选项逐个说】\nA. 10 → 错误：忘了负号。\nB. -10 → 正确。\nC. 11 → 错误：那是同相放大。\nD. -11 → 错误。\n【答案】-10\n【易错】反相放大有负号！"
  },
  {
    id: "ne7003", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7",
    knowledgePoint: "电压跟随器", type: "single", typeLabel: "单选",
    stem: "电压跟随器的电压放大倍数为（　）",
    options: ["0", "1", "-1", "无穷大"],
    answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["运放", "电压跟随器"],
    analysis: "【题干】电压跟随器的电压放大倍数？\n【考点】电压跟随器\n【详细解答】\n1. 电压跟随器是同相比例运算的特例。\n2. 同相放大：Auf = 1 + Rf/R1。\n3. 电压跟随器：Rf=0，R1=∞。\n4. 所以 Auf = 1 + 0 = 1。\n5. 特点：输入电阻高，输出电阻低，起缓冲隔离作用。\n【选项逐个说】\nA. 0 → 错误。\nB. 1 → 正确。\nC. -1 → 错误。\nD. 无穷大 → 错误。\n【答案】1\n【易错】电压跟随器增益为1，不是放大电压，是缓冲。"
  },

  // ===== 第8章 逻辑代数与门电路 =====
  {
    id: "ne8001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8",
    knowledgePoint: "基本逻辑门", type: "single", typeLabel: "单选",
    stem: "只有当输入全为1时，输出才为1的逻辑门是（　）",
    options: ["与门", "或门", "非门", "异或门"],
    answer: "与门",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["门电路", "与门"],
    analysis: "【题干】输入全1输出才1，是什么门？\n【考点】基本逻辑门\n【详细解答】\n1. 与门：全1出1，有0出0。\n2. 或门：有1出1，全0出0。\n3. 非门：输入变反。\n4. 异或门：相同出0，不同出1。\n【选项逐个说】\nA. 与门 → 正确。\nB. 或门 → 错误：有1就出1。\nC. 非门 → 错误：只有一个输入。\nD. 异或门 → 错误。\n【答案】与门\n【易错】与=全1出1，或=有1出1。"
  },
  {
    id: "ne8002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8",
    knowledgePoint: "逻辑代数", type: "single", typeLabel: "单选",
    stem: "逻辑代数中，A + A = （　）",
    options: ["A", "2A", "A²", "0"],
    answer: "A",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["逻辑代数", "基本公式"],
    analysis: "【题干】逻辑代数中，A + A = ？\n【考点】逻辑代数基本公式\n【详细解答】\n1. 逻辑代数不是普通代数。\n2. 或运算：A + A = A（重叠律）。\n3. 与运算：A · A = A。\n4. 还有：A + 1 = 1，A · 0 = 0，A + 0 = A，A · 1 = A。\n【选项逐个说】\nA. A → 正确：重叠律。\nB. 2A → 错误：逻辑代数没有2。\nC. A² → 错误。\nD. 0 → 错误。\n【答案】A\n【易错】逻辑代数只有0和1，A+A=A不是2A。"
  },

  // ===== 第9章 组合逻辑电路 =====
  {
    id: "ne9001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9",
    knowledgePoint: "组合逻辑特点", type: "single", typeLabel: "单选",
    stem: "组合逻辑电路的特点是（　）",
    options: ["输出只与当前输入有关", "输出与原状态有关", "有记忆功能", "包含触发器"],
    answer: "输出只与当前输入有关",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["组合逻辑", "特点"],
    analysis: "【题干】组合逻辑电路的特点是？\n【考点】组合逻辑 vs 时序逻辑\n【详细解答】\n1. 组合逻辑：输出只取决于当前输入，与过去状态无关。\n2. 组合逻辑没有记忆元件（没有触发器）。\n3. 时序逻辑：输出不仅与当前输入有关，还与原来的状态有关。\n4. 时序逻辑有记忆功能（有触发器）。\n【选项逐个说】\nA. 输出只与当前输入有关 → 正确。\nB. 输出与原状态有关 → 错误：那是时序逻辑。\nC. 有记忆功能 → 错误：那是时序逻辑。\nD. 包含触发器 → 错误：那是时序逻辑。\n【答案】输出只与当前输入有关\n【易错】组合无记忆，时序有记忆。"
  },
  {
    id: "ne9002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9",
    knowledgePoint: "编码器译码器", type: "single", typeLabel: "单选",
    stem: "译码器的功能是（　）",
    options: ["将二进制代码翻译成特定输出", "将特定信号编成二进制代码", "存储数据", "放大信号"],
    answer: "将二进制代码翻译成特定输出",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["组合逻辑", "译码器"],
    analysis: "【题干】译码器的功能是？\n【考点】编码器与译码器\n【详细解答】\n1. 编码器：将特定输入信号编成二进制代码。（输入少输出多？不，是输入多输出少）\n2. 译码器：将二进制代码翻译成特定输出。（输入少输出多）\n3. 例：3线-8线译码器，输入3位二进制，输出8根线。\n【选项逐个说】\nA. 将二进制代码翻译成特定输出 → 正确。\nB. 将特定信号编成二进制代码 → 错误：那是编码器。\nC. 存储数据 → 错误：那是寄存器。\nD. 放大信号 → 错误。\n【答案】将二进制代码翻译成特定输出\n【易错】编码是编成代码，译码是翻译出来。"
  },

  // ===== 第10章 时序逻辑电路 =====
  {
    id: "ne10001", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10",
    knowledgePoint: "触发器", type: "single", typeLabel: "单选",
    stem: "需要时钟触发的触发器是（　）",
    options: ["同步RS触发器", "基本RS触发器", "以上都是", "都不是"],
    answer: "同步RS触发器",
    difficulty: 2, difficultyLabel: "强化", source: "new2026",
    tags: ["时序逻辑", "触发器"],
    analysis: "【题干】需要时钟触发的是？\n【考点】触发器分类\n【详细解答】\n1. 基本RS触发器：直接由输入控制，不需要时钟。\n2. 同步RS触发器：有时钟端，时钟有效时才会翻转。\n3. 同步触发器又叫钟控触发器。\n4. 后面还有JK触发器、D触发器，都是时钟触发的。\n【选项逐个说】\nA. 同步RS触发器 → 正确：有时钟。\nB. 基本RS触发器 → 错误：不需要时钟。\nC. 以上都是 → 错误。\nD. 都不是 → 错误。\n【答案】同步RS触发器\n【易错】基本RS无时钟，同步/钟控有时钟。"
  },
  {
    id: "ne10002", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10",
    knowledgePoint: "时序逻辑特点", type: "judge", typeLabel: "判断",
    stem: "时序逻辑电路具有记忆功能。",
    options: ["正确", "错误"],
    answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026",
    tags: ["时序逻辑", "特点"],
    analysis: "【题干】时序逻辑电路具有记忆功能。\n【考点】时序逻辑特点\n【详细解答】\n1. 时序逻辑电路包含触发器等记忆元件。\n2. 输出不仅取决于当前输入，还取决于原来的状态。\n3. 所以时序逻辑有记忆功能。\n4. 组合逻辑没有记忆功能。\n【答案】正确\n【易错】时序有记忆，组合无记忆。"
  }
]);
