/* 新增题库 - 2026考纲版 - 计算机网络基础 第七批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 =====
  { id: "nn1601", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "计算机网络组成", type: "single", typeLabel: "单选",
    stem: "计算机网络由（　）组成", options: ["资源子网和通信子网", "计算机和网线", "硬件和软件", "服务器和客户机"], answer: "资源子网和通信子网",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "组成"],
    analysis: "【题干】计算机网络组成？\n【考点】网络组成\n【详细解答】\n1. 资源子网：提供资源的主机和终端。\n2. 通信子网：传输数据的设备和线路。\n【选项逐个说】\nA. 资源子网和通信子网 → 正确。\nB. 计算机和网线 → 错误。\nC. 硬件和软件 → 错误。\nD. 服务器和客户机 → 错误。\n【答案】资源子网和通信子网\n【易错】网络=资源子网+通信子网。"
  },
  { id: "nn1602", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "延迟", type: "single", typeLabel: "单选",
    stem: "发送时延是指（　）", options: ["把数据推上信道的时间", "信号在信道上传播时间", "节点处理时间", "排队时间"], answer: "把数据推上信道的时间",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "时延"],
    analysis: "【题干】发送时延？\n【考点】时延组成\n【详细解答】\n1. 发送时延=数据长度/发送速率。\n2. 传播时延=信道长度/信号传播速度。\n【选项逐个说】\nA. 把数据推上信道的时间 → 正确。\nB. 信号在信道上传播时间 → 错误：那是传播时延。\nC. 节点处理时间 → 错误。\nD. 排队时间 → 错误。\n【答案】把数据推上信道的时间\n【易错】发送是推数据，传播是跑信号。"
  },

  // ===== 第2章 =====
  { id: "nn2601", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "基带与宽带", type: "single", typeLabel: "单选",
    stem: "宽带传输是（　）", options: ["数字信号直接传", "数字信号调制到高频载波上传", "模拟信号传", "光纤传"], answer: "数字信号调制到高频载波上传",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "宽带"],
    analysis: "【题干】宽带传输？\n【考点】基带与宽带\n【详细解答】\n1. 基带：数字信号直接上信道。\n2. 宽带：把数字信号调制到高频载波上传。\n【选项逐个说】\nA. 数字信号直接传 → 错误：那是基带。\nB. 数字信号调制到高频载波上传 → 正确。\nC. 模拟信号传 → 错误。\nD. 光纤传 → 错误。\n【答案】数字信号调制到高频载波上传\n【易错】宽带要调制。"
  },

  // ===== 第3章 =====
  { id: "nn3601", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "PPP协议", type: "single", typeLabel: "单选",
    stem: "PPP协议不提供（　）", options: ["差错检测", "流量控制", "网络层地址协商", "网络层配置"], answer: "流量控制",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["数据链路层", "PPP"],
    analysis: "【题干】PPP不提供什么？\n【考点】PPP协议\n【详细解答】\n1. PPP提供差错检测、支持多种网络层协议、网络层地址协商。\n2. 不提供可靠传输和流量控制。\n【选项逐个说】\nA. 差错检测 → 错误：有。\nB. 流量控制 → 正确：没有。\nC. 网络层地址协商 → 错误：有。\nD. 网络层配置 → 错误：有。\n【答案】流量控制\n【易错】PPP不做流量控制。"
  },

  // ===== 第4章 =====
  { id: "nn4601", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "路由表", type: "single", typeLabel: "单选",
    stem: "路由表中默认路由的目标网络是（　）", options: ["0.0.0.0", "255.255.255.255", "127.0.0.1", "224.0.0.1"], answer: "0.0.0.0",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "路由"],
    analysis: "【题干】默认路由目标？\n【考点】默认路由\n【详细解答】\n1. 默认路由：目标0.0.0.0/0。\n2. 路由表找不到匹配的就走默认路由。\n【选项逐个说】\nA. 0.0.0.0 → 正确。\nB. 255.255.255.255 → 错误：广播。\nC. 127.0.0.1 → 错误：环回。\nD. 224.0.0.1 → 错误：组播。\n【答案】0.0.0.0\n【易错】默认路由0.0.0.0。"
  },
  { id: "nn4602", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "ICMP重定向", type: "single", typeLabel: "单选",
    stem: "ICMP重定向报文作用是（　）", options: ["通知主机更好的路由", "报告错误", "测试连通", "超时通知"], answer: "通知主机更好的路由",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["网络层", "ICMP"],
    analysis: "【题干】ICMP重定向干嘛？\n【考点】ICMP报文\n【详细解答】\n1. 路由器发现主机路由选错了，发重定向报文告诉主机换个路由器。\n【选项逐个说】\nA. 通知主机更好的路由 → 正确。\nB. 报告错误 → 错误。\nC. 测试连通 → 错误：那是ping。\nD. 超时通知 → 错误。\n【答案】通知主机更好的路由\n【易错】重定向改路由。"
  },

  // ===== 第5章 =====
  { id: "nn5601", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP流量控制", type: "single", typeLabel: "单选",
    stem: "TCP滑动窗口大小由什么决定？（　）", options: ["接收方接收能力", "发送方发送能力", "网络带宽", "路由器缓存"], answer: "接收方接收能力",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】滑动窗口大小谁决定？\n【考点】TCP流量控制\n【详细解答】\n1. 接收方在ACK里告诉发送方自己还能收多少。\n2. 发送方不能超过接收窗口。\n【选项逐个说】\nA. 接收方接收能力 → 正确。\nB. 发送方发送能力 → 错误。\nC. 网络带宽 → 错误：那是拥塞窗口。\nD. 路由器缓存 → 错误。\n【答案】接收方接收能力\n【易错】流量控制看接收方。"
  },

  // ===== 第6章 =====
  { id: "nn6601", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "FTP数据端口", type: "single", typeLabel: "单选",
    stem: "FTP主动模式数据端口是（　）", options: ["20", "21", "22", "25"], answer: "20",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "FTP"],
    analysis: "【题干】FTP数据端口？\n【考点】FTP端口\n【详细解答】\n1. FTP控制端口21。\n2. FTP主动模式数据端口20。\n【选项逐个说】\nA. 20 → 正确：数据。\nB. 21 → 错误：控制。\nC. 22 → 错误：SSH。\nD. 25 → 错误：SMTP。\n【答案】20\n【易错】控制21数据20。"
  },
  { id: "nn6602", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "HTTP状态码", type: "single", typeLabel: "单选",
    stem: "HTTP状态码404表示（　）", options: ["请求成功", "资源未找到", "服务器错误", "重定向"], answer: "资源未找到",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "HTTP"],
    analysis: "【题干】404什么意思？\n【考点】HTTP状态码\n【详细解答】\n1. 200：成功。\n2. 301：永久重定向。\n3. 404：资源没找到。\n4. 500：服务器内部错误。\n【选项逐个说】\nA. 请求成功 → 错误：那是200。\nB. 资源未找到 → 正确：404。\nC. 服务器错误 → 错误：那是500。\nD. 重定向 → 错误：那是3xx。\n【答案】资源未找到\n【易错】404找不到。"
  },

  // ===== 判断题 =====
  { id: "nn1603", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "网络协议", type: "judge", typeLabel: "判断",
    stem: "网络协议是网络数据交换的规则。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "协议"],
    analysis: "【题干】网络协议是规则？\n【考点】协议定义\n【详细解答】\n1. 协议就是通信双方遵守的规则。\n【答案】正确\n【易错】协议=规则。"
  },
  { id: "nn3602", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "以太网", type: "judge", typeLabel: "判断",
    stem: "以太网是目前最常用的局域网技术。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "以太网"],
    analysis: "【题干】以太网最常用？\n【考点】以太网\n【详细解答】\n1. 以太网是现在局域网绝对主流。\n【答案】正确\n【易错】以太网最常用。"
  },
  { id: "nn4603", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "ARP", type: "judge", typeLabel: "判断",
    stem: "ARP请求是广播发送的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "ARP"],
    analysis: "【题干】ARP请求是广播？\n【考点】ARP工作过程\n【详细解答】\n1. ARP请求：广播发给局域网所有主机。\n2. ARP响应：单播发给请求者。\n【答案】正确\n【易错】请求广播，响应单播。"
  },
  { id: "nn5602", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP MSS", type: "judge", typeLabel: "判断",
    stem: "MSS是TCP报文段最大数据长度。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】MSS是最大数据长度？\n【考点】TCP\n【详细解答】\n1. MSS：最大报文段长度，指TCP报文里数据部分最大长度。\n【答案】正确\n【易错】MSS不包含首部。"
  },
  { id: "nn6603", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "WWW", type: "judge", typeLabel: "判断",
    stem: "万维网就是互联网。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "WWW"],
    analysis: "【题干】万维网就是互联网？\n【考点】WWW与Internet\n【详细解答】\n1. 互联网是整个计算机网络。\n2. 万维网只是互联网上的一种应用。\n【答案】错误\n【易错】万维网只是互联网的一部分。"
  }
]);
