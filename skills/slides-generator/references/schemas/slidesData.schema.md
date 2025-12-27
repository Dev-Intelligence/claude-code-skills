# slidesData.js 数据结构规范

本文档定义了幻灯片数据的完整结构规范。

## 文件顶部导入

```javascript
import {
  // 常用图标
  GitBranch, Bug, Bot, FileCode, Layers, Target, FileText,
  Monitor, Server, Radio, Database, MousePointer, Camera,
  ListChecks, Brain, Plug, Sparkles, Award, CheckCircle,
  AlertTriangle, XCircle, Info, Zap, Code, Settings
} from 'lucide-react';
```

## 完整数据结构

```javascript
export const SLIDES_DATA = {
  hero: HeroData,
  framework: FrameworkData,
  task1: TaskData,
  task2: TaskData,
  task3: TaskData,
  // ... 可以有更多任务
  summary: SummaryData
};
```

---

## 1. HeroData - 首页数据

```javascript
const HeroData = {
  // 必填
  title: string,           // 主标题，如 "DeepSeek V3"
  subtitle: string,        // 副标题，如 "工程能力评测"
  tagline: string,         // 口号，如 "我用 3 个真实任务测它到底能不能交付"

  // 可选
  tags: string[],          // 特性标签，如 ["多语言能力", "Agent能力"]
  models: string[],        // 对比模型列表
  benchmarks: [            // Benchmark 数据
    {
      name: string,        // Benchmark 名称
      scores: {            // 各模型分数，null 表示无数据
        [modelName]: number | null
      }
    }
  ]
};
```

**示例**：
```javascript
hero: {
  title: "DeepSeek V3",
  subtitle: "工程能力评测",
  tagline: "三个真实任务检验代码交付能力",
  tags: ["推理能力", "代码生成", "长上下文"],
  models: ["DeepSeek V3", "Claude 3.5", "GPT-4"],
  benchmarks: [
    {
      name: "SWE-bench",
      scores: { "DeepSeek V3": 73.1, "Claude 3.5": 77.2, "GPT-4": 75.0 }
    }
  ]
}
```

---

## 2. FrameworkData - 评测框架数据

```javascript
const FrameworkData = {
  title: string,           // 标题，如 "评测框架"
  subtitle: string,        // 副标题，如 "拒绝参数，只看落地"

  dimensions: [            // 评测维度（通常3个）
    {
      icon: LucideIcon,    // 图标组件
      title: string,       // 维度名称
      desc: string         // 维度描述
    }
  ],

  flow: {                  // 评测流程
    title: string,
    steps: [
      {
        icon: LucideIcon,
        title: string,
        desc: string
      }
    ]
  },

  outputs: string[],       // 期望输出列表

  nextTasks: [             // 接下来的任务预告
    {
      icon: LucideIcon,
      title: string,
      desc: string
    }
  ]
};
```

---

## 3. TaskData - 任务数据

每个任务包含三个子页面：需求、过程、结果。

```javascript
const TaskData = {
  title: string,           // 任务标题，如 "任务1：FastAPI 开发"

  // 可选：评测提示词（用于展示 Prompt）
  prompt?: {
    title: string,
    description: string,
    lines: number,         // 行数
    preview: string,       // 预览内容（前几行）
    fullContent: string    // 完整内容
  },

  // 需求页数据
  requirement: RequirementData,

  // 过程页数据
  process: ProcessStep[],
  processSummary: string,

  // 结果页数据（两种格式二选一）
  result: ComparisonResult | DimensionResult
};
```

### 3.1 RequirementData - 需求数据

```javascript
const RequirementData = {
  goal: string,            // 任务目标
  desc?: string,           // 详细描述（可选）

  features: [              // 功能要求列表
    {
      icon: string,        // 图标名称（字符串，如 "Monitor"）
      title: string,
      desc: string
    }
  ],

  techRequirements?: string[]  // 技术要求列表（可选）
};
```

### 3.2 ProcessStep - 过程步骤

```javascript
const ProcessStep = {
  step: number,            // 步骤序号
  status: "success" | "warning" | "error",  // 状态
  title: string,           // 步骤标题
  desc: string,            // 步骤描述
  highlight?: string       // 高亮说明（可选）
};
```

### 3.3 ComparisonResult - 对比型结果

适用于模型对比场景：

```javascript
const ComparisonResult = {
  comparison: [
    {
      model: string,       // 模型名称
      score: number,       // 分数（0-100）
      color: string,       // 主题色（十六进制）
      improvement?: number, // 相比基准提升百分比
      isHighlighted?: boolean,  // 是否高亮显示
      comments: string[]   // 评价要点
    }
  ],
  conclusion: string       // 结论
};
```

### 3.4 DimensionResult - 维度型结果

适用于多维度评价场景：

```javascript
const DimensionResult = {
  score: number,           // 总分
  verdict: string,         // 评语，如 "表现良好"

  dimensions: [            // 评价维度（通常5个）
    {
      title: string,       // 维度名称
      icon: string,        // 图标名称
      color: string,       // 颜色
      rating: string,      // 评级，如 "优秀"、"良好"
      points: string[]     // 具体评价点
    }
  ],

  conclusion?: string      // 结论（可选）
};
```

---

## 4. SummaryData - 总结数据

```javascript
const SummaryData = {
  title: string,           // 标题
  intro: string,           // 开场白
  keyPoint: string,        // 核心观点

  warning?: {              // 提醒信息（可选）
    title: string,
    content: string
  },

  pricing?: {              // 定价信息（可选，LLM评测场景常用）
    title: string,
    unit: string,          // 单位说明
    models: [
      {
        name: string,
        input: number,     // 输入价格
        output: number,    // 输出价格
        cacheRead?: number,
        cacheWrite?: number
      }
    ]
  }
};
```

---

## 5. Task3 特殊结构 - 横评数据

任务3 通常用于多模型横向对比，使用特殊结构：

```javascript
const Task3Data = {
  title: string,

  goal: {
    title: string,
    content: string,
    models: string[],      // 参评模型列表
    dimensions: string[]   // 评测维度
  },

  process: {
    title: string,
    steps: string[]        // 评测步骤描述
  },

  result: {
    title: string,
    comparison: [
      {
        model: string,
        time: number,      // 平均耗时（秒）
        tokens: number,    // Token 消耗
        behavior: string,  // 行为模式，如 "Rich"/"Minimal"
        color: string,
        verdict: string    // 评价
      }
    ]
  },

  summary: {
    title: string,
    points: string[]       // 总结要点
  }
};
```

---

## 图标映射表

以下是常用的 Lucide 图标及其语义：

| 图标名 | 用途 |
|--------|------|
| `GitBranch` | 版本控制、分支 |
| `Bug` | 调试、错误修复 |
| `Bot` | AI、Agent |
| `FileCode` | 代码文件 |
| `Layers` | 架构、分层 |
| `Target` | 目标、评测 |
| `FileText` | 文档、文本 |
| `Monitor` | 界面、显示 |
| `Server` | 后端、服务 |
| `Radio` | 实时、WebSocket |
| `Database` | 数据库 |
| `Camera` | 截图 |
| `Brain` | 理解、推理 |
| `Plug` | 集成、插件 |
| `Sparkles` | 亮点、创新 |
| `Zap` | 速度、性能 |
| `CheckCircle` | 成功 |
| `AlertTriangle` | 警告 |
| `XCircle` | 失败 |

---

## 完整示例

参见 `examples/llm-benchmark.md` 获取完整的 LLM 评测数据示例。
