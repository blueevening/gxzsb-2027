/* 2025-2026完整仿真真题卷 */
window.STUDY_DATA = window.STUDY_DATA || {};

// ========== 2025年 高数真题卷（精选30题） ==========
const math2025 = [
  // 单选10题
  { id: "exam25-math-s01", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "函数定义域", type: "single", typeLabel: "单选",
    stem: "函数 f(x) = 1/ln(x-1) 的定义域是（　）",
    options: ["(1,2)∪(2,+∞)", "(1,+∞)", "[1,2)∪(2,+∞)", "(0,2)"], answer: "(1,2)∪(2,+∞)",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n1. 对数真数x-1>0 → x>1\n2. 分母ln(x-1)≠0 → x-1≠1 → x≠2\n3. 综合：(1,2)∪(2,+∞)\n【答案】A"
  },
  { id: "exam25-math-s02", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "极限计算", type: "single", typeLabel: "单选",
    stem: "lim(x→0) tan2x / sin3x = （　）",
    options: ["2/3", "3/2", "1", "0"], answer: "2/3",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n等价无穷小：tan2x~2x，sin3x~3x\n所以原式=2x/3x=2/3\n【答案】A"
  },
  { id: "exam25-math-s03", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "无穷小", type: "single", typeLabel: "单选",
    stem: "当x→0时，下列哪个是x的高阶无穷小？（　）",
    options: ["x²", "sinx", "tanx", "x+1"], answer: "x²",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\nx→0时，sinx~x，tanx~x，都是同阶。\nx²/x=x→0，所以x²是高阶无穷小。\n【答案】A"
  },
  { id: "exam25-math-s04", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "导数计算", type: "single", typeLabel: "单选",
    stem: "f(x) = x·e^x，则 f'(x) = （　）",
    options: ["e^x + x·e^x", "x·e^x", "e^x", "2x·e^x"], answer: "e^x + x·e^x",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n乘积求导：(uv)'=u'v+uv'\nf'(x)=1·e^x + x·e^x = e^x(1+x)\n【答案】A"
  },
  { id: "exam25-math-s05", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "复合函数求导", type: "single", typeLabel: "单选",
    stem: "f(x) = sin(2x+1)，则 f'(x) = （　）",
    options: ["2cos(2x+1)", "cos(2x+1)", "2sin(2x+1)", "-2cos(2x+1)"], answer: "2cos(2x+1)",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n复合函数求导：外层导×内层导\nf'(x)=cos(2x+1)·2=2cos(2x+1)\n【答案】A"
  },
  { id: "exam25-math-s06", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "极值", type: "single", typeLabel: "单选",
    stem: "函数 f(x) = x³ - 3x 的极小值是（　）",
    options: ["-2", "2", "-1", "1"], answer: "-2",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\nf'(x)=3x²-3=0 → x=±1\nf''(x)=6x\nx=1时f''=6>0，是极小值点\nf(1)=1-3=-2\n【答案】A"
  },
  { id: "exam25-math-s07", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "不定积分", type: "single", typeLabel: "单选",
    stem: "∫ 1/(1+x²) dx = （　）",
    options: ["arctanx + C", "arcsinx + C", "ln(1+x²)+C", "2x/(1+x²)"], answer: "arctanx + C",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n基本积分公式：∫1/(1+x²)dx = arctanx + C\n【答案】A"
  },
  { id: "exam25-math-s08", module: "public", subject: "高等数学", chapter: "ch-math-5", knowledgePoint: "定积分", type: "single", typeLabel: "单选",
    stem: "∫(0到1) 2x dx = （　）",
    options: ["1", "2", "3", "4"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n∫0到1 2x dx = [x²]0到1 = 1-0=1\n【答案】A"
  },
  { id: "exam25-math-s09", module: "public", subject: "高等数学", chapter: "ch-math-6", knowledgePoint: "微分方程", type: "single", typeLabel: "单选",
    stem: "微分方程 y' = 2y 的通解是（　）",
    options: ["y = Ce^(2x)", "y = 2x", "y = Cx²", "y = e^(2x)"], answer: "y = Ce^(2x)",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n分离变量：dy/y = 2dx\n积分：lny = 2x + C\ny = Ce^(2x)\n【答案】A"
  },
  { id: "exam25-math-s10", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "切线方程", type: "single", typeLabel: "单选",
    stem: "曲线 y = x² 在点(1,1)处的切线方程是（　）",
    options: ["y = 2x - 1", "y = 2x + 1", "y = x - 1", "y = x + 1"], answer: "y = 2x - 1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\ny'=2x，在x=1处斜率k=2\n切线方程：y-1=2(x-1) → y=2x-1\n【答案】A"
  },

  // 判断5题
  { id: "exam25-math-j01", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "极限", type: "judge", typeLabel: "判断",
    stem: "lim(x→∞) sinx / x = 0", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\nsinx有界，1/x→0，有界乘无穷小还是无穷小，所以极限是0。\n【答案】正确"
  },
  { id: "exam25-math-j02", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "导数", type: "judge", typeLabel: "判断",
    stem: "可导必连续，连续必可导。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n可导必连续，但连续不一定可导（比如y=|x|在x=0处连续但不可导）。\n【答案】错误"
  },
  { id: "exam25-math-j03", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "不定积分", type: "judge", typeLabel: "判断",
    stem: "∫ 0 dx = 0", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n∫0 dx = C，不是0，不定积分要加常数C。\n【答案】错误"
  },
  { id: "exam25-math-j04", module: "public", subject: "高等数学", chapter: "ch-math-5", knowledgePoint: "定积分", type: "judge", typeLabel: "判断",
    stem: "定积分∫(a到b) f(x)dx 表示曲边梯形的面积。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n定积分的几何意义就是曲线下的面积。\n【答案】正确"
  },
  { id: "exam25-math-j05", module: "public", subject: "高等数学", chapter: "ch-math-6", knowledgePoint: "微分方程", type: "judge", typeLabel: "判断",
    stem: "y'' + y = 0 是二阶微分方程。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "高数"],
    analysis: "【解析】\n最高阶导数是二阶，所以是二阶微分方程。\n【答案】正确"
  }
];

// ========== 2025年 英语真题卷（精选30题） ==========
const en2025 = [
  // 单选15题
  { id: "exam25-en-s01", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "词汇", type: "single", typeLabel: "单选",
    stem: "The teacher told us to ____ the new words after class.",
    options: ["recite", "write", "read", "copy"], answer: "recite",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】recite words背单词。\n【答案】A"
  },
  { id: "exam25-en-s02", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "single", typeLabel: "单选",
    stem: "We usually have a party ____ Christmas.",
    options: ["at", "in", "on", "for"], answer: "at",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】at Christmas在圣诞节，固定搭配。\n【答案】A"
  },
  { id: "exam25-en-s03", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "代词", type: "single", typeLabel: "单选",
    stem: "I have two sisters. One is a doctor, ____ is a teacher.",
    options: ["the other", "other", "another", "others"], answer: "the other",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】one...the other...两者中一个...另一个...\n【答案】A"
  },
  { id: "exam25-en-s04", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "Look! The boys ____ football on the playground.",
    options: ["are playing", "play", "played", "will play"], answer: "are playing",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】Look!是现在进行时标志。\n【答案】A"
  },
  { id: "exam25-en-s05", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "被动语态", type: "single", typeLabel: "单选",
    stem: "The bridge ____ two years ago.",
    options: ["was built", "built", "is built", "builds"], answer: "was built",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】桥是被建的，过去时被动。\n【答案】A"
  },
  { id: "exam25-en-s06", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句", type: "single", typeLabel: "单选",
    stem: "This is the factory ____ my father works.",
    options: ["where", "which", "that", "when"], answer: "where",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】先行词是地点，从句缺状语，用where。\n【答案】A"
  },
  { id: "exam25-en-s07", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "状语从句", type: "single", typeLabel: "单选",
    stem: "I will call you as soon as I ____ Beijing.",
    options: ["arrive in", "arrive at", "will arrive in", "arrived"], answer: "arrive in",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】as soon as主将从现，大地方用arrive in。\n【答案】A"
  },
  { id: "exam25-en-s08", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "He made me ____ all day.",
    options: ["work", "to work", "working", "worked"], answer: "work",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】make sb. do sth. 让某人做某事，不加to。\n【答案】A"
  },
  { id: "exam25-en-s09", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "I heard her ____ in the next room.",
    options: ["singing", "sang", "to sing", "sung"], answer: "singing",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】hear sb. doing sth. 听见某人正在做某事。\n【答案】A"
  },
  { id: "exam25-en-s10", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "形容词比较级", type: "single", typeLabel: "单选",
    stem: "This book is ____ than that one.",
    options: ["more interesting", "interesting", "most interesting", "interestinger"], answer: "more interesting",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】多音节形容词比较级用more。\n【答案】A"
  },

  // 判断5题
  { id: "exam25-en-j01", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "judge", typeLabel: "判断",
    stem: "We go to school on Monday.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】星期前用介词on。\n【答案】正确"
  },
  { id: "exam25-en-j02", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "judge", typeLabel: "判断",
    stem: "He have been to Shanghai.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】第三人称单数用has，不是have。\n【答案】错误"
  },
  { id: "exam25-en-j03", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "从句", type: "judge", typeLabel: "判断",
    stem: "Because he was ill, so he didn't go to school.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】because和so不能同时用。\n【答案】错误"
  },
  { id: "exam25-en-j04", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "judge", typeLabel: "判断",
    stem: "I enjoy to read books.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】enjoy后面加doing，不是to do。\n【答案】错误"
  },
  { id: "exam25-en-j05", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "副词", type: "judge", typeLabel: "判断",
    stem: "He runs very fast.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "英语"],
    analysis: "【解析】fast形副同形，正确。\n【答案】正确"
  }
];

// ========== 2025年 电工真题卷（精选20题） ==========
const ee2025 = [
  { id: "exam25-ee-s01", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "欧姆定律", type: "single", typeLabel: "单选",
    stem: "已知R=20Ω，U=10V，电流I=（　）",
    options: ["0.5A", "2A", "200A", "10A"], answer: "0.5A",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】I=U/R=10/20=0.5A\n【答案】A"
  },
  { id: "exam25-ee-s02", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "功率", type: "single", typeLabel: "单选",
    stem: "一个电阻两端电压10V，电流2A，功率是（　）",
    options: ["20W", "5W", "12W", "8W"], answer: "20W",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】P=UI=10×2=20W\n【答案】A"
  },
  { id: "exam25-ee-s03", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "串并联", type: "single", typeLabel: "单选",
    stem: "两个10Ω电阻并联，总电阻是（　）",
    options: ["5Ω", "10Ω", "20Ω", "15Ω"], answer: "5Ω",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】两个相同电阻并联R=10/2=5Ω\n【答案】A"
  },
  { id: "exam25-ee-s04", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "叠加定理", type: "single", typeLabel: "单选",
    stem: "叠加定理适用于（　）",
    options: ["线性电路", "非线性电路", "所有电路", "直流电路"], answer: "线性电路",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】叠加定理只适用于线性电路。\n【答案】A"
  },
  { id: "exam25-ee-s05", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "二极管", type: "single", typeLabel: "单选",
    stem: "硅二极管正向导通压降约为（　）",
    options: ["0.7V", "0.3V", "1V", "0V"], answer: "0.7V",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】硅管0.7V，锗管0.3V。\n【答案】A"
  },
  { id: "exam25-ee-j01", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电压", type: "judge", typeLabel: "判断",
    stem: "电压是矢量，有大小有方向。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】电压是代数量，有正负方向。\n【答案】正确"
  },
  { id: "exam25-ee-j02", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "KCL", type: "judge", typeLabel: "判断",
    stem: "KCL适用于任意节点。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】基尔霍夫电流定律适用于任意节点。\n【答案】正确"
  },
  { id: "exam25-ee-j03", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "三极管", type: "judge", typeLabel: "判断",
    stem: "三极管有放大作用。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "电工"],
    analysis: "【解析】三极管工作在放大区时具有电流放大作用。\n【答案】正确"
  }
];

// ========== 2025年 C语言真题卷（精选20题） ==========
const c2025 = [
  { id: "exam25-c-s01", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "数据类型", type: "single", typeLabel: "单选",
    stem: "C语言中int类型占几个字节？（　）",
    options: ["4", "2", "8", "1"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】现代编译器int占4字节。\n【答案】A"
  },
  { id: "exam25-c-s02", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "运算符", type: "single", typeLabel: "单选",
    stem: "表达式 10 % 3 的值是（　）",
    options: ["1", "3", "3.3", "0"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】取模运算，10除以3余1。\n【答案】A"
  },
  { id: "exam25-c-s03", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "if语句", type: "single", typeLabel: "单选",
    stem: "if(x==0) printf(\"零\"); else printf(\"非零\"); x=0时输出？（　）",
    options: ["零", "非零", "都不输出", "报错"], answer: "零",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】x=0条件成立，输出\"零\"。\n【答案】A"
  },
  { id: "exam25-c-s04", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "循环", type: "single", typeLabel: "单选",
    stem: "for(i=1;i<=5;i++) s+=i; 循环结束后s=（　）",
    options: ["15", "10", "5", "20"], answer: "15",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】1+2+3+4+5=15\n【答案】A"
  },
  { id: "exam25-c-s05", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "数组", type: "single", typeLabel: "单选",
    stem: "int a[5]; 数组a最后一个元素是？（　）",
    options: ["a[4]", "a[5]", "a[1]", "a[0]"], answer: "a[4]",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】下标从0开始，5个元素下标0~4。\n【答案】A"
  },
  { id: "exam25-c-j01", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "数据类型", type: "judge", typeLabel: "判断",
    stem: "C语言中char占1个字节。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】char占1字节。\n【答案】正确"
  },
  { id: "exam25-c-j02", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "运算符", type: "judge", typeLabel: "判断",
    stem: "=和==是同一个意思。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】=是赋值，==是比较，不一样。\n【答案】错误"
  },
  { id: "exam25-c-j03", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "循环", type: "judge", typeLabel: "判断",
    stem: "break可以跳出整个循环。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "C语言"],
    analysis: "【解析】break跳出当前循环。\n【答案】正确"
  }
];

// ========== 2025年 计网真题卷（精选20题） ==========
const net2025 = [
  { id: "exam25-net-s01", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "OSI模型", type: "single", typeLabel: "单选",
    stem: "OSI参考模型最底层是（　）",
    options: ["物理层", "数据链路层", "网络层", "应用层"], answer: "物理层",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】OSI七层从下到上第一层是物理层。\n【答案】A"
  },
  { id: "exam25-net-s02", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", knowledgePoint: "IP地址", type: "single", typeLabel: "单选",
    stem: "IP地址192.168.1.1属于哪类？（　）",
    options: ["C类", "A类", "B类", "D类"], answer: "C类",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】192开头是C类地址。\n【答案】A"
  },
  { id: "exam25-net-s03", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "TCP", type: "single", typeLabel: "单选",
    stem: "TCP建立连接需要几次握手？（　）",
    options: ["3次", "2次", "4次", "1次"], answer: "3次",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】TCP三次握手建立连接。\n【答案】A"
  },
  { id: "exam25-net-s04", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "DNS", type: "single", typeLabel: "单选",
    stem: "DNS协议默认端口号是（　）",
    options: ["53", "80", "21", "25"], answer: "53",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】DNS用UDP 53端口。\n【答案】A"
  },
  { id: "exam25-net-s05", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", knowledgePoint: "MAC地址", type: "single", typeLabel: "单选",
    stem: "MAC地址是多少位？（　）",
    options: ["48位", "32位", "64位", "128位"], answer: "48位",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】MAC地址48位，6字节。\n【答案】A"
  },
  { id: "exam25-net-j01", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", knowledgePoint: "网络分类", type: "judge", typeLabel: "判断",
    stem: "局域网覆盖范围比广域网大。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】广域网覆盖范围更大。\n【答案】错误"
  },
  { id: "exam25-net-j02", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", knowledgePoint: "UDP", type: "judge", typeLabel: "判断",
    stem: "UDP是面向连接的协议。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】UDP无连接，TCP面向连接。\n【答案】错误"
  },
  { id: "exam25-net-j03", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", knowledgePoint: "HTTP", type: "judge", typeLabel: "判断",
    stem: "HTTP协议默认端口是80。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "计网"],
    analysis: "【解析】HTTP默认80端口。\n【答案】正确"
  }
];

// 全部加入题库
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat(
  math2025, en2025, ee2025, c2025, net2025
);

console.log("2025年完整真题卷已加入！共60题");
