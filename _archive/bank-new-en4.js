/* 英语补10道+C语言补2道到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // 英语补10道
  { id: "en1201", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "动词短语", type: "single", typeLabel: "单选",
    stem: "The plane ____ on time yesterday.",
    options: ["took off", "took up", "took in", "took after"], answer: "took off",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "短语动词"],
    analysis: "【题干】飞机昨天准时起飞了。\n【考点】take短语\n【详细解答】take off表示飞机起飞。\n【选项逐个说】\nA. took off → 正确：起飞。\nB. took up → 错误：占据。\nC. took in → 错误：吸收。\nD. took after → 错误：长得像。\n【答案】took off\n【易错】take off起飞。"
  },
  { id: "en1202", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "single", typeLabel: "单选",
    stem: "We go to school ____ Monday to Friday.",
    options: ["from", "on", "in", "at"], answer: "from",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "介词"],
    analysis: "【题干】我们从周一到周五上学。\n【考点】from...to...\n【详细解答】from...to...从……到……。\n【选项逐个说】\nA. from → 正确。\nB. on → 错误。\nC. in → 错误。\nD. at → 错误。\n【答案】from\n【易错】from...to...固定搭配。"
  },
  { id: "en1203", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "形容词", type: "single", typeLabel: "单选",
    stem: "The news is ____.",
    options: ["exciting", "excited", "excite", "excitement"], answer: "exciting",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["词汇", "-ing/-ed"],
    analysis: "【题干】这个消息很令人兴奋。\n【考点】-ing/-ed形容词\n【详细解答】exciting修饰事物，excited修饰人。news是事物，用exciting。\n【选项逐个说】\nA. exciting → 正确：修饰事物。\nB. excited → 错误：修饰人。\nC. excite → 错误：动词。\nD. excitement → 错误：名词。\n【答案】exciting\n【易错】事物用-ing，人用-ed。"
  },
  { id: "en1204", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "single", typeLabel: "单选",
    stem: "Listen! Someone ____ at the door.",
    options: ["is knocking", "knocks", "knocked", "knock"], answer: "is knocking",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["时态", "现在进行时"],
    analysis: "【题干】听！有人在敲门。\n【考点】现在进行时\n【详细解答】Listen!是现在进行时标志词。\n【选项逐个说】\nA. is knocking → 正确。\nB. knocks → 错误：一般现在时。\nC. knocked → 错误：一般过去时。\nD. knock → 错误。\n【答案】is knocking\n【易错】Listen!/Look!用现在进行时。"
  },
  { id: "en1205", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "情态动词", type: "single", typeLabel: "单选",
    stem: "You ____ finish the work today. There's plenty of time.",
    options: ["needn't", "mustn't", "can't", "may not"], answer: "needn't",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["情态动词", "情态动词辨析"],
    analysis: "【题干】你不必今天完成工作，时间还多。\n【考点】情态动词\n【详细解答】needn't不必；mustn't禁止；can't不能；may not可能不。\n【选项逐个说】\nA. needn't → 正确：不必。\nB. mustn't → 错误：禁止。\nC. can't → 错误：不能。\nD. may not → 错误：可能不。\n【答案】needn't\n【易错】needn't不必，mustn't禁止。"
  },
  { id: "en1206", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句", type: "single", typeLabel: "单选",
    stem: "The girl ____ is singing is my sister.",
    options: ["who", "which", "whom", "whose"], answer: "who",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "定语从句"],
    analysis: "【题干】正在唱歌的那个女孩是我妹妹。\n【考点】定语从句\n【详细解答】先行词是人，在从句中作主语，用who。\n【选项逐个说】\nA. who → 正确。\nB. which → 错误：指物。\nC. whom → 错误：作宾语。\nD. whose → 错误：表所属。\n【答案】who\n【易错】人作主语用who。"
  },
  { id: "en1207", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "single", typeLabel: "单选",
    stem: "I have a lot of homework ____.",
    options: ["to do", "doing", "do", "did"], answer: "to do",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "不定式"],
    analysis: "【题干】我有很多作业要做。\n【考点】不定式作定语\n【详细解答】不定式作后置定语修饰homework。\n【选项逐个说】\nA. to do → 正确。\nB. doing → 错误。\nC. do → 错误。\nD. did → 错误。\n【答案】to do\n【易错】have sth to do有某事要做。"
  },
  { id: "en1208", module: "public", subject: "英语", chapter: "ch-en-1", "knowledgePoint": "疑问词", type: "single", typeLabel: "单选",
    stem: "____ is the weather like today?",
    options: ["What", "How", "Which", "Why"], answer: "What",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "疑问词"],
    analysis: "【题干】今天天气怎么样？\n【考点】问天气\n【详细解答】What's the weather like? = How's the weather?\n【选项逐个说】\nA. What → 正确：What's...like?\nB. How → 错误：How's the weather? 不用like。\nC. Which → 错误。\nD. Why → 错误。\n【答案】What\n【易错】What's...like? 问天气。"
  },
  { id: "en1209", module: "public", subject: "英语", chapter: "ch-en-1", "knowledgePoint": "副词", type: "single", typeLabel: "单选",
    stem: "He works ____.",
    options: ["hard", "hardly", "harder", "hardest"], answer: "hard",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["词汇", "副词"],
    analysis: "【题干】他工作努力。\n【考点】hard/hardly\n【详细解答】hard努力地；hardly几乎不。\n【选项逐个说】\nA. hard → 正确：努力地。\nB. hardly → 错误：几乎不。\nC. harder → 错误：比较级。\nD. hardest → 错误：最高级。\n【答案】hard\n【易错】hard努力，hardly几乎不。"
  },
  { id: "en1210", module: "public", subject: "英语", chapter: "ch-en-2", "knowledgePoint": "被动语态", type: "single", typeLabel: "单选",
    stem: "The work ____ tomorrow.",
    options: ["will be finished", "will finish", "is finished", "finishes"], answer: "will be finished",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["语态", "被动"],
    analysis: "【题干】这项工作明天就完成了。\n【考点】将来时被动\n【详细解答】工作是被完成的，tomorrow将来时，所以用will be done。\n【选项逐个说】\nA. will be finished → 正确。\nB. will finish → 错误：主动。\nC. is finished → 错误：现在时。\nD. finishes → 错误。\n【答案】will be finished\n【易错】物作主语用被动。"
  },

  // C语言补2道
  { id: "nc1201", module: "major", subject: "C语言程序设计", chapter: "ch-c-1", "knowledgePoint": "数据类型", type: "single", typeLabel: "单选",
    stem: "C语言中int类型占几个字节？（　）",
    options: ["2", "4", "8", "1"], answer: "4",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据类型", "ch-c-1"],
    analysis: "【题干】int占几个字节？\n【考点】基本数据类型\n【详细解答】现代编译器int一般占4字节。\n【选项逐个说】\nA. 2 → 错误：旧编译器。\nB. 4 → 正确。\nC. 8 → 错误：long。\nD. 1 → 错误：char。\n【答案】4\n【易错】int 4字节。"
  },
  { id: "nc1202", module: "major", subject: "C语言程序设计", chapter: "ch-c-2", "knowledgePoint": "if语句", type: "single", typeLabel: "单选",
    stem: "C语言中if后面的括号里表达式的值为（　）时为真。",
    options: ["非0", "0", "1", "-1"], answer: "非0",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["if语句", "ch-c-2"],
    analysis: "【题干】if表达式什么时候为真？\n【考点】if判断\n【详细解答】C语言中非0即为真，0为假。\n【选项逐个说】\nA. 非0 → 正确。\nB. 0 → 错误：为假。\nC. 1 → 错误：只是其中一种。\nD. -1 → 错误：也是其中一种。\n【答案】非0\n【易错】非0即真。"
  }
]);
