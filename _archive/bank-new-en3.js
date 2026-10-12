/* 英语最后5道到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  { id: "en1121", module: "public", subject: "英语", chapter: "ch-en-1", "knowledgePoint": "how long/how often", type: "single", typeLabel: "单选",
    stem: "____ have you studied English?",
    options: ["How long", "How often", "How soon", "How far"], answer: "How long",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["词汇", "疑问词"],
    analysis: "【题干】你学英语多久了？\n【考点】疑问词组\n【详细解答】how long问多长时间。\n【选项逐个说】\nA. How long → 正确：多久。\nB. How often → 错误：多久一次。\nC. How soon → 错误：多久以后。\nD. How far → 错误：多远。\n【答案】How long\n【易错】how long时长，how often频率。"
  },
  { id: "en2106", module: "public", subject: "英语", chapter: "ch-en-2", "knowledgePoint": "情态动词", type: "single", typeLabel: "单选",
    stem: "You ____ finish your homework first.",
    options: ["must", "can", "may", "might"], answer: "must",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["情态动词", "义务"],
    analysis: "【题干】你必须先完成作业。\n【考点】情态动词\n【详细解答】must表示必须。\n【选项逐个说】\nA. must → 正确：必须。\nB. can → 错误：能。\nC. may → 错误：可以。\nD. might → 错误：可能。\n【答案】must\n【易错】must必须。"
  },
  { id: "en3107", module: "public", subject: "英语", chapter: "ch-en-3", "knowledgePoint": "感叹句", type: "single", typeLabel: "单选",
    stem: "____ nice day it is today!",
    options: ["What a", "What", "How", "How a"], answer: "What a",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["句型", "感叹句"],
    analysis: "【题干】今天天气真好！\n【考点】感叹句\n【详细解答】What + a/an + adj + 可数名词单数 + 主语+谓语！\n【选项逐个说】\nA. What a → 正确。\nB. What → 错误：少a。\nC. How → 错误：How+adj/adv。\nD. How a → 错误。\n【答案】What a\n【易错】What修饰名词，How修饰形容词。"
  },
  { id: "en4106", module: "public", subject: "英语", chapter: "ch-en-4", "knowledgePoint": "used to do", type: "judge", typeLabel: "判断",
    stem: "He used to smoking.", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "高频易错", source: "new2026", tags: ["非谓语", "used to"],
    analysis: "【题干】他过去抽烟。\n【考点】used to do\n【详细解答】used to后面加动词原形smoke，不是smoking。\n【答案】错误\n【易错】used to do原形。"
  },
  { id: "en5102", module: "public", subject: "英语", chapter: "ch-en-5", "knowledgePoint": "阅读主旨", type: "judge", typeLabel: "判断",
    stem: "We should read the first and last paragraph to get the main idea.", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "高频", source: "new2026", tags: ["阅读", "技巧"],
    analysis: "【题干】读首尾段抓主旨。\n【考点】阅读技巧\n【详细解答】主旨题看首尾段。\n【答案】正确\n【易错】首尾段找主旨。"
  }
]);
