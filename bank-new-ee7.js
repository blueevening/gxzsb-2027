/* 新增题库 - 2026考纲版 - 电工电子技术基础 第七批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 =====
  { id: "ne1601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", "knowledgePoint": "负载", type: "single", typeLabel: "单选",
    stem: "负载的作用是（　）", options: ["把电能转换成其他形式能量", "把其他形式能量转换成电能", "产生电能", "提供电压"], answer: "把电能转换成其他形式能量",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "负载"],
    analysis: "【题干】负载作用？\n【考点】电源与负载\n【详细解答】\n1. 负载：把电能转换成光、热、机械等。\n2. 灯泡、电机都是负载。\n【选项逐个说】\nA. 把电能转换成其他形式能量 → 正确。\nB. 把其他形式能量转换成电能 → 错误：那是电源。\nC. 产生电能 → 错误。\nD. 提供电压 → 错误。\n【答案】把电能转换成其他形式能量\n【易错】负载耗电。"
  },
  { id: "ne1602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", "knowledgePoint": "电流单位换算", type: "single", typeLabel: "单选",
    stem: "1mA等于多少A？（　）", options: ["0.001A", "0.01A", "1000A", "0.1A"], answer: "0.001A",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "单位"],
    analysis: "【题干】1mA=？A\n【考点】单位换算\n【详细解答】\n1. 1A=1000mA。\n2. 1mA=0.001A。\n【选项逐个说】\nA. 0.001A → 正确。\nB. 0.01A → 错误。\nC. 1000A → 错误。\nD. 0.1A → 错误。\n【答案】0.001A\n【易错】m是毫，千分之一。"
  },

  // ===== 第2章 =====
  { id: "ne2601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", "knowledgePoint": "并联电阻", type: "single", typeLabel: "单选",
    stem: "两个100Ω电阻并联总电阻是（　）", options: ["50Ω", "100Ω", "200Ω", "25Ω"], answer: "50Ω",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "并联"],
    analysis: "【题干】两个100Ω并联？\n【考点】并联电阻\n【详细解答】\n1. 相同电阻R并联n个，总电阻=R/n。\n2. 两个100Ω并=50Ω。\n【选项逐个说】\nA. 50Ω → 正确。\nB. 100Ω → 错误。\nC. 200Ω → 错误：那是串联。\nD. 25Ω → 错误。\n【答案】50Ω\n【易错】两个相同并联一半。"
  },
  { id: "ne2602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", "knowledgePoint": "理想电流源", type: "single", typeLabel: "单选",
    stem: "理想电流源内阻等于（　）", options: ["0", "无穷大", "1Ω", "不确定"], answer: "无穷大",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "电流源"],
    analysis: "【题干】理想电流源内阻？\n【考点】理想电源\n【详细解答】\n1. 理想电流源：内阻无穷大，输出电流恒定。\n2. 理想电压源：内阻为0。\n【选项逐个说】\nA. 0 → 错误：那是电压源。\nB. 无穷大 → 正确。\nC. 1Ω → 错误。\nD. 不确定 → 错误。\n【答案】无穷大\n【易错】电流源内阻无穷大。"
  },

  // ===== 第3章 =====
  { id: "ne3601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "三相负载星形连接", type: "single", typeLabel: "单选",
    stem: "三相对称负载星形连接时，线电流等于相电流的（　）倍", options: ["1", "√3", "2", "3"], answer: "1",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "三相连接"],
    analysis: "【题干】星形连接线电流是相电流几倍？\n【考点】三相负载连接\n【详细解答】\n1. 星形连接：线电流=相电流，线电压=√3相电压。\n2. 三角形连接：线电压=相电压，线电流=√3相电流。\n【选项逐个说】\nA. 1 → 正确：星形线电流=相电流。\nB. √3 → 错误：那是三角形线电流。\nC. 2 → 错误。\nD. 3 → 错误。\n【答案】1\n【易错】星相线等，角线压等。"
  },
  { id: "ne3602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "无功功率", type: "single", typeLabel: "单选",
    stem: "无功功率单位是（　）", options: ["瓦特W", "乏var", "伏安VA", "焦耳J"], answer: "乏var",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "功率"],
    analysis: "【题干】无功功率单位？\n【考点】功率单位\n【详细解答】\n1. 有功P：W。\n2. 无功Q：var（乏）。\n3. 视在S：VA。\n【选项逐个说】\nA. 瓦特W → 错误：有功。\nB. 乏var → 正确：无功。\nC. 伏安VA → 错误：视在。\nD. 焦耳J → 错误：电能。\n【答案】乏var\n【易错】无功单位乏。"
  },

  // ===== 第5章 =====
  { id: "ne5601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "光电二极管", type: "single", typeLabel: "单选",
    stem: "光电二极管工作在（　）", options: ["正向导通", "反向偏置", "零偏", "饱和"], answer: "反向偏置",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["二极管", "光电"],
    analysis: "【题干】光电二极管工作在？\n【考点】特殊二极管\n【详细解答】\n1. 光电二极管：反向偏置，有光时反向电流变大。\n2. 把光信号变成电信号。\n【选项逐个说】\nA. 正向导通 → 错误。\nB. 反向偏置 → 正确。\nC. 零偏 → 错误。\nD. 饱和 → 错误。\n【答案】反向偏置\n【易错】光电管反向用。"
  },
  { id: "ne5602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "稳压管稳压值", type: "single", typeLabel: "单选",
    stem: "稳压管2CW57的稳定电压是9V，它工作在（　）", options: ["正向导通", "反向击穿", "正向截止", "反向截止"], answer: "反向击穿",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "稳压管"],
    analysis: "【题干】稳压管工作在？\n【考点】稳压管\n【详细解答】\n1. 稳压管工作在反向击穿区，电压稳定在稳压值。\n【选项逐个说】\nA. 正向导通 → 错误。\nB. 反向击穿 → 正确。\nC. 正向截止 → 错误。\nD. 反向截止 → 错误。\n【答案】反向击穿\n【易错】稳压管反向击穿稳压。"
  },

  // ===== 第6章 =====
  { id: "ne6601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", "knowledgePoint": "场效应管", type: "single", typeLabel: "单选",
    stem: "场效应管是（　）控制器件", options: ["电压", "电流", "功率", "频率"], answer: "电压",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["三极管", "场效应管"],
    analysis: "【题干】场效应管是什么控制器件？\n【考点】场效应管\n【详细解答】\n1. 三极管：电流控制器件（基极电流控制集电极电流）。\n2. 场效应管：电压控制器件（栅源电压控制漏极电流）。\n【选项逐个说】\nA. 电压 → 正确：场效应管。\nB. 电流 → 错误：那是三极管。\nC. 功率 → 错误。\nD. 频率 → 错误。\n【答案】电压\n【易错】场效应管电压控制。"
  },
  { id: "ne6602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", "knowledgePoint": "分压偏置稳定Q", type: "single", typeLabel: "单选",
    stem: "分压式偏置电路稳定Q点的原理是（　）", options: ["直流负反馈", "交流负反馈", "正反馈", "无反馈"], answer: "直流负反馈",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["三极管", "工作点"],
    analysis: "【题干】分压偏置稳Q原理？\n【考点】工作点稳定\n【详细解答】\n1. Re上的直流负反馈稳定Q点。\n2. 温度变化→IC变化→Ve变化→Vbe变化→IB变化→IC稳定。\n【选项逐个说】\nA. 直流负反馈 → 正确。\nB. 交流负反馈 → 错误。\nC. 正反馈 → 错误。\nD. 无反馈 → 错误。\n【答案】直流负反馈\n【易错】Re直流负反馈。"
  },

  // ===== 第7章 =====
  { id: "ne7601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", "knowledgePoint": "运放电源", type: "single", typeLabel: "单选",
    stem: "集成运放工作需要（　）电源", options: ["双极性", "单极性", "不需要", "高压"], answer: "双极性",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["运放", "电源"],
    analysis: "【题干】运放用什么电源？\n【考点】运放电源\n【详细解答】\n1. 运放一般用正负双电源。\n2. 也可以单电源，但要加偏置。\n【选项逐个说】\nA. 双极性 → 正确。\nB. 单极性 → 错误。\nC. 不需要 → 错误。\nD. 高压 → 错误。\n【答案】双极性\n【易错】运放双电源。"
  },

  // ===== 数字电路 =====
  { id: "ne8601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", "knowledgePoint": "三态门", type: "single", typeLabel: "单选",
    stem: "三态门输出有三种状态：高电平、低电平和（　）", options: ["高阻", "低阻", "浮空", "不确定"], answer: "高阻",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "三态门"],
    analysis: "【题干】三态门第三态？\n【考点】三态门\n【详细解答】\n1. 三态门：高电平、低电平、高阻态。\n2. 高阻态相当于和电路断开。\n【选项逐个说】\nA. 高阻 → 正确。\nB. 低阻 → 错误。\nC. 浮空 → 错误。\nD. 不确定 → 错误。\n【答案】高阻\n【易错】三态门第三态高阻。"
  },
  { id: "ne9601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", "knowledgePoint": "竞争冒险", type: "single", typeLabel: "单选",
    stem: "组合逻辑电路中冒险是指（　）", options: ["输入变化时输出出现尖脉冲", "输出不稳定", "有记忆", "出错"], answer: "输入变化时输出出现尖脉冲",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["组合逻辑", "竞争冒险"],
    analysis: "【题干】冒险是什么？\n【考点】竞争冒险\n【详细解答】\n1. 信号经过不同路径到达门电路输入端有时间差。\n2. 输出可能产生短暂尖脉冲，就是冒险。\n【选项逐个说】\nA. 输入变化时输出出现尖脉冲 → 正确。\nB. 输出不稳定 → 错误。\nC. 有记忆 → 错误。\nD. 出错 → 错误。\n【答案】输入变化时输出出现尖脉冲\n【易错】冒险就是毛刺。"
  },
  { id: "ne10601", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", "knowledgePoint": "寄存器分类", type: "single", typeLabel: "单选",
    stem: "移位寄存器可以（　）", options: ["存放数据", "移位", "计数", "译码"], answer: "移位",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["时序逻辑", "移位寄存器"],
    analysis: "【题干】移位寄存器功能？\n【考点】移位寄存器\n【详细解答】\n1. 移位寄存器：除了存数据，还能在移位脉冲下左右移位。\n【选项逐个说】\nA. 存放数据 → 错误：基本寄存器也能。\nB. 移位 → 正确：这是移位寄存器特点。\nC. 计数 → 错误。\nD. 译码 → 错误。\n【答案】移位\n【易错】移位寄存器能移位。"
  },

  // ===== 判断题 =====
  { id: "ne1603", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", "knowledgePoint": "电压", type: "judge", typeLabel: "判断",
    stem: "两点间电压与参考点选择无关。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["电路基本概念", "电压"],
    analysis: "【题干】电压与参考点无关？\n【考点】电压与电位\n【详细解答】\n1. 电压是两点电位差，和参考点选哪没关系。\n2. 电位才和参考点有关。\n【答案】正确\n【易错】电压是差值，电位是相对值。"
  },
  { id: "ne3603", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "电容", type: "judge", typeLabel: "判断",
    stem: "电容在直流稳态电路中相当于开路。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "电容"],
    analysis: "【题干】直流稳态电容相当于开路？\n【考点】电容特性\n【详细解答】\n1. 电容通交流隔直流。\n2. 直流稳态下电容充电完就没电流，相当于开路。\n【答案】正确\n【易错】电容隔直。"
  },
  { id: "ne5603", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "滤波电容", type: "judge", typeLabel: "判断",
    stem: "直流电源滤波电容越大，输出纹波越小。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电源", "滤波"],
    analysis: "【题干】滤波电容越大纹波越小？\n【考点】电容滤波\n【详细解答】\n1. 电容储能，电容越大放电越慢，输出越平滑。\n【答案】正确\n【易错】大电容滤波好。"
  },
  { id: "ne8602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", "knowledgePoint": "OC门", type: "judge", typeLabel: "判断",
    stem: "OC门输出端可以直接线与。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "OC门"],
    analysis: "【题干】OC门能线与？\n【考点】OC门\n【详细解答】\n1. OC门（集电极开路）输出可以直接并联实现线与。\n2. 普通推拉输出门不能并联。\n【答案】正确\n【易错】OC门可以线与。"
  },
  { id: "ne10602", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", "knowledgePoint": "边沿触发器", type: "judge", typeLabel: "判断",
    stem: "边沿触发器只在时钟边沿时刻接收输入信号。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["时序逻辑", "边沿触发"],
    analysis: "【题干】边沿触发器只在边沿接收？\n【考点】边沿触发器\n【详细解答】\n1. 边沿触发器：只在时钟上升沿（或下降沿）瞬间接收输入。\n2. 解决空翻问题。\n【答案】正确\n【易错】边沿触发抗干扰。"
  }
]);
