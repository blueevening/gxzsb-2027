/* 计网补最后16道到300 */
window.STUDY_DATA = window.STUDY_DATA || {};
window.STUDY_DATA.questions = (window.STUDY_DATA.questions || []).concat([
  { id: "nn1610", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "OSI各层", type: "single", typeLabel: "单选",
    stem: "OSI参考模型共几层？（　）", options: ["4", "5", "7", "6"], answer: "7",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "OSI"],
    analysis: "【题干】OSI几层？\n【考点】OSI模型\n【详细解答】\n1. OSI 7层：物理、链路、网络、传输、会话、表示、应用。\n【选项逐个说】\nA. 4 → 错误：那是TCP/IP。\nB. 5 → 错误：那是教学模型。\nC. 7 → 正确。\nD. 6 → 错误。\n【答案】7\n【易错】OSI 7层。"
  },
  { id: "nn2608", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "传输介质", type: "single", typeLabel: "单选",
    stem: "以下哪种介质最便宜？（　）", options: ["双绞线", "光纤", "同轴电缆", "无线电"], answer: "双绞线",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "传输介质"],
    analysis: "【题干】哪种最便宜？\n【考点】传输介质\n【详细解答】\n1. 双绞线最便宜最常用。\n【选项逐个说】\nA. 双绞线 → 正确。\nB. 光纤 → 错误：贵。\nC. 同轴电缆 → 错误。\nD. 无线电 → 错误。\n【答案】双绞线\n【易错】双绞线最便宜。"
  },
  { id: "nn3610", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机功能", type: "single", typeLabel: "单选",
    stem: "交换机根据什么转发帧？（　）", options: ["目的MAC", "源MAC", "目的IP", "源IP"], answer: "目的MAC",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "交换机"],
    analysis: "【题干】交换机根据什么转发？\n【考点】交换机工作原理\n【详细解答】\n1. 交换机根据目的MAC地址转发帧。\n【选项逐个说】\nA. 目的MAC → 正确。\nB. 源MAC → 错误：那是学习用。\nC. 目的IP → 错误：那是路由器。\nD. 源IP → 错误。\n【答案】目的MAC\n【易错】转发看目的MAC。"
  },
  { id: "nn4611", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "私有地址", type: "single", typeLabel: "单选",
    stem: "以下哪个是私有地址？（　）", options: ["10.0.0.1", "8.8.8.8", "202.103.0.1", "114.114.114.114"], answer: "10.0.0.1",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "私有地址"],
    analysis: "【题干】哪个是私有地址？\n【考点】私有地址段\n【详细解答】\n1. 私有地址段：10.0.0.0/8，172.16.0.0/12，192.168.0.0/16。\n【选项逐个说】\nA. 10.0.0.1 → 正确：A类私有。\nB. 8.8.8.8 → 错误：公网。\nC. 202.103.0.1 → 错误：公网。\nD. 114.114.114.114 → 错误：公网。\n【答案】10.0.0.1\n【易错】10开头私有。"
  },
  { id: "nn5609", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "TCP拥塞控制", type: "single", typeLabel: "单选",
    stem: "TCP拥塞控制四种算法不包括（　）", options: ["滑动窗口", "慢启动", "拥塞避免", "快重传"], answer: "滑动窗口",
    difficulty: 2, difficultyLabel: "强化", source: "new2026", tags: ["传输层", "拥塞控制"],
    analysis: "【题干】哪个不是拥塞控制算法？\n【考点】TCP拥塞控制\n【详细解答】\n1. 拥塞控制：慢启动、拥塞避免、快重传、快恢复。\n2. 滑动窗口是流量控制。\n【选项逐个说】\nA. 滑动窗口 → 正确：不是。\nB. 慢启动 → 错误：是。\nC. 拥塞避免 → 错误：是。\nD. 快重传 → 错误：是。\n【答案】滑动窗口\n【易错】滑动窗口是流量控制。"
  },
  { id: "nn6610", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "HTTP方法", type: "single", typeLabel: "单选",
    stem: "HTTP GET方法作用是（　）", options: ["获取资源", "上传数据", "删除资源", "修改资源"], answer: "获取资源",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "HTTP"],
    analysis: "【题干】GET方法作用？\n【考点】HTTP方法\n【详细解答】\n1. GET：请求获取资源。\n2. POST：提交数据。\n【选项逐个说】\nA. 获取资源 → 正确。\nB. 上传数据 → 错误：那是POST。\nC. 删除资源 → 错误：那是DELETE。\nD. 修改资源 → 错误。\n【答案】获取资源\n【易错】GET拿资源。"
  },

  // 判断题
  { id: "nn1611", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "协议三要素", type: "judge", typeLabel: "判断",
    stem: "网络协议三要素是语法、语义、同步。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "协议"],
    analysis: "【题干】协议三要素？\n【考点】协议三要素\n【详细解答】\n1. 语法、语义、同步。\n【答案】正确\n【易错】协议三要素。"
  },
  { id: "nn2609", module: "major", subject: "计算机网络基础", chapter: "ch-net-2", "knowledgePoint": "奈奎斯特", type: "judge", typeLabel: "判断",
    stem: "奈奎斯特定理是无噪声信道的极限。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["物理层", "奈奎斯特"],
    analysis: "【题干】奈奎斯特是无噪声？\n【考点】奈奎斯特与香农\n【详细解答】\n1. 奈奎斯特：无噪声理想信道。\n2. 香农：有噪声信道。\n【答案】正确\n【易错】奈奎斯特无噪声。"
  },
  { id: "nn3611", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "PPP", type: "judge", typeLabel: "判断",
    stem: "PPP是点对点链路层协议。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "PPP"],
    analysis: "【题干】PPP点对点？\n【考点】PPP\n【详细解答】\n1. PPP：点对点协议，用于拨号、专线。\n【答案】正确\n【易错】PPP点对点。"
  },
  { id: "nn4612", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "ICMP", type: "judge", typeLabel: "判断",
    stem: "ping命令使用ICMP协议。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "ICMP"],
    analysis: "【题干】ping用ICMP？\n【考点】ICMP应用\n【详细解答】\n1. ping用ICMP回送请求回答。\n【答案】正确\n【易错】ping是ICMP。"
  },
  { id: "nn5610", module: "major", subject: "计算机网络基础", chapter: "ch-net-5", "knowledgePoint": "UDP", type: "judge", typeLabel: "判断",
    stem: "UDP是面向报文的。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["传输层", "UDP"],
    analysis: "【题干】UDP面向报文？\n【考点】UDP特点\n【详细解答】\n1. UDP面向报文，TCP面向字节流。\n【答案】正确\n【易错】UDP报文。"
  },
  { id: "nn6611", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "DHCP", type: "judge", typeLabel: "判断",
    stem: "DHCP是应用层协议。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "DHCP"],
    analysis: "【题干】DHCP是应用层？\n【考点】DHCP层次\n【详细解答】\n1. DHCP是应用层协议，用UDP67/68端口。\n【答案】正确\n【易错】DHCP应用层。"
  },
  { id: "nn1612", module: "major", subject: "计算机网络基础", chapter: "ch-net-1", "knowledgePoint": "网络性能", type: "judge", typeLabel: "判断",
    stem: "带宽单位是bps。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络概述", "带宽"],
    analysis: "【题干】带宽单位bps？\n【考点】带宽单位\n【详细解答】\n1. 带宽是每秒能传多少比特，单位bps。\n【答案】正确\n【易错】bps比特每秒。"
  },
  { id: "nn3612", module: "major", subject: "计算机网络基础", chapter: "ch-net-3", "knowledgePoint": "交换机VLAN", type: "judge", typeLabel: "判断",
    stem: "VLAN隔离广播域。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["数据链路层", "VLAN"],
    analysis: "【题干】VLAN隔离广播域？\n【考点】VLAN作用\n【详细解答】\n1. VLAN把一个物理网分成多个逻辑广播域。\n【答案】正确\n【易错】VLAN隔离广播。"
  },
  { id: "nn4613", module: "major", subject: "计算机网络基础", chapter: "ch-net-4", "knowledgePoint": "NAT", type: "judge", typeLabel: "判断",
    stem: "NAT把私有地址转换成公网地址。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["网络层", "NAT"],
    analysis: "【题干】NAT私网转公网？\n【考点】NAT\n【详细解答】\n1. NAT网络地址转换，私网换公网。\n【答案】正确\n【易错】NAT私转公。"
  },
  { id: "nn6612", module: "major", subject: "计算机网络基础", chapter: "ch-net-6", "knowledgePoint": "邮件协议", type: "judge", typeLabel: "判断",
    stem: "SMTP是发送邮件协议。", options: ["正确", "错误"], answer: "正确",
    difficulty: 1, difficultyLabel: "基础", source: "new2026", tags: ["应用层", "邮件"],
    analysis: "【题干】SMTP发邮件？\n【考点】邮件协议\n【详细解答】\n1. SMTP发邮件，POP3/IMAP收邮件。\n【答案】正确\n【易错】SMTP发邮件。"
  }
]);
