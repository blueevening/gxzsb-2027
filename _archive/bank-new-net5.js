/* 新增题库 - 2026考纲版 - 计算机网络基础 第五批 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // ===== 第1章 网络概述 =====
  { id: "nn1401", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "网络协议", type: "single", typeLabel: "单选",
    stem: "网络三要素不包括（　）", options: ["语法", "语义", "同步", "电压"], answer: "电压",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "协议"],
    analysis: "【题干】网络三要素？\n【考点】网络协议三要素\n【详细解答】\n1. 语法：数据与控制信息的格式。\n2. 语义：需要发何种控制信息。\n3. 同步：事件实现顺序。\n【选项逐个说】\nA. 语法 → 错误：是。\nB. 语义 → 错误：是。\nC. 同步 → 错误：是。\nD. 电压 → 正确：不是。\n【答案】电压\n【易错】协议三要素语法语义同步。"
  },
  { id: "nn1402", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "时延", type: "single", typeLabel: "单选",
    stem: "数据在信道上传播花费的时间叫（　）", options: ["发送时延", "传播时延", "处理时延", "排队时延"], answer: "传播时延",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "时延"],
    analysis: "【题干】在信道上传播时间？\n【考点】时延组成\n【详细解答】\n1. 发送时延：把数据推上信道花的时间。\n2. 传播时延：信号在信道上跑的时间。\n3. 处理时延：节点处理时间。\n4. 排队时延：在路由器排队时间。\n【选项逐个说】\nA. 发送时延 → 错误：推数据时间。\nB. 传播时延 → 正确：信号跑的时间。\nC. 处理时延 → 错误。\nD. 排队时延 → 错误。\n【答案】传播时延\n【易错】发送是推上去，传播是跑过去。"
  },

  // ===== 第2章 物理层 =====
  { id: "nn2401", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "基带传输", type: "single", typeLabel: "单选",
    stem: "以太网用什么传输方式？（　）", options: ["基带", "宽带", "频带", "模拟"], answer: "基带",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "基带"],
    analysis: "【题干】以太网用什么传输？\n【考点】基带与宽带\n【详细解答】\n1. 以太网用基带传输，数字信号直接上信道。\n【选项逐个说】\nA. 基带 → 正确。\nB. 宽带 → 错误。\nC. 频带 → 错误。\nD. 模拟 → 错误。\n【答案】基带\n【易错】以太网基带。"
  },

  // ===== 第3章 数据链路层 =====
  { id: "nn3401", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "以太网帧最小", type: "single", typeLabel: "单选",
    stem: "以太网帧最小64字节，不包括什么？（　）", options: ["前导码", "目的MAC", "源MAC", "数据"], answer: "前导码",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["数据链路层", "以太网帧"],
    analysis: "【题干】64字节最小帧不含什么？\n【考点】以太网帧\n【详细解答】\n1. 最小64字节是从目的MAC到FCS。\n2. 前导码7字节+帧开始符1字节，共8字节不算在64里。\n【选项逐个说】\nA. 前导码 → 正确：不算。\nB. 目的MAC → 错误：算。\nC. 源MAC → 错误：算。\nD. 数据 → 错误：算。\n【答案】前导码\n【易错】前导码不算最小帧长。"
  },
  { id: "nn3402", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机转发方式", type: "single", typeLabel: "单选",
    stem: "交换机收到帧先存整个帧再转发叫什么？（　）", options: ["存储转发", "直通转发", "无碎片转发", "快速转发"], answer: "存储转发",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "交换机"],
    analysis: "【题干】存整个帧再转发？\n【考点】交换机转发方式\n【详细解答】\n1. 存储转发：收完整帧，检查错误，再转发。\n2. 直通转发：收到目的MAC就转发，快但不查错。\n【选项逐个说】\nA. 存储转发 → 正确。\nB. 直通转发 → 错误。\nC. 无碎片转发 → 错误。\nD. 快速转发 → 错误。\n【答案】存储转发\n【易错】存整个再发。"
  },

  // ===== 第4章 网络层 =====
  { id: "nn4401", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "IP数据报首部", type: "single", typeLabel: "单选",
    stem: "IPv4首部最少多少字节？（　）", options: ["20", "40", "60", "30"], answer: "20",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "IP首部"],
    analysis: "【题干】IPv4首部最少？\n【考点】IP数据报\n【详细解答】\n1. IPv4首部：最少20字节（无选项）。\n2. 最多60字节。\n【选项逐个说】\nA. 20 → 正确。\nB. 40 → 错误。\nC. 60 → 错误：那是最大。\nD. 30 → 错误。\n【答案】20\n【易错】IP首部最小20。"
  },
  { id: "nn4402", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "分片", type: "single", typeLabel: "单选",
    stem: "IP数据报超过MTU时会怎样？（　）", options: ["分片", "丢弃", "缓存", "重传"], answer: "分片",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "分片"],
    analysis: "【题干】超过MTU怎么办？\n【考点】IP分片\n【详细解答】\n1. MTU是最大传输单元。\n2. 数据报比MTU大就分片，到目的主机再重组。\n【选项逐个说】\nA. 分片 → 正确。\nB. 丢弃 → 错误。\nC. 缓存 → 错误。\nD. 重传 → 错误。\n【答案】分片\n【易错】超MTU就分片。"
  },
  { id: "nn4403", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "ICMP Ping", type: "single", typeLabel: "单选",
    stem: "ping命令使用ICMP什么报文？（　）", options: ["回送请求和回送回答", "目的不可达", "超时", "重定向"], answer: "回送请求和回送回答",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络层", "ICMP"],
    analysis: "【题干】ping用什么ICMP报文？\n【考点】ICMP应用\n【详细解答】\n1. ping发回送请求(Echo Request)，目的回送回答(Echo Reply)。\n2. 用来测网络通不通。\n【选项逐个说】\nA. 回送请求和回送回答 → 正确。\nB. 目的不可达 → 错误。\nC. 超时 → 错误：traceroute用。\nD. 重定向 → 错误。\n【答案】回送请求和回送回答\n【易错】ping用echo请求应答。"
  },

  // ===== 第5章 传输层 =====
  { id: "nn5401", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP序号", type: "single", typeLabel: "单选",
    stem: "TCP序号是用来干嘛的？（　）", options: ["保证按序到达", "流量控制", "拥塞控制", "建立连接"], answer: "保证按序到达",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "TCP序号"],
    analysis: "【题干】TCP序号作用？\n【考点】TCP可靠传输\n【详细解答】\n1. 每个字节都编序号。\n2. 接收方按序号重组，保证按序交付。\n【选项逐个说】\nA. 保证按序到达 → 正确。\nB. 流量控制 → 错误：滑动窗口。\nC. 拥塞控制 → 错误。\nD. 建立连接 → 错误。\n【答案】保证按序到达\n【易错】序号保证顺序。"
  },
  { id: "nn5402", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "UDP首部", type: "single", typeLabel: "单选",
    stem: "UDP首部几个字节？（　）", options: ["8", "20", "5", "40"], answer: "8",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "UDP"],
    analysis: "【题干】UDP首部几字节？\n【考点】UDP首部\n【详细解答】\n1. UDP首部：源端口(2)+目的端口(2)+长度(2)+校验和(2) = 8字节。\n2. TCP首部最少20字节。\n【选项逐个说】\nA. 8 → 正确。\nB. 20 → 错误：那是TCP。\nC. 5 → 错误。\nD. 40 → 错误。\n【答案】8\n【易错】UDP首部8字节，很短。"
  },

  // ===== 第6章 应用层 =====
  { id: "nn6401", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "URL", type: "single", typeLabel: "单选",
    stem: "URL是指（　）", options: ["统一资源定位符", "互联网协议", "传输协议", "邮件协议"], answer: "统一资源定位符",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "URL"],
    analysis: "【题干】URL是？\n【考点】URL\n【详细解答】\n1. URL：统一资源定位符，就是网址。\n2. 比如https://www.baidu.com。\n【选项逐个说】\nA. 统一资源定位符 → 正确。\nB. 互联网协议 → 错误。\nC. 传输协议 → 错误。\nD. 邮件协议 → 错误。\n【答案】统一资源定位符\n【易错】URL=网址。"
  },
  { id: "nn6402", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "POP3", type: "single", typeLabel: "单选",
    stem: "POP3协议默认端口是（　）", options: ["25", "110", "143", "80"], answer: "110",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "邮件"],
    analysis: "【题干】POP3端口？\n【考点】邮件端口\n【详细解答】\n1. SMTP：25（发邮件）。\n2. POP3：110（收邮件）。\n3. IMAP：143。\n【选项逐个说】\nA. 25 → 错误：SMTP。\nB. 110 → 正确：POP3。\nC. 143 → 错误：IMAP。\nD. 80 → 错误：HTTP。\n【答案】110\n【易错】POP3 110。"
  },

  // ===== 判断题 =====
  { id: "nn1403", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "OSI参考模型", type: "judge", typeLabel: "判断",
    stem: "OSI参考模型是实际使用的标准。", options: ["正确", "错误"], answer: "错误",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "OSI"],
    analysis: "【题干】OSI是实际用的？\n【考点】OSI\n【详细解答】\n1. OSI是理论参考模型，实际用的是TCP/IP模型。\n【答案】错误\n【易错】OSI是理论，TCP/IP是实际。"
  },
  { id: "nn2402", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "双绞线分类", type: "judge", typeLabel: "判断",
    stem: "五类线支持100Mbps传输。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "双绞线"],
    analysis: "【题干】五类线100Mbps？\n【考点】双绞线类别\n【详细解答】\n1. 五类线(Cat5)：100Mbps。\n2. 六类线(Cat6)：1000Mbps。\n【答案】正确\n【易错】五类百兆，六类千兆。"
  },
  { id: "nn3403", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机VLAN", type: "judge", typeLabel: "判断",
    stem: "VLAN可以隔离广播域。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "VLAN"],
    analysis: "【题干】VLAN隔离广播域？\n【考点】VLAN\n【详细解答】\n1. VLAN把一个物理局域网分成多个逻辑广播域。\n2. 不同VLAN之间通信要三层设备。\n【答案】正确\n【易错】VLAN隔离广播。"
  },
  { id: "nn4404", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "路由表", type: "judge", typeLabel: "判断",
    stem: "路由器根据路由表转发IP分组。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "路由"],
    analysis: "【题干】路由器按路由表转发？\n【考点】路由器工作原理\n【详细解答】\n1. 路由器查路由表，决定从哪个口转发出去。\n【答案】正确\n【易错】路由表指导转发。"
  },
  { id: "nn5403", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP可靠", type: "judge", typeLabel: "判断",
    stem: "TCP通过确认和重传实现可靠传输。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】TCP确认重传可靠？\n【考点】TCP可靠机制\n【详细解答】\n1. 确认+超时重传是TCP可靠传输的核心。\n【答案】正确\n【易错】确认重传保可靠。"
  },
  { id: "nn6403", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "HTTP无状态", type: "judge", typeLabel: "判断",
    stem: "HTTP协议是无状态的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "HTTP"],
    analysis: "【题干】HTTP无状态？\n【考点】HTTP特点\n【详细解答】\n1. HTTP是无状态协议，服务器不记得你之前访问过。\n2. 用Cookie/Session来保持状态。\n【答案】正确\n【易错】HTTP本身无状态。"
  }
]);
