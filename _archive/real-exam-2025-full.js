/* 2025年完整真题卷 - 全套100题 */
window.STUDY_DATA = window.STUDY_DATA || {};

// ========== 2025高数完整卷 30题 ==========
const math2025full = [
  // 单选15题
  { id: "f25-m-s01", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "函数定义域", type: "single", typeLabel: "单选",
    stem: "函数 f(x) = √(x+2) + 1/(x-1) 的定义域是（　）",
    options: ["[-2,1)∪(1,+∞)", "(-2,1)∪(1,+∞)", "[-2,+∞)", "(1,+∞)"], answer: "[-2,1)∪(1,+∞)",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】根号x+2≥0→x≥-2；分母x-1≠0→x≠1。综合得[-2,1)∪(1,+∞)。\n【答案】A"
  },
  { id: "f25-m-s02", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "极限计算", type: "single", typeLabel: "单选",
    stem: "lim(x→1) (x²-1)/(x-1) = （　）",
    options: ["2", "1", "0", "∞"], answer: "2",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】因式分解：(x-1)(x+1)/(x-1)=x+1→2。\n【答案】A"
  },
  { id: "f25-m-s03", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "重要极限", type: "single", typeLabel: "单选",
    stem: "lim(x→0) sin5x / x = （　）",
    options: ["5", "1", "1/5", "0"], answer: "5",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】等价无穷小sin5x~5x，所以极限是5。\n【答案】A"
  },
  { id: "f25-m-s04", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "无穷小", type: "single", typeLabel: "单选",
    stem: "当x→0时，下列哪个是无穷小量？（　）",
    options: ["sinx", "cosx", "1/x", "x+1"], answer: "sinx",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】x→0时sinx→0，是无穷小。\n【答案】A"
  },
  { id: "f25-m-s05", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "间断点", type: "single", typeLabel: "单选",
    stem: "f(x)=1/x在x=0处是（　）",
    options: ["无穷间断点", "可去间断点", "跳跃间断点", "连续点"], answer: "无穷间断点",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】x→0时1x→∞，是无穷间断点。\n【答案】A"
  },
  { id: "f25-m-s06", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "导数定义", type: "single", typeLabel: "单选",
    stem: "f(x)=x²，则f'(2)=（　）",
    options: ["4", "2", "1", "0"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】f'(x)=2x，f'(2)=4。\n【答案】A"
  },
  { id: "f25-m-s07", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "乘积求导", type: "single", typeLabel: "单选",
    stem: "f(x)=x·lnx，则f'(x)=（　）",
    options: ["lnx + 1", "lnx", "1/x", "xlnx"], answer: "lnx + 1",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】乘积求导：1·lnx + x·(1/x) = lnx+1。\n【答案】A"
  },
  { id: "f25-m-s08", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "复合函数求导", type: "single", typeLabel: "单选",
    stem: "f(x)=e^(2x)，则f'(x)=（　）",
    options: ["2e^(2x)", "e^(2x)", "2e^x", "e^x"], answer: "2e^(2x)",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】复合求导：e^(2x)·2=2e^(2x)。\n【答案】A"
  },
  { id: "f25-m-s09", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "单调性", type: "single", typeLabel: "单选",
    stem: "函数f(x)=x²在(0,+∞)上（　）",
    options: ["单调递增", "单调递减", "先增后减", "先减后增"], answer: "单调递增",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】f'(x)=2x>0在(0,+∞)，所以单调递增。\n【答案】A"
  },
  { id: "f25-m-s10", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "极值", type: "single", typeLabel: "单选",
    stem: "函数f(x)=x²-2x+3的极小值是（　）",
    options: ["2", "3", "1", "0"], answer: "2",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】f'(x)=2x-2=0→x=1，f(1)=1-2+3=2。\n【答案】A"
  },
  { id: "f25-m-s11", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "不定积分", type: "single", typeLabel: "单选",
    stem: "∫ x³ dx = （　）",
    options: ["x⁴/4 + C", "x³ + C", "3x² + C", "x⁴ + C"], answer: "x⁴/4 + C",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】幂函数积分：∫x^n dx = x^(n+1)/(n+1)+C。\n【答案】A"
  },
  { id: "f25-m-s12", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "凑微分", type: "single", typeLabel: "单选",
    stem: "∫ 2x·e^(x²) dx = （　）",
    options: ["e^(x²) + C", "e^x + C", "2e^(x²) + C", "x²e^(x²) + C"], answer: "e^(x²) + C",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】凑微分：令u=x²，du=2xdx，所以∫e^u du=e^u+C=e^(x²)+C。\n【答案】A"
  },
  { id: "f25-m-s13", module: "public", subject: "高等数学", chapter: "ch-math-5", knowledgePoint: "定积分", type: "single", typeLabel: "单选",
    stem: "∫(0到2) 3x² dx = （　）",
    options: ["8", "6", "12", "24"], answer: "8",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】原函数x³，代入上下限：8-0=8。\n【答案】A"
  },
  { id: "f25-m-s14", module: "public", subject: "高等数学", chapter: "ch-math-5", "knowledgePoint": "定积分几何意义", type: "single", typeLabel: "单选",
    stem: "∫(0到1) x dx 表示的面积是（　）",
    options: ["1/2", "1", "2", "1/4"], answer: "1/2",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】三角形面积：底1高1，面积=1×1/2=1/2。\n【答案】A"
  },
  { id: "f25-m-s15", module: "public", subject: "高等数学", chapter: "ch-math-6", knowledgePoint: "微分方程", type: "single", typeLabel: "单选",
    stem: "微分方程dy/dx = 2x的通解是（　）",
    options: ["y = x² + C", "y = 2x + C", "y = x²", "y = 2x²"], answer: "y = x² + C",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】两边积分：∫dy = ∫2x dx → y = x² + C。\n【答案】A"
  },

  // 判断10题
  { id: "f25-m-j01", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "极限", type: "judge", typeLabel: "判断",
    stem: "lim(x→∞) 1/x = 0", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】x趋向无穷大时1/x趋向0。\n【答案】正确"
  },
  { id: "f25-m-j02", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "连续", type: "judge", typeLabel: "判断",
    stem: "可导函数一定连续。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】可导必连续，连续不一定可导。\n【答案】正确"
  },
  { id: "f25-m-j03", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "导数", type: "judge", typeLabel: "判断",
    stem: "常数的导数是0。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】常数C的导数是0。\n【答案】正确"
  },
  { id: "f25-m-j04", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "极值", type: "judge", typeLabel: "判断",
    stem: "导数为0的点一定是极值点。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】导数为0的点是驻点，不一定是极值点，比如y=x³在x=0处导数为0但不是极值。\n【答案】错误"
  },
  { id: "f25-m-j05", module: "public", subject: "高等数学", chapter: "ch-math-4", knowledgePoint: "不定积分", type: "judge", typeLabel: "判断",
    stem: "不定积分的结果是唯一的。", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】不定积分要加常数C，所以结果不唯一。\n【答案】错误"
  },
  { id: "f25-m-j06", module: "public", subject: "高等数学", chapter: "ch-math-5", knowledgePoint: "定积分", type: "judge", typeLabel: "判断",
    stem: "定积分结果是一个常数。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】定积分是一个确定的数值。\n【答案】正确"
  },
  { id: "f25-m-j07", module: "public", subject: "高等数学", chapter: "ch-math-6", knowledgePoint: "微分方程", type: "judge", typeLabel: "判断",
    stem: "y=Ce^x是y'=y的通解。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】y'=Ce^x=y，满足方程。\n【答案】正确"
  },
  { id: "f25-m-j08", module: "public", subject: "高等数学", chapter: "ch-math-1", knowledgePoint: "函数", type: "judge", typeLabel: "判断",
    stem: "f(x)=x²是偶函数。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】f(-x)=(-x)²=x²=f(x)，是偶函数。\n【答案】正确"
  },
  { id: "f25-m-j09", module: "public", subject: "高等数学", chapter: "ch-math-2", knowledgePoint: "微分", type: "judge", typeLabel: "判断",
    stem: "dy = f'(x)dx。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】微分定义：dy = f'(x)dx。\n【答案】正确"
  },
  { id: "f25-m-j10", module: "public", subject: "高等数学", chapter: "ch-math-3", knowledgePoint: "最值", type: "judge", typeLabel: "判断",
    stem: "闭区间上的连续函数一定有最大值和最小值。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】闭区间上连续函数的性质。\n【答案】正确"
  }
];

// ========== 2025英语完整卷 30题 ==========
const en2025full = [
  // 单选20题
  { id: "f25-e-s01", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "词汇", type: "single", typeLabel: "单选",
    stem: "We should ____ good habits of reading.",
    options: ["develop", "improve", "make", "take"], answer: "develop",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】develop good habits养成好习惯。\n【答案】A"
  },
  { id: "f25-e-s02", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "single", typeLabel: "单选",
    stem: "I go to school ____ bus every day.",
    options: ["by", "on", "in", "with"], answer: "by",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】by bus乘公交，固定搭配。\n【答案】A"
  },
  { id: "f25-e-s03", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "代词", type: "single", typeLabel: "单选",
    stem: "This book is not mine. It's ____.",
    options: ["hers", "her", "she", "she's"], answer: "hers",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】名词性物主代词hers=her book。\n【答案】A"
  },
  { id: "f25-e-s04", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "形容词", type: "single", typeLabel: "单选",
    stem: "The ____ news makes us happy.",
    options: ["exciting", "excited", "excite", "excitement"], answer: "exciting",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】exciting修饰事物，excited修饰人。\n【答案】A"
  },
  { id: "f25-e-s05", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "She ____ TV now.",
    options: ["is watching", "watches", "watched", "watch"], answer: "is watching",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】now是现在进行时标志。\n【答案】A"
  },
  { id: "f25-e-s06", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "They ____ to the park yesterday.",
    options: ["went", "go", "goes", "going"], answer: "went",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】yesterday是一般过去时。\n【答案】A"
  },
  { id: "f25-e-s07", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "We ____ each other since 2020.",
    options: ["have known", "knew", "know", "will know"], answer: "have known",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】since+时间点用现在完成时。\n【答案】A"
  },
  { id: "f25-e-s08", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "被动语态", type: "single", typeLabel: "单选",
    stem: "The letter ____ yesterday.",
    options: ["was written", "wrote", "is written", "writes"], answer: "was written",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】信是被写的，过去时被动。\n【答案】A"
  },
  { id: "f25-e-s09", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "情态动词", type: "single", typeLabel: "单选",
    stem: "You ____ finish your homework first.",
    options: ["must", "can", "may", "might"], answer: "must",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】must表示必须。\n【答案】A"
  },
  { id: "f25-e-s10", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "宾语从句", type: "single", typeLabel: "单选",
    stem: "I don't know ____ he will come.",
    options: ["if", "what", "which", "who"], answer: "if",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】if/whether表示是否。\n【答案】A"
  },
  { id: "f25-e-s11", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句", type: "single", typeLabel: "单选",
    stem: "This is the book ____ I bought yesterday.",
    options: ["which", "who", "whom", "whose"], answer: "which",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】先行词是物，用which。\n【答案】A"
  },
  { id: "f25-e-s12", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "状语从句", type: "single", typeLabel: "单选",
    stem: "He was late ____ he missed the bus.",
    options: ["because", "so", "but", "and"], answer: "because",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】because引导原因状语从句。\n【答案】A"
  },
  { id: "f25-e-s13", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "I want ____ a new car.",
    options: ["to buy", "buying", "buy", "bought"], answer: "to buy",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】want to do sth. 想要做某事。\n【答案】A"
  },
  { id: "f25-e-s14", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "Would you mind ____ the window?",
    options: ["opening", "to open", "open", "opened"], answer: "opening",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】mind doing sth. 介意做某事。\n【答案】A"
  },
  { id: "f25-e-s15", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "使役动词", type: "single", typeLabel: "单选",
    stem: "The teacher made us ____ the classroom.",
    options: ["clean", "to clean", "cleaning", "cleaned"], answer: "clean",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】make sb. do sth. 让某人做某事，不加to。\n【答案】A"
  },
  { id: "f25-e-s16", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "比较级", type: "single", typeLabel: "单选",
    stem: "Tom is ____ than Jack.",
    options: ["taller", "tall", "tallest", "more tall"], answer: "taller",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】两者比较用比较级taller。\n【答案】A"
  },
  { id: "f25-e-s17", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "最高级", type: "single", typeLabel: "单选",
    stem: "She is ____ girl in our class.",
    options: ["the most beautiful", "most beautiful", "more beautiful", "beautiful"], answer: "the most beautiful",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】最高级前加the。\n【答案】A"
  },
  { id: "f25-e-s18", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "副词", type: "single", typeLabel: "单选",
    stem: "He runs very ____.",
    options: ["fast", "fastly", "fasting", "faster"], answer: "fast",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】fast形副同形，没有fastly。\n【答案】A"
  },
  { id: "f25-e-s19", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "连词", type: "single", typeLabel: "单选",
    stem: "Hurry up, ____ you will be late.",
    options: ["or", "and", "but", "so"], answer: "or",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】or表示否则。\n【答案】A"
  },
  { id: "f25-e-s20", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "疑问词", type: "single", typeLabel: "单选",
    stem: "____ is your name?",
    options: ["What", "How", "Where", "When"], answer: "What",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】What's your name? 你叫什么名字？\n【答案】A"
  },

  // 判断10题
  { id: "f25-e-j01", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "冠词", type: "judge", typeLabel: "判断",
    stem: "I have a book. A book is very interesting.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】第一次提到用a，后面再提用the。\n【答案】正确"
  },
  { id: "f25-e-j02", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "judge", typeLabel: "判断",
    stem: "He go to school every day.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】第三人称单数用goes。\n【答案】错误"
  },
  { id: "f25-e-j03", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "被动", type: "judge", typeLabel: "判断",
    stem: "English is spoken in many countries.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】被动语态正确。\n【答案】正确"
  },
  { id: "f25-e-j04", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "从句", type: "judge", typeLabel: "判断",
    stem: "This is the house where I lived last year.", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】先行词是地点，用where引导定语从句。\n【答案】正确"
  },
  { id: "f25-e-j05", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "judge", typeLabel: "判断",
    stem: "Stop talk! The baby is sleeping.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】stop doing停止做某事，应该是stop talking。\n【答案】错误"
  },
  { id: "f25-e-j06", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "代词", type: "judge", typeLabel: "判断",
    stem: "Everyone should do their best.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】everyone用their指代，现代英语常用。\n【答案】正确"
  },
  { id: "f25-e-j07", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "judge", typeLabel: "判断",
    stem: "We usually get up at 6 o'clock.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】具体几点钟前用at。\n【答案】正确"
  },
  { id: "f25-e-j08", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "情态动词", type: "judge", typeLabel: "判断",
    stem: "Can you help me? Yes, I can.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】can表示能够，正确。\n【答案】正确"
  },
  { id: "f25-e-j09", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "状语从句", type: "judge", typeLabel: "判断",
    stem: "If it will rain tomorrow, we will stay at home.", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】if条件句主将从现，从句用一般现在时rains。\n【答案】错误"
  },
  { id: "f25-e-j10", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "judge", typeLabel: "判断",
    stem: "I have something important to tell you.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "school", tags: ["2025真题", "完整卷"],
    analysis: "【解析】不定式作后置定语，正确。\n【答案】正确"
  }
];

// 加入题库
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat(
  math2025full, en2025full
);

console.log("2025完整卷高数+英语共60题已加入！");
