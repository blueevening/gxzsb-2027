/* 考纲套卷 - 严格按2027广西专升本大纲 */
window.STUDY_DATA = window.STUDY_DATA || {};

window.STUDY_DATA.EXAM_PLANS = {
  "math-full": {
    id: "math-full",
    title: "高等数学考纲卷",
    module: "public",
    subject: "高等数学",
    minutes: 120,
    totalScore: 150,
    note: "单选10×5 + 填空4×5 + 解答7×8 + 应用2×12 = 150分",
    sections: [
      { key: "single", type: "single", n: 10, each: 5, label: "单项选择题", target: 50 },
      { key: "fill", type: "fill", n: 4, each: 5, label: "填空题", target: 20 },
      { key: "calc", type: "calc", n: 7, each: 8, label: "解答题", target: 56 },
      { key: "apply", type: "apply", n: 2, each: 12, label: "应用题", target: 24 }
    ]
  },

  "english-full": {
    id: "english-full",
    title: "英语考纲卷",
    module: "public",
    subject: "英语",
    minutes: 120,
    totalScore: 150,
    note: "词汇语法20×2 + 阅读25×2 + 填空5×2 + 英译汉8×3 + 汉译英1×8 + 写作1×18 = 150分",
    sections: [
      { key: "vocab", type: "single", n: 20, each: 2, label: "词汇与语法", target: 40 },
      { key: "read", type: "single", n: 25, each: 2, label: "阅读理解", target: 50 },
      { key: "fill", type: "fill", n: 5, each: 2, label: "填空", target: 10 },
      { key: "trans", type: "translate", n: 8, each: 3, label: "英译汉选择", target: 24 },
      { key: "write1", type: "write", n: 1, each: 8, label: "汉译英", target: 8 },
      { key: "write2", type: "write", n: 1, each: 18, label: "应用文写作", target: 18 }
    ]
  },

  "major-combined": {
    id: "major-combined",
    title: "专业基础综合合卷",
    module: "major",
    minutes: 150,
    totalScore: 300,
    note: "电工100 + C语言100 + 计网100 · 按大纲题型分布",
    bySubject: true,
    sections: [
      {
        key: "ee",
        label: "电工电子技术基础",
        subject: "电工电子技术基础",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      },
      {
        key: "c",
        label: "C语言程序设计",
        subject: "C语言程序设计",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      },
      {
        key: "net",
        label: "计算机网络基础",
        subject: "计算机网络基础",
        target: 100,
        mix: [
          { type: "single", n: 10, each: 4 },
          { type: "judge", n: 5, each: 3 },
          { type: "fill", n: 10, each: 2 },
          { type: "calc", n: 2, each: 12.5 }
        ]
      }
    ]
  },

  "ee-special": {
    id: "ee-special",
    title: "电工电子专项卷",
    module: "major",
    subject: "电工电子技术基础",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  },

  "c-special": {
    id: "c-special",
    title: "C语言专项卷",
    module: "major",
    subject: "C语言程序设计",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  },

  "net-special": {
    id: "net-special",
    title: "计网专项卷",
    module: "major",
    subject: "计算机网络基础",
    minutes: 60,
    totalScore: 100,
    note: "按大纲题型：单选10×4 + 判断5×3 + 填空10×2 + 应用2×12.5",
    sections: [
      { key: "single", type: "single", n: 10, each: 4, label: "单选", target: 40 },
      { key: "judge", type: "judge", n: 5, each: 3, label: "判断", target: 15 },
      { key: "fill", type: "fill", n: 10, each: 2, label: "填空", target: 20 },
      { key: "calc", type: "calc", n: 2, each: 12.5, label: "应用", target: 25 }
    ]
  }
};
