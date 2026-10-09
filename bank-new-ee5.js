/* 新增题库 - 2026考纲版 - 电工电子技术基础 第五批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 电路基本概念 =====
  { id: "ne1401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电源", type: "single", typeLabel: "单选",
    stem: "电源的作用是（　）", options: ["把其他形式能量转换成电能", "把电能转换成其他形式能量", "储存电能", "消耗电能"], answer: "把其他形式能量转换成电能",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "电源"],
    analysis: "【题干】电源作用？\n【考点】电源与负载\n【详细解答】\n1. 电源：把其他形式能量（化学能、机械能）转换成电能。\n2. 负载：把电能转换成其他形式能量（光、热、机械）。\n【选项逐个说】\nA. 把其他形式能量转换成电能 → 正确。\nB. 把电能转换成其他形式能量 → 错误：那是负载。\nC. 储存电能 → 错误。\nD. 消耗电能 → 错误。\n【答案】把其他形式能量转换成电能\n【易错】电源出电能，负载耗电能。"
  },
  { id: "ne1402", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电压方向", type: "single", typeLabel: "单选",
    stem: "电压的方向规定为（　）", options: ["高电位指向低电位", "低电位指向高电位", "正电荷方向", "负电荷方向"], answer: "高电位指向低电位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "电压"],
    analysis: "【题干】电压方向规定？\n【考点】电压方向\n【详细解答】\n1. 电压方向：从高电位指向低电位（电位降低的方向）。\n2. 电动势方向：从低电位指向高电位（电源内部）。\n【选项逐个说】\nA. 高电位指向低电位 → 正确。\nB. 低电位指向高电位 → 错误：那是电动势。\nC. 正电荷方向 → 错误。\nD. 负电荷方向 → 错误。\n【答案】高电位指向低电位\n【易错】电压从高到低。"
  },
  { id: "ne1403", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电能单位", type: "single", typeLabel: "单选",
    stem: "电能的单位是（　）", options: ["焦耳(J)", "瓦特(W)", "伏特(V)", "安培(A)"], answer: "焦耳(J)",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "单位"],
    analysis: "【题干】电能单位？\n【考点】物理量单位\n【详细解答】\n1. 电能：焦耳(J)，日常用度(kWh)。\n2. 功率：瓦特(W)。\n【选项逐个说】\nA. 焦耳(J) → 正确。\nB. 瓦特(W) → 错误：功率。\nC. 伏特(V) → 错误：电压。\nD. 安培(A) → 错误：电流。\n【答案】焦耳(J)\n【易错】电能焦耳，功率瓦特。"
  },

  // ===== 第2章 直流电路 =====
  { id: "ne2401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "分压公式", type: "single", typeLabel: "单选",
    stem: "两个电阻R1=6Ω，R2=3Ω串联接9V电源，R1上电压是（　）", options: ["3V", "6V", "9V", "1.5V"], answer: "6V",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "分压"],
    analysis: "【题干】6串3接9V，R1电压？\n【考点】串联分压\n【详细解答】\n1. 总电阻=6+3=9Ω。\n2. 电流=9V/9Ω=1A。\n3. R1电压=1A×6Ω=6V。\n4. 或分压公式：U1=9×6/(6+3)=6V。\n【选项逐个说】\nA. 3V → 错误：那是R2。\nB. 6V → 正确。\nC. 9V → 错误。\nD. 1.5V → 错误。\n【答案】6V\n【易错】电阻大分压大。"
  },
  { id: "ne2402", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "分流公式", type: "single", typeLabel: "单选",
    stem: "两个电阻R1=6Ω，R2=3Ω并联接电源，总电流9A，R1支路电流是（　）", options: ["3A", "6A", "9A", "1.5A"], answer: "3A",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "分流"],
    analysis: "【题干】6并3总电流9A，R1电流？\n【考点】并联分流\n【详细解答】\n1. 并联分流：电流与电阻成反比。\n2. I1 = 9 × R2/(R1+R2) = 9×3/(6+3) = 3A。\n【选项逐个说】\nA. 3A → 正确。\nB. 6A → 错误：那是R2。\nC. 9A → 错误。\nD. 1.5A → 错误。\n【答案】3A\n【易错】电阻大电流小。"
  },
  { id: "ne2403", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "电源外特性", type: "single", typeLabel: "单选",
    stem: "理想电压源的内阻等于（　）", options: ["0", "无穷大", "1Ω", "不确定"], answer: "0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "电压源"],
    analysis: "【题干】理想电压源内阻？\n【考点】理想电源\n【详细解答】\n1. 理想电压源：内阻为0，输出电压恒定。\n2. 理想电流源：内阻无穷大，输出电流恒定。\n【选项逐个说】\nA. 0 → 正确。\nB. 无穷大 → 错误：那是理想电流源。\nC. 1Ω → 错误。\nD. 不确定 → 错误。\n【答案】0\n【易错】理想电压源内阻0。"
  },

  // ===== 第3章 交流电路 =====
  { id: "ne3401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "RLC串联", type: "single", typeLabel: "单选",
    stem: "RLC串联电路发生谐振时，电路呈（　）", options: ["阻性", "感性", "容性", "纯感性"], answer: "阻性",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["交流电路", "谐振"],
    analysis: "【题干】RLC串联谐振时呈什么性？\n【考点】串联谐振\n【详细解答】\n1. 谐振时XL=XC，电抗为0。\n2. 电路呈纯阻性，功率因数=1。\n3. 此时电流最大，电感和电容上电压可能高于电源电压。\n【选项逐个说】\nA. 阻性 → 正确。\nB. 感性 → 错误。\nC. 容性 → 错误。\nD. 纯感性 → 错误。\n【答案】阻性\n【易错】谐振时阻性，cosφ=1。"
  },
  { id: "ne3402", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "三相电", type: "single", typeLabel: "单选",
    stem: "我国三相市电的线电压是（　）", options: ["220V", "380V", "110V", "660V"], answer: "380V",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "三相电"],
    analysis: "【题干】三相线电压？\n【考点】三相交流电\n【详细解答】\n1. 相电压：220V（火线对零线）。\n2. 线电压：380V（火线对火线）。\n3. 线电压=相电压×√3。\n【选项逐个说】\nA. 220V → 错误：那是相电压。\nB. 380V → 正确。\nC. 110V → 错误。\nD. 660V → 错误。\n【答案】380V\n【易错】相220，线380。"
  },

  // ===== 第4章 暂态 =====
  { id: "ne4401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "RC充电", type: "single", typeLabel: "单选",
    stem: "RC电路充电时，电容电压按什么规律变化？（　）", options: ["指数上升", "指数下降", "线性上升", "线性下降"], answer: "指数上升",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["暂态分析", "RC充电"],
    analysis: "【题干】RC充电电容电压？\n【考点】RC过渡过程\n【详细解答】\n1. 充电：电容电压从0指数上升到电源电压。\n2. 放电：电容电压从初始值指数下降到0。\n3. 时间常数τ=RC。\n【选项逐个说】\nA. 指数上升 → 正确。\nB. 指数下降 → 错误：那是放电。\nC. 线性上升 → 错误。\nD. 线性下降 → 错误。\n【答案】指数上升\n【易错】充电指数升，放电指数降。"
  },

  // ===== 第5章 二极管 =====
  { id: "ne5401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "二极管正向压降", type: "single", typeLabel: "单选",
    stem: "硅二极管正向导通压降约为（　）", options: ["0.3V", "0.7V", "1.5V", "0V"], answer: "0.7V",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "正向压降"],
    analysis: "【题干】硅管正向压降？\n【考点】二极管导通电压\n【详细解答】\n1. 硅二极管：正向导通压降约0.7V。\n2. 锗二极管：正向导通压降约0.3V。\n【选项逐个说】\nA. 0.3V → 错误：那是锗管。\nB. 0.7V → 正确：硅管。\nC. 1.5V → 错误。\nD. 0V → 错误。\n【答案】0.7V\n【易错】硅0.7，锗0.3。"
  },
  { id: "ne5402", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", knowledgePoint: "发光二极管", type: "single", typeLabel: "单选",
    stem: "发光二极管LED发光条件是（　）", options: ["正向导通", "反向击穿", "加反向电压", "零偏"], answer: "正向导通",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "LED"],
    analysis: "【题干】LED发光条件？\n【考点】特殊二极管\n【详细解答】\n1. LED：正向导通时发光。\n2. 不同材料发不同颜色光。\n3. 使用要串联限流电阻。\n【选项逐个说】\nA. 正向导通 → 正确。\nB. 反向击穿 → 错误：那是稳压管。\nC. 加反向电压 → 错误。\nD. 零偏 → 错误。\n【答案】正向导通\n【易错】LED正向发光。"
  },

  // ===== 第6章 三极管 =====
  { id: "ne6401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "三极管类型", type: "single", typeLabel: "单选",
    stem: "NPN型三极管发射区掺杂的是（　）", options: ["N型半导体", "P型半导体", "本征半导体", "绝缘材料"], answer: "N型半导体",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["三极管", "结构"],
    analysis: "【题干】NPN发射区是？\n【考点】三极管结构\n【详细解答】\n1. NPN：发射区N，基区P，集电区N。\n2. 名字就是从发射区到集电区的类型。\n【选项逐个说】\nA. N型半导体 → 正确。\nB. P型半导体 → 错误：那是PNP。\nC. 本征半导体 → 错误。\nD. 绝缘材料 → 错误。\n【答案】N型半导体\n【易错】NPN两边N中间P。"
  },
  { id: "ne6402", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", knowledgePoint: "共射放大电路", type: "single", typeLabel: "单选",
    stem: "共射极放大电路输出电压与输入电压相位关系是（　）", options: ["同相", "反相", "超前90°", "滞后90°"], answer: "反相",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["三极管", "放大电路"],
    analysis: "【题干】共射放大输出与输入相位？\n【考点】共射放大\n【详细解答】\n1. 共射极放大电路：输出与输入反相（相差180°）。\n2. 共集电极：输出与输入同相。\n【选项逐个说】\nA. 同相 → 错误。\nB. 反相 → 正确。\nC. 超前90° → 错误。\nD. 滞后90° → 错误。\n【答案】反相\n【易错】共射反相，共集同相。"
  },

  // ===== 第7章 运放 =====
  { id: "ne7401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", knowledgePoint: "积分电路", type: "single", typeLabel: "单选",
    stem: "积分运算电路反馈元件是（　）", options: ["电阻", "电容", "电感", "二极管"], answer: "电容",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运放", "积分电路"],
    analysis: "【题干】积分电路反馈元件？\n【考点】积分与微分\n【详细解答】\n1. 积分电路：反馈支路是电容。\n2. 微分电路：反馈支路是电阻，输入支路是电容。\n【选项逐个说】\nA. 电阻 → 错误。\nB. 电容 → 正确。\nC. 电感 → 错误。\nD. 二极管 → 错误。\n【答案】电容\n【易错】积分反馈用电容。"
  },

  // ===== 数字电路 =====
  { id: "ne8401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", knowledgePoint: "CMOS门电路", type: "single", typeLabel: "单选",
    stem: "CMOS门电路输入悬空会怎样？（　）", options: ["相当于高电平", "相当于低电平", "状态不确定，易损坏", "正常工作"], answer: "状态不确定，易损坏",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "CMOS"],
    analysis: "【题干】CMOS输入悬空？\n【考点】CMOS门电路\n【详细解答】\n1. TTL输入悬空相当于高电平。\n2. CMOS输入不能悬空（电平不确定，还可能损坏器件）。\n【选项逐个说】\nA. 相当于高电平 → 错误：那是TTL。\nB. 相当于低电平 → 错误。\nC. 状态不确定，易损坏 → 正确。\nD. 正常工作 → 错误。\n【答案】状态不确定，易损坏\n【易错】CMOS不能悬空。"
  },
  { id: "ne9401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", knowledgePoint: "数据选择器", type: "single", typeLabel: "单选",
    stem: "8选1数据选择器有几个选择输入端？（　）", options: ["2个", "3个", "4个", "8个"], answer: "3个",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["组合逻辑", "数据选择器"],
    analysis: "【题干】8选1选择器选择端？\n【考点】数据选择器\n【详细解答】\n1. 2ⁿ选1需要n个选择端。\n2. 8选1：2³=8，所以3个选择端。\n【选项逐个说】\nA. 2个 → 错误：那是4选1。\nB. 3个 → 正确。\nC. 4个 → 错误：那是16选1。\nD. 8个 → 错误。\n【答案】3个\n【易错】n个选择端选2^n路。"
  },
  { id: "ne10401", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", knowledgePoint: "D触发器", type: "single", typeLabel: "单选",
    stem: "D触发器的次态Q*等于（　）", options: ["D", "Q", "/D", "/Q"], answer: "D",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["时序逻辑", "D触发器"],
    analysis: "【题干】D触发器次态？\n【考点】D触发器\n【详细解答】\n1. D触发器：Q* = D。\n2. 时钟上升沿把D端值送到输出Q。\n3. D触发器没有空翻问题。\n【选项逐个说】\nA. D → 正确。\nB. Q → 错误：保持。\nC. /D → 错误。\nD. /Q → 错误。\n【答案】D\n【易错】D触发器次态等于D。"
  }
]);
