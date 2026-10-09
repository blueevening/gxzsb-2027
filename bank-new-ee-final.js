/* 新增题库 - 2026考纲版 - 电工电子技术基础 补到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  { id: "ne1604", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-1", knowledgePoint: "电位", type: "single", typeLabel: "单选",
    stem: "参考点电位是（　）", options: ["0V", "1V", "5V", "不确定"], answer: "0V",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["电路基本概念", "电位"],
    analysis: "【题干】参考点电位？\n【考点】电位\n【详细解答】\n1. 选作参考点的点电位规定为0V。\n【选项逐个说】\nA. 0V → 正确。\nB. 1V → 错误。\nC. 5V → 错误。\nD. 不确定 → 错误。\n【答案】0V\n【易错】参考点接地，电位0。"
  },
  { id: "ne2604", module: "major", subject: "电工电子技术基础", chapter: "ch-ee-2", "knowledgePoint": "电桥平衡应用", type: "single", typeLabel: "单选",
    stem: "惠斯通电桥用来测量（　）", options: ["电阻", "电压", "电流", "功率"], answer: "电阻",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["直流电路", "电桥"],
    analysis: "【题干】惠斯通电桥测什么？\n【考点】电桥应用\n【详细解答】\n1. 惠斯通电桥精确测量电阻。\n【选项逐个说】\nA. 电阻 → 正确。\nB. 电压 → 错误。\nC. 电流 → 错误。\nD. 功率 → 错误。\n【答案】电阻\n【易错】电桥测电阻。"
  }
]);
