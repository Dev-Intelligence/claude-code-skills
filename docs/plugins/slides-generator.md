# slides-generator 插件

自动生成技术演示幻灯片项目。用于创建 LLM 模型评测、技术产品演示、技术报告等场景的交互式幻灯片。

## 触发关键词

- "做评测"
- "做演示"
- "做PPT"
- "展示"
- "幻灯片"

## 支持场景

- LLM 模型能力评测
- 技术产品功能演示
- 技术报告与分析
- 工具/框架对比评测

## 内置主题

提供 76 个配色方案，部分示例：

| 风格 | 主题ID | 主色 |
|------|--------|------|
| 红青对比 | red-cyan-contrast | #de283b |
| 奶油暖色 | warm-cream | #FF7F50 |
| 深色森林绿 | dark-sage-green | #2E8B57 |
| 科技蓝 | tech-blue | #0ea5e9 |
| 深蓝专业 | blue-professional | #2563eb |
| 赛博朋克 | cyberpunk | #0f0f0f |
| 金色奢华 | gold-luxury | #1e1e1e |
| 中国朱红 | vermilion-chinese | #efd8bb |

更多主题见 `references/palettes.md`

## 交互模式

slides-generator 支持 4 种交互模式，根据你的素材来源选择最适合的方式：

### 模式 1：在线站点素材

从 URL 获取内容：

```
用户: 使用 slides-generator 帮我做一个 PPT，素材来源于 https://codingagent-benchmark.vercel.app

Claude: [访问 URL 获取内容]
Claude: [分析内容结构，提取关键信息]
Claude: [展示大纲] "确认开始生成吗？"
```

**适用场景**：
- 技术博客文章转 PPT
- 产品官网内容提取
- 在线文档转演示

### 模式 2：本地文档素材

从 .md 文件生成：

```
用户: 使用 slides-generator 帮我做一个 PPT，素材来源于 ./docs/report.md

Claude: [读取本地 Markdown 文件]
Claude: [解析文档结构]
Claude: [展示大纲] "确认开始生成吗？"
```

**适用场景**：
- 技术文档转演示
- 周报/月报可视化
- 项目 README 转 PPT

### 模式 3：直接内容素材

直接提供内容：

```
用户: 使用 slides-generator 帮我做一个 PPT，内容如下：
  标题：AI 产品介绍
  功能1：智能对话
  功能2：代码生成
  功能3：图像理解

Claude: [解析用户提供的内容]
Claude: [展示大纲] "确认开始生成吗？"
```

**适用场景**：
- 快速创建简单演示
- 已有结构化内容
- 临时演示需求

### 模式 4：交互式聊天构建（推荐）

问答式收集：

```
用户: 帮我做一个模型工程能力评测

Claude: "好的，我来帮你创建评测 PPT。请告诉我：
  1. 主角模型是什么？
  2. 对比哪些模型？
  3. 您想要什么风格？科技感/专业/活力..."

用户: "主角 Model A，对比 Model B 和 C，专业风格"

Claude: "推荐 blue-professional 主题，有几个评测任务？"

... 继续交互式收集信息 ...

Claude: [展示大纲] "确认开始生成吗？"
```

**适用场景**：
- LLM 模型能力评测
- 技术产品功能演示
- 需要详细定制的演示

## 生成流程

1. 识别场景类型（评测/演示/报告）
2. 收集必要信息（对比模型、任务详情等）
3. 展示 PPT 大纲让用户确认
4. 确认后生成完整的 Vite + React + Tailwind 项目
5. 启动开发服务器预览

## 技术栈

生成的幻灯片项目使用：

- Vite
- React 18
- Tailwind CSS
- Lucide React Icons
- JetBrains Mono Font

## 目录结构

```
plugins/slides-generator/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── slides-generator/
        ├── SKILL.md              # Skill 定义文件
        ├── references/
        │   ├── aesthetics.md     # 设计美学指南
        │   ├── palettes.md       # 76个配色方案
        │   └── principles.md     # 技术设计原则
        └── assets/
            └── template/         # React 模板项目
```
