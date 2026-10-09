/* 新增题库 - 2026考纲版 - 计算机网络基础 第六批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 =====
  { id: "nn1501", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "网络层次", type: "single", typeLabel: "单选",
    stem: "网络分层好处不包括（　）", options: ["降低复杂度", "各层独立", "促进标准化", "提高传输速度"], answer: "提高传输速度",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "分层"],
    analysis: "【题干】分层好处不包括？\n【考点】分层思想\n【详细解答】\n1. 分层好处：各层独立、灵活、结构可分、易于实现维护、促进标准化。\n2. 分层不会提高传输速度。\n【选项逐个说】\nA. 降低复杂度 → 错误：是。\nB. 各层独立 → 错误：是。\nC. 促进标准化 → 错误：是。\nD. 提高传输速度 → 正确：不是。\n【答案】提高传输速度\n【易错】分层为了好维护，不是提速。"
  },
  { id: "nn1502", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "封装", type: "single", typeLabel: "单选",
    stem: "数据从高层到低层过程叫（　）", options: ["封装", "解封装", "复用", "交换"], answer: "封装",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "封装"],
    analysis: "【题干】高层到低层叫？\n【考点】封装解封装\n【详细解答】\n1. 发送：从上到下逐层加首部，叫封装。\n2. 接收：从下到上逐层去掉首部，叫解封装。\n【选项逐个说】\nA. 封装 → 正确。\nB. 解封装 → 错误：那是接收方向。\nC. 复用 → 错误。\nD. 交换 → 错误。\n【答案】封装\n【易错】发送封装，接收解封装。"
  },

  // ===== 第2章 =====
  { id: "nn2501", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "光纤类型", type: "single", typeLabel: "单选",
    stem: "单模光纤比多模光纤（　）", options: ["传输距离远", "便宜", "粗", "芯径大"], answer: "传输距离远",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "光纤"],
    analysis: "【题干】单模比多模？\n【考点】光纤\n【详细解答】\n1. 单模光纤：芯细，激光，距离远，贵。\n2. 多模光纤：芯粗，LED，距离近，便宜。\n【选项逐个说】\nA. 传输距离远 → 正确。\nB. 便宜 → 错误：那是多模。\nC. 粗 → 错误：那是多模。\nD. 芯径大 → 错误：那是多模。\n【答案】传输距离远\n【易错】单模远，多模近。"
  },

  // ===== 第3章 =====
  { id: "nn3501", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "以太网MAC地址长度", type: "single", typeLabel: "单选",
    stem: "MAC地址长度是多少位？（　）", options: ["32", "48", "64", "128"], answer: "48",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "MAC"],
    analysis: "【题干】MAC地址几位？\n【考点】MAC地址\n【详细解答】\n1. MAC地址48位。\n2. IPv4地址32位。\n3. IPv6地址128位。\n【选项逐个说】\nA. 32 → 错误：IPv4。\nB. 48 → 正确。\nC. 64 → 错误。\nD. 128 → 错误：IPv6。\n【答案】48\n【易错】MAC 48位。"
  },
  { id: "nn3502", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "生成树协议", type: "single", typeLabel: "单选",
    stem: "STP生成树协议作用是（　）", options: ["防止环路", "提高速度", "分配IP", "加密"], answer: "防止环路",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "STP"],
    analysis: "【题干】STP作用？\n【考点】生成树\n【详细解答】\n1. 交换机网络有冗余会形成环路，广播风暴。\n2. STP自动阻塞一些端口，逻辑上断开环路。\n【选项逐个说】\nA. 防止环路 → 正确。\nB. 提高速度 → 错误。\nC. 分配IP → 错误：那是DHCP。\nD. 加密 → 错误。\n【答案】防止环路\n【易错】STP破环路。"
  },

  // ===== 第4章 =====
  { id: "nn4501", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "A类地址网络位", type: "single", typeLabel: "单选",
    stem: "A类地址网络位占多少位？（　）", options: ["7位", "14位", "21位", "24位"], answer: "7位",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "IP分类"],
    analysis: "【题干】A类网络位几位？\n【考点】IP分类\n【详细解答】\n1. A类：第1位是0，网络位7位，主机位24位。\n2. B类：前2位10，网络位14位。\n3. C类：前3位110，网络位21位。\n【选项逐个说】\nA. 7位 → 正确。\nB. 14位 → 错误：B类。\nC. 21位 → 错误：C类。\nD. 24位 → 错误。\n【答案】7位\n【易错】A类网7主24。"
  },
  { id: "nn4502", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "路由协议", type: "single", typeLabel: "单选",
    "stem": "RIP协议基于什么算法？（　）", options: ["距离矢量", "链路状态", "路径矢量", "最短路径"], answer: "距离矢量",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["网络层", "路由协议"],
    analysis: "【题干】RIP用什么算法？\n【考点】路由协议\n【详细解答】\n1. RIP：距离矢量算法，跳数为度量。\n2. OSPF：链路状态算法。\n【选项逐个说】\nA. 距离矢量 → 正确。\nB. 链路状态 → 错误：那是OSPF。\nC. 路径矢量 → 错误：那是BGP。\nD. 最短路径 → 错误。\n【答案】距离矢量\n【易错】RIP距离矢量。"
  },

  // ===== 第5章 =====
  { id: "nn5501", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TIME_WAIT", type: "single", typeLabel: "单选",
    stem: "TCP四次挥手中主动关闭方进入TIME_WAIT状态是为了（　）", options: ["确保最后一个ACK到达", "等待新连接", "释放资源", "回收端口"], answer: "确保最后一个ACK到达",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["传输层", "TCP连接"],
    analysis: "【题干】TIME_WAIT干嘛？\n【考点】TCP挥手\n【详细解答】\n1. 主动关闭方发完最后一个ACK后等2MSL。\n2. 确保这个ACK能到达被动方，万一丢了被动方会重发FIN。\n【选项逐个说】\nA. 确保最后一个ACK到达 → 正确。\nB. 等待新连接 → 错误。\nC. 释放资源 → 错误。\nD. 回收端口 → 错误。\n【答案】确保最后一个ACK到达\n【易错】TIME_WAIT等ACK确认。"
  },

  // ===== 第6章 =====
  { id: "nn6501", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "WWW网页", type: "single", typeLabel: "单选",
    stem: "网页文件默认名是（　）", options: ["index.html", "home.html", "main.html", "www.html"], answer: "index.html",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "WWW"],
    analysis: "【题干】网页默认文件名？\n【考点】WWW\n【详细解答】\n1. 网站首页默认index.html。\n2. 访问目录时服务器自动找index.html。\n【选项逐个说】\nA. index.html → 正确。\nB. home.html → 错误。\nC. main.html → 错误。\nD. www.html → 错误。\n【答案】index.html\n【易错】首页index.html。"
  },
  { id: "nn6502", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "Cookie", type: "single", typeLabel: "单选",
    "stem": "Cookie的作用是（　）", options: ["保持HTTP状态", "加密数据", "加速访问", "压缩数据"], answer: "保持HTTP状态",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "Cookie"],
    analysis: "【题干】Cookie作用？\n【考点】HTTP状态\n【详细解答】\n1. HTTP无状态，用Cookie记住用户。\n2. Cookie存在客户端，服务器每次请求带上。\n【选项逐个说】\nA. 保持HTTP状态 → 正确。\nB. 加密数据 → 错误。\nC. 加速访问 → 错误。\nD. 压缩数据 → 错误。\n【答案】保持HTTP状态\n【易错】Cookie记状态。"
  },

  // ===== 判断题 =====
  { id: "nn1503", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "互联网", type: "judge", typeLabel: "判断",
    stem: "互联网使用的协议是TCP/IP。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "TCP/IP"],
    analysis: "【题干】互联网用TCP/IP？\n【考点】互联网协议\n【详细解答】\n1. 互联网就是基于TCP/IP协议的。\n【答案】正确\n【易错】互联网=TCP/IP。"
  },
  { id: "nn2502", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "信道容量", type: "judge", typeLabel: "判断",
    stem: "信道带宽越大，最高数据率越高。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "带宽"],
    analysis: "【题干】带宽越大速率越高？\n【考点】信道容量\n【详细解答】\n1. 香农定理：信道容量和带宽成正比。\n【答案】正确\n【易错】带宽越宽越快。"
  },
  { id: "nn3503", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机MAC表", type: "judge", typeLabel: "判断",
    stem: "交换机MAC地址表是永久存在的。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "交换机"],
    analysis: "【题干】MAC表永久存在？\n【考点】交换机自学习\n【详细解答】\n1. MAC地址表有老化时间，一段时间没收到就删掉。\n【答案】错误\n【易错】MAC表会老化。"
  },
  { id: "nn4503", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "私有地址", type: "judge", typeLabel: "判断",
    stem: "私有地址不能在公网上路由。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "私有地址"],
    analysis: "【题干】私有地址不能公网路由？\n【考点】私有地址\n【详细解答】\n1. 私有地址只在内网用，公网路由器不转发。\n2. 要上网通过NAT转换。\n【答案】正确\n【易错】私网地址内网用。"
  },
  { id: "nn5502", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "UDP校验和", type: "judge", typeLabel: "判断",
    stem: "UDP校验和可选，不做也行。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "UDP"],
    analysis: "【题干】UDP校验和可选？\n【考点】UDP首部\n【详细解答】\n1. UDP校验和可选，置0就不校验。\n2. TCP校验和必须算。\n【答案】正确\n【易错】UDP校验可选。"
  },
  { id: "nn6503", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "DHCP", type: "judge", typeLabel: "判断",
    stem: "DHCP自动给主机分配IP地址。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "DHCP"],
    analysis: "【题干】DHCP自动分配IP？\n【考点】DHCP\n【详细解答】\n1. DHCP：动态主机配置协议，自动分IP、子网掩码、网关、DNS。\n【答案】正确\n【易错】DHCP自动拿IP。"
  }
]);
