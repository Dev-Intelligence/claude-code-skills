# LLM 评测示例

本文档展示如何生成一个 LLM 模型评测幻灯片项目。

## 用户输入

```
帮我做一个 DeepSeek V3 的工程能力评测，测试 3 个任务
```

## 生成步骤

### 1. 场景识别

- **场景类型**：LLM 评测
- **主角模型**：DeepSeek V3
- **任务数量**：3
- **推荐主题**：deepseek（蓝色）

### 2. 生成数据

```javascript
import {
  GitBranch, Bug, Bot, FileCode, Layers, Target, FileText,
  Monitor, Server, Radio, Database, Brain, Plug, Sparkles, Zap
} from 'lucide-react';

export const SLIDES_DATA = {
  hero: {
    title: "DeepSeek V3",
    subtitle: "工程能力评测",
    tagline: "三个真实任务检验代码交付与 Agent 能力",
    tags: ["推理能力", "代码生成", "长上下文", "工具调用"],
    models: ["DeepSeek V3", "Claude 3.5 Sonnet", "GPT-4", "Gemini Pro"],
    benchmarks: [
      {
        name: "SWE-bench Verified",
        scores: { "DeepSeek V3": 73.1, "Claude 3.5 Sonnet": 77.2, "GPT-4": 75.0, "Gemini Pro": 72.0 }
      },
      {
        name: "HumanEval",
        scores: { "DeepSeek V3": 90.2, "Claude 3.5 Sonnet": 92.0, "GPT-4": 91.0, "Gemini Pro": 88.5 }
      }
    ]
  },

  framework: {
    title: "评测框架",
    subtitle: "关注真实工程能力，而非纸面分数",
    dimensions: [
      { icon: GitBranch, title: "链路闭环", desc: "代码能否独立运行、通过测试" },
      { icon: Bug, title: "自我修复", desc: "遇到错误是否能自主定位和修复" },
      { icon: Bot, title: "Agent 能力", desc: "工具调用是否准确、稳定" }
    ],
    flow: {
      title: "评测流程",
      steps: [
        { icon: FileCode, title: "任务下发", desc: "给定完整需求文档" },
        { icon: Bug, title: "自主开发", desc: "模型独立完成编码" },
        { icon: FileText, title: "验收评估", desc: "运行测试、记录结果" }
      ]
    },
    outputs: ["可运行代码", "测试报告", "对比分析"],
    nextTasks: [
      { icon: FileCode, title: "FastAPI 后端开发", desc: "完整 REST API 服务交付" },
      { icon: Layers, title: "代码重构优化", desc: "理解并改进现有代码" },
      { icon: Bot, title: "Agent 工具调用", desc: "多步骤任务自主完成" }
    ]
  },

  task1: {
    title: "任务1：FastAPI 后端开发",
    requirement: {
      goal: "基于 OpenAPI 规范，交付完整可运行的后端服务",
      features: [
        { icon: "Server", title: "REST API", desc: "实现全部接口端点" },
        { icon: "Radio", title: "WebSocket", desc: "实时数据推送" },
        { icon: "Database", title: "数据持久化", desc: "文件或数据库存储" },
        { icon: "Monitor", title: "错误处理", desc: "完善的异常响应" }
      ],
      techRequirements: [
        "Python 3.10+ with FastAPI",
        "支持 uvicorn 启动",
        "通过所有接口测试"
      ]
    },
    process: [
      { step: 1, status: "success", title: "快速生成初版", desc: "10分钟内完成基础框架", highlight: "代码结构清晰" },
      { step: 2, status: "warning", title: "WebSocket 问题", desc: "实时推送逻辑有误", highlight: "经提示后修复" },
      { step: 3, status: "success", title: "自主测试", desc: "主动运行测试验证", highlight: "自我验证意识强" }
    ],
    processSummary: "2 轮对话完成交付，表现稳定",
    result: {
      comparison: [
        {
          model: "GPT-4",
          score: 75,
          color: "#6b7280",
          comments: ["基础功能完整", "WebSocket 需手动修复", "测试覆盖一般"]
        },
        {
          model: "DeepSeek V3",
          score: 85,
          color: "#2563eb",
          improvement: 10,
          isHighlighted: true,
          comments: ["主动运行测试", "错误修复快速", "代码质量较高"]
        }
      ],
      conclusion: "DeepSeek V3 在工程交付上表现优于 GPT-4，自我验证能力突出"
    }
  },

  task2: {
    title: "任务2：代码重构优化",
    requirement: {
      goal: "理解并重构一个 500 行的 Python 脚本",
      desc: "将单文件脚本重构为模块化结构，提升可维护性",
      features: [
        { icon: "Layers", title: "模块拆分", desc: "按功能拆分为多个模块" },
        { icon: "FileText", title: "类型标注", desc: "添加完整的类型提示" },
        { icon: "Brain", title: "逻辑优化", desc: "简化复杂逻辑" },
        { icon: "Plug", title: "测试补充", desc: "添加单元测试" }
      ]
    },
    process: [
      { step: 1, status: "success", title: "快速理解代码", desc: "准确识别核心逻辑和依赖", highlight: "长上下文理解强" },
      { step: 2, status: "success", title: "合理拆分", desc: "按职责划分 4 个模块", highlight: "符合设计原则" },
      { step: 3, status: "success", title: "保持兼容", desc: "重构后 API 保持不变", highlight: "考虑周全" }
    ],
    processSummary: "一次性完成重构，无需返工",
    result: {
      score: 90,
      verdict: "表现优秀",
      dimensions: [
        { title: "代码理解", icon: "Brain", color: "#22c55e", rating: "优秀", points: ["快速定位核心逻辑", "理解隐含依赖关系"] },
        { title: "架构设计", icon: "Layers", color: "#3b82f6", rating: "良好", points: ["模块划分合理", "接口设计清晰"] },
        { title: "代码质量", icon: "FileCode", color: "#8b5cf6", rating: "优秀", points: ["类型标注完整", "命名规范"] },
        { title: "测试覆盖", icon: "Target", color: "#f59e0b", rating: "良好", points: ["核心函数有测试", "边界情况考虑"] },
        { title: "文档能力", icon: "FileText", color: "#ec4899", rating: "良好", points: ["主动生成说明文档", "注释清晰"] }
      ]
    }
  },

  task3: {
    title: "任务3：Agent 工具调用",
    goal: {
      title: "评测目标",
      content: "测试模型在 Agent 场景下的工具调用能力和多步推理能力",
      models: ["DeepSeek V3", "Claude 3.5 Sonnet", "GPT-4", "Gemini Pro"],
      dimensions: ["调用准确率", "推理步骤", "错误恢复", "任务完成率"]
    },
    process: {
      title: "评测过程",
      steps: [
        "统一环境：自研 Agent 测试框架，20 个标准任务",
        "统一配置：相同系统提示，相同工具集",
        "指标统计：成功率、平均步骤数、Token 消耗"
      ]
    },
    result: {
      title: "横评结果",
      comparison: [
        { model: "DeepSeek V3", time: 12.5, tokens: 850, behavior: "Balanced", color: "#2563eb", verdict: "95% · 推理清晰" },
        { model: "Claude 3.5", time: 10.2, tokens: 920, behavior: "Verbose", color: "#d97706", verdict: "93% · 解释详细" },
        { model: "GPT-4", time: 11.8, tokens: 780, behavior: "Concise", color: "#10a37f", verdict: "90% · 偶有跳步" },
        { model: "Gemini Pro", time: 9.5, tokens: 650, behavior: "Minimal", color: "#6b7280", verdict: "85% · 速度快但略粗" }
      ]
    },
    summary: {
      title: "总结",
      points: [
        "DeepSeek V3 综合表现最佳，推理链条清晰，错误恢复能力强",
        "Claude 3.5 解释最详细，适合需要可解释性的场景",
        "GPT-4 效率较高但偶有推理跳步",
        "Gemini Pro 速度最快，适合简单任务"
      ]
    }
  },

  summary: {
    title: "评测总结",
    intro: "基于 3 个真实工程任务的完整评测",
    keyPoint: "DeepSeek V3 在工程交付和 Agent 能力上表现突出，性价比高",
    warning: {
      title: "注意事项",
      content: "复杂实时系统（如 WebSocket）仍需人工验收，不能完全依赖"
    },
    pricing: {
      title: "成本参考",
      unit: "元/百万 tokens",
      models: [
        { name: "DeepSeek V3", input: 1.0, output: 2.0 },
        { name: "Claude 3.5 Sonnet", input: 3.0, output: 15.0 },
        { name: "GPT-4", input: 30.0, output: 60.0 }
      ]
    }
  }
};
```

### 3. 生成导航

```javascript
import { Home, Target, Cpu, FileText, GitMerge, Award, BarChart } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', slideIndex: 0, icon: Home, label: "首页" },
  { id: 'framework', slideIndex: 1, icon: Target, label: "评测框架" },
  {
    id: 'task1',
    icon: Cpu,
    label: "任务1",
    children: [
      { id: 'task1-requirement', slideIndex: 2, icon: FileText, label: "需求" },
      { id: 'task1-process', slideIndex: 3, icon: GitMerge, label: "过程" },
      { id: 'task1-result', slideIndex: 4, icon: Award, label: "结果" }
    ]
  },
  {
    id: 'task2',
    icon: Cpu,
    label: "任务2",
    children: [
      { id: 'task2-requirement', slideIndex: 5, icon: FileText, label: "需求" },
      { id: 'task2-process', slideIndex: 6, icon: GitMerge, label: "过程" },
      { id: 'task2-result', slideIndex: 7, icon: Award, label: "结果" }
    ]
  },
  {
    id: 'task3',
    icon: Cpu,
    label: "任务3",
    children: [
      { id: 'task3-requirement', slideIndex: 8, icon: FileText, label: "目标" },
      { id: 'task3-result', slideIndex: 9, icon: BarChart, label: "结果" }
    ]
  },
  { id: 'summary', slideIndex: 10, icon: Award, label: "总结" }
];
```

### 4. 项目生成命令

```bash
# 1. 复制模板
cp -r ~/slides-template llm-benchmark-deepseek-v3
cd llm-benchmark-deepseek-v3

# 2. 应用主题（使用 deepseek 主题）
# 修改 tailwind.config.js 中的颜色为：
# primary-100: '#2563eb'
# primary-200: '#3b82f6'
# primary-300: '#bfdbfe'
# accent-100: '#10b981'
# accent-200: '#065f46'

# 3. 写入数据文件
# 将上面的 SLIDES_DATA 写入 src/data/slidesData.js
# 将 NAV_ITEMS 写入 src/data/navigation.js

# 4. 更新 index.html 标题
# <title>DeepSeek V3 工程能力评测</title>

# 5. 安装并启动
npm install && npm run dev
```
