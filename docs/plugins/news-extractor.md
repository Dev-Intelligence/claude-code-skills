# news-extractor 插件

新闻站点内容提取。支持微信公众号、今日头条、网易新闻、搜狐新闻、腾讯新闻。

## 触发关键词

- "提取新闻"
- "抓取公众号"
- "爬取新闻"
- "新闻JSON"
- "新闻Markdown"

## 支持平台

| 平台 | ID | URL 示例 |
|------|-----|----------|
| 微信公众号 | wechat | `https://mp.weixin.qq.com/s/xxxxx` |
| 今日头条 | toutiao | `https://www.toutiao.com/article/123456/` |
| 网易新闻 | netease | `https://www.163.com/news/article/ABC123.html` |
| 搜狐新闻 | sohu | `https://www.sohu.com/a/123456_789` |
| 腾讯新闻 | tencent | `https://news.qq.com/rain/a/20251016A07W8J00` |

## 核心功能

| 功能 | 说明 |
|------|------|
| **平台自动检测** | 根据 URL 自动识别新闻平台 |
| **内容提取** | 提取文章标题、作者、发布时间、正文、图片、视频 |
| **JSON 输出** | 结构化 JSON 格式，便于程序处理 |
| **Markdown 输出** | 可读性强的 Markdown 格式 |

## 依赖安装

首次使用前需要安装依赖：

### 使用 uv（推荐）

```bash
cd .claude/skills/news-extractor
uv sync
```

### 使用 pip

```bash
cd .claude/skills/news-extractor
pip install -r requirements.txt
```

## 使用示例

### 基本用法

```bash
# 提取微信公众号文章
uv run scripts/extract_news.py "https://mp.weixin.qq.com/s/ebMzDPu2zMT_mRgYgtL6eQ"

# 仅输出 JSON
uv run scripts/extract_news.py "URL" --format json

# 仅输出 Markdown
uv run scripts/extract_news.py "URL" --format markdown

# 指定输出目录
uv run scripts/extract_news.py "URL" --output ./news

# 列出支持的平台
uv run scripts/extract_news.py --list-platforms
```

### 输出示例

```
[INFO] Platform detected: wechat (微信公众号)
[INFO] Extracting content...
[INFO] Title: 文章标题
[INFO] Author: 公众号名称
[INFO] Text paragraphs: 15
[INFO] Images: 3
[SUCCESS] Saved: ./output/ebMzDPu2zMT_mRgYgtL6eQ.json
[SUCCESS] Saved: ./output/ebMzDPu2zMT_mRgYgtL6eQ.md
```

## 输出格式

### JSON 结构

```json
{
  "title": "文章标题",
  "news_url": "原始链接",
  "news_id": "文章ID",
  "meta_info": {
    "author_name": "作者/来源",
    "author_url": "",
    "publish_time": "2024-01-01 12:00"
  },
  "contents": [
    {"type": "text", "content": "段落文本", "desc": ""},
    {"type": "image", "content": "https://...", "desc": ""},
    {"type": "video", "content": "https://...", "desc": ""}
  ],
  "texts": ["段落1", "段落2"],
  "images": ["图片URL1", "图片URL2"],
  "videos": []
}
```

### Markdown 结构

```markdown
# 文章标题

## 文章信息
**作者**: xxx
**发布时间**: 2024-01-01 12:00
**原文链接**: [链接](URL)

---

## 正文内容

段落内容...

![图片](URL)

---

## 媒体资源
### 图片 (N)
1. URL1
2. URL2
```

## 依赖列表

| 包名 | 用途 |
|------|------|
| pydantic | 数据模型验证 |
| requests | HTTP 请求 |
| curl_cffi | 浏览器模拟抓取 |
| tenacity | 重试机制 |
| parsel | HTML/XPath 解析 |
| demjson3 | 非标准 JSON 解析 |

## 错误处理

| 错误类型 | 说明 | 解决方案 |
|----------|------|----------|
| `无法识别该平台` | URL 不匹配任何支持的平台 | 检查 URL 是否正确 |
| `平台不支持` | 非支持的站点 | 本 Skill 仅支持列出的新闻站点 |
| `提取失败` | 网络错误或页面结构变化 | 重试或检查 URL 有效性 |

## 注意事项

- 仅用于教育和研究目的
- 不要进行大规模爬取
- 尊重目标网站的 robots.txt 和服务条款
- 微信公众号可能需要有效的 Cookie（当前默认配置通常可用）

## 目录结构

```
plugins/news-extractor/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── news-extractor/
        ├── SKILL.md              # Skill 定义文件
        ├── pyproject.toml        # Python 项目配置
        ├── requirements.txt      # Python 依赖
        ├── references/
        │   └── platform-patterns.md
        └── scripts/
            ├── extract_news.py   # CLI 入口
            ├── models.py         # 数据模型
            ├── detector.py       # 平台检测
            ├── formatter.py      # Markdown 格式化
            └── crawlers/         # 爬虫实现
                ├── base.py
                ├── fetchers.py
                ├── wechat.py
                ├── toutiao.py
                ├── netease.py
                ├── sohu.py
                └── tencent.py
```
