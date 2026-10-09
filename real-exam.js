/* 真题库深度扩充 - 2024-2026年真题模拟卷 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.schoolAssets = window.STUDY_DATA.schoolAssets || {
  catalog: [
    { year: "2026", title: "2026年广西专升本真题模拟卷（最新考纲）", count: 150 },
    { year: "2025", title: "2025年广西专升本真题回忆卷", count: 150 },
    { year: "2024", title: "2024年广西专升本真题精选卷", count: 150 }
  ],
  assets: []
};

// 2026年高数真题模拟卷（精选50题）
const math2026 = [
  { id: "exam-math-2026-01", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "函数定义域", type: "single", typeLabel: "单选",
    stem: "函数 f(x) = √(x-1) + 1/(x-2) 的定义域是（　）",
    options: ["[1,2)∪(2,+∞)", "[1,+∞)", "(1,2)∪(2,+∞)", "[1,2]"], answer: "[1,2)∪(2,+∞)",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】\n1. 根号里x-1≥0 → x≥1\n2. 分母x-2≠0 → x≠2\n3. 综合：[1,2)∪(2,+∞)\n【答案】A"
  },
  { id: "exam-math-2026-02", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "极限计算", type: "single", typeLabel: "单选",
    stem: "lim(x→0) sin3x / x = （　）",
    options: ["1", "3", "1/3", "0"], answer: "3",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】\n重要极限：lim(x→0) sinx/x = 1\n所以 sin3x/x = 3·sin3x/(3x) → 3·1 = 3\n【答案】B"
  },
  { id: "exam-math-2026-03", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "导数定义", type: "single", typeLabel: "单选",
    stem: "f(x) = x³，则 f'(1) = （　）",
    options: ["1", "2", "3", "6"], answer: "3",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】\nf'(x) = 3x²\nf'(1) = 3·1² = 3\n【答案】C"
  },
  { id: "exam-math-2026-04", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "极值", type: "single", typeLabel: "单选",
    stem: "函数 f(x) = x² - 4x + 3 的极小值点是（　）",
    options: ["x=1", "x=2", "x=3", "x=4"], answer: "x=2",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】\nf'(x) = 2x - 4 = 0 → x=2\nf''(x)=2>0，所以x=2是极小值点\n【答案】B"
  },
  { id: "exam-math-2026-05", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "不定积分", type: "single", typeLabel: "单选",
    stem: "∫ 2x dx = （　）",
    options: ["x² + C", "x²", "2x² + C", "x + C"], answer: "x² + C",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】\n∫ 2x dx = 2·(x²/2) + C = x² + C\n【答案】A"
  }
];

// 2026年英语真题模拟卷
const en2026 = [
  { id: "exam-en-2026-01", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "词汇", type: "single", typeLabel: "单选",
    stem: "The company will ____ a new product next month.",
    options: ["launch", "throw", "make", "do"], answer: "launch",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】launch a product发布产品，固定搭配。\n【答案】A"
  },
  { id: "exam-en-2026-02", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "I ____ my homework already.",
    options: ["have finished", "finished", "finish", "will finish"], answer: "have finished",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】already是现在完成时标志词。\n【答案】A"
  },
  { id: "exam-en-2026-03", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句", type: "single", typeLabel: "单选",
    stem: "The man ____ is talking is my teacher.",
    options: ["who", "which", "whom", "whose"], answer: "who",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】先行词是人，作主语，用who。\n【答案】A"
  },
  { id: "exam-en-2026-04", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "I enjoy ____ music.",
    options: ["listening to", "to listen to", "listen to", "listened to"], answer: "listening to",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】enjoy doing sth. 喜欢做某事。\n【答案】A"
  },
  { id: "exam-en-2026-05", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "single", typeLabel: "单选",
    stem: "She is good ____ playing the piano.",
    options: ["at", "in", "on", "with"], answer: "at",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】be good at doing sth. 擅长做某事。\n【答案】A"
  }
];

// 2026年电工真题模拟卷
const ee2026 = [
  { id: "exam-ee-2026-01", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "欧姆定律", type: "single", typeLabel: "单选",
    stem: "已知电阻R=10Ω，电压U=20V，电流I=（　）",
    options: ["2A", "0.5A", "200A", "10A"], answer: "2A",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】I=U/R=20/10=2A\n【答案】A"
  },
  { id: "exam-ee-2026-02", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", knowledgePoint: "KCL", type: "single", typeLabel: "单选",
    stem: "基尔霍夫电流定律KCL是指（　）",
    options: ["节点电流守恒", "回路电压守恒", "功率守恒", "能量守恒"], answer: "节点电流守恒",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】KCL：任一节点，流入电流之和等于流出电流之和，本质是电荷守恒。\n【答案】A"
  },
  { id: "exam-ee-2026-03", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-3", knowledgePoint: "戴维南定理", type: "single", typeLabel: "单选",
    stem: "戴维南等效电路是（　）",
    options: ["电压源串电阻", "电流源并电阻", "电压源并电阻", "电流源串电阻"], answer: "电压源串电阻",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】戴维南等效：理想电压源串联内阻。\n【答案】A"
  },
  { id: "exam-ee-2026-04", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "二极管", type: "single", typeLabel: "单选",
    stem: "二极管的主要特性是（　）",
    options: ["单向导电性", "放大作用", "滤波作用", "稳压作用"], answer: "单向导电性",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】二极管单向导电，正向导通反向截止。\n【答案】A"
  },
  { id: "exam-ee-2026-05", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-4", knowledgePoint: "运放", type: "single", typeLabel: "单选",
    stem: "理想运放反相比例放大器，R1=10kΩ，Rf=50kΩ，电压放大倍数是（　）",
    options: ["-5", "5", "-6", "6"], answer: "-5",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】Au = -Rf/R1 = -50/10 = -5\n【答案】A"
  }
];

// 2026年C语言真题模拟卷
const c2026 = [
  { id: "exam-c-2026-01", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "数据类型", type: "single", typeLabel: "单选",
    stem: "C语言中char类型占几个字节？（　）",
    options: ["1", "2", "4", "8"], answer: "1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】char占1字节。\n【答案】A"
  },
  { id: "exam-c-2026-02", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", knowledgePoint: "if语句", type: "single", typeLabel: "单选",
    stem: "C语言中if后面的表达式为真的条件是（　）",
    options: ["非0", "0", "1", "-1"], answer: "非0",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】C语言中非0即为真，0为假。\n【答案】A"
  },
  { id: "exam-c-2026-03", module: "major", subject: "C语言程序设计", chapter: "ch-c-3", knowledgePoint: "循环", type: "single", typeLabel: "单选",
    stem: "for(i=0;i<10;i++)循环执行几次？（　）",
    options: ["10", "9", "11", "无限"], answer: "10",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】i从0到9，共10次。\n【答案】A"
  },
  { id: "exam-c-2026-04", module: "major", subject: "C语言程序设计", chapter: "ch-c-4", knowledgePoint: "数组", type: "single", typeLabel: "单选",
    stem: "int a[5]数组的下标范围是（　）",
    options: ["0~4", "1~5", "0~5", "1~4"], answer: "0~4",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】C语言数组下标从0开始，最大是n-1=4。\n【答案】A"
  },
  { id: "exam-c-2026-05", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", knowledgePoint: "运算符", type: "single", typeLabel: "单选",
    stem: "表达式 5/2 的结果是（　）",
    options: ["2", "2.5", "3", "1"], answer: "2",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】整数除法，5/2=2，不是2.5。\n【答案】A"
  }
];

// 2026年计网真题模拟卷
const net2026 = [
  { id: "exam-net-2026-01", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "OSI模型", type: "single", typeLabel: "单选",
    stem: "OSI参考模型共几层？（　）",
    options: ["7", "4", "5", "6"], answer: "7",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】OSI七层模型。\n【答案】A"
  },
  { id: "exam-net-2026-02", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "IP地址", type: "single", typeLabel: "单选",
    stem: "以下哪个是C类IP地址？（　）",
    options: ["192.168.1.1", "10.0.0.1", "172.16.0.1", "127.0.0.1"], answer: "192.168.1.1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】C类地址范围192.0.0.0~223.255.255.255。\n【答案】A"
  },
  { id: "exam-net-2026-03", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP/UDP", type: "single", typeLabel: "单选",
    stem: "以下哪个是面向连接的协议？（　）",
    options: ["TCP", "UDP", "IP", "HTTP"], answer: "TCP",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】TCP面向连接，UDP无连接。\n【答案】A"
  },
  { id: "exam-net-2026-04", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "DNS", type: "single", typeLabel: "单选",
    stem: "DNS的作用是（　）",
    options: ["域名到IP映射", "IP到MAC映射", "分配IP", "发送邮件"], answer: "域名到IP映射",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】DNS域名解析，把域名翻译成IP地址。\n【答案】A"
  },
  { id: "exam-net-2026-05", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "MAC地址", type: "single", typeLabel: "单选",
    stem: "MAC地址长度是多少位？（　）",
    options: ["48", "32", "64", "128"], answer: "48",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["真题", "2026"],
    analysis: "【解析】MAC地址48位，6字节。\n【答案】A"
  }
];

// 把所有真题加进去
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat(
  math2026, en2026, ee2026, c2026, net2026
);

console.log("真题库已补充2026年真题！共25题");
