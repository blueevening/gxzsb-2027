/* T1 四科章节治理：章节表严格取自 syllabus 考查内容点，题目全量归章
 * 英语→4章；电工→10章；计网→6章；数学→保持6章仅打散 catch-all
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const FILE = path.join(ROOT, 'all-bank.js');

// ---------- 新章节表（严格按 syllabus.js points 命名） ----------
const EN_CH = [
  { id: 'ch-en-1', title: '词汇与语法', tags: ['词汇', '固定搭配', '时态语态', '从句', '非谓语'] },
  { id: 'ch-en-2', title: '阅读理解', tags: ['主旨', '细节', '词义猜测', '推断', '阅读填空'] },
  { id: 'ch-en-3', title: '翻译', tags: ['英译汉', '汉译英'] },
  { id: 'ch-en-4', title: '写作', tags: ['应用文', '通知', '信函'] },
];
const EE_CH = [
  { id: 'ch-ee-1', title: '电路基本概念', tags: ['电流电压', '电功率', '理想电源', '万用表'] },
  { id: 'ch-ee-2', title: '直流电路', tags: ['KVL', 'KCL', '串并联', '戴维南', '叠加'] },
  { id: 'ch-ee-3', title: '单相正弦交流电路', tags: ['三要素', '有效值', '感抗容抗', '功率因数'] },
  { id: 'ch-ee-4', title: '动态电路', tags: ['换路', '三要素法', '时间常数', 'RC/RL'] },
  { id: 'ch-ee-5', title: '二极管与直流稳压电源', tags: ['二极管', '整流', '滤波', '稳压管'] },
  { id: 'ch-ee-6', title: '三极管电路', tags: ['三极管', '放大倍数', '开关'] },
  { id: 'ch-ee-7', title: '运算放大器', tags: ['虚短', '比较器', '比例放大'] },
  { id: 'ch-ee-8', title: '逻辑代数与门电路', tags: ['逻辑代数', '门电路', 'TTL', '数制'] },
  { id: 'ch-ee-9', title: '组合逻辑电路', tags: ['译码器', '组合逻辑'] },
  { id: 'ch-ee-10', title: '时序逻辑电路', tags: ['触发器', '寄存器', '时序'] },
];
const NET_CH = [
  { id: 'ch-net-1', title: '网络概述', tags: ['概念', '体系结构', 'OSI', 'TCP/IP', '协议'] },
  { id: 'ch-net-2', title: '物理层', tags: ['传输介质', '信道', '编码', '多路复用'] },
  { id: 'ch-net-3', title: '数据链路层', tags: ['帧', 'MAC', '交换机', 'VLAN'] },
  { id: 'ch-net-4', title: '网络层', tags: ['IP', '子网', '路由', 'ARP'] },
  { id: 'ch-net-5', title: '传输层', tags: ['TCP', 'UDP', '端口'] },
  { id: 'ch-net-6', title: '应用层', tags: ['HTTP', 'DNS', 'DHCP', 'FTP'] },
];

// ---------- KP → 章 ----------
const EN_KP = {
  词汇与搭配: 'ch-en-1', 词汇辨析: 'ch-en-1', 动词短语: 'ch-en-1', 固定搭配: 'ch-en-1',
  介词: 'ch-en-1', 冠词: 'ch-en-1', 代词: 'ch-en-1', 连词: 'ch-en-1', 数词: 'ch-en-1',
  情态动词: 'ch-en-1', 词性转换: 'ch-en-1', 时态: 'ch-en-1', 时态与语态: 'ch-en-1', 语态: 'ch-en-1',
  主谓一致: 'ch-en-1', 从句: 'ch-en-1', 定语从句: 'ch-en-1', 宾语从句: 'ch-en-1', 状语从句: 'ch-en-1',
  名词性从句: 'ch-en-1', 非谓语: 'ch-en-1', 非谓语动词: 'ch-en-1', 虚拟语气: 'ch-en-1',
  倒装: 'ch-en-1', 强调句: 'ch-en-1', 词汇: 'ch-en-1', 语法: 'ch-en-1',
  阅读主旨: 'ch-en-2', 阅读细节: 'ch-en-2', 阅读词义: 'ch-en-2', 阅读推断: 'ch-en-2',
  阅读填空: 'ch-en-2', 阅读策略: 'ch-en-2', 细节题: 'ch-en-2', 主旨题: 'ch-en-2', 阅读: 'ch-en-2',
  英译汉: 'ch-en-3', 汉译英: 'ch-en-3', 翻译: 'ch-en-3', 翻译与写作: 'ch-en-3',
  写作: 'ch-en-4', 应用文: 'ch-en-4', 通知: 'ch-en-4',
};
const EE_KP = {
  电路基本概念: 'ch-ee-1', 电路组成: 'ch-ee-1', 电路工作状态: 'ch-ee-1',
  电流方向: 'ch-ee-1', 电流单位换算: 'ch-ee-1', 电流参考方向: 'ch-ee-1', 电流与电压: 'ch-ee-1',
  电压: 'ch-ee-1', 电压单位: 'ch-ee-1', 电压方向: 'ch-ee-1', 电位: 'ch-ee-1', 电位计算: 'ch-ee-1',
  参考方向: 'ch-ee-1', 关联参考方向: 'ch-ee-1', 功率: 'ch-ee-1', 功率计算: 'ch-ee-1', 电功率: 'ch-ee-1',
  电能: 'ch-ee-1', 电能单位: 'ch-ee-1', 万用表: 'ch-ee-1', 理想电源: 'ch-ee-1', 理想电流源: 'ch-ee-1',
  电源: 'ch-ee-1', 电源外特性: 'ch-ee-1', 负载: 'ch-ee-1', 短路: 'ch-ee-1', 开路: 'ch-ee-1',
  电阻温度: 'ch-ee-1', 电阻计算: 'ch-ee-1', 安全电压: 'ch-ee-1', 电池串联: 'ch-ee-1', 电池并联: 'ch-ee-1',
  串联电池: 'ch-ee-1',
  欧姆定律: 'ch-ee-2', 基尔霍夫: 'ch-ee-2', 基尔霍夫定律: 'ch-ee-2', 基尔霍夫电流定律: 'ch-ee-2',
  KVL: 'ch-ee-2', 直流电路分析: 'ch-ee-2', 电阻串并联: 'ch-ee-2', 电阻串联: 'ch-ee-2', 电阻并联: 'ch-ee-2',
  串联电阻: 'ch-ee-2', 并联电阻: 'ch-ee-2', 电桥平衡应用: 'ch-ee-2',
  戴维南定理: 'ch-ee-2', 戴维南等效: 'ch-ee-2', 叠加定理: 'ch-ee-2', 电路定理: 'ch-ee-2', 最大功率传输: 'ch-ee-2',
  正弦量: 'ch-ee-3', 正弦量三要素: 'ch-ee-3', 三要素: 'ch-ee-3', 有效值: 'ch-ee-3',
  周期频率: 'ch-ee-3', 频率与周期: 'ch-ee-3', 频率周期: 'ch-ee-3', 角频率: 'ch-ee-3',
  相位关系: 'ch-ee-3', 相位差: 'ch-ee-3', 电容: 'ch-ee-3', 电容特性: 'ch-ee-3', 电容电压相位: 'ch-ee-3',
  电感相位: 'ch-ee-3', 感抗容抗: 'ch-ee-3', 有功功率: 'ch-ee-3', 无功功率: 'ch-ee-3',
  功率因数: 'ch-ee-3', 提高功率因数: 'ch-ee-3', 交流测量: 'ch-ee-3', 交流: 'ch-ee-3', 交流电: 'ch-ee-3',
  换路定律: 'ch-ee-4', 瞬态电路: 'ch-ee-4', 时间常数: 'ch-ee-4', 时间常数意义: 'ch-ee-4', 动态电路: 'ch-ee-4',
  二极管: 'ch-ee-5', 二极管特性: 'ch-ee-5', 二极管单向导电: 'ch-ee-5', 二极管单向导电性: 'ch-ee-5',
  二极管导通: 'ch-ee-5', 二极管导通压降: 'ch-ee-5', 二极管正向压降: 'ch-ee-5', 二极管偏置: 'ch-ee-5',
  二极管反向击穿: 'ch-ee-5', 二极管反向电阻: 'ch-ee-5', 二极管极性: 'ch-ee-5', 二极管钳位: 'ch-ee-5',
  稳压二极管: 'ch-ee-5', 稳压管: 'ch-ee-5', 稳压管稳压值: 'ch-ee-5', 稳压管限流电阻: 'ch-ee-5',
  稳压电路: 'ch-ee-5', 整流电路: 'ch-ee-5', 半波整流: 'ch-ee-5', 桥式整流二极管数量: 'ch-ee-5',
  滤波: 'ch-ee-5', 滤波电容: 'ch-ee-5', 滤波电路: 'ch-ee-5', 光电二极管: 'ch-ee-5', 发光二极管: 'ch-ee-5',
  三极管: 'ch-ee-6', 三极管结构: 'ch-ee-6', 三极管类型: 'ch-ee-6', 三极管类型识别: 'ch-ee-6',
  三极管引脚: 'ch-ee-6', 三极管开关: 'ch-ee-6', 三极管电流关系: 'ch-ee-6', 放大倍数: 'ch-ee-6',
  运放: 'ch-ee-7', 运算放大器: 'ch-ee-7', 运放电源: 'ch-ee-7', 运放虚断: 'ch-ee-7', 运放虚短: 'ch-ee-7',
  理想运放参数: 'ch-ee-7', 电压比较器: 'ch-ee-7', 电压跟随器: 'ch-ee-7', 反相放大器: 'ch-ee-7',
  反相比例: 'ch-ee-7', 反相比例放大: 'ch-ee-7', 同相放大器: 'ch-ee-7', 同相比例: 'ch-ee-7',
  差分运算: 'ch-ee-7', 积分电路: 'ch-ee-7',
  逻辑代数: 'ch-ee-8', 逻辑门: 'ch-ee-8', 门电路: 'ch-ee-8', 与门: 'ch-ee-8', 或门: 'ch-ee-8', 非门: 'ch-ee-8',
  与非门: 'ch-ee-8', 或非门: 'ch-ee-8', 异或门: 'ch-ee-8', TTL门: 'ch-ee-8', TTL与非门悬空: 'ch-ee-8',
  数制转换: 'ch-ee-8', 数字电路: 'ch-ee-8', 基本逻辑门: 'ch-ee-8', 八进制十六进制: 'ch-ee-8',
  八进制转二进制: 'ch-ee-8', 十进制转二进制: 'ch-ee-8',
  组合逻辑分析: 'ch-ee-9', 组合逻辑特点: 'ch-ee-9', 译码器: 'ch-ee-9', 七段显示器: 'ch-ee-9', 组合逻辑: 'ch-ee-9',
  触发器: 'ch-ee-10', 寄存器: 'ch-ee-10', 寄存器分类: 'ch-ee-10', 移位寄存器: 'ch-ee-10',
  时序电路特点: 'ch-ee-10', 时序逻辑特点: 'ch-ee-10', 时序逻辑: 'ch-ee-10',
};
const NET_KP = {
  网络概述: 'ch-net-1', 网络概念: 'ch-net-1', 网络定义: 'ch-net-1', 网络分类: 'ch-net-1',
  计算机网络组成: 'ch-net-1', 网络发展: 'ch-net-1', 网络体系结构: 'ch-net-1', 网络层次: 'ch-net-1',
  网络协议: 'ch-net-1', 协议: 'ch-net-1', 协议三要素: 'ch-net-1', 分层: 'ch-net-1', 封装: 'ch-net-1',
  OSI: 'ch-net-1', OSI模型: 'ch-net-1', OSI参考模型: 'ch-net-1', OSI各层: 'ch-net-1', OSI各层功能: 'ch-net-1',
  'TCP/IP': 'ch-net-1', 'TCP/IP模型': 'ch-net-1', 传输层: 'ch-net-1', 应用层: 'ch-net-1', 网络层: 'ch-net-1',
  数据链路: 'ch-net-1', 物理层: 'ch-net-1', 互联网: 'ch-net-1', 网络标准化: 'ch-net-1',
  网络性能: 'ch-net-1', 网络性能指标: 'ch-net-1', 吞吐量: 'ch-net-1', 时延: 'ch-net-1', 延迟: 'ch-net-1',
  拓扑结构: 'ch-net-1', 网络拓扑: 'ch-net-1', 电路交换: 'ch-net-1', 分组交换: 'ch-net-1',
  电路交换特点: 'ch-net-1', 分组交换特点: 'ch-net-1', 电路交换与分组交换: 'ch-net-1', 综合: 'ch-net-1',
  物理层功能: 'ch-net-2', 传输介质: 'ch-net-2', 双绞线: 'ch-net-2', 双绞线分类: 'ch-net-2',
  信道容量: 'ch-net-2', 信道带宽: 'ch-net-2', 信噪比: 'ch-net-2', 奈奎斯特: 'ch-net-2',
  基带传输: 'ch-net-2', 多路复用: 'ch-net-2', 编码: 'ch-net-2',
  数据链路层: 'ch-net-3', 数据链路层功能: 'ch-net-3', MAC: 'ch-net-3', MAC地址: 'ch-net-3',
  以太网: 'ch-net-3', 以太网MAC: 'ch-net-3', 以太网MAC地址: 'ch-net-3', 以太网MAC地址长度: 'ch-net-3',
  以太网帧最大数据: 'ch-net-3', 交换机: 'ch-net-3', 交换机功能: 'ch-net-3', 交换机工作原理: 'ch-net-3',
  交换机MAC表: 'ch-net-3', 交换机VLAN: 'ch-net-3', 交换机vs集线器: 'ch-net-3', VLAN: 'ch-net-3',
  VLAN划分方法: 'ch-net-3', 'CSMA/CD': 'ch-net-3', 冲突域: 'ch-net-3', PPP: 'ch-net-3', CRC校验: 'ch-net-3',
  差错控制: 'ch-net-3', 帧: 'ch-net-3',
  'IP地址': 'ch-net-4', 'IP地址分类': 'ch-net-4', 'IPv4地址组成': 'ch-net-4', 'IPv6': 'ch-net-4',
  'IP与子网': 'ch-net-4', 子网划分: 'ch-net-4', 子网掩码: 'ch-net-4', 子网掩码作用: 'ch-net-4',
  路由: 'ch-net-4', 路由器: 'ch-net-4', 路由器功能: 'ch-net-4', 路由表: 'ch-net-4',
  ARP: 'ch-net-4', ARP缓存: 'ch-net-4', ICMP: 'ch-net-4', NAT: 'ch-net-4', 私有地址: 'ch-net-4',
  网络层功能: 'ch-net-4', 'IP地址主机位全1': 'ch-net-4', CIDR: 'ch-net-4',
  TCP: 'ch-net-5', UDP: 'ch-net-5', 'TCP vs UDP': 'ch-net-5', 'TCP/UDP': 'ch-net-5',
  TCP三次握手: 'ch-net-5', TCP可靠: 'ch-net-5', TCP特点: 'ch-net-5', TCP断开连接: 'ch-net-5', 'TCP MSS': 'ch-net-5',
  UDP特点: 'ch-net-5', UDP首部: 'ch-net-5', UDP校验和: 'ch-net-5', 端口: 'ch-net-5', 端口作用: 'ch-net-5',
  端口号: 'ch-net-5', 传输层协议: 'ch-net-5',
  应用层服务: 'ch-net-6', 应用层功能: 'ch-net-6', HTTP: 'ch-net-6', HTTPS: 'ch-net-6', 'HTTP与HTTPS': 'ch-net-6',
  HTTP无状态: 'ch-net-6', HTTP状态码: 'ch-net-6', DNS: 'ch-net-6', DHCP: 'ch-net-6', FTP: 'ch-net-6',
  邮件协议: 'ch-net-6', WWW: 'ch-net-6', WWW网页: 'ch-net-6', URL: 'ch-net-6', 常用端口: 'ch-net-6',
};
const MATH_KP = {
  极限与连续: 'ch-math-1', 极限: 'ch-math-1', 极限计算: 'ch-math-1', 重要极限: 'ch-math-1',
  两个重要极限: 'ch-math-1', 无穷小: 'ch-math-1', 函数: 'ch-math-1', 函数概念: 'ch-math-1',
  函数定义域: 'ch-math-1', 函数性质: 'ch-math-1', 函数奇偶性: 'ch-math-1', 反函数: 'ch-math-1',
  复合函数: 'ch-math-1', 连续: 'ch-math-1', 间断点: 'ch-math-1',
  导数: 'ch-math-2', 导数与微分: 'ch-math-2', 导数公式: 'ch-math-2', 求导公式: 'ch-math-2',
  求导法则: 'ch-math-2', 微分: 'ch-math-2', 微分形式: 'ch-math-2', 隐函数求导: 'ch-math-2',
  参数方程求导: 'ch-math-2', 复合求导: 'ch-math-2', 对数求导: 'ch-math-2', 高阶导数: 'ch-math-2',
  切线方程: 'ch-math-2', 法线方程: 'ch-math-2', 切线法线: 'ch-math-2', 可导连续: 'ch-math-2',
  洛必达: 'ch-math-3', 极值: 'ch-math-3', 最值: 'ch-math-3', 最值应用: 'ch-math-3',
  单调性: 'ch-math-3', 凹凸: 'ch-math-3', 拐点: 'ch-math-3', 中值定理: 'ch-math-3',
  罗尔定理: 'ch-math-3', 拉格朗日: 'ch-math-3', 函数作图: 'ch-math-3', 导数应用: 'ch-math-3', 应用题: 'ch-math-3',
  不定积分: 'ch-math-4', 不定积分公式: 'ch-math-4', 原函数: 'ch-math-4', 换元积分: 'ch-math-4',
  换元: 'ch-math-4', 分部积分: 'ch-math-4', 三角积分: 'ch-math-4', 凑微分: 'ch-math-4', 基本积分: 'ch-math-4',
  定积分: 'ch-math-5', 定积分性质: 'ch-math-5', 定积分计算: 'ch-math-5', 定积分换元: 'ch-math-5',
  定积分应用: 'ch-math-5', 积分应用: 'ch-math-5', 广义积分: 'ch-math-5', 变上限积分: 'ch-math-5',
  牛顿莱布尼茨: 'ch-math-5', 面积: 'ch-math-5', 旋转体: 'ch-math-5',
  微分方程: 'ch-math-6', 微分方程阶: 'ch-math-6', 微分方程识别: 'ch-math-6', 可分离变量: 'ch-math-6',
  一阶线性: 'ch-math-6', 二阶常系数: 'ch-math-6', 二阶齐次: 'ch-math-6', 二阶齐次重根: 'ch-math-6',
  二阶非齐次: 'ch-math-6', 通解: 'ch-math-6', 特解: 'ch-math-6',
};

function byStem(q) {
  const t = String(q.stem || '') + ' ' + String(q.knowledgePoint || '');
  const sub = q.subject;
  if (sub === '英语') {
    if (/翻译|译成|译为|英译|汉译/.test(t)) return 'ch-en-3';
    if (/作文|写作|通知|application|write.*email|不少于.*词/.test(t)) return 'ch-en-4';
    if (/passage|According to|阅读|主旨|作者态度|词义猜测/.test(t)) return 'ch-en-2';
    return 'ch-en-1';
  }
  if (sub === '电工电子技术基础') {
    if (/触发器|寄存器|时序/.test(t)) return 'ch-ee-10';
    if (/组合逻辑|译码|七段/.test(t)) return 'ch-ee-9';
    if (/逻辑代数|与门|或门|非门|与非|或非|异或|TTL|门电路|二进制|八进制|十六进制|数制/.test(t)) return 'ch-ee-8';
    if (/运放|运算放大|虚短|虚断|比较器|跟随器|反相比例|同相比例/.test(t)) return 'ch-ee-7';
    if (/三极管|放大倍数/.test(t)) return 'ch-ee-6';
    if (/二极管|稳压管|整流|滤波|LED|发光/.test(t)) return 'ch-ee-5';
    if (/换路|时间常数|暂态|瞬态|充放电/.test(t)) return 'ch-ee-4';
    if (/正弦|交流|有效值|相位|感抗|容抗|功率因数|有功|无功/.test(t)) return 'ch-ee-3';
    if (/戴维南|叠加定理|最大功率|KCL|KVL|基尔霍夫|欧姆定律|串并联/.test(t)) return 'ch-ee-2';
    return 'ch-ee-1';
  }
  if (sub === '计算机网络基础') {
    if (/HTTP|DNS|DHCP|FTP|邮件|WWW|URL|网页|浏览器/.test(t)) return 'ch-net-6';
    if (/TCP|UDP|端口|握手|传输层/.test(t)) return 'ch-net-5';
    if (/IP|子网|路由|ARP|ICMP|NAT|掩码|IPv6/.test(t)) return 'ch-net-4';
    if (/交换机|VLAN|MAC|以太网|帧|CSMA|PPP|链路/.test(t)) return 'ch-net-3';
    if (/物理层|双绞线|光纤|信道|带宽|曼彻斯特|多路复用|传输介质/.test(t)) return 'ch-net-2';
    if (/OSI|TCP\/IP|体系结构|协议|分层|拓扑|交换方式|网络分类/.test(t)) return 'ch-net-1';
    return 'ch-net-1';
  }
  if (sub === '高等数学') {
    if (/微分方程|可分离|一阶线性|通解|特解/.test(t)) return 'ch-math-6';
    if (/定积分|广义积分|变上限|旋转体|面积/.test(t)) return 'ch-math-5';
    if (/不定积分|原函数|换元|分部/.test(t)) return 'ch-math-4';
    if (/洛必达|极值|最值|单调|凹凸|拐点|中值/.test(t)) return 'ch-math-3';
    if (/求导|导数|微分|切线|法线|隐函数/.test(t)) return 'ch-math-2';
    if (/极限|连续|无穷小|定义域|奇偶|间断/.test(t)) return 'ch-math-1';
    return 'ch-math-1';
  }
  return q.chapter;
}

function mapCh(q) {
  const tables = {
    英语: EN_KP, 电工电子技术基础: EE_KP, 计算机网络基础: NET_KP, 高等数学: MATH_KP,
  };
  const kp = String(q.knowledgePoint || '');
  const t = tables[q.subject];
  if (t && t[kp]) return t[kp];
  return byStem(q);
}

// ---------- 文本手术 ----------
const raw = fs.readFileSync(FILE, 'utf8');
const lines = raw.split(/\r\n|\n|\r/);
const chIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.chapters ='));
const qIdx = lines.findIndex((l) => l.startsWith('window.STUDY_DATA.questions ='));
const chapters = JSON.parse(lines[chIdx].slice('window.STUDY_DATA.chapters = '.length).replace(/;\s*$/, ''));
const questions = JSON.parse(lines[qIdx].slice('window.STUDY_DATA.questions = '.length).replace(/;\s*$/, ''));

// 更新章节表
function setChildren(subject, children) {
  const e = chapters.find((c) => c.subject === subject);
  if (!e) throw new Error('no chapter entry ' + subject);
  e.children = children;
}
setChildren('英语', EN_CH);
setChildren('电工电子技术基础', EE_CH);
setChildren('计算机网络基础', NET_CH);
// 数学表不动

const SUBJS = ['高等数学', '英语', '电工电子技术基础', '计算机网络基础'];
let changed = 0;
const before = {}, after = {};
for (const q of questions) {
  if (!SUBJS.includes(q.subject)) continue;
  before[q.subject] = before[q.subject] || {};
  after[q.subject] = after[q.subject] || {};
  before[q.subject][q.chapter] = (before[q.subject][q.chapter] || 0) + 1;
  const nc = mapCh(q);
  if (nc !== q.chapter) { q.chapter = nc; changed++; }
  after[q.subject][q.chapter] = (after[q.subject][q.chapter] || 0) + 1;
}
console.log('改章总数:', changed);
for (const s of SUBJS) {
  console.log('\n==', s);
  console.log('  before:', JSON.stringify(before[s]));
  console.log('  after :', JSON.stringify(after[s]));
  const entry = chapters.find((c) => c.subject === s);
  for (const ch of entry.children) {
    if (!after[s][ch.id]) console.log('  警告空章:', ch.id, ch.title);
  }
}

lines[chIdx] = 'window.STUDY_DATA.chapters = ' + JSON.stringify(chapters) + ';';
lines[qIdx] = 'window.STUDY_DATA.questions = ' + JSON.stringify(questions) + ';';
fs.writeFileSync(FILE, lines.join('\r\n'), 'utf8');
console.log('\nwrote all-bank.js');
