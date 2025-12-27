# 产品演示示例

本文档展示如何生成一个技术产品演示幻灯片项目。

## 用户输入

```
帮我演示我们的 AI 智能客服产品 SmartBot
```

## 生成步骤

### 1. 场景识别

- **场景类型**：产品演示
- **产品名称**：SmartBot
- **推荐主题**：tech-blue（通用科技蓝）

### 2. 生成数据

```javascript
import {
  Bot, MessageSquare, Zap, Shield, BarChart, Users,
  Settings, Clock, CheckCircle, ArrowRight, Sparkles
} from 'lucide-react';

export const SLIDES_DATA = {
  hero: {
    title: "SmartBot",
    subtitle: "AI 智能客服解决方案",
    tagline: "让每一次对话都充满智慧",
    tags: ["自然语言理解", "多轮对话", "知识库集成", "7x24 在线"]
  },

  framework: {
    title: "产品亮点",
    subtitle: "重新定义客服体验",
    dimensions: [
      { icon: Zap, title: "秒级响应", desc: "平均响应时间 < 1 秒，告别排队等待" },
      { icon: Bot, title: "智能理解", desc: "基于大语言模型，准确理解用户意图" },
      { icon: Shield, title: "安全可控", desc: "内容审核 + 敏感词过滤，合规无忧" }
    ],
    flow: {
      title: "核心能力",
      steps: [
        { icon: MessageSquare, title: "多渠道接入", desc: "网页、APP、微信、钉钉一键接入" },
        { icon: Users, title: "人机协同", desc: "复杂问题自动转人工，无缝衔接" },
        { icon: BarChart, title: "数据洞察", desc: "对话分析、热点追踪、满意度统计" }
      ]
    },
    outputs: ["降低 60% 人力成本", "提升 40% 客户满意度", "7x24 不间断服务"],
    nextTasks: [
      { icon: Settings, title: "快速配置", desc: "10 分钟完成知识库搭建" },
      { icon: Bot, title: "智能对话", desc: "自然语言交互演示" },
      { icon: BarChart, title: "数据看板", desc: "实时监控与分析" }
    ]
  },

  task1: {
    title: "功能1：智能对话",
    requirement: {
      goal: "展示 SmartBot 的自然语言理解和多轮对话能力",
      features: [
        { icon: "Bot", title: "意图识别", desc: "准确识别用户问题类型" },
        { icon: "MessageSquare", title: "多轮对话", desc: "支持上下文连续对话" },
        { icon: "Sparkles", title: "个性化回复", desc: "根据用户画像定制回答" },
        { icon: "Clock", title: "历史记忆", desc: "记住用户偏好和历史问题" }
      ]
    },
    process: [
      { step: 1, status: "success", title: "用户咨询", desc: "用户提问：'我的订单什么时候发货？'", highlight: "自然语言输入" },
      { step: 2, status: "success", title: "意图识别", desc: "识别为「物流查询」意图", highlight: "准确率 > 95%" },
      { step: 3, status: "success", title: "智能回复", desc: "查询系统并返回具体发货时间", highlight: "自动关联业务系统" }
    ],
    processSummary: "从提问到回复，全程 < 1 秒",
    result: {
      score: 95,
      verdict: "行业领先",
      dimensions: [
        { title: "意图准确率", icon: "Target", color: "#22c55e", rating: "95%+", points: ["覆盖 200+ 常见意图", "支持自定义意图"] },
        { title: "响应速度", icon: "Zap", color: "#3b82f6", rating: "< 1s", points: ["边缘部署优化", "智能缓存"] },
        { title: "满意度", icon: "Sparkles", color: "#8b5cf6", rating: "92%", points: ["自然流畅的对话", "准确解决问题"] },
        { title: "覆盖率", icon: "Shield", color: "#f59e0b", rating: "85%", points: ["自动处理大部分咨询", "复杂问题转人工"] },
        { title: "学习能力", icon: "Brain", color: "#ec4899", rating: "持续", points: ["每日自动学习", "知识库自动更新"] }
      ]
    }
  },

  task2: {
    title: "功能2：知识库管理",
    requirement: {
      goal: "展示知识库的快速搭建和管理能力",
      desc: "10 分钟内完成知识库从 0 到 1 的搭建",
      features: [
        { icon: "FileText", title: "多格式导入", desc: "支持 Word、Excel、PDF、网页" },
        { icon: "Layers", title: "自动分类", desc: "AI 自动识别并归类知识点" },
        { icon: "Brain", title: "智能问答", desc: "自动生成 FAQ 问答对" },
        { icon: "Settings", title: "可视化编辑", desc: "拖拽式管理，无需代码" }
      ]
    },
    process: [
      { step: 1, status: "success", title: "上传文档", desc: "拖拽上传产品手册 PDF", highlight: "支持批量上传" },
      { step: 2, status: "success", title: "自动解析", desc: "AI 提取关键信息，生成知识点", highlight: "无需人工标注" },
      { step: 3, status: "success", title: "即时生效", desc: "知识库立即可用于对话", highlight: "实时更新" }
    ],
    processSummary: "从文档到可用知识，仅需 3 步",
    result: {
      comparison: [
        {
          model: "传统方案",
          score: 40,
          color: "#6b7280",
          comments: ["需要人工标注", "部署周期长", "维护成本高"]
        },
        {
          model: "SmartBot",
          score: 90,
          color: "#0ea5e9",
          improvement: 50,
          isHighlighted: true,
          comments: ["AI 自动解析", "10 分钟部署", "持续自学习"]
        }
      ],
      conclusion: "相比传统方案，SmartBot 将知识库搭建效率提升 10 倍以上"
    }
  },

  task3: {
    title: "功能3：数据分析",
    goal: {
      title: "数据驱动运营",
      content: "实时监控对话质量，洞察用户需求，持续优化服务",
      models: [],
      dimensions: ["对话量趋势", "满意度分析", "热点问题", "转化漏斗"]
    },
    process: {
      title: "核心指标",
      steps: [
        "实时大屏：对话量、响应时长、满意度一目了然",
        "智能报表：自动生成日报/周报/月报",
        "预警机制：异常波动实时提醒"
      ]
    },
    result: {
      title: "价值体现",
      comparison: [
        { model: "日均对话", time: 0, tokens: 10000, behavior: "+", color: "#22c55e", verdict: "10000+ 次" },
        { model: "人力节省", time: 0, tokens: 60, behavior: "%", color: "#3b82f6", verdict: "60% 成本降低" },
        { model: "满意度", time: 0, tokens: 92, behavior: "%", color: "#8b5cf6", verdict: "92% 好评率" },
        { model: "响应时长", time: 0, tokens: 1, behavior: "s", color: "#f59e0b", verdict: "< 1 秒" }
      ]
    },
    summary: {
      title: "为什么选择 SmartBot",
      points: [
        "开箱即用：10 分钟完成部署，无需开发",
        "成本可控：按对话量计费，用多少付多少",
        "安全合规：数据本地化部署，隐私有保障",
        "持续进化：基于最新 AI 技术，能力不断升级"
      ]
    }
  },

  summary: {
    title: "立即体验",
    intro: "SmartBot 已服务 1000+ 企业客户",
    keyPoint: "平均帮助企业降低 60% 客服成本，提升 40% 客户满意度",
    warning: {
      title: "限时优惠",
      content: "新用户注册即送 10000 次免费对话额度，立即开始您的智能客服之旅"
    },
    pricing: {
      title: "灵活定价",
      unit: "元/万次对话",
      models: [
        { name: "基础版", input: 99, output: 0 },
        { name: "专业版", input: 299, output: 0 },
        { name: "企业版", input: 0, output: 0 }
      ]
    }
  }
};
```

### 3. 生成导航

```javascript
import { Home, Star, Cpu, FileText, GitMerge, Award, BarChart } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', slideIndex: 0, icon: Home, label: "首页" },
  { id: 'highlights', slideIndex: 1, icon: Star, label: "产品亮点" },
  {
    id: 'feature1',
    icon: Cpu,
    label: "智能对话",
    children: [
      { id: 'feature1-intro', slideIndex: 2, icon: FileText, label: "功能介绍" },
      { id: 'feature1-demo', slideIndex: 3, icon: GitMerge, label: "演示" },
      { id: 'feature1-data', slideIndex: 4, icon: Award, label: "效果" }
    ]
  },
  {
    id: 'feature2',
    icon: Cpu,
    label: "知识库",
    children: [
      { id: 'feature2-intro', slideIndex: 5, icon: FileText, label: "功能介绍" },
      { id: 'feature2-demo', slideIndex: 6, icon: GitMerge, label: "演示" },
      { id: 'feature2-compare', slideIndex: 7, icon: Award, label: "对比" }
    ]
  },
  {
    id: 'feature3',
    icon: BarChart,
    label: "数据分析",
    children: [
      { id: 'feature3-overview', slideIndex: 8, icon: FileText, label: "概览" },
      { id: 'feature3-value', slideIndex: 9, icon: Award, label: "价值" }
    ]
  },
  { id: 'cta', slideIndex: 10, icon: Award, label: "立即体验" }
];
```

### 4. 应用 tech-blue 主题

修改 `tailwind.config.js`：

```javascript
colors: {
  'primary-100': '#0ea5e9',  // 天蓝
  'primary-200': '#38bdf8',  // 浅蓝
  'primary-300': '#e0f2fe',  // 淡蓝背景
  'accent-100': '#6366f1',   // 靛蓝
  'accent-200': '#4338ca',   // 深靛蓝
  'text-100': '#0c4a6e',     // 主文字
  'text-200': '#0369a1',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f0f9ff',       // 次背景
  'bg-300': '#bae6fd',       // 边框
}
```
