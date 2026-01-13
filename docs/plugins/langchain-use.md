# langchain-use 插件

LangChain 1.0 使用指南。提供 Agent、Tool、Memory、Middleware 等核心概念的快速参考，帮助开发者快速构建 AI Agent 应用。

## 触发关键词

- "LangChain"
- "创建 Agent"
- "AI Agent"
- "集成 LangChain"

## 支持场景

- 创建 AI Agent 和智能应用
- LangChain 核心概念快速参考
- 解决 LangChain 相关问题
- Agent、Tool、Memory、Middleware 开发

## 核心功能

| 功能 | 说明 |
|------|------|
| **Agent 创建** | 快速创建基于 LangGraph 的智能体 |
| **工具定义** | 使用 @tool 装饰器定义自定义工具 |
| **记忆管理** | 短期会话记忆 (InMemorySaver) 和长期持久化存储 (PostgresSaver) |
| **中间件扩展** | @before_model、@after_model、@wrap_tool_call 等钩子 |
| **结构化输出** | Pydantic/dataclass 输出格式 |
| **Streaming** | 实时流式更新 |
| **Runtime Context** | ToolRuntime 访问 state、context、store |

## 快速示例

### 基础 Agent

```python
from langchain.agents import create_agent
from langchain.tools import tool

@tool
def get_weather(city: str) -> str:
    """Get weather for a given city."""
    return f"It's sunny in {city}!"

agent = create_agent(
    model="claude-sonnet-4-5-20250929",
    tools=[get_weather],
    system_prompt="You are a helpful assistant",
)

result = agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather in sf"}]}
)
```

### 带记忆的 Agent

```python
from langgraph.checkpoint.memory import InMemorySaver

checkpointer = InMemorySaver()
agent = create_agent(
    model="claude-sonnet-4-5-20250929",
    tools=[get_weather],
    checkpointer=checkpointer,
)

# 使用 thread_id 保持会话
config = {"configurable": {"thread_id": "user-123"}}
result = agent.invoke({"messages": [...]}, config)
```

### 结构化输出

```python
from pydantic import BaseModel

class WeatherResponse(BaseModel):
    city: str
    temperature: float
    condition: str

agent = create_agent(
    model="claude-sonnet-4-5-20250929",
    tools=[get_weather],
    response_format=WeatherResponse,
)
```

## 技术栈

- Python 3.10+
- LangChain 1.0
- LangGraph
- Anthropic Claude / OpenAI models

## 参考文档

| 目录 | 内容 |
|------|------|
| `references/agents/` | Agent 开发指南 |
| `references/tools/` | Tool 定义与使用 |
| `references/memory/` | 短期/长期记忆管理 |
| `references/middleware/` | 中间件开发 |
| `references/advanced/` | 高级特性 (Streaming、Guardrails、MCP) |
| `references/integration/` | 模型集成、消息处理、RAG |

## 目录结构

```
plugins/langchain-use/
├── .claude-plugin/
│   └── plugin.json
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
