/**
 * 幻灯片数据模板
 *
 * 此文件为空模板结构，AI 根据用户需求动态填充内容
 *
 * 完整数据结构参见: skills/slides-generator/schemas/slidesData.schema.md
 */

import {
  GitBranch,
  Bug,
  Bot,
  FileCode,
  Layers,
  Target,
  FileText,
  Zap,
  Shield,
  Users,
  Settings,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
  Star,
  Clock,
  Code,
  Database,
  Globe,
  Cpu,
  Terminal
} from 'lucide-react';

/**
 * 幻灯片数据结构
 *
 * AI 生成时填充以下内容：
 * - hero: 首页信息
 * - framework: 评测框架（可选）
 * - task1, task2, ...: 任务详情
 * - summary: 总结页
 */
export const SLIDES_DATA = {
  // ========================================
  // 首页 (Hero)
  // ========================================
  hero: {
    title: "",           // AI 填充: 主标题
    subtitle: "",        // AI 填充: 副标题
    tagline: "",         // AI 填充: 标语/口号
    tags: [],            // AI 填充: 标签列表
    models: [],          // AI 填充: 参与对比的模型列表（LLM评测场景）
    benchmarks: []       // AI 填充: Benchmark 数据（可选）
    /*
    benchmarks 结构示例:
    [
      {
        name: "Benchmark Name",
        scores: { "Model A": 85, "Model B": 78, "Model C": 92 }
      }
    ]
    */
  },

  // ========================================
  // 评测框架 (Framework) - LLM 评测场景使用
  // ========================================
  framework: {
    title: "",           // AI 填充: 框架标题
    subtitle: "",        // AI 填充: 框架副标题
    dimensions: [],      // AI 填充: 评测维度
    /*
    dimensions 结构示例:
    [
      { icon: GitBranch, title: "维度名称", desc: "维度描述" }
    ]
    */
    flow: {
      title: "",
      steps: []
      /*
      steps 结构示例:
      [
        { icon: FileCode, title: "步骤名称", desc: "步骤描述" }
      ]
      */
    },
    outputs: [],         // AI 填充: 期望输出列表
    nextTasks: []        // AI 填充: 下一步任务预览
    /*
    nextTasks 结构示例:
    [
      { icon: FileCode, title: "任务标题", desc: "任务描述" }
    ]
    */
  },

  // ========================================
  // 任务1 (Task1)
  // ========================================
  task1: {
    title: "",           // AI 填充: 任务标题

    // 评测提示词/需求描述
    prompt: {
      title: "",
      description: "",
      lines: 0,          // 完整内容行数
      preview: "",       // 预览内容（前几行）
      fullContent: ""    // 完整内容
    },

    // 执行过程（可选）
    process: {
      title: "",
      items: []
      /*
      items 结构示例:
      [
        {
          step: 1,
          title: "步骤标题",
          desc: "步骤描述",
          modelPerformance: { "Model A": "表现描述", "Model B": "表现描述" }
        }
      ]
      */
    },

    // 结果对比
    result: {
      title: "",
      highlight: "",     // 核心发现
      comparison: [],    // 模型对比数据
      /*
      comparison 结构示例:
      [
        {
          aspect: "对比维度",
          modelA: { score: 85, detail: "详情" },
          modelB: { score: 78, detail: "详情" }
        }
      ]
      */
      conclusion: ""     // 结论
    }
  },

  // ========================================
  // 任务2 (Task2) - 可选，结构同 Task1
  // ========================================
  task2: null,

  // ========================================
  // 任务3 (Task3) - 可选，结构同 Task1
  // ========================================
  task3: null,

  // ========================================
  // 总结页 (Summary)
  // ========================================
  summary: {
    title: "",           // AI 填充: 总结标题
    keyFindings: [],     // AI 填充: 核心发现
    /*
    keyFindings 结构示例:
    [
      { icon: Award, title: "发现标题", desc: "发现描述" }
    ]
    */
    recommendations: [], // AI 填充: 使用建议
    conclusion: ""       // AI 填充: 最终结论
  },

  // ========================================
  // 定价页 (Pricing) - 产品演示场景使用，可选
  // ========================================
  pricing: null
  /*
  pricing 结构示例:
  {
    title: "定价方案",
    plans: [
      {
        name: "基础版",
        price: "¥99/月",
        features: ["功能1", "功能2"],
        recommended: false
      },
      {
        name: "专业版",
        price: "¥299/月",
        features: ["功能1", "功能2", "功能3"],
        recommended: true
      }
    ]
  }
  */
};

export default SLIDES_DATA;
