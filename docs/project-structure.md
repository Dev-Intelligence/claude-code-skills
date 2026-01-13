# 项目结构

本文档描述 Claude Code Skills Marketplace 的目录结构。

## 整体结构

```
claude-code-skills/
├── .claude-plugin/
│   └── marketplace.json          # Marketplace 配置
├── plugins/
│   ├── slides-generator/         # 幻灯片生成器插件
│   ├── langchain-use/            # LangChain 使用指南插件
│   └── news-extractor/           # 新闻提取插件
├── docs/
│   ├── plugins/                  # 各插件详细文档
│   │   ├── slides-generator.md
│   │   ├── langchain-use.md
│   │   └── news-extractor.md
│   ├── project-structure.md      # 本文档
│   ├── skill-development-guide.md
│   └── local-development-guide.md
├── README.md
├── CLAUDE.md
└── LICENSE
```

## 插件结构详解

### slides-generator 插件

```
plugins/slides-generator/
├── .claude-plugin/
│   └── plugin.json               # 插件清单
└── skills/
    └── slides-generator/
        ├── SKILL.md              # Skill 定义文件
        ├── references/
        │   ├── aesthetics.md     # 设计美学指南
        │   ├── palettes.md       # 76个配色方案
        │   └── principles.md     # 技术设计原则
        └── assets/
            └── template/         # React 模板项目
                ├── index.html
                ├── package.json
                ├── vite.config.js
                ├── tailwind.config.js
                └── src/
                    ├── App.jsx
                    ├── main.jsx
                    ├── index.css
                    └── components/
                        ├── Background.jsx
                        ├── Navigation.jsx
                        └── SlideTransition.jsx
```

### langchain-use 插件

```
plugins/langchain-use/
├── .claude-plugin/
│   └── plugin.json               # 插件清单
└── skills/
    └── langchain-use-skill/
        ├── SKILL.md              # Skill 定义文件
        └── references/
            ├── agents/           # Agent 开发
            ├── tools/            # Tool 定义
            ├── memory/           # 记忆管理
            ├── middleware/       # 中间件扩展
            ├── advanced/         # 高级主题
            ├── integration/      # 集成主题
            └── core-concepts/    # 核心概念
```

### news-extractor 插件

```
plugins/news-extractor/
├── .claude-plugin/
│   └── plugin.json               # 插件清单
└── skills/
    └── news-extractor/
        ├── SKILL.md              # Skill 定义文件
        ├── pyproject.toml        # Python 项目配置
        ├── requirements.txt      # Python 依赖
        ├── references/
        │   └── platform-patterns.md  # 平台 URL 模式
        └── scripts/
            ├── extract_news.py   # CLI 入口
            ├── models.py         # 数据模型
            ├── detector.py       # 平台检测
            ├── formatter.py      # Markdown 格式化
            └── crawlers/         # 爬虫实现
                ├── base.py       # 爬虫基类
                ├── fetchers.py   # HTTP 获取策略
                ├── wechat.py     # 微信公众号
                ├── toutiao.py    # 今日头条
                ├── netease.py    # 网易新闻
                ├── sohu.py       # 搜狐新闻
                └── tencent.py    # 腾讯新闻
```

## Skill 加载层级

1. **YAML frontmatter** (`name`, `description`) - 始终在上下文中
2. **SKILL.md body** - 当 skill 触发时加载
3. **references/** 文件 - Claude 按需读取

## 相关文档

- [Skill 开发指南](skill-development-guide.md)
- [本地开发指南](local-development-guide.md)
