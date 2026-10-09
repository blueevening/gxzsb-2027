/* 新增题库 - 2026考纲版 - 计算机网络基础 补到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  // 第1章
  { id: "nn1604", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "网络标准化", type: "single", typeLabel: "单选",
    stem: "制定互联网标准的国际组织是（　）", options: ["IETF", "IEEE", "ITU", "ISO"], answer: "IETF",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["网络概述", "标准化"],
    analysis: "【题干】制定互联网标准的是？\n【考点】标准化组织\n【详细解答】\n1. IETF：互联网工程任务组，制定TCP/IP标准。\n2. IEEE：电气电子工程师协会，制定802系列标准。\n3. ISO：国际标准化组织，制定OSI。\n【选项逐个说】\nA. IETF → 正确。\nB. IEEE → 错误：局域网标准。\nC. ITU → 错误：电信标准。\nD. ISO → 错误：OSI。\n【答案】IETF\n【易错】IETF管互联网。"
  },
  { id: "nn1605", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "吞吐量", type: "single", typeLabel: "单选",
    stem: "吞吐量是指（　）", options: ["单位时间实际通过的数据量", "最大数据率", "带宽", "延迟"], answer: "单位时间实际通过的数据量",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "吞吐量"],
    analysis: "【题干】吞吐量？\n【考点】性能指标\n【详细解答】\n1. 吞吐量：实际单位时间通过的数据量。\n2. 带宽是最大值，吞吐量是实际值。\n【选项逐个说】\nA. 单位时间实际通过的数据量 → 正确。\nB. 最大数据率 → 错误：那是带宽。\nC. 带宽 → 错误。\nD. 延迟 → 错误。\n【答案】单位时间实际通过的数据量\n【易错】吞吐量是实际值。"
  },

  // 第2章
  { id: "nn2602", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "信噪比", type: "single", typeLabel: "单选",
    stem: "信噪比越大，信道质量（　）", options: ["越好", "越差", "不变", "不确定"], answer: "越好",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "信噪比"],
    analysis: "【题干】信噪比越大？\n【考点】信噪比\n【详细解答】\n1. 信噪比=信号功率/噪声功率。\n2. 越大信号越清楚，信道质量越好。\n【选项逐个说】\nA. 越好 → 正确。\nB. 越差 → 错误。\nC. 不变 → 错误。\nD. 不确定 → 错误。\n【答案】越好\n【易错】信噪比大质量好。"
  },
  { id: "nn2603", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "码分复用", type: "single", typeLabel: "单选",
    stem: "CDMA是（　）", options: ["码分多址", "频分多址", "时分多址", "波分多址"], answer: "码分多址",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["物理层", "CDMA"],
    analysis: "【题干】CDMA是？\n【考点】多路复用\n【详细解答】\n1. CDMA：码分多址，不同用户用不同码片。\n【选项逐个说】\nA. 码分多址 → 正确。\nB. 频分多址 → 错误：FDMA。\nC. 时分多址 → 错误：TDMA。\nD. 波分多址 → 错误：WDMA。\n【答案】码分多址\n【易错】CDMA码分。"
  },

  // 第3章
  { id: "nn3603", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "CSMA/CD最小帧长", type: "single", typeLabel: "单选",
    stem: "CSMA/CD为什么要规定最小帧长？（　）", options: ["保证冲突能被检测到", "提高速度", "减少开销", "加密"], answer: "保证冲突能被检测到",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["数据链路层", "CSMA/CD"],
    analysis: "【题干】为什么最小帧长64字节？\n【考点】以太网最小帧长\n【详细解答】\n1. 发送帧的时间要大于信号最远往返传播时间。\n2. 保证发送完之前冲突能被检测到。\n【选项逐个说】\nA. 保证冲突能被检测到 → 正确。\nB. 提高速度 → 错误。\nC. 减少开销 → 错误。\nD. 加密 → 错误。\n【答案】保证冲突能被检测到\n【易错】最小帧长为了检测冲突。"
  },
  { id: "nn3604", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "VLAN Trunk", type: "single", typeLabel: "单选",
    stem: "Trunk端口用来（　）", options: ["传多个VLAN的数据", "只传一个VLAN", "连接PC", "连接路由器"], answer: "传多个VLAN的数据",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["数据链路层", "VLAN"],
    analysis: "【题干】Trunk端口干嘛？\n【考点】VLAN端口\n【详细解答】\n1. Access端口：只属于一个VLAN，连PC。\n2. Trunk端口：可以传多个VLAN的数据，连交换机。\n【选项逐个说】\nA. 传多个VLAN的数据 → 正确。\nB. 只传一个VLAN → 错误：那是Access。\nC. 连接PC → 错误：那是Access。\nD. 连接路由器 → 错误。\n【答案】传多个VLAN的数据\n【易错】Trunk多VLAN干道。"
  },

  // 第4章
  { id: "nn4604", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "CIDR", type: "single", typeLabel: "单选",
    stem: "CIDR表示法192.168.1.0/24中24表示（　）", options: ["网络位长度", "主机位长度", "子网数", "主机数"], answer: "网络位长度",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "CIDR"],
    analysis: "【题干】/24表示？\n【考点】CIDR\n【详细解答】\n1. /后面数字是网络位长度。\n【选项逐个说】\nA. 网络位长度 → 正确。\nB. 主机位长度 → 错误：那是32-24=8。\nC. 子网数 → 错误。\nD. 主机数 → 错误。\n【答案】网络位长度\n【易错】/n是网络位n位。"
  },
  { id: "nn4605", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "Ospf区域", type: "single", typeLabel: "单选",
    stem: "OSPF主干区域号是（　）", options: ["0", "1", "10", "100"], answer: "0",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["网络层", "OSPF"],
    analysis: "【题干】OSPF主干区域？\n【考点】OSPF\n【详细解答】\n1. OSPF区域0是主干区域，所有其他区域都要连到区域0。\n【选项逐个说】\nA. 0 → 正确。\nB. 1 → 错误。\nC. 10 → 错误。\nD. 100 → 错误。\n【答案】0\n【易错】区域0是骨干。"
  },

  // 第5章
  { id: "nn5603", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "UDP校验和", type: "single", typeLabel: "单选",
    stem: "UDP校验和校验范围是（　）", options: ["首部+数据", "只首部", "只数据", "整个IP数据报"], answer: "首部+数据",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["传输层", "UDP"],
    analysis: "【题干】UDP校验和范围？\n【考点】UDP校验\n【详细解答】\n1. UDP校验和校验首部+数据+伪首部。\n【选项逐个说】\nA. 首部+数据 → 正确。\nB. 只首部 → 错误。\nC. 只数据 → 错误。\nD. 整个IP数据报 → 错误。\n【答案】首部+数据\n【易错】UDP校验覆盖首部和数据。"
  },
  { id: "nn5604", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TIME_WAIT时长", type: "single", typeLabel: "单选",
    stem: "TIME_WAIT状态等待时间是（　）", options: ["2MSL", "1MSL", "3MSL", "4MSL"], answer: "2MSL",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】TIME_WAIT等多久？\n【考点】TCP状态\n【详细解答】\n1. TIME_WAIT等待2MSL。\n2. MSL是最长分节生命期。\n【选项逐个说】\nA. 2MSL → 正确。\nB. 1MSL → 错误。\nC. 3MSL → 错误。\nD. 4MSL → 错误。\n【答案】2MSL\n【易错】TIME_WAIT等2MSL。"
  },

  // 第6章
  { id: "nn6604", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "HTTP 1.1", type: "single", typeLabel: "单选",
    stem: "HTTP 1.1特点是（　）", options: ["持久连接", "非持久连接", "每次都要建连", "无状态"], answer: "持久连接",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["应用层", "HTTP"],
    analysis: "【题干】HTTP1.1特点？\n【考点】HTTP版本\n【详细解答】\n1. HTTP1.0：非持久连接，每次请求建一次连。\n2. HTTP1.1：持久连接，一个连接传多个对象。\n【选项逐个说】\nA. 持久连接 → 正确。\nB. 非持久连接 → 错误：那是1.0。\nC. 每次都要建连 → 错误。\nD. 无状态 → 错误：所有HTTP都无状态。\n【答案】持久连接\n【易错】1.1持久连接。"
  },
  { id: "nn6605", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "SMTP端口", type: "single", typeLabel: "单选",
    stem: "SMTP默认端口是（　）", options: ["25", "110", "143", "80"], answer: "25",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "端口"],
    analysis: "【题干】SMTP端口？\n【考点】邮件端口\n【详细解答】\n1. SMTP发邮件25。\n2. POP3收邮件110。\n3. IMAP收邮件143。\n【选项逐个说】\nA. 25 → 正确。\nB. 110 → 错误：POP3。\nC. 143 → 错误：IMAP。\nD. 80 → 错误：HTTP。\n【答案】25\n【易错】发邮件25。"
  },

  // 判断题
  { id: "nn1606", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "分层", type: "judge", typeLabel: "判断",
    stem: "网络分层各层之间是独立的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "分层"],
    analysis: "【题干】分层各层独立？\n【考点】分层思想\n【详细解答】\n1. 分层各层独立，只通过接口和上下层交互。\n【答案】正确\n【易错】分层各层独立。"
  },
  { id: "nn2604", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "传输介质", type: "judge", typeLabel: "判断",
    stem: "光纤传输距离比双绞线远。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "传输介质"],
    analysis: "【题干】光纤比双绞线远？\n【考点】传输介质\n【详细解答】\n1. 光纤损耗小，距离远。\n【答案】正确\n【易错】光纤传得远。"
  },
  { id: "nn3605", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机vs集线器", type: "judge", typeLabel: "判断",
    stem: "交换机比集线器性能好。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "设备"],
    analysis: "【题干】交换机比集线器好？\n【考点】设备对比\n【详细解答】\n1. 交换机是全双工，隔离冲突域。\n2. 集线器是共享带宽，半双工。\n【答案】正确\n【易错】交换机比集线器好。"
  },
  { id: "nn4606", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "ARP缓存", type: "judge", typeLabel: "判断",
    stem: "ARP请求得到的结果会存在缓存里。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "ARP"],
    analysis: "【题干】ARP有缓存？\n【考点】ARP工作过程\n【详细解答】\n1. ARP查到结果后存在ARP缓存里，下次直接用。\n【答案】正确\n【易错】ARP有缓存。"
  },
  { id: "nn5605", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP MSS", type: "judge", typeLabel: "判断",
    stem: "TCP MSS默认是536字节。", options: ["正确", "错误"], answer: "正确",
    difficulty: 3, difficultyLabel: "冲刺", source: "new2026", tags: ["传输层", "TCP"],
    analysis: "【题干】MSS默认536？\n【考点】TCP\n【详细解答】\n1. 传统默认MSS=536（IP首部20+TCP首部20，总576）。\n【答案】正确\n【易错】MSS默认536。"
  },
  { id: "nn6606", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "WWW", type: "judge", typeLabel: "判断",
    stem: "HTML是超文本标记语言。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "HTML"],
    analysis: "【题干】HTML是超文本标记语言？\n【考点】WWW\n【详细解答】\n1. HTML=HyperText Markup Language。\n【答案】正确\n【易错】HTML写网页。"
  }
]);
