/* 新增英语高频易错题 80道 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 词汇与固定搭配 =====
  { id: "en1001", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "动词辨析", type: "single", typeLabel: "单选",
    stem: "The company will ____ a new product next month.",
    options: ["launch", "throw", "make", "do"], answer: "launch",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "动词辨析"],
    analysis: "【题干】公司下个月要____新产品。\n【考点】动词辨析\n【详细解答】launch意为\"推出、发布（产品）\"，是固定搭配launch a product。\n【选项逐个说】\nA. launch → 正确：launch a product发布产品。\nB. throw → 错误：扔。\nC. make → 错误：制造，不与product搭配指新品发布。\nD. do → 错误。\n【答案】launch\n【易错】launch表示\"正式推出\"。"
  },
  { id: "en1002", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词搭配", type: "single", typeLabel: "单选",
    stem: "She is good ____ playing the piano.",
    options: ["at", "in", "on", "with"], answer: "at",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "介词搭配"],
    analysis: "【题干】她擅长弹钢琴。\n【考点】固定搭配\n【详细解答】be good at doing sth. 擅长做某事。\n【选项逐个说】\nA. at → 正确：be good at固定搭配。\nB. in → 错误。\nC. on → 错误。\nD. with → 错误。\n【答案】at\n【易错】be good at，介词用at。"
  },
  { id: "en1003", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "动词短语", type: "single", typeLabel: "单选",
    stem: "Please ____ your shoes before entering the house.",
    options: ["take off", "take up", "take in", "take after"], answer: "take off",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "动词短语"],
    analysis: "【题干】进门前请____你的鞋。\n【考点】动词短语辨析\n【详细解答】take off意为\"脱掉（衣服、鞋）\"。\n【选项逐个说】\nA. take off → 正确：脱鞋。\nB. take up → 错误：占据、开始从事。\nC. take in → 错误：吸收、理解。\nD. take after → 错误：长得像。\n【答案】take off\n【易错】take off多义：脱衣、起飞。"
  },
  { id: "en1004", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "名词辨析", type: "single", typeLabel: "单选",
    stem: "The ____ of the new law is to reduce crime.",
    options: ["purpose", "reason", "cause", "result"], answer: "purpose",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "名词辨析"],
    analysis: "【题干】新法律的____是减少犯罪。\n【考点】名词辨析\n【详细解答】the purpose of sth. is to... 某事的目的是……。\n【选项逐个说】\nA. purpose → 正确：目的。\nB. reason → 错误：原因。\nC. cause → 错误：原因。\nD. result → 错误：结果。\n【答案】purpose\n【易错】purpose目的，reason原因。"
  },
  { id: "en1005", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "形容词辨析", type: "single", typeLabel: "单选",
    stem: "It is ____ of you to help me carry the box.",
    options: ["kind", "kindly", "kindness", "kinds"], answer: "kind",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "形容词"],
    analysis: "【题干】你帮我搬箱子真是太____了。\n【考点】形容词作表语\n【详细解答】It's kind of sb. to do sth. 某人做某事真是太好了。\n【选项逐个说】\nA. kind → 正确：形容词作表语。\nB. kindly → 错误：副词。\nC. kindness → 错误：名词。\nD. kinds → 错误：名词复数。\n【答案】kind\n【易错】It's + adj. + of sb. 形容人品。"
  },
  { id: "en1006", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "副词", type: "single", typeLabel: "单选",
    stem: "He runs very ____.",
    options: ["fast", "fastly", "fasting", "faster"], answer: "fast",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "副词"],
    analysis: "【题干】他跑得很快。\n【考点】副词同形\n【详细解答】fast形副同形，没有fastly这个词。\n【选项逐个说】\nA. fast → 正确：形副同形。\nB. fastly → 错误：没有这个词。\nC. fasting → 错误：禁食。\nD. faster → 错误：比较级，前面very不能修饰比较级。\n【答案】fast\n【易错】fast没有副词形式fastly。"
  },
  { id: "en1007", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "连词", type: "single", typeLabel: "单选",
    stem: "Hurry up, ____ you will be late.",
    options: ["or", "and", "but", "so"], answer: "or",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "连词"],
    analysis: "【题干】快点，____你要迟到了。\n【考点】连词用法\n【详细解答】or意为\"否则\"，祈使句+or+陈述句。\n【选项逐个说】\nA. or → 正确：否则。\nB. and → 错误：然后。\nC. but → 错误：但是。\nD. so → 错误：所以。\n【答案】or\n【易错】祈使句+or=否则。"
  },
  { id: "en1008", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "代词", type: "single", typeLabel: "单选",
    stem: "I have two pens. One is red, ____ is blue.",
    options: ["the other", "other", "another", "others"], answer: "the other",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "代词"],
    analysis: "【题干】我有两支笔，一支红，____蓝。\n【考点】不定代词\n【详细解答】one...the other... 一个……另一个……（两者）。\n【选项逐个说】\nA. the other → 正确：两者中的另一个。\nB. other → 错误：后面要加名词。\nC. another → 错误：三者以上另一个。\nD. others → 错误：其他的人/物。\n【答案】the other\n【易错】两者用the other，多者用another。"
  },
  { id: "en1009", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "短语动词", type: "single", typeLabel: "单选",
    stem: "The meeting has been ____ until next week.",
    options: ["put off", "put on", "put up", "put out"], answer: "put off",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "短语动词"],
    analysis: "【题干】会议被____到下周。\n【考点】put短语\n【详细解答】put off意为\"推迟\"。\n【选项逐个说】\nA. put off → 正确：推迟。\nB. put on → 错误：穿上、上演。\nC. put up → 错误：张贴、搭建。\nD. put out → 错误：扑灭。\n【答案】put off\n【易错】put off推迟。"
  },
  { id: "en1010", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "固定搭配", type: "single", typeLabel: "单选",
    stem: "I am looking forward ____ you soon.",
    options: ["to seeing", "to see", "seeing", "see"], answer: "to seeing",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["词汇", "固定搭配"],
    analysis: "【题干】我期待很快见到你。\n【考点】固定搭配\n【详细解答】look forward to doing sth. 期待做某事，这里to是介词，后面加动名词。\n【选项逐个说】\nA. to seeing → 正确：to是介词+doing。\nB. to see → 错误：to不是不定式符号。\nC. seeing → 错误：少了to。\nD. see → 错误。\n【答案】to seeing\n【易错】look forward to后面加doing，to是介词！"
  },

  // ===== 时态语态 =====
  { id: "en2001", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "现在完成时", type: "single", typeLabel: "单选",
    stem: "I ____ my homework already.",
    options: ["have finished", "finished", "finish", "will finish"], answer: "have finished",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["时态", "现在完成时"],
    analysis: "【题干】我已经完成作业了。\n【考点】现在完成时\n【详细解答】already是现在完成时标志词。\n【选项逐个说】\nA. have finished → 正确：already+现在完成时。\nB. finished → 错误：一般过去时。\nC. finish → 错误：一般现在时。\nD. will finish → 错误：一般将来时。\n【答案】have finished\n【易错】already/yet/just常与现在完成时连用。"
  },
  { id: "en2002", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "过去进行时", type: "single", typeLabel: "单选",
    stem: "What ____ you ____ at 8 o'clock last night?",
    options: ["were; doing", "did; do", "are; doing", "do; do"], answer: "were; doing",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["时态", "过去进行时"],
    analysis: "【题干】昨晚8点你在做什么？\n【考点】过去进行时\n【详细解答】at 8 o'clock last night是过去具体时间点，用过去进行时。\n【选项逐个说】\nA. were; doing → 正确。\nB. did; do → 错误：一般过去时。\nC. are; doing → 错误：现在进行时。\nD. do; do → 错误：一般现在时。\n【答案】were; doing\n【易错】过去具体时间点用过去进行时。"
  },
  { id: "en2003", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "被动语态", type: "single", typeLabel: "单选",
    stem: "The bridge ____ two years ago.",
    options: ["was built", "built", "is built", "builds"], answer: "was built",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["语态", "被动"],
    analysis: "【题干】这座桥是两年前建的。\n【考点】被动语态\n【详细解答】桥是被建的，two years ago是过去时，所以用一般过去时被动。\n【选项逐个说】\nA. was built → 正确：过去时被动。\nB. built → 错误：主动。\nC. is built → 错误：现在时被动。\nD. builds → 错误：一般现在时。\n【答案】was built\n【易错】物作主语常用被动。"
  },
  { id: "en2004", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "一般将来时", type: "single", typeLabel: "单选",
    stem: "There ____ a football match tomorrow.",
    options: ["is going to be", "is going to have", "will have", "are going to be"], answer: "is going to be",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["时态", "there be"],
    analysis: "【题干】明天有一场足球赛。\n【考点】there be句型将来时\n【详细解答】there be句型的将来时是there is/are going to be或there will be，不能用have。\n【选项逐个说】\nA. is going to be → 正确：there be将来时。\nB. is going to have → 错误：there be不能与have连用。\nC. will have → 错误。\nD. are going to be → 错误：a match是单数，用is。\n【答案】is going to be\n【易错】there be句型不能和have混用！"
  },
  { id: "en2005", module: "public", subject: "英语", chapter: "ch-en-2", "knowledgePoint": "现在进行时表将来", type: "single", typeLabel: "单选",
    stem: "My mother is ____ Beijing tomorrow.",
    options: ["leaving for", "leave for", "leaves for", "left for"], answer: "leaving for",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["时态", "进行时表将来"],
    analysis: "【题干】我妈妈明天要去北京。\n【考点】进行时表将来\n【详细解答】go/come/leave/arrive等位移动词用现在进行时表将来。\n【选项逐个说】\nA. leaving for → 正确：进行时表将来。\nB. leave for → 错误。\nC. leaves for → 错误。\nD. left for → 错误。\n【答案】leaving for\n【易错】位移动词进行时表将来。"
  },
  { id: "en2006", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "现在完成时vs一般过去时", type: "single", typeLabel: "单选",
    stem: "I ____ to Shanghai last year.",
    options: ["went", "have been", "have gone", "go"], answer: "went",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["时态", "时态辨析"],
    analysis: "【题干】我去年去了上海。\n【考点】一般过去时vs现在完成时\n【详细解答】last year是明确过去时间，用一般过去时，不能用现在完成时。\n【选项逐个说】\nA. went → 正确：last year+一般过去时。\nB. have been → 错误：不能和明确过去时间连用。\nC. have gone → 错误。\nD. go → 错误。\n【答案】went\n【易错】有明确过去时间用一般过去时。"
  },
  { id: "en2007", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "被动语态进行时", type: "single", typeLabel: "单选",
    stem: "The problem ____ now.",
    options: ["is being discussed", "is discussed", "discussed", "has discussed"], answer: "is being discussed",
    difficulty: 3, difficultyLabel: "高频易错", source: "new2026", tags: ["语态", "进行时被动"],
    analysis: "【题干】这个问题现在正在被讨论。\n【考点】现在进行时被动\n【详细解答】now是现在进行时，问题是被讨论，所以用is being done。\n【选项逐个说】\nA. is being discussed → 正确：进行时被动。\nB. is discussed → 错误：一般现在时被动。\nC. discussed → 错误。\nD. has discussed → 错误：主动。\n【答案】is being discussed\n【易错】进行时被动=be being done。"
  },
  { id: "en2008", module: "public", subject: "英语", chapter: "ch-en-2", "knowledgePoint": "主谓一致", type: "single", typeLabel: "单选",
    stem: "Neither Tom nor his friends ____ coming.",
    options: ["are", "is", "was", "has"], answer: "are",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["主谓一致", "neither...nor"],
    analysis: "【题干】汤姆和他的朋友都不来。\n【考点】就近原则\n【详细解答】neither...nor...就近原则，谓语与离它近的主语一致，friends是复数，用are。\n【选项逐个说】\nA. are → 正确：就近friends复数。\nB. is → 错误。\nC. was → 错误。\nD. has → 错误。\n【答案】are\n【易错】neither...nor/either...or/there be就近原则。"
  },

  // ===== 从句 =====
  { id: "en3001", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句who", type: "single", typeLabel: "单选",
    stem: "The man ____ is talking to my mother is my teacher.",
    options: ["who", "which", "whom", "whose"], answer: "who",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "定语从句"],
    analysis: "【题干】正在和我妈妈说话的那个人是我老师。\n【考点】定语从句关系代词\n【详细解答】先行词是人，在从句中作主语，用who。\n【选项逐个说】\nA. who → 正确：指人作主语。\nB. which → 错误：指物。\nC. whom → 错误：指人作宾语。\nD. whose → 错误：表所属。\n【答案】who\n【易错】人作主语用who，作宾语用whom。"
  },
  { id: "en3002", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句which", type: "single", typeLabel: "单选",
    stem: "This is the book ____ I bought yesterday.",
    options: ["which", "who", "whom", "whose"], answer: "which",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "定语从句"],
    analysis: "【题干】这就是我昨天买的那本书。\n【考点】定语从句\n【详细解答】先行词是物，用which/that。\n【选项逐个说】\nA. which → 正确：指物。\nB. who → 错误：指人。\nC. whom → 错误：指人宾格。\nD. whose → 错误：所属。\n【答案】which\n【易错】物用which，人用who。"
  },
  { id: "en3003", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句where", type: "single", typeLabel: "单选",
    stem: "This is the village ____ I was born.",
    options: ["where", "which", "that", "when"], answer: "where",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["从句", "定语从句"],
    analysis: "【题干】这就是我出生的那个村庄。\n【考点】关系副词\n【详细解答】先行词是地点，从句中缺状语，用where。\n【选项逐个说】\nA. where → 正确：地点状语。\nB. which → 错误：要加in。\nC. that → 错误。\nD. when → 错误：时间。\n【答案】where\n【易错】地点状语用where=in which。"
  },
  { id: "en3004", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "宾语从句", type: "single", typeLabel: "单选",
    stem: "I don't know ____ he will come tomorrow.",
    options: ["if", "what", "which", "who"], answer: "if",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "宾语从句"],
    analysis: "【题干】我不知道他明天是否会来。\n【考点】宾语从句引导词\n【详细解答】if/whether表示\"是否\"，引导宾语从句。\n【选项逐个说】\nA. if → 正确：是否。\nB. what → 错误：什么。\nC. which → 错误：哪个。\nD. who → 错误：谁。\n【答案】if\n【易错】宾语从句中if/whether表是否。"
  },
  { id: "en3005", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "状语从句because", type: "single", typeLabel: "单选",
    stem: "He was late ____ he missed the bus.",
    options: ["because", "so", "but", "and"], answer: "because",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "状语从句"],
    analysis: "【题干】他迟到了因为他错过了公交。\n【考点】原因状语从句\n【详细解答】because引导原因状语从句。\n【选项逐个说】\nA. because → 正确：因为。\nB. so → 错误：所以。\nC. but → 错误：但是。\nD. and → 错误：并且。\n【答案】because\n【易错】because和so不能同时用。"
  },
  { id: "en3006", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "状语从句when", type: "single", typeLabel: "单选",
    stem: "I was reading ____ the phone rang.",
    options: ["when", "while", "before", "after"], answer: "when",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["从句", "时间状语"],
    analysis: "【题干】我正在看书这时电话响了。\n【考点】when/while区别\n【详细解答】when后可以接瞬间动词，while后接延续性动词。rang是瞬间动词，用when。\n【选项逐个说】\nA. when → 正确：可接瞬间动词。\nB. while → 错误：要接延续性动词。\nC. before → 错误：在……之前。\nD. after → 错误：在……之后。\n【答案】when\n【易错】when可接短暂动词，while不行。"
  },
  { id: "en3007", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "主语从句", type: "single", typeLabel: "单选",
    stem: "____ he won the prize made us happy.",
    options: ["That", "What", "Which", "Who"], answer: "That",
    difficulty: 2, difficultyLabel: "高频", source: "new2026", tags: ["从句", "主语从句"],
    analysis: "【题干】他获奖了让我们很高兴。\n【考点】主语从句引导词\n【详细解答】That引导主语从句，在从句中不充当成分，只起连接作用。\n【选项逐个说】\nA. That → 正确。\nB. What → 错误：要在从句中充当成分。\nC. Which → 错误。\nD. Who → 错误。\n【答案】That\n【易错】that引导名词性从句不充当成分。"
  },

  // ===== 非谓语动词 =====
  { id: "en4001", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "不定式作宾语", type: "single", typeLabel: "单选",
    stem: "I want ____ a book.",
    options: ["to buy", "buying", "buy", "bought"], answer: "to buy",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "不定式"],
    analysis: "【题干】我想买一本书。\n【考点】不定式作宾语\n【详细解答】want to do sth. 想要做某事，固定搭配。\n【选项逐个说】\nA. to buy → 正确：want to do。\nB. buying → 错误。\nC. buy → 错误。\nD. bought → 错误。\n【答案】to buy\n【易错】want/hope/decide/wish等后接to do。"
  },
  { id: "en4002", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "动名词作宾语", type: "single", typeLabel: "单选",
    stem: "Enjoy ____ music.",
    options: ["listening to", "to listen to", "listen to", "listened to"], answer: "listening to",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "动名词"],
    analysis: "【题干】喜欢听音乐。\n【考点】动名词作宾语\n【详细解答】enjoy doing sth. 喜欢做某事，enjoy后接动名词。\n【选项逐个说】\nA. listening to → 正确：enjoy doing。\nB. to listen to → 错误。\nC. listen to → 错误。\nD. listened to → 错误。\n【答案】listening to\n【易错】enjoy/finish/mind/practice后接doing。"
  },
  { id: "en4003", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "stop doing/to do", type: "single", typeLabel: "单选",
    stem: "Stop ____! The baby is sleeping.",
    options: ["talking", "to talk", "talk", "talked"], answer: "talking",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["非谓语", "stop用法"],
    analysis: "【题干】别说话了！宝宝在睡觉。\n【考点】stop doing vs stop to do\n【详细解答】stop doing停止正在做的事；stop to do停下来去做另一件事。这里是停止说话。\n【选项逐个说】\nA. talking → 正确：停止说话。\nB. to talk → 错误：停下来去说话。\nC. talk → 错误。\nD. talked → 错误。\n【答案】talking\n【易错】stop doing停止做，stop to do停下去做。"
  },
  { id: "en4004", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "使役动词", type: "single", typeLabel: "单选",
    stem: "The teacher made us ____ the classroom.",
    options: ["clean", "to clean", "cleaning", "cleaned"], answer: "clean",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "使役动词"],
    analysis: "【题干】老师让我们打扫教室。\n【考点】使役动词\n【详细解答】make sb. do sth. 让某人做某事，make后接不带to的不定式。\n【选项逐个说】\nA. clean → 正确：make sb. do。\nB. to clean → 错误：make后不加to。\nC. cleaning → 错误。\nD. cleaned → 错误。\n【答案】clean\n【易错】make/let/have使役动词后接原形。"
  },
  { id: "en4005", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "现在分词作定语", type: "single", typeLabel: "单选",
    stem: "The ____ boy is my brother.",
    options: ["crying", "cried", "cry", "to cry"], answer: "crying",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "分词"],
    analysis: "【题干】正在哭的那个男孩是我弟弟。\n【考点】现在分词作定语\n【详细解答】boy和cry是主动关系，用现在分词crying。\n【选项逐个说】\nA. crying → 正确：主动进行。\nB. cried → 错误：被动完成。\nC. cry → 错误。\nD. to cry → 错误。\n【答案】crying\n【易错】主动用现在分词，被动用过去分词。"
  },
  { id: "en4006", module: "public", subject: "英语", chapter: "ch-en-4", "knowledgePoint": "过去分词作定语", type: "single", typeLabel: "单选",
    stem: "The book ____ by Lu Xun is very famous.",
    options: ["written", "writing", "wrote", "write"], answer: "written",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "分词"],
    analysis: "【题干】鲁迅写的那本书很有名。\n【考点】过去分词作定语\n【详细解答】book和write是被动关系，用过去分词written。\n【选项逐个说】\nA. written → 正确：被动。\nB. writing → 错误：主动。\nC. wrote → 错误。\nD. write → 错误。\n【答案】written\n【易错】被动用过去分词。"
  },
  { id: "en4007", module: "public", subject: "英语", chapter: "ch-en-4", "knowledgePoint": "ask sb to do", type: "single", typeLabel: "单选",
    stem: "She asked me ____ her with her English.",
    options: ["to help", "helping", "help", "helped"], answer: "to help",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["非谓语", "不定式"],
    analysis: "【题干】她让我帮她学英语。\n【考点】ask sb to do\n【详细解答】ask sb. to do sth. 让某人做某事。\n【选项逐个说】\nA. to help → 正确。\nB. helping → 错误。\nC. help → 错误。\nD. helped → 错误。\n【答案】to help\n【易错】ask/tell/want/expect sb. to do。"
  },

  // ===== 阅读理解常见词汇题 =====
  { id: "en5001", module: "public", subject: "英语", chapter: "ch-en-5", knowledgePoint: "词义猜测", type: "single", typeLabel: "单选",
    stem: "The word \"benefit\" in the passage means ____.",
    options: ["好处", "坏处", "收益", "意义"], answer: "好处",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["阅读", "词汇"],
    analysis: "【题干】benefit是什么意思？\n【考点】高频词义\n【详细解答】benefit作名词意为\"好处、益处\"，作动词意为\"有益于\"。\n【选项逐个说】\nA. 好处 → 正确。\nB. 坏处 → 错误。\nC. 收益 → 错误。\nD. 意义 → 错误。\n【答案】好处\n【易错】benefit=好处。"
  },
  { id: "en5002", module: "public", subject: "英语", chapter: "ch-en-5", knowledgePoint: "主旨题", type: "single", typeLabel: "单选",
    stem: "What is the main idea of the passage?",
    options: ["主旨大意", "细节理解", "词义猜测", "推理判断"], answer: "主旨大意",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["阅读", "题型"],
    analysis: "【题干】main idea是什么题型？\n【考点】阅读题型\n【详细解答】main idea主旨大意题，问文章中心思想。\n【选项逐个说】\nA. 主旨大意 → 正确。\nB. 细节理解 → 错误。\nC. 词义猜测 → 错误。\nD. 推理判断 → 错误。\n【答案】主旨大意\n【易错】main idea=主旨。"
  },

  // ===== 判断题 =====
  { id: "en1101", module: "public", subject: "英语", chapter: "ch-en-1", knowledgePoint: "介词", type: "judge", typeLabel: "判断",
    stem: "We go to school on Monday.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "介词"],
    analysis: "【题干】我们周一去上学。\n【考点】星期前介词用on。\n【答案】正确\n【易错】具体某天前用on。"
  },
  { id: "en2101", module: "public", subject: "英语", chapter: "ch-en-2", knowledgePoint: "时态", type: "judge", typeLabel: "判断",
    stem: "He have been to Beijing.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "高频易错", source: "new2026", tags: ["时态", "主谓一致"],
    analysis: "【题干】他去过北京。\n【考点】现在完成时主谓一致\n【详细解答】he是第三人称单数，用has，不是have。\n【答案】错误\n【易错】第三人称单数用has。"
  },
  { id: "en3101", module: "public", subject: "英语", chapter: "ch-en-3", knowledgePoint: "定语从句", type: "judge", typeLabel: "判断",
    stem: "The man which is standing there is my father.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["从句", "定语从句"],
    analysis: "【题干】站在那里的那个人是我爸爸。\n【考点】定语从句关系代词\n【详细解答】先行词是人，应该用who，不是which。\n【答案】错误\n【易错】人用who，物用which。"
  },
  { id: "en4101", module: "public", subject: "英语", chapter: "ch-en-4", knowledgePoint: "非谓语", type: "judge", typeLabel: "判断",
    stem: "I enjoy to read books.", options: ["正确", "错误"], answer: "错误",
    difficulty: 1, difficultyLabel: "高频易错", source: "new2026", tags: ["非谓语", "动名词"],
    analysis: "【题干】我喜欢读书。\n【考点】enjoy用法\n【详细解答】enjoy后接动名词doing，不是to do。\n【答案】错误\n【易错】enjoy doing。"
  }
]);
