# Claude Code Skills

Claude Code skills collection by nanmi.

## 安装

### 1. 添加 Marketplace

```bash
/plugin marketplace add nanmi/claude-code-skills
```

### 2. 安装 Plugin

```bash
/plugin install slides-generator@claude-code-skills
```

### 3. 重启 Claude Code

安装完成后重启 Claude Code 即可使用。

## 包含的 Skills

### slides-generator

自动生成技术演示幻灯片项目。用于创建 LLM 模型评测、技术产品演示、技术报告等场景的交互式幻灯片。

**触发关键词**: "做评测"、"做演示"、"做PPT"、"展示"、"幻灯片"

**支持场景**:
- LLM 模型能力评测
- 技术产品功能演示
- 技术报告与分析
- 工具/框架对比评测

**内置主题**:
| 模型/产品 | 主题 | 主色 |
|-----------|------|------|
| MiniMax / M2.1 | minimax | 红色 #de283b |
| DeepSeek | deepseek | 蓝色 #2563eb |
| Claude / Anthropic | claude | 橙色 #d97706 |
| GPT / OpenAI | openai | 绿色 #10a37f |
| Kimi / Moonshot | moonshot | 紫色 #7c3aed |
| 通用 | tech-blue | 天蓝 #0ea5e9 |

**使用示例**:

```
用户: 帮我做一个 DeepSeek V3 的工程能力评测
```

Claude 会自动：
1. 识别场景类型（LLM 评测）
2. 选择配色主题（deepseek 蓝色）
3. 生成幻灯片内容数据
4. 创建完整的 Vite + React + Tailwind 项目
5. 启动开发服务器预览

## 技术栈

生成的幻灯片项目使用：
- Vite
- React 18
- Tailwind CSS
- Lucide React Icons
- JetBrains Mono Font

## License

Apache-2.0
