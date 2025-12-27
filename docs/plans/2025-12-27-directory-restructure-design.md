# 目录结构重构设计方案

**日期**: 2025-12-27
**状态**: 待实施
**作者**: Claude Code (Brainstorming Session)

## 背景

当前项目目录结构存在以下问题：
1. `plugins/slides-generator/` 多余的嵌套层
2. 两层 `.claude-plugin/` 配置（marketplace.json + plugin.json）
3. `templates/` 非标准目录命名
4. Skill 内部目录不符合官方规范

## 设计目标

- 符合 Claude Code 官方 Plugin/Skill 规范
- 支持未来添加多个 Skill（多 Skill 集合模式）
- 简化配置，减少维护成本
- 保持用户安装体验不变

## 新目录结构

```
claude-code-skills/
├── .claude-plugin/
│   └── marketplace.json              # 唯一配置文件
├── skills/
│   └── slides-generator/
│       ├── SKILL.md                  # Skill 定义 (必需)
│       ├── references/               # Claude 按需读取的参考文档
│       │   ├── palettes.md           # 76个配色方案
│       │   ├── examples/
│       │   │   ├── llm-benchmark.md
│       │   │   └── product-demo.md
│       │   └── schemas/
│       │       └── slidesData.schema.md
│       ├── scripts/                  # 可执行脚本
│       │   └── generate.js
│       └── assets/
│           └── template/             # React 模板项目
│               ├── package.json
│               ├── src/
│               ├── index.html
│               └── ...
├── docs/
│   └── plans/                        # 设计文档
├── README.md
├── LICENSE
└── .gitignore
```

## 目录映射

| 原路径 | 新路径 | 说明 |
|--------|--------|------|
| `plugins/slides-generator/skills/slides-generator/SKILL.md` | `skills/slides-generator/SKILL.md` | Skill 定义 |
| `plugins/slides-generator/skills/slides-generator/themes/` | `skills/slides-generator/references/` | 配色方案 |
| `plugins/slides-generator/skills/slides-generator/examples/` | `skills/slides-generator/references/examples/` | 示例文档 |
| `plugins/slides-generator/skills/slides-generator/schemas/` | `skills/slides-generator/references/schemas/` | 数据结构 |
| `plugins/slides-generator/templates/slides-template/scripts/generate.js` | `skills/slides-generator/scripts/generate.js` | 生成脚本 |
| `plugins/slides-generator/templates/slides-template/` | `skills/slides-generator/assets/template/` | React 模板 |
| `plugins/slides-generator/.claude-plugin/plugin.json` | (删除) | 合并到 marketplace.json |

## marketplace.json 配置

```json
{
  "name": "claude-code-skills",
  "owner": {
    "name": "NanmiCoder"
  },
  "metadata": {
    "description": "Claude Code skills collection by 程序员阿江-Relakkes",
    "version": "1.0.0"
  },
  "plugins": [
    {
      "name": "slides-generator",
      "description": "自动生成技术演示幻灯片项目。用于创建 LLM 模型评测、技术产品演示、技术报告等场景的交互式幻灯片。",
      "source": "./",
      "strict": false,
      "skills": [
        "./skills/slides-generator"
      ]
    }
  ]
}
```

### 未来扩展

添加新 Skill 时，只需：
1. 在 `skills/` 下创建新目录
2. 在 `marketplace.json` 的 `skills` 数组中追加路径

```json
"skills": [
  "./skills/slides-generator",
  "./skills/code-reviewer",      // 新增
  "./skills/doc-generator"       // 新增
]
```

## 迁移步骤

```bash
# 1. 创建新目录结构
mkdir -p skills/slides-generator/references/examples
mkdir -p skills/slides-generator/references/schemas
mkdir -p skills/slides-generator/scripts
mkdir -p skills/slides-generator/assets

# 2. 移动文件
mv plugins/slides-generator/skills/slides-generator/SKILL.md skills/slides-generator/
mv plugins/slides-generator/skills/slides-generator/themes/palettes.md skills/slides-generator/references/
mv plugins/slides-generator/skills/slides-generator/examples/* skills/slides-generator/references/examples/
mv plugins/slides-generator/skills/slides-generator/schemas/* skills/slides-generator/references/schemas/
mv plugins/slides-generator/templates/slides-template/scripts/generate.js skills/slides-generator/scripts/
mv plugins/slides-generator/templates/slides-template skills/slides-generator/assets/template

# 3. 更新配置文件
# - 更新 .claude-plugin/marketplace.json
# - 更新 SKILL.md 中的路径引用
# - 更新 scripts/generate.js 中的路径引用

# 4. 清理旧目录
rm -rf plugins/

# 5. 更新 README.md
```

## 需要更新的路径引用

### SKILL.md
```markdown
# 之前
详见 [themes/palettes.md](themes/palettes.md)

# 之后
详见 [references/palettes.md](references/palettes.md)
```

### scripts/generate.js
检查并更新所有模板路径引用，确保指向新的 `assets/template/` 位置。

## 兼容性

- **安装命令不变**: `/plugin marketplace add NanmiCoder/claude-code-skills`
- **插件名不变**: `slides-generator@claude-code-skills`
- **用户体验无变化**: 只是内部结构更规范

## 参考资料

- [Claude Code Skills 官方文档](https://code.claude.com/docs/en/skills)
- [Claude Code Plugins 官方文档](https://code.claude.com/docs/en/plugins)
- [anthropics/skills 仓库结构](https://github.com/anthropics/skills)
- [DeepWiki - Marketplace and Plugin System](https://deepwiki.com/anthropics/skills/2.3-marketplace-and-plugin-system)
