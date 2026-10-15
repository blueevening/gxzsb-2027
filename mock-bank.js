/* 模拟题试卷题库 v1 - 独立于日常练习题库
 * 格式说明：
 * - 每道题用 #科目名 开头标注分类
 * - 科目标签：#数学、#英语、#电工、#C语言、#计网
 * - 后面会陆续补充题目
 */
window.MOCK_BANK = window.MOCK_BANK || {
  meta: {
    name: "模拟题试卷题库",
    version: 1,
    totalQuestions: 0,
    subjects: {
      "数学": 0,
      "英语": 0,
      "电工": 0,
      "C语言": 0,
      "计网": 0
    }
  },
  questions: [
    // 题目会陆续加在这里
    // 格式示例：
    // {
    //   id: "mock-math-001",
    //   subject: "数学",
    //   type: "single",  // single单选 / judge判断 / fill填空 / calc计算 / apply应用
    //   stem: "题目内容",
    //   options: ["A选项", "B选项", "C选项", "D选项"],  // 选择题才有
    //   answer: "B",
    //   analysis: "解析内容",
    //   difficulty: 2  // 1基础 2强化 3冲刺
    // }
  ]
};
