const ranks = [
  {
    name: "博士候选人",
    years: 0,
    need: { pubs: 0, top: 0, grants: 0, reputation: 0, teaching: 0 },
    note: "完成课程、开题、工作论文与求职包。"
  },
  {
    name: "博士后",
    years: 3,
    need: { pubs: 1, top: 0, grants: 0, reputation: 18, teaching: 0 },
    note: "需要稳定产出、拓展合作网络，准备教职市场。"
  },
  {
    name: "助理教授（青椒）",
    years: 5,
    need: { pubs: 2, top: 0, grants: 1, reputation: 30, teaching: 18 },
    note: "进入 tenure clock，论文、基金、教学评价同时计分。"
  },
  {
    name: "副教授",
    years: 9,
    need: { pubs: 5, top: 1, grants: 2, reputation: 48, teaching: 32 },
    note: "需要形成清晰领域标签，并能独立带学生。"
  },
  {
    name: "教授",
    years: 13,
    need: { pubs: 9, top: 2, grants: 3, reputation: 64, teaching: 44 },
    note: "评审开始看学术议程、外部引用和公共影响。"
  },
  {
    name: "讲席教授",
    years: 18,
    need: { pubs: 14, top: 4, grants: 5, reputation: 78, teaching: 55 },
    note: "需要跨领域影响力、稳定学生 placement 与大型项目。"
  },
  {
    name: "院士/学术泰斗",
    years: 24,
    need: { pubs: 20, top: 7, grants: 7, reputation: 90, teaching: 70 },
    note: "学派、教材、政策咨询和顶刊代表作共同塑造声望。"
  }
];

const fields = [
  {
    code: "D",
    name: "微观经济学",
    desc: "机制设计、行为实验、市场设计与家庭决策。",
    topics: ["数字平台反垄断", "行为偏误与消费金融", "匹配市场与教育分配", "信息设计与算法推荐"]
  },
  {
    code: "E",
    name: "宏观与货币",
    desc: "通胀、增长、金融周期、货币与财政政策。",
    topics: ["高利率环境下的企业投资", "AI 资本深化与生产率", "财政规则与地方债", "通胀预期与家庭资产配置"]
  },
  {
    code: "G",
    name: "金融经济学",
    desc: "资产定价、公司金融、银行、金融科技与风险。",
    topics: ["气候风险定价", "银行挤兑与数字存款", "绿色金融披露", "生成式 AI 与分析师预测"]
  },
  {
    code: "J",
    name: "劳动与人口",
    desc: "工资、就业、迁移、教育回报与人口结构。",
    topics: ["AI 对白领任务的替代", "老龄化与劳动供给", "灵活就业平台", "技能错配与职业培训"]
  },
  {
    code: "O",
    name: "发展、创新与增长",
    desc: "技术进步、产业升级、发展政策与长期增长。",
    topics: ["产业政策与全要素生产率", "全球价值链重构", "创新补贴与专利质量", "数字基础设施与县域增长"]
  },
  {
    code: "Q",
    name: "环境与资源",
    desc: "气候政策、能源市场、污染治理与生态经济。",
    topics: ["碳市场与企业减排", "极端天气的经济损失", "能源转型与居民福利", "生物多样性与土地利用"]
  },
  {
    code: "I",
    name: "健康、教育与福利",
    desc: "医疗、教育、人力资本、贫困与不平等。",
    topics: ["医保支付改革", "教育科技与学习差距", "儿童早期投资", "共同富裕与收入流动性"]
  },
  {
    code: "L",
    name: "产业组织",
    desc: "竞争、监管、平台、企业战略与组织边界。",
    topics: ["平台佣金与商家进入", "算法定价与默契合谋", "数据可携带权", "新能源车产业竞争"]
  }
];

const methods = [
  { name: "结构模型", rigor: 7, speed: -2, risk: 2, fit: ["D", "L", "G"], text: "模型识别强，但审稿人会追问每个参数的经济含义。" },
  { name: "因果推断", rigor: 5, speed: 2, risk: 1, fit: ["J", "I", "Q", "O"], text: "DID、RDD、IV 和事件研究容易进入 seminar 讨论核心。" },
  { name: "随机实验/RCT", rigor: 6, speed: -1, risk: 1, fit: ["I", "O", "D"], text: "外部效度和伦理审批会拖慢节奏，但可信度高。" },
  { name: "计算文本/LLM", rigor: 4, speed: 3, risk: 3, fit: ["E", "G", "J", "L"], text: "可处理公告、招聘、新闻与论文文本，但要防训练泄漏和测量偏误。" },
  { name: "理论模型", rigor: 8, speed: -3, risk: 4, fit: ["D", "E", "G"], text: "如果命中问题会很优雅，如果没命中就会显得像独自修仙。" },
  { name: "混合方法", rigor: 5, speed: 0, risk: 2, fit: ["O", "Q", "I", "L"], text: "把机制、数据和访谈拼成完整叙事，适合政策导向项目。" }
];

const focuses = [
  { name: "冲顶刊", paper: 14, rep: 5, teaching: -3, stress: 12, grant: -1 },
  { name: "稳产出", paper: 10, rep: 2, teaching: 0, stress: 7, grant: 0 },
  { name: "拿基金", paper: 5, rep: 2, teaching: -1, stress: 8, grant: 10 },
  { name: "教学与学生", paper: 2, rep: 1, teaching: 11, stress: 4, grant: 0 },
  { name: "政策咨询", paper: 4, rep: 7, teaching: 1, stress: 8, grant: 4 },
  { name: "学术社交", paper: 5, rep: 6, teaching: 0, stress: 6, grant: 2 }
];

const journals = [
  { name: "Top 5", threshold: 98, rep: 20, top: true, delay: 2, deskReject: 0.42, label: "AER/QJE/JPE/ECMA/RESTUD", names: ["American Economic Review", "Quarterly Journal of Economics", "Journal of Political Economy", "Econometrica", "Review of Economic Studies"] },
  { name: "顶级领域刊", threshold: 86, rep: 12, top: true, delay: 1, deskReject: 0.28, label: "JME/JFE/JPubE/JOLE/JDE 等", names: ["Journal of Monetary Economics", "Journal of Finance", "Journal of Public Economics", "Journal of Labor Economics", "Journal of Development Economics", "RAND Journal of Economics"] },
  { name: "综合一线", threshold: 74, rep: 8, top: false, delay: 1, deskReject: 0.2, label: "REStat/EJ/IER 等", names: ["Review of Economics and Statistics", "Economic Journal", "International Economic Review", "Journal of Economic Behavior & Organization"] },
  { name: "稳健 SSCI", threshold: 58, rep: 5, top: false, delay: 0, deskReject: 0.13, label: "高质量专业期刊", names: ["China Economic Review", "World Development", "Energy Economics", "Health Economics", "Regional Science and Urban Economics"] },
  { name: "中文核心/政策内参", threshold: 46, rep: 3, top: false, delay: 0, deskReject: 0.08, label: "面向本土问题与政策反馈", names: ["经济研究", "管理世界", "世界经济", "经济学季刊", "政策内参"] }
];

const reviewStages = ["编辑部审稿", "初审", "复审", "终审", "校对"];

const schools = [
  { name: "地方财经大学", tier: "普通平台", resources: 4, salary: 18, teachingLoad: 10, pressure: 4, happiness: 8, desc: "教学任务重，但本土数据和政策部门联系近。" },
  { name: "省部共建高校", tier: "区域强校", resources: 8, salary: 26, teachingLoad: 7, pressure: 7, happiness: 6, desc: "学院想冲排名，基金和横向项目机会更多。" },
  { name: "985 综合大学", tier: "头部平台", resources: 14, salary: 34, teachingLoad: 5, pressure: 12, happiness: 2, desc: "seminar 密度高，学生强，考核也更硬。" },
  { name: "一线城市商学院", tier: "高薪平台", resources: 11, salary: 48, teachingLoad: 6, pressure: 10, happiness: 10, desc: "薪酬和业界资源好，但每个人都在冲顶刊。" },
  { name: "海外研究型大学", tier: "国际平台", resources: 16, salary: 42, teachingLoad: 4, pressure: 13, happiness: -2, desc: "国际可见度高，文化适应和 tenure 压力也明显。" }
];

const traits = [
  { name: "识别洁癖", desc: "严谨 +8，速度 -3", effect: { rigor: 8, speed: -3 } },
  { name: "数据猎人", desc: "数据行动额外有效", effect: { data: 4 } },
  { name: "Seminar 体质", desc: "声望获取 +4，压力 +2", effect: { seminar: 4, stress: 2 } },
  { name: "模型手感", desc: "模型行动额外有效", effect: { model: 4 } },
  { name: "教学亲和", desc: "教学评价增长更快", effect: { teaching: 5 } },
  { name: "政策敏感", desc: "基金与政策咨询更顺", effect: { grant: 4, policy: 4 } },
  { name: "跨界连接", desc: "合作网络增长更快", effect: { network: 5 } },
  { name: "抗压稳定", desc: "季度压力更低", effect: { calm: 6 } }
];

const actions = {
  read: { label: "精读文献", paper: 5, rigor: 4, rep: 0, stress: 4, log: "补完一轮文献脉络，终于能把 introduction 写得像一个问题。" },
  data: { label: "整理数据", paper: 7, rigor: 2, rep: 0, stress: 6, log: "清洗了异常值、合并口径和地区代码，附录又厚了一点。" },
  model: { label: "打磨模型", paper: 6, rigor: 5, rep: 0, stress: 6, log: "模型从三页变成一页半，比较静态终于能解释主结果。" },
  seminar: { label: "参加 Seminar", paper: 3, rigor: 1, rep: 6, stress: 5, log: "被连续追问识别假设，但也收到了一个能救命的稳健性建议。" },
  network: { label: "经营合作网络", paper: 4, rigor: 0, rep: 5, stress: 3, grant: 2, log: "和外校同事约了共同项目，顺便听到一个新数据源。" },
  student: { label: "带学生写作", paper: 7, rigor: 1, rep: 2, stress: 5, teaching: 4, log: "学生把初稿交上来，摘要很长，但里面藏着一个不错的机制。" },
  faculty: { label: "组织教师合作", paper: 8, rigor: 2, rep: 5, stress: 7, grant: 3, log: "你拉了一个跨校教师小组，会议纪要比论文还长。" },
  rest: { label: "恢复心力", paper: 1, rigor: 0, rep: 0, stress: -12, teaching: 2, log: "把邮箱关掉半天，读了一篇不是为了引用的文章。" }
};

const hotspots = [
  "AI/LLM 与劳动任务、生产率、文本计量",
  "气候风险、碳市场、能源转型与绿色金融",
  "不平等、教育、健康、代际流动与福利政策",
  "平台经济、算法定价、数据治理与反垄断",
  "产业政策、全球价值链重构与技术创新"
];

const names = ["林知微", "陈砚秋", "周望舒", "许明衡", "顾清源", "赵闻达", "沈以宁", "陆景行"];
const studentNames = ["罗一鸣", "唐予安", "宋清嘉", "韩若水", "谢知远", "白明澈", "蒋南星", "秦书禾"];
const facultyNames = ["王澄", "李怀瑾", "张其远", "刘望", "何砚", "孙临川", "邓启明", "孟知行"];
const titlePrefixes = ["重估", "理解", "识别", "测度", "解释", "追踪", "比较", "检验"];
const titleAngles = ["机制", "福利效应", "分配后果", "长期影响", "政策边界", "行为响应", "市场均衡", "生产率效应"];
const titleData = ["城市面板", "企业登记数据", "招聘文本", "家庭调查", "行政微观数据", "平台交易记录", "遥感与气候数据", "政策试点"];
const logOpeners = ["走廊里传来消息", "午餐会上有人提到", "审稿系统凌晨刷新", "学生群里炸开了锅", "学院例会刚结束", "你在 seminar 门口被拦住"];
const logBodies = ["一个新数据源可能开放", "同领域团队抢先发了 working paper", "政策部门希望三周内看到初稿", "合作者建议把模型再压缩一半", "助研发现一组样本口径不一致", "会议邀请要求你明天交摘要"];
const logEndings = ["你决定先把识别假设写清楚。", "这让本季度的优先级重新排序。", "压力上升，但论文也更像论文了。", "你把这件事记进了下一轮计划。"];
const studentArcs = ["擅长爬数据但写作拖延", "理论直觉很好但代码总是跑不通", "家里催他考公，仍想再试一篇论文", "对政策问题敏感，喜欢跑田野", "英文写作进步快，容易被审稿意见击穿"];
const facultyArcs = ["有顶刊经验但档期稀缺", "掌握独家数据但极其谨慎", "模型很强但不爱回邮件", "政策资源多，偏好快速出成果", "方法扎实，愿意带年轻人过审稿"];
const relationCandidates = [
  { name: "梁修齐", role: "外校青年教师", strength: 50, specialty: "行政数据", value: 7 },
  { name: "孟含章", role: "领域大佬", strength: 36, specialty: "顶刊叙事", value: 11 },
  { name: "姜听澜", role: "博士同门", strength: 62, specialty: "计量识别", value: 6 },
  { name: "贺允中", role: "政策部门朋友", strength: 45, specialty: "政策窗口", value: 5 },
  { name: "尹若谷", role: "海外合作者", strength: 42, specialty: "英文写作", value: 8 },
  { name: "傅明珂", role: "数据平台联系人", strength: 40, specialty: "企业样本", value: 6 }
];
const authorRoles = ["通讯作者", "共同一作", "二作", "三作", "四作"];
const SAVE_KEY = "wenwan-scholar-sim-save-v1";

let state;

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function sample(list, count) {
  const copy = [...list];
  const output = [];
  while (copy.length && output.length < count) {
    output.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
  }
  return output;
}

function createProject(field, topicIndex, methodIndex) {
  const topic = field.topics[topicIndex] || pick(field.topics);
  const method = methods[methodIndex] || pick(methods);
  return {
    id: Date.now() + Math.floor(Math.random() * 10000),
    topic,
    methodName: method.name,
    title: generateTitle(topic, method.name),
    progress: 18 + Math.floor(Math.random() * 12),
    rigor: 20 + Math.floor(Math.random() * 18),
    team: [],
    status: "working",
    submissionId: null
  };
}

function generateTitle(topic, methodName) {
  const prefix = pick(titlePrefixes);
  const angle = pick(titleAngles);
  const data = pick(titleData);
  const templates = [
    `《${prefix}${topic}的${angle}：来自${data}的证据》`,
    `《${topic}如何影响${angle}？基于${methodName}的研究》`,
    `《${data}、${topic}与${angle}：一项经济学检验》`,
    `《从${topic}到${angle}：${methodName}视角下的新证据》`
  ];
  return pick(templates);
}

function currentProject() {
  return state.projects.find(project => project.id === state.selectedProjectId) || state.projects[0];
}

function canLeadStudents() {
  return state.rankIndex >= 2;
}

function canLeadFaculty() {
  return state.rankIndex >= 3;
}

function initialState() {
  const field = pick(fields);
  const chosenTraits = sample(traits, 3);
  const firstProject = createProject(field, 0, 0);
  const school = schools[0];
  return {
    name: pick(names),
    year: 1,
    quarter: 1,
    actionPoints: 3,
    maxActionPoints: 3,
    rankIndex: 0,
    field,
    school,
    pendingChoice: null,
    traits: chosenTraits,
    stats: {
      rigor: 25 + traitBonus(chosenTraits, "rigor"),
      reputation: 8,
      teaching: 6 + traitBonus(chosenTraits, "teaching"),
      grants: 0,
      stress: 22,
      money: 20,
      happiness: 58 + school.happiness
    },
    pubs: 0,
    topPubs: 0,
    selectedProjectId: firstProject.id,
    projects: [firstProject],
    submissions: [],
    outputs: [],
    students: [],
    faculty: [],
    relations: sample(relationCandidates, 4).map((person, index) => ({
      ...person,
      id: `rel-${index}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      cooldown: 0
    })),
    collaborationOffers: [],
    events: [
      "【世界架构生成中】你进入学术江湖：以思想为剑，以论文为盾，从博士候选人开始攀登。"
    ]
  };
}

function traitBonus(traitSet, key) {
  return traitSet.reduce((sum, trait) => sum + (trait.effect[key] || 0), 0);
}

function selectedTopic() {
  return state.field.topics[Number(document.querySelector("#topicSelect").value) || 0];
}

function selectedMethod() {
  return methods[Number(document.querySelector("#methodSelect").value) || 0];
}

function selectedFocus() {
  return focuses[Number(document.querySelector("#focusSelect").value) || 0];
}

function populateSelects() {
  const projectSelect = document.querySelector("#projectSelect");
  const topicSelect = document.querySelector("#topicSelect");
  const methodSelect = document.querySelector("#methodSelect");
  const focusSelect = document.querySelector("#focusSelect");

  syncProjectSelect();
  topicSelect.innerHTML = state.field.topics
    .map((topic, index) => `<option value="${index}">${topic}</option>`)
    .join("");
  methodSelect.innerHTML = methods
    .map((method, index) => `<option value="${index}">${method.name}</option>`)
    .join("");
  focusSelect.innerHTML = focuses
    .map((focus, index) => `<option value="${index}">${focus.name}</option>`)
    .join("");
}

function syncProjectSelect() {
  const projectSelect = document.querySelector("#projectSelect");
  projectSelect.innerHTML = state.projects
    .map(project => `<option value="${project.id}">${project.title.replace(/[《》]/g, "").slice(0, 26)}</option>`)
    .join("");
  projectSelect.value = String(state.selectedProjectId);
}

function addNewProject(announce = true) {
  const topicIndex = Number(document.querySelector("#topicSelect")?.value) || Math.floor(Math.random() * state.field.topics.length);
  const methodIndex = Number(document.querySelector("#methodSelect")?.value) || Math.floor(Math.random() * methods.length);
  const project = createProject(state.field, topicIndex, methodIndex);
  if (canLeadStudents() && state.students.length && Math.random() < 0.45) project.team.push(pick(state.students).name);
  if (canLeadFaculty() && state.faculty.length && Math.random() < 0.35) project.team.push(`${pick(state.faculty).name}老师`);
  state.projects.push(project);
  state.selectedProjectId = project.id;
  if (announce) addEvent(`新开项目：${project.title}。多个项目可以同时推进，但行动点仍然稀缺。`);
  syncProjectSelect();
}

function updateTitle() {
  const project = currentProject();
  document.querySelector("#paperTitle").textContent = project ? project.title : "等待选题形成工作论文";
}

function addEvent(text) {
  state.events.push(text);
  state.events = state.events.slice(-9);
}

function renderStats() {
  document.querySelector("#counters").innerHTML = `
    <div class="counter"><span>论文</span><strong>${state.pubs}</strong></div>
    <div class="counter"><span>顶刊</span><strong>${state.topPubs}</strong></div>
    <div class="counter"><span>基金</span><strong>${state.stats.grants}</strong></div>
    <div class="counter"><span>资金</span><strong>${Math.round(state.stats.money)}</strong></div>
    <div class="counter"><span>快乐</span><strong>${Math.round(state.stats.happiness)}</strong></div>
  `;
  const stats = [
    ["严谨度", "rigor", ""],
    ["声望", "reputation", ""],
    ["教学", "teaching", ""],
    ["压力", "stress", ""],
    ["快乐", "happiness", ""],
    ["资金", "money", ""]
  ];
  document.querySelector("#stats").innerHTML = stats
    .map(([label, key, suffix]) => {
      const value = clamp(state.stats[key]);
      const color =
        key === "stress"
          ? "linear-gradient(90deg, #b9862f, #a44737)"
          : "linear-gradient(90deg, #2f6f5e, #0f8a8a)";
      return `
        <div class="stat-row">
          <span>${label}</span>
          <div class="meter"><i style="width:${value}%;background:${color}"></i></div>
          <strong>${key === "paper" ? Math.round(value) + suffix : Math.round(value)}</strong>
        </div>
      `;
    })
    .join("");

  document.querySelector("#teamBox").innerHTML = `
    <div class="team-row"><span>学生作者</span><strong>${state.students.length}</strong></div>
    <div class="team-row"><span>教师合作者</span><strong>${state.faculty.length}</strong></div>
    <div class="team-row"><span>进行中项目</span><strong>${state.projects.length}</strong></div>
    <div class="team-row"><span>带学生</span><strong>${canLeadStudents() ? "已解锁" : "助理教授解锁"}</strong></div>
    <div class="team-row"><span>教师团队</span><strong>${canLeadFaculty() ? "已解锁" : "副教授解锁"}</strong></div>
  `;

  document.querySelector("#schoolBox").innerHTML = `
    <div class="team-row"><span>所在学校</span><strong>${state.school.name}</strong></div>
    <div class="team-row"><span>平台层级</span><strong>${state.school.tier}</strong></div>
    <div class="team-row"><span>平台说明</span><strong>${state.school.desc}</strong></div>
  `;
}

function renderProjects() {
  const project = currentProject();
  if (!project) return;
  document.querySelector("#paperProgress").style.width = `${clamp(project.progress)}%`;
  const canSubmit = project.progress >= 100 && project.status !== "submitted" && !state.pendingChoice;
  document.querySelector("#submitProjectBtn").disabled = !canSubmit;
  document.querySelector("#submitProjectBtn").title = canSubmit ? "打开期刊选择面板，查看每本期刊的估算成功率" : "项目完成度满 100% 且未在审稿中才能投稿";
  document.querySelector("#projectList").innerHTML = state.projects
    .map(item => `
      <div class="project-item">
        <div>
          <strong>${item.title}</strong>
          <div class="project-meta">${item.topic} · ${item.methodName} · ${projectStatusLabel(item)} · 合作者 ${item.team.length}</div>
        </div>
        <div class="paper-meter">
          <div class="meter"><i style="width:${clamp(item.progress)}%"></i></div>
          <span>${Math.round(item.progress)}%</span>
        </div>
      </div>
    `)
    .join("");
}

function projectStatusLabel(project) {
  if (project.status === "submitted") return "审稿中";
  if (project.progress >= 100) return "可投稿";
  return "写作中";
}

function renderSubmissions() {
  const box = document.querySelector("#submissionBox");
  if (!state.submissions.length) {
    box.innerHTML = `<div class="submission-item"><strong>暂无在投稿件</strong><div class="submission-meta">项目完成度 100% 后，可手动选择是否投稿。</div></div>`;
    return;
  }
  box.innerHTML = state.submissions
    .map(submission => `
      <div class="submission-item">
        <strong>${submission.title}</strong>
        <div class="submission-meta">${submission.journalName} · ${submission.stage} · 已 ${submission.elapsed} 季度</div>
        <div class="stage-track">
          ${reviewStages.map(stage => `<i class="stage-dot ${reviewStages.indexOf(stage) <= reviewStages.indexOf(submission.stage) ? "active" : ""}"></i>`).join("")}
        </div>
      </div>
    `)
    .join("");
}

function renderJournalPanel() {
  const panel = document.querySelector("#journalPanel");
  const project = currentProject();
  if (!state.showJournalPanel || !project || project.progress < 100 || project.status === "submitted") {
    panel.className = "journal-panel hidden";
    panel.innerHTML = "";
    return;
  }
  panel.className = "journal-panel";
  panel.innerHTML = `
    <div class="section-head">
      <div>
        <p class="muted">投稿选择</p>
        <strong>选择本轮投稿期刊</strong>
      </div>
      <button class="mini-btn" type="button" data-close-journals="true">关闭</button>
    </div>
    <div class="journal-grid">
      ${journals.map((journal, index) => {
        const chance = estimateJournalChance(project, journal);
        const actualName = pick(journal.names);
        return `
          <button class="journal-card" type="button" data-journal-index="${index}">
            <strong>${journal.name}</strong>
            <span>${actualName}</span>
            <small>${journal.label}</small>
            <i>估算成功率 ${chance}%</i>
            <em>受文章完成度、严谨度、个人声望、合作者关系与压力影响</em>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderRelationNetwork() {
  const box = document.querySelector("#relationNetwork");
  const offerHtml = state.collaborationOffers.length
    ? state.collaborationOffers.map(offer => `
      <div class="relation-offer">
        <strong>${offer.from} 邀请你担任${offer.role}</strong>
        <span>${offer.topic} · 预计贡献 +${offer.value}</span>
        <div class="relation-actions">
          <button class="mini-btn" type="button" data-offer-accept="${offer.id}">接受</button>
          <button class="mini-btn" type="button" data-offer-decline="${offer.id}">婉拒</button>
        </div>
      </div>
    `).join("")
    : `<div class="network-empty">暂无外部合作邀约。经营合作网络更容易触发。</div>`;
  const relationHtml = state.relations.map(person => `
    <div class="relation-card">
      <div>
        <strong>${person.name}</strong>
        <span>${person.role} · ${person.specialty}</span>
        <small>关系强度 ${person.strength}</small>
      </div>
      <button class="mini-btn" type="button" data-invite-relation="${person.id}" ${state.pendingChoice || person.cooldown > 0 ? "disabled" : ""}>邀请</button>
    </div>
  `).join("");
  box.innerHTML = `
    <div class="relation-section">${offerHtml}</div>
    <div class="relation-section">${relationHtml}</div>
  `;
}

function renderOutputs() {
  const outputList = document.querySelector("#outputList");
  if (!state.outputs.length) {
    outputList.innerHTML = `<p class="empty-state">还没有正式发表。把项目推进到 100%，在 Q4 学年结算时投稿。</p>`;
    renderCollabStories();
    return;
  }
  outputList.innerHTML = state.outputs
    .slice()
    .reverse()
    .map(output => `
      <div class="output-item">
        <strong>${output.title}</strong>
        <div class="output-meta">${output.year} 学年 · ${output.journal} · ${output.top ? "顶级成果" : "常规成果"} · 作者：${output.authors.join("、")}</div>
      </div>
    `)
    .join("");
  renderCollabStories();
}

function renderCollabStories() {
  const stories = [
    ...state.students.slice(-3).map(item => `学生 ${item.name}：${item.arc}，合作黏性 ${item.loyalty}。`),
    ...state.faculty.slice(-3).map(item => `${item.name}老师：${item.arc}，互信 ${item.trust}。`)
  ];
  document.querySelector("#collabStories").innerHTML = stories.length
    ? stories.map(story => `<div class="story-item">${story}</div>`).join("")
    : `<div class="story-item">暂无合作者故事线。助理教授后可带学生，副教授后可组织教师合作。</div>`;
}

function renderRanks() {
  document.querySelector("#rankTrack").innerHTML = ranks
    .map((rank, index) => `
      <div class="rank-node ${index === state.rankIndex ? "active" : ""}">
        <i></i>
        <span>${rank.name}</span>
      </div>
    `)
    .join("");
}

function renderPromotionHint() {
  const next = ranks[state.rankIndex + 1];
  if (!next) {
    document.querySelector("#promotionHint").innerHTML = "你已经站上山顶。继续写教材、建数据库、培养学生，学派影响会在江湖里延续。";
    return;
  }
  const gaps = [
    `年限 ${Math.max(0, next.years - state.year + 1)}`,
    `论文 ${Math.max(0, next.need.pubs - state.pubs)}`,
    `顶刊 ${Math.max(0, next.need.top - state.topPubs)}`,
    `基金 ${Math.max(0, next.need.grants - state.stats.grants)}`,
    `声望 ${Math.max(0, next.need.reputation - Math.round(state.stats.reputation))}`,
    `教学 ${Math.max(0, next.need.teaching - Math.round(state.stats.teaching))}`
  ];
  document.querySelector("#promotionHint").innerHTML = `
    <strong>${next.name}</strong>
    <p>${next.note}</p>
    <div>${gaps.map(item => `<span class="pill">${item}</span>`).join("")}</div>
  `;
}

function render() {
  const project = currentProject();
  syncProjectSelect();
  renderChoicePanel();
  document.querySelector("#timeLabel").textContent = `第 ${state.year} 学年 · Q${state.quarter}`;
  document.querySelector("#rankLabel").textContent = ranks[state.rankIndex].name;
  document.querySelector("#scholarName").textContent = state.name;
  document.querySelector("#fieldCode").textContent = state.field.code;
  document.querySelector("#fieldName").textContent = state.field.name;
  document.querySelector("#fieldDesc").textContent = state.field.desc;
  document.querySelector("#chapterTitle").textContent = chapterTitle();
  document.querySelector("#traitList").innerHTML = state.traits
    .map(trait => `<div class="trait"><span>${trait.name}</span><small>${trait.desc}</small></div>`)
    .join("");
  document.querySelector("#hotspotList").innerHTML = hotspots.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#eventLog").innerHTML = state.events.map(item => `<li>${item}</li>`).join("");
  document.querySelector("#apLabel").textContent = `${state.actionPoints} / ${state.maxActionPoints}`;
  document.querySelector("#apDots").innerHTML = Array.from({ length: state.maxActionPoints }, (_, index) => {
    const className = index < state.actionPoints ? "ap-dot filled" : "ap-dot";
    return `<i class="${className}"></i>`;
  }).join("");
  document.querySelectorAll(".action-btn").forEach(button => {
    button.disabled = state.actionPoints <= 0 || Boolean(state.pendingChoice);
    if (button.dataset.action === "student") {
      button.disabled = button.disabled || !canLeadStudents();
      button.title = canLeadStudents() ? "带学生共同推进论文" : "助理教授以后解锁";
    }
    if (button.dataset.action === "faculty") {
      button.disabled = button.disabled || !canLeadFaculty();
      button.title = canLeadFaculty() ? "组织教师团队共同合作" : "副教授以后解锁";
    }
  });
  document.querySelector("#nextQuarterBtn").disabled = Boolean(state.pendingChoice);
  document.querySelector("#newProjectBtn").disabled = Boolean(state.pendingChoice);
  document.querySelector("#moveSchoolBtn").disabled = Boolean(state.pendingChoice);
  if (state.pendingChoice) document.querySelector("#submitProjectBtn").disabled = true;
  updateTitle();
  renderStats();
  renderProjects();
  renderSubmissions();
  renderJournalPanel();
  renderRelationNetwork();
  renderOutputs();
  renderRanks();
  renderPromotionHint();
}

function renderChoicePanel() {
  const panel = document.querySelector("#choicePanel");
  if (!state.pendingChoice) {
    panel.className = "choice-panel hidden";
    panel.innerHTML = "";
    return;
  }
  panel.className = "choice-panel";
  panel.innerHTML = `
    <strong>${state.pendingChoice.title}</strong>
    <p>${state.pendingChoice.text}</p>
    <div class="choice-actions">
      ${state.pendingChoice.options.map((option, index) => `<button class="secondary-btn choice-btn" data-choice="${index}">${option.label}</button>`).join("")}
    </div>
  `;
}

function chapterTitle() {
  if (state.rankIndex <= 1) return "开题：在问题和识别之间取舍";
  if (state.rankIndex === 2) return "青椒：把 tenure clock 写成倒计时模型";
  if (state.rankIndex === 3) return "副教授：从单篇论文到研究议程";
  if (state.rankIndex === 4) return "教授：管理团队、基金与学术声誉";
  if (state.rankIndex === 5) return "讲席：争夺学派解释权";
  return "泰斗：让后来者引用你的问题意识";
}

function doAction(actionKey) {
  if (state.actionPoints <= 0) {
    addEvent("本季度行动点已经用完。进入下季度后才能继续安排研究事务。");
    render();
    return;
  }

  if (actionKey === "student" && !canLeadStudents()) {
    addEvent("你还没有稳定教职，暂时不能正式带学生发文章。");
    render();
    return;
  }
  if (actionKey === "faculty" && !canLeadFaculty()) {
    addEvent("你还没有足够的学术号召力，暂时组织不起教师合作团队。");
    render();
    return;
  }

  const action = actions[actionKey];
  const project = currentProject();
  if (project.status === "submitted" && actionKey !== "rest") {
    addEvent("当前项目正在审稿流程中。请切换到其他项目，或等待编辑部反馈。");
    render();
    return;
  }
  const bonus = actionKey === "data" ? traitBonus(state.traits, "data") : 0;
  const modelBonus = actionKey === "model" ? traitBonus(state.traits, "model") : 0;
  const seminarBonus = actionKey === "seminar" ? traitBonus(state.traits, "seminar") : 0;
  const networkBonus = actionKey === "network" ? traitBonus(state.traits, "network") : 0;
  const teamBonus = Math.min(8, project.team.length * 2);

  project.progress = clamp(project.progress + action.paper + bonus + modelBonus + teamBonus);
  project.rigor = clamp(project.rigor + action.rigor);
  state.stats.rigor = clamp(state.stats.rigor + action.rigor);
  state.stats.reputation = clamp(state.stats.reputation + action.rep + seminarBonus + networkBonus);
  state.stats.teaching = clamp(state.stats.teaching + (action.teaching || 0));
  state.stats.stress = clamp(state.stats.stress + action.stress + traitBonus(state.traits, "stress") - traitBonus(state.traits, "calm"));
  if (actionKey === "rest") {
    const spend = Math.min(state.stats.money, 6);
    state.stats.money = clamp(state.stats.money - spend, 0, 999);
    state.stats.happiness = clamp(state.stats.happiness + 10 + spend);
    addEvent(`你花了 ${spend} 万做了一次无行动点额外成本的快乐恢复，快乐值上升。`);
  } else {
    state.stats.happiness = clamp(state.stats.happiness - Math.max(0, action.stress) * 0.18);
  }
  state.stats.grants += action.grant || 0;
  if (actionKey === "student") recruitStudent(project);
  if (actionKey === "faculty") recruitFaculty(project);
  if (actionKey === "network") developRelations(project);
  state.actionPoints -= 1;
  addEvent(randomLog(action, project));
  render();
}

function recruitStudent(project) {
  if (state.students.length >= 8 && Math.random() < 0.55) return;
  const usedNames = state.students.map(item => item.name);
  const name = pick(studentNames.filter(item => !usedNames.includes(item)));
  if (!name) return;
  const student = { name, arc: pick(studentArcs), loyalty: 45 + Math.floor(Math.random() * 35) };
  state.students.push(student);
  project.team.push(name);
  addEvent(`学生故事线：${name}加入项目，特点是${student.arc}。`);
}

function recruitFaculty(project) {
  if (state.faculty.length >= 6 && Math.random() < 0.55) return;
  const usedNames = state.faculty.map(item => item.name);
  const name = pick(facultyNames.filter(item => !usedNames.includes(item)));
  if (!name) return;
  const faculty = { name, arc: pick(facultyArcs), trust: 40 + Math.floor(Math.random() * 40) };
  state.faculty.push(faculty);
  project.team.push(`${name}老师`);
  addEvent(`教师合作者故事线：${name}老师加入，${faculty.arc}。`);
}

function developRelations(project) {
  if (!state.relations?.length) return;
  const person = pick(state.relations);
  person.strength = clamp(person.strength + 8 + Math.floor(Math.random() * 8));
  if (Math.random() < 0.55 && state.collaborationOffers.length < 3) {
    createCollaborationOffer(person, project);
  }
}

function createCollaborationOffer(person, project) {
  state.collaborationOffers.push({
    id: `offer-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    from: person.name,
    role: pick(authorRoles),
    topic: pick(state.field.topics),
    value: person.value + Math.floor(person.strength / 18),
    relationId: person.id,
    sourceProjectTitle: project.title
  });
  addEvent(`合作邀约：${person.name}发来新项目，想邀请你担任${state.collaborationOffers.at(-1).role}。`);
}

function inviteRelation(relationId) {
  if (state.pendingChoice) return;
  const project = currentProject();
  const person = state.relations.find(item => item.id === relationId);
  if (!project || !person || project.status === "submitted") {
    addEvent("当前项目正在审稿或关系不存在，暂时无法邀请合作者。");
    render();
    return;
  }
  if (project.team.includes(person.name)) {
    addEvent(`${person.name}已经在当前项目组里。`);
    render();
    return;
  }
  const chance = clamp(34 + person.strength * 0.55 + state.stats.reputation * 0.25 - state.stats.stress * 0.12, 15, 92);
  if (Math.random() * 100 <= chance) {
    project.team.push(person.name);
    project.progress = clamp(project.progress + person.value);
    project.rigor = clamp(project.rigor + Math.round(person.value * 0.45));
    person.strength = clamp(person.strength + 10);
    person.cooldown = 2;
    addEvent(`关系网合作：${person.name}接受邀请，凭借${person.specialty}加入 ${project.title}。`);
  } else {
    person.strength = clamp(person.strength + 3);
    person.cooldown = 1;
    addEvent(`关系网合作：${person.name}档期排不开，但关系略有升温。`);
  }
  render();
}

function acceptCollaborationOffer(offerId) {
  const offer = state.collaborationOffers.find(item => item.id === offerId);
  if (!offer) return;
  const topicIndex = state.field.topics.indexOf(offer.topic);
  const project = createProject(state.field, topicIndex >= 0 ? topicIndex : 0, Math.floor(Math.random() * methods.length));
  project.title = `《${offer.topic}的合作论文：来自${offer.from}团队的邀请》`;
  project.progress = clamp(32 + offer.value);
  project.rigor = clamp(28 + Math.round(offer.value * 0.8));
  project.team = [offer.from, `${state.name}（${offer.role}）`];
  state.projects.push(project);
  state.selectedProjectId = project.id;
  state.stats.reputation = clamp(state.stats.reputation + Math.max(2, Math.round(offer.value * 0.25)));
  state.stats.stress = clamp(state.stats.stress + 5);
  state.collaborationOffers = state.collaborationOffers.filter(item => item.id !== offerId);
  const relation = state.relations.find(item => item.id === offer.relationId);
  if (relation) relation.strength = clamp(relation.strength + 8);
  addEvent(`你接受了${offer.from}的合作邀请，作为${offer.role}加入新项目。`);
  syncProjectSelect();
  render();
}

function declineCollaborationOffer(offerId) {
  const offer = state.collaborationOffers.find(item => item.id === offerId);
  if (!offer) return;
  state.collaborationOffers = state.collaborationOffers.filter(item => item.id !== offerId);
  const relation = state.relations.find(item => item.id === offer.relationId);
  if (relation) relation.strength = clamp(relation.strength - 2);
  addEvent(`你婉拒了${offer.from}的合作邀请，保留精力推进自己的项目。`);
  render();
}

function randomLog(action, project) {
  const generated = `${pick(logOpeners)}：${pick(logBodies)}，${pick(logEndings)}`;
  const detail = Math.random() < 0.55 ? action.log : generated;
  return `Q${state.quarter} · ${action.label} · ${project.title}：${detail}`;
}

function advanceQuarter() {
  if (state.pendingChoice) {
    addEvent("先处理当前随机事件，再进入下季度。");
    render();
    return;
  }
  applyQuarterFocus();
  advanceSubmissions();
  state.relations?.forEach(person => {
    person.cooldown = Math.max(0, (person.cooldown || 0) - 1);
  });

  if (state.quarter < 4) {
    state.quarter += 1;
    state.actionPoints = state.maxActionPoints;
    addEvent(`进入第 ${state.year} 学年 Q${state.quarter}。新的行动点已经恢复。`);
    randomEvent();
    render();
    return;
  }

  resolveAcademicYear();
  state.year += 1;
  state.quarter = 1;
  state.actionPoints = state.maxActionPoints;
  checkPromotion();
  addEvent(`进入第 ${state.year} 学年 Q1。新一轮课程、会议和截稿期同时出现。`);
  randomEvent();
  render();
}

function applyQuarterFocus() {
  const method = selectedMethod();
  const focus = selectedFocus();
  const project = state.projects.find(item => item.status !== "submitted") || currentProject();
  const resourceBonus = Math.round(state.school.resources * 0.18);
  if (project && project.status !== "submitted") {
    project.progress = clamp(project.progress + Math.max(0, Math.round((focus.paper + method.speed) * 0.24)) + resourceBonus);
    project.rigor = clamp(project.rigor + Math.max(0, Math.round(method.rigor * 0.22)));
  }
  state.stats.rigor = clamp(state.stats.rigor + Math.max(0, Math.round(method.rigor * 0.22)));
  state.stats.reputation = clamp(state.stats.reputation + Math.max(0, Math.round(focus.rep * 0.28)));
  state.stats.teaching = clamp(state.stats.teaching + Math.round((focus.teaching + state.school.teachingLoad * 0.15 + traitBonus(state.traits, "teaching") * 0.25) * 0.28));
  state.stats.stress = clamp(state.stats.stress + Math.round((focus.stress + method.risk * 2 + state.school.pressure * 0.35 - traitBonus(state.traits, "calm")) * 0.35));
  state.stats.money = clamp(state.stats.money + Math.round(state.school.salary / 4), 0, 999);
  state.stats.happiness = clamp(state.stats.happiness + Math.round(state.school.happiness * 0.2) - Math.max(0, state.stats.stress - 75) * 0.08);
  addEvent(project && project.status !== "submitted"
    ? `Q${state.quarter} 结算：${focus.name}让 ${project.title} 的进度、教学和压力各有变化。`
    : `Q${state.quarter} 结算：项目都在审稿中，本季度主要消化教学、工资和压力。`);
}

function resolveAcademicYear() {
  const method = selectedMethod();
  const focus = selectedFocus();

  const grantRoll = Math.random() * 100 + focus.grant + traitBonus(state.traits, "grant");
  if (grantRoll > 68) {
    state.stats.grants += 1;
    state.stats.reputation = clamp(state.stats.reputation + 3);
    addEvent(`基金委给了一个“建议资助”。账面基金增至 ${state.stats.grants} 项。`);
  }

  const readyProjects = state.projects.filter(project => project.progress >= 100 && project.status !== "submitted");
  if (readyProjects.length) {
    addEvent(`第 ${state.year} 学年结束：${readyProjects.length} 个项目已经达到可投稿状态。你可以自行决定是否投稿。`);
  } else {
    const best = state.projects.reduce((top, project) => project.progress > top.progress ? project : top, state.projects[0]);
    addEvent(`第 ${state.year} 学年结束：${method.text} 进度最高的是 ${best.title}，完成度 ${Math.round(best.progress)}%。`);
  }
}

function manuscriptScore(project) {
  const method = methods.find(item => item.name === project.methodName) || selectedMethod();
  const methodFit = method.fit.includes(state.field.code) ? 8 : -4;
  const relationBonus = Math.min(12, project.team.length * 2.2 + averageRelationStrength() * 0.04);
  return (
    project.progress * 0.42 +
    project.rigor * 0.28 +
    state.stats.rigor * 0.14 +
    state.stats.reputation * 0.16 +
    method.rigor +
    method.speed +
    methodFit +
    relationBonus -
    Math.max(0, state.stats.stress - 68) * 0.45
  );
}

function averageRelationStrength() {
  if (!state.relations?.length) return 0;
  return state.relations.reduce((sum, person) => sum + person.strength, 0) / state.relations.length;
}

function estimateJournalChance(project, journal) {
  const score = manuscriptScore(project);
  const deskPenalty = journal.deskReject * 42;
  const chance = 52 + (score - journal.threshold) * 1.65 - deskPenalty + Math.min(10, project.team.length * 1.4);
  return Math.round(clamp(chance, 3, 92));
}

function reviewScore(project) {
  const rigorShock = Math.round((Math.random() - 0.35) * 12);
  return manuscriptScore(project) + rigorShock;
}

function submitCurrentProject(journalIndex) {
  if (state.pendingChoice) return;
  const project = currentProject();
  if (!project || project.progress < 100 || project.status === "submitted") {
    addEvent("当前项目还不能投稿：需要完成度 100%，且不在审稿流程中。");
    render();
    return;
  }
  const journal = journals[journalIndex] || journals[0];
  const actualJournal = pick(journal.names);
  const estimatedChance = estimateJournalChance(project, journal);
  const submission = {
    id: Date.now() + Math.floor(Math.random() * 10000),
    projectId: project.id,
    title: project.title,
    journalTier: journal.name,
    journalName: actualJournal,
    threshold: journal.threshold,
    rep: journal.rep,
    top: journal.top,
    delay: journal.delay,
    deskReject: journal.deskReject,
    score: reviewScore(project),
    estimatedChance,
    stage: reviewStages[0],
    stageIndex: 0,
    elapsed: 0,
    authors: [state.name, ...project.team.slice(0, 4)]
  };
  project.status = "submitted";
  project.submissionId = submission.id;
  state.submissions.push(submission);
  state.showJournalPanel = false;
  addEvent(`投稿提交：${project.title} 已投给 ${actualJournal}，系统估算成功率约 ${estimatedChance}%，进入“编辑部审稿”。`);
  render();
}

function advanceSubmissions() {
  if (!state.submissions.length) return;
  [...state.submissions].forEach(submission => {
    submission.elapsed += 1;
    const project = state.projects.find(item => item.id === submission.projectId);
    const risk = Math.random();
    const stagePenalty = submission.stageIndex * 4;
    const adjustedScore = submission.score + Math.random() * 18 - stagePenalty;

    if (submission.stageIndex === 0 && risk < submission.deskReject) {
      rejectSubmission(submission, project, "编辑部审稿阶段退稿");
      return;
    }

    if (adjustedScore < submission.threshold - 22 && risk < 0.38) {
      rejectSubmission(submission, project, `${submission.stage}未通过`);
      return;
    }

    if (submission.stageIndex < reviewStages.length - 1) {
      submission.stageIndex += 1;
      submission.stage = reviewStages[submission.stageIndex];
      addEvent(`投稿进展：${submission.title} 在 ${submission.journalName} 进入“${submission.stage}”。`);
      return;
    }

    finalizeSubmission(submission, project, adjustedScore);
  });
}

function rejectSubmission(submission, project, reason) {
  state.submissions = state.submissions.filter(item => item.id !== submission.id);
  if (project) {
    project.status = "working";
    project.submissionId = null;
    project.progress = clamp(58 + Math.floor(Math.random() * 18));
    project.rigor = clamp(project.rigor + 3);
  }
  state.stats.stress = clamp(state.stats.stress + 8);
  addEvent(`投稿失败：${submission.title} 被 ${submission.journalName} 拒稿，原因：${reason}。`);
}

function finalizeSubmission(submission, project, adjustedScore) {
  if (adjustedScore >= submission.threshold - 8) {
    acceptSubmission(submission, project);
    return;
  }
  if (adjustedScore >= submission.threshold - 20) {
    submission.stageIndex = 2;
    submission.stage = reviewStages[2];
    submission.score += 8;
    if (project) {
      project.status = "working";
      project.submissionId = null;
      project.progress = 78;
      project.rigor = clamp(project.rigor + 6);
    }
    state.submissions = state.submissions.filter(item => item.id !== submission.id);
    state.stats.stress = clamp(state.stats.stress + 7);
    addEvent(`投稿结果：${submission.title} 在 ${submission.journalName} 收到大修。项目退回修改，后续可再次投稿。`);
    return;
  }
  rejectSubmission(submission, project, "终审未通过");
}

function acceptSubmission(submission, project) {
  state.pubs += 1;
  if (submission.top) state.topPubs += 1;
  state.stats.reputation = clamp(state.stats.reputation + submission.rep);
  state.outputs.push({
    title: submission.title,
    journal: submission.journalName,
    top: submission.top,
    year: state.year,
    authors: submission.authors
  });
  state.submissions = state.submissions.filter(item => item.id !== submission.id);
  if (project) {
    state.projects = state.projects.filter(item => item.id !== project.id);
  }
  if (!state.projects.length) addNewProject(false);
  state.selectedProjectId = state.projects[0].id;
  addEvent(`投稿成功：${submission.title} 完成校对，被 ${submission.journalName} 正式接收。`);
}

function randomEvent() {
  if (state.pendingChoice) return;
  const roll = Math.random();
  const project = currentProject();
  if (state.stats.stress > 82 && roll < 0.55) {
    state.pendingChoice = choiceStress(project);
    return;
  }

  if (roll < 0.16) state.pendingChoice = choiceKeynote(project);
  else if (roll < 0.32) state.pendingChoice = choiceTeaching();
  else if (roll < 0.48) state.pendingChoice = choiceReplication(project);
  else if (roll < 0.64) state.pendingChoice = choiceDataWindow(project);
  else if (roll < 0.78) state.pendingChoice = choiceMoveOffer();
  else if (roll < 0.9 && state.relations?.length && state.collaborationOffers.length < 3) createCollaborationOffer(pick(state.relations), project);
}

function resolveChoice(index) {
  if (!state.pendingChoice) return;
  const option = state.pendingChoice.options[index];
  if (!option) return;
  option.apply();
  addEvent(`选择：${option.result}`);
  state.pendingChoice = null;
  render();
}

function choiceStress(project) {
  return {
    title: "随机事件：压力过载",
    text: `${project.title} 的一张稳健性表格变量方向写反了。你要怎么处理？`,
    options: [
      { label: "彻底重做", result: "你重做代码，进度下降但严谨度上升。", apply: () => { project.progress = clamp(project.progress - 10); project.rigor = clamp(project.rigor + 8); state.stats.stress = clamp(state.stats.stress + 6); } },
      { label: "先转投低一档", result: "你选择保住主线，声望小降但压力下降。", apply: () => { project.progress = clamp(project.progress - 4); state.stats.reputation = clamp(state.stats.reputation - 2); state.stats.stress = clamp(state.stats.stress - 8); } },
      { label: "花钱请助研", result: "你用资金换时间，进度保住，快乐也没有继续下滑。", apply: () => { state.stats.money = clamp(state.stats.money - 8, 0, 999); project.rigor = clamp(project.rigor + 4); state.stats.happiness = clamp(state.stats.happiness + 4); } }
    ]
  };
}

function choiceKeynote(project) {
  return {
    title: "随机事件：Keynote 提到你的论文",
    text: `一位领域大佬在 keynote 中提到了 ${project.title}，但解释方向和你的本意略有偏差。`,
    options: [
      { label: "公开回应", result: "你写了一版回应帖，声望上升，压力上升。", apply: () => { state.stats.reputation = clamp(state.stats.reputation + 7); state.stats.stress = clamp(state.stats.stress + 5); } },
      { label: "私下沟通", result: "你获得一次合作机会，项目合作者增加。", apply: () => { project.team.push(`${pick(facultyNames)}老师`); state.stats.reputation = clamp(state.stats.reputation + 4); } },
      { label: "保持沉默", result: "你保住精力，快乐小幅上升。", apply: () => { state.stats.happiness = clamp(state.stats.happiness + 5); } }
    ]
  };
}

function choiceTeaching() {
  return {
    title: "随机事件：教学评价争议",
    text: "学生一边夸你把 DID 讲清楚了，一边抱怨作业像小论文。",
    options: [
      { label: "降低作业难度", result: "教学评价上升，但训练强度下降。", apply: () => { state.stats.teaching = clamp(state.stats.teaching + 8); state.stats.rigor = clamp(state.stats.rigor - 2); } },
      { label: "坚持高标准", result: "教学声誉和压力同时上升。", apply: () => { state.stats.teaching = clamp(state.stats.teaching + 5); state.stats.stress = clamp(state.stats.stress + 5); } },
      { label: "花钱请助教", result: "资金下降，教学和快乐都改善。", apply: () => { state.stats.money = clamp(state.stats.money - 6, 0, 999); state.stats.teaching = clamp(state.stats.teaching + 6); state.stats.happiness = clamp(state.stats.happiness + 4); } }
    ]
  };
}

function choiceReplication(project) {
  return {
    title: "随机事件：复现危机",
    text: `${project.title} 的复现代码暴露出样本口径问题。`,
    options: [
      { label: "删结果重写", result: "论文进度下降，但可信度明显提高。", apply: () => { project.progress = clamp(project.progress - 8); project.rigor = clamp(project.rigor + 10); state.stats.rigor = clamp(state.stats.rigor + 5); } },
      { label: "放进附录", result: "进度保住，但审稿风险上升。", apply: () => { project.rigor = clamp(project.rigor + 2); state.stats.stress = clamp(state.stats.stress + 7); } },
      { label: "换一个项目推进", result: "你新开一篇更干净的项目。", apply: () => { addNewProject(false); state.stats.stress = clamp(state.stats.stress + 3); } }
    ]
  };
}

function choiceDataWindow(project) {
  return {
    title: "随机事件：数据窗口开放",
    text: "一个关键数据接口短暂开放，但整理成本很高。",
    options: [
      { label: "立刻抢数据", result: "项目进度大涨，压力也涨。", apply: () => { project.progress = clamp(project.progress + 14); state.stats.stress = clamp(state.stats.stress + 7); } },
      { label: "找学生处理", result: "学生成长，项目稳步推进。", apply: () => { if (canLeadStudents()) recruitStudent(project); project.progress = clamp(project.progress + 8); } },
      { label: "放弃窗口", result: "你避免加班，快乐上升。", apply: () => { state.stats.happiness = clamp(state.stats.happiness + 6); } }
    ]
  };
}

function choiceMoveOffer() {
  const options = schools.filter(school => school.name !== state.school.name);
  const offers = sample(options, 3);
  return {
    title: "跳槽机会",
    text: "猎头和老同学同时发来消息。不同学校平台会改变工资、资源、压力和教学负担。",
    options: offers.map(school => ({
      label: `${school.name}`,
      result: `你跳槽到${school.name}：${school.desc}`,
      apply: () => {
        state.school = school;
        state.stats.money = clamp(state.stats.money + Math.round(school.salary * 0.4), 0, 999);
        state.stats.reputation = clamp(state.stats.reputation + school.resources * 0.3);
        state.stats.stress = clamp(state.stats.stress + school.pressure * 0.5);
        state.stats.happiness = clamp(state.stats.happiness + school.happiness);
      }
    }))
  };
}

function checkPromotion() {
  const next = ranks[state.rankIndex + 1];
  if (!next) return;
  const ok =
    state.year >= next.years &&
    state.pubs >= next.need.pubs &&
    state.topPubs >= next.need.top &&
    state.stats.grants >= next.need.grants &&
    state.stats.reputation >= next.need.reputation &&
    state.stats.teaching >= next.need.teaching;

  if (ok) {
    state.rankIndex += 1;
    state.stats.stress = clamp(state.stats.stress - 18);
    state.stats.reputation = clamp(state.stats.reputation + 6);
    addEvent(`晋升成功：你成为${ranks[state.rankIndex].name}。新的考核指标已经刷新。`);
  }
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  addEvent("存档完成：当前学年、项目、投稿、关系网和合作邀约已经保存到本机浏览器。");
  render();
}

function normalizeLoadedState(loaded) {
  const fresh = initialState();
  return {
    ...fresh,
    ...loaded,
    stats: { ...fresh.stats, ...(loaded.stats || {}) },
    projects: loaded.projects?.length ? loaded.projects : fresh.projects,
    submissions: loaded.submissions || [],
    outputs: loaded.outputs || [],
    students: loaded.students || [],
    faculty: loaded.faculty || [],
    relations: loaded.relations?.length ? loaded.relations : fresh.relations,
    collaborationOffers: loaded.collaborationOffers || [],
    events: loaded.events?.length ? loaded.events : fresh.events,
    showJournalPanel: false,
    pendingChoice: loaded.pendingChoice || null
  };
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) {
    addEvent("读档失败：本机浏览器还没有保存过存档。");
    render();
    return;
  }
  try {
    state = normalizeLoadedState(JSON.parse(raw));
    populateSelects();
    addEvent("读档完成：已恢复上一次保存的学术人生。");
  } catch (error) {
    addEvent("读档失败：存档内容无法解析，可能已损坏。");
  }
  render();
}

function bindEvents() {
  document.querySelector("#rerollBtn").addEventListener("click", () => {
    state = initialState();
    populateSelects();
    render();
  });

  document.querySelector("#saveGameBtn").addEventListener("click", saveGame);
  document.querySelector("#loadGameBtn").addEventListener("click", loadGame);

  document.querySelector("#newProjectBtn").addEventListener("click", () => {
    addNewProject(true);
    render();
  });

  document.querySelector("#moveSchoolBtn").addEventListener("click", () => {
    if (!state.pendingChoice) {
      state.pendingChoice = choiceMoveOffer();
      render();
    }
  });

  document.querySelector("#submitProjectBtn").addEventListener("click", () => {
    state.showJournalPanel = true;
    render();
  });

  document.querySelector("#journalPanel").addEventListener("click", event => {
    const journalButton = event.target.closest("[data-journal-index]");
    if (journalButton) {
      submitCurrentProject(Number(journalButton.dataset.journalIndex));
      return;
    }
    if (event.target.closest("[data-close-journals]")) {
      state.showJournalPanel = false;
      render();
    }
  });

  document.querySelector("#relationNetwork").addEventListener("click", event => {
    const inviteButton = event.target.closest("[data-invite-relation]");
    if (inviteButton) {
      inviteRelation(inviteButton.dataset.inviteRelation);
      return;
    }
    const acceptButton = event.target.closest("[data-offer-accept]");
    if (acceptButton) {
      acceptCollaborationOffer(acceptButton.dataset.offerAccept);
      return;
    }
    const declineButton = event.target.closest("[data-offer-decline]");
    if (declineButton) {
      declineCollaborationOffer(declineButton.dataset.offerDecline);
    }
  });

  document.querySelector("#choicePanel").addEventListener("click", event => {
    if (event.target && event.target.dataset.choice !== undefined) {
      resolveChoice(Number(event.target.dataset.choice));
    }
  });

  document.querySelector("#nextQuarterBtn").addEventListener("click", advanceQuarter);

  document.querySelector("#projectSelect").addEventListener("change", event => {
    state.selectedProjectId = Number(event.target.value);
    render();
  });

  document.querySelectorAll(".action-btn").forEach(button => {
    button.addEventListener("click", () => doAction(button.dataset.action));
  });

  ["#topicSelect", "#methodSelect", "#focusSelect"].forEach(selector => {
    document.querySelector(selector).addEventListener("change", render);
  });
}

state = initialState();
populateSelects();
bindEvents();
render();
