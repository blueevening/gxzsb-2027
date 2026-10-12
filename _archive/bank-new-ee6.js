/* 新增题库 - 2026考纲版 - 电工电子技术基础 第六批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 =====
  { id: "ne1501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电路工作状态", type: "single", typeLabel: "单选",
    stem: "电源两端被导线直接连接叫（　）", options: ["短路", "开路", "通路", "回路"], answer: "短路",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "短路"],
    analysis: "【题干】电源直接被导线连叫？\n【考点】短路\n【详细解答】\n1. 短路：电源正负极直接被导线连，电流很大，危险。\n2. 开路：电路断开，电流为0。\n【选项逐个说】\nA. 短路 → 正确。\nB. 开路 → 错误。\nC. 通路 → 错误。\nD. 回路 → 错误。\n【答案】短路\n【易错】短路很危险。"
  },
  { id: "ne1502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "参考方向", type: "single", typeLabel: "单选",
    stem: "计算出电流值为负，说明（　）", options: ["实际方向与参考方向相反", "实际方向与参考方向相同", "算错了", "电流为0"], answer: "实际方向与参考方向相反",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "参考方向"],
    analysis: "【题干】电流为负说明？\n【考点】参考方向\n【详细解答】\n1. 参考方向是人为选的。\n2. 算出来正：实际和参考同方向。\n3. 算出来负：实际和参考反方向。\n【选项逐个说】\nA. 实际方向与参考方向相反 → 正确。\nB. 实际方向与参考方向相同 → 错误。\nC. 算错了 → 错误。\nD. 电流为0 → 错误。\n【答案】实际方向与参考方向相反\n【易错】负号就是方向反了。"
  },

  // ===== 第2章 =====
  { id: "ne2501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "电阻串联功率", type: "single", typeLabel: "单选",
    stem: "两个电阻R1>R2串联，哪个电阻功率大？（　）", options: ["R1", "R2", "一样大", "不确定"], answer: "R1",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "功率"],
    analysis: "【题干】串联R1>R2哪个功率大？\n【考点】串联功率\n【详细解答】\n1. 串联电流相等，P=I²R。\n2. R大的功率大。\n3. 并联电压相等，P=U²/R，R小功率大。\n【选项逐个说】\nA. R1 → 正确：串联电阻大功率大。\nB. R2 → 错误。\nC. 一样大 → 错误。\nD. 不确定 → 错误。\n【答案】R1\n【易错】串联电阻大耗电大。"
  },
  { id: "ne2502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "电压源模型", type: "single", typeLabel: "单选",
    stem: "实际电压源模型是（　）", options: ["理想电压源串联内阻", "理想电流源并联内阻", "理想电压源并联内阻", "理想电流源串联内阻"], answer: "理想电压源串联内阻",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "电压源模型"],
    analysis: "【题干】实际电压源模型？\n【考点】电源模型\n【详细解答】\n1. 实际电压源：理想电压源Us串联内阻Rs。\n2. 实际电流源：理想电流源Is并联内阻Rs。\n【选项逐个说】\nA. 理想电压源串联内阻 → 正确。\nB. 理想电流源并联内阻 → 错误：那是电流源。\nC. 理想电压源并联内阻 → 错误。\nD. 理想电流源串联内阻 → 错误。\n【答案】理想电压源串联内阻\n【易错】电压源串内阻。"
  },

  // ===== 第3章 =====
  { id: "ne3501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "电容电压相位", type: "single", typeLabel: "单选",
    stem: "纯电容电路中，电压相位比电流（　）", options: ["超前90°", "滞后90°", "同相", "反相"], answer: "滞后90°",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "相位"],
    analysis: "【题干】纯电容电压比电流？\n【考点】元件相位\n【详细解答】\n1. 纯电容：电流超前电压90°（电压滞后电流90°）。\n2. 纯电感：电压超前电流90°。\n3. 记忆：容后——电容电压在后。\n【选项逐个说】\nA. 超前90° → 错误：那是电感。\nB. 滞后90° → 正确：电容。\nC. 同相 → 错误：电阻。\nD. 反相 → 错误。\n【答案】滞后90°\n【易错】电容电压滞后电流。"
  },
  { id: "ne3502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "提高功率因数", type: "single", typeLabel: "单选",
    stem: "感性电路提高功率因数通常（　）", options: ["并联电容", "串联电容", "并联电感", "并联电阻"], answer: "并联电容",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["交流电路", "功率因数"],
    analysis: "【题干】感性电路怎么提高功率因数？\n【考点】提高cosφ方法\n【详细解答】\n1. 感性电路并联适当电容，补偿无功。\n2. 并联不影响原负载工作。\n【选项逐个说】\nA. 并联电容 → 正确。\nB. 串联电容 → 错误。\nC. 并联电感 → 错误：更大了。\nD. 并联电阻 → 错误。\n【答案】并联电容\n【易错】感性并电容补偿。"
  },

  // ===== 第5章 =====
  { id: "ne5501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "二极管反向电阻", type: "single", typeLabel: "单选",
    stem: "二极管反向电阻（　）", options: ["很大", "很小", "为0", "和正向一样"], answer: "很大",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "反向电阻"],
    analysis: "【题干】二极管反向电阻？\n【考点】二极管特性\n【详细解答】\n1. 正向导通时电阻很小。\n2. 反向截止时电阻很大。\n3. 这就是单向导电的本质。\n【选项逐个说】\nA. 很大 → 正确。\nB. 很小 → 错误：那是正向。\nC. 为0 → 错误。\nD. 和正向一样 → 错误。\n【答案】很大\n【易错】反向电阻大。"
  },
  { id: "ne5502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "稳压管限流电阻", type: "single", typeLabel: "单选",
    stem: "稳压管电路必须串联（　）", options: ["限流电阻", "电感", "电容", "二极管"], answer: "限流电阻",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["二极管", "稳压管"],
    analysis: "【题干】稳压管必须串什么？\n【考点】稳压管使用\n【详细解答】\n1. 稳压管工作在反向击穿区。\n2. 必须串限流电阻，否则电流太大烧坏。\n【选项逐个说】\nA. 限流电阻 → 正确。\nB. 电感 → 错误。\nC. 电容 → 错误。\nD. 二极管 → 错误。\n【答案】限流电阻\n【易错】稳压管要串限流电阻。"
  },

  // ===== 第6章 =====
  { id: "ne6501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", "knowledgePoint": "三极管截止失真", type: "single", typeLabel: "单选",
    stem: "静态工作点太低会产生（　）", options: ["饱和失真", "截止失真", "双向失真", "线性失真"], answer: "截止失真",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["三极管", "失真"],
    analysis: "【题干】工作点太低什么失真？\n【考点】放大电路失真\n【详细解答】\n1. 工作点太低→IB太小→信号正半周三极管截止→截止失真。\n2. 工作点太高→饱和失真。\n【选项逐个说】\nA. 饱和失真 → 错误：那是工作点太高。\nB. 截止失真 → 正确。\nC. 双向失真 → 错误：信号太大。\nD. 线性失真 → 错误。\n【答案】截止失真\n【易错】点低截止，点高饱和。"
  },
  { id: "ne6502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", "knowledgePoint": "三极管三个电极名称", type: "single", typeLabel: "单选",
    stem: "三极管三个电极是（　）", options: ["发射极、基极、集电极", "阳极、阴极、门极", "源极、漏极、栅极", "正极、负极、控制极"], answer: "发射极、基极、集电极",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["三极管", "电极"],
    analysis: "【题干】三极管三个电极？\n【考点】三极管结构\n【详细解答】\n1. 三极管：发射极E、基极B、集电极C。\n2. 场效应管：源极S、漏极D、栅极G。\n【选项逐个说】\nA. 发射极、基极、集电极 → 正确。\nB. 阳极、阴极、门极 → 错误：那是晶闸管。\nC. 源极、漏极、栅极 → 错误：那是场效应管。\nD. 正极、负极、控制极 → 错误。\n【答案】发射极、基极、集电极\n【易错】B基E发C集。"
  },

  // ===== 第7章 =====
  { id: "ne7501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", "knowledgePoint": "反相比例", type: "single", typeLabel: "单选",
    stem: "反相比例运算电路输入电阻（　）", options: ["高", "低", "为0", "无穷大"], answer: "低",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运放", "反相比例"],
    analysis: "【题干】反相比例输入电阻？\n【考点】运放电路\n【详细解答】\n1. 反相比例输入电阻≈R1，不高。\n2. 同相比例输入电阻很高。\n【选项逐个说】\nA. 高 → 错误：那是同相。\nB. 低 → 正确。\nC. 为0 → 错误。\nD. 无穷大 → 错误。\n【答案】低\n【易错】反相输入电阻低。"
  },
  { id: "ne7502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-7", "knowledgePoint": "差分运算", type: "single", typeLabel: "单选",
    stem: "差分运算电路输出与两个输入的（　）成正比", options: ["差", "和", "积", "商"], answer: "差",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["运放", "差分"],
    analysis: "【题干】差分运算输出与什么成正比？\n【考点】差分运算\n【详细解答】\n1. 差分运算：输出与两个输入电压之差成正比。\n2. 也叫减法电路。\n【选项逐个说】\nA. 差 → 正确。\nB. 和 → 错误：那是加法。\nC. 积 → 错误。\nD. 商 → 错误。\n【答案】差\n【易错】差分就是减法。"
  },

  // ===== 数字电路 =====
  { id: "ne8501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", "knowledgePoint": "八进制转二进制", type: "single", typeLabel: "单选",
    stem: "八进制数7转换成二进制是（　）", options: ["111", "110", "101", "100"], answer: "111",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数字电路", "数制"],
    analysis: "【题干】八进制7转二进制？\n【考点】八进制二进制转换\n【详细解答】\n1. 一位八进制对应三位二进制。\n2. 7 = 111B。\n【选项逐个说】\nA. 111 → 正确。\nB. 110 → 错误：那是6。\nC. 101 → 错误：那是5。\nD. 100 → 错误：那是4。\n【答案】111\n【易错】一位八进制三位二进制。"
  },
  { id: "ne8502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", "knowledgePoint": "二极管或门", type: "single", typeLabel: "单选",
    stem: "二极管或门两个输入A=0，B=1，输出Y是（　）", options: ["0", "1", "高阻", "不确定"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["门电路", "或门"],
    analysis: "【题干】或门A=0,B=1输出？\n【考点】或门\n【详细解答】\n1. 或门：有1出1，全0出0。\n2. A=0,B=1，有1出1。\n【选项逐个说】\nA. 0 → 错误。\nB. 1 → 正确。\nC. 高阻 → 错误。\nD. 不确定 → 错误。\n【答案】1\n【易错】或门有1就1。"
  },
  { id: "ne9501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-9", "knowledgePoint": "七段显示器", type: "single", typeLabel: "单选",
    stem: "七段显示器用来显示（　）", options: ["数字", "文字", "图像", "声音"], answer: "数字",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["组合逻辑", "显示器"],
    analysis: "【题干】七段显示器显示？\n【考点】显示器件\n【详细解答】\n1. 七段数码管：显示0~9数字。\n2. 由译码器驱动。\n【选项逐个说】\nA. 数字 → 正确。\nB. 文字 → 错误。\nC. 图像 → 错误。\nD. 声音 → 错误。\n【答案】数字\n【易错】七段管显数字。"
  },
  { id: "ne10501", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", "knowledgePoint": "寄存器", type: "single", typeLabel: "单选",
    stem: "并行寄存器比串行寄存器（　）", options: ["速度快", "速度慢", "线多", "容量大"], answer: "速度快",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["时序逻辑", "寄存器"],
    analysis: "【题干】并行比串行？\n【考点】并行串行\n【详细解答】\n1. 并行：各位同时进出，速度快，但线多。\n2. 串行：一位一位传，速度慢，但线少。\n【选项逐个说】\nA. 速度快 → 正确。\nB. 速度慢 → 错误：那是串行。\nC. 线多 → 错误：那是缺点。\nD. 容量大 → 错误。\n【答案】速度快\n【易错】并行快但线多。"
  },
  { id: "ne10502", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-10", "knowledgePoint": "多谐振荡器", type: "single", typeLabel: "单选",
    stem: "多谐振荡器产生（　）", options: ["方波", "正弦波", "三角波", "锯齿波"], answer: "方波",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["555", "多谐振荡器"],
    analysis: "【题干】多谐振荡器产生什么波？\n【考点】多谐振荡器\n【详细解答】\n1. 多谐振荡器：没有稳定状态，自动产生方波。\n2. 常用555搭。\n【选项逐个说】\nA. 方波 → 正确。\nB. 正弦波 → 错误。\nC. 三角波 → 错误。\nD. 锯齿波 → 错误。\n【答案】方波\n【易错】多谐出方波。"
  },

  // ===== 判断题 =====
  { id: "ne1503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电流方向", type: "judge", typeLabel: "判断",
    stem: "金属导体中自由电子移动方向就是电流方向。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "电流"],
    analysis: "【题干】电子移动方向是电流方向？\n【考点】电流方向\n【详细解答】\n1. 电流方向是正电荷移动方向。\n2. 电子带负电，移动方向和电流方向相反。\n【答案】错误\n【易错】电子方向反了。"
  },
  { id: "ne2503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", "knowledgePoint": "基尔霍夫定律", type: "judge", typeLabel: "判断",
    stem: "基尔霍夫定律只适用于线性电路。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["直流电路", "基尔霍夫"],
    analysis: "【题干】基尔霍夫只适用线性？\n【考点】基尔霍夫定律适用范围\n【详细解答】\n1. 基尔霍夫定律是普遍定律，不管线性非线性都适用。\n【答案】错误\n【易错】基尔霍夫普遍适用。"
  },
  { id: "ne3503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", "knowledgePoint": "有功功率", type: "judge", typeLabel: "判断",
    stem: "有功功率单位是瓦特(W)。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["交流电路", "功率单位"],
    analysis: "【题干】有功功率单位瓦特？\n【考点】功率单位\n【详细解答】\n1. 有功功率P单位W。\n2. 无功Q单位var。\n3. 视在S单位VA。\n【答案】正确\n【易错】W是有功。"
  },
  { id: "ne5503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-5", "knowledgePoint": "桥式整流二极管数量", type: "judge", typeLabel: "判断",
    stem: "单相桥式整流电路用4个二极管。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["整流电路", "桥式"],
    analysis: "【题干】桥式整流用4个二极管？\n【考点】桥式整流\n【详细解答】\n1. 桥式整流：4个二极管接成电桥。\n2. 半波整流：1个二极管。\n【答案】正确\n【易错】桥式4个管。"
  },
  { id: "ne6503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-6", "knowledgePoint": "共集电极电路", type: "judge", typeLabel: "判断",
    stem: "共集电极放大电路又叫射极输出器。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["三极管", "射极输出器"],
    analysis: "【题干】共集电极叫射极输出器？\n【考点】三种组态\n【详细解答】\n1. 共集电极：输出从发射极取出，叫射极输出器。\n2. 特点：电压跟随，输入电阻高，输出电阻低。\n【答案】正确\n【易错】射极输出器=共集。"
  },
  { id: "ne8503", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-8", "knowledgePoint": "TTL电平", type: "judge", typeLabel: "判断",
    stem: "TTL高电平约3.4V，低电平约0.2V。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["门电路", "TTL电平"],
    analysis: "【题干】TTL高电平3.4V？\n【考点】TTL电平\n【详细解答】\n1. TTL高电平≥2.4V，典型3.4V。\n2. 低电平≤0.4V，典型0.2V。\n【答案】正确\n【易错】TTL 5V供电。"
  }
]);
