# 主题配置参考

本文档列出所有预设主题及其配色方案。

## 主题列表

### 1. MiniMax 红色主题 (`minimax`)

适用于 MiniMax 系列模型评测。

```javascript
{
  'primary-100': '#de283b',  // 深红 - 主强调色
  'primary-200': '#ff6366',  // 浅红 - 次强调色
  'primary-300': '#ffccc4',  // 粉红 - 背景装饰
  'accent-100': '#25b1bf',   // 青色 - 对比强调
  'accent-200': '#005461',   // 深青 - 文字
  'text-100': '#1a1a1a',     // 主文字
  'text-200': '#404040',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f5f5f5',       // 次背景
  'bg-300': '#cccccc',       // 边框
}
```

---

### 2. DeepSeek 蓝色主题 (`deepseek`)

适用于 DeepSeek 系列模型评测。

```javascript
{
  'primary-100': '#2563eb',  // 深蓝 - 主强调色
  'primary-200': '#3b82f6',  // 中蓝 - 次强调色
  'primary-300': '#bfdbfe',  // 浅蓝 - 背景装饰
  'accent-100': '#10b981',   // 绿色 - 对比强调
  'accent-200': '#065f46',   // 深绿 - 文字
  'text-100': '#0f172a',     // 主文字
  'text-200': '#475569',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f1f5f9',       // 次背景
  'bg-300': '#cbd5e1',       // 边框
}
```

---

### 3. Claude 橙色主题 (`claude`)

适用于 Claude/Anthropic 模型评测。

```javascript
{
  'primary-100': '#d97706',  // 橙色 - 主强调色
  'primary-200': '#f59e0b',  // 浅橙 - 次强调色
  'primary-300': '#fef3c7',  // 淡黄 - 背景装饰
  'accent-100': '#7c3aed',   // 紫色 - 对比强调
  'accent-200': '#5b21b6',   // 深紫 - 文字
  'text-100': '#1c1917',     // 主文字
  'text-200': '#57534e',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#fafaf9',       // 次背景
  'bg-300': '#d6d3d1',       // 边框
}
```

---

### 4. OpenAI 绿色主题 (`openai`)

适用于 GPT/OpenAI 模型评测。

```javascript
{
  'primary-100': '#10a37f',  // OpenAI 绿 - 主强调色
  'primary-200': '#34d399',  // 浅绿 - 次强调色
  'primary-300': '#d1fae5',  // 淡绿 - 背景装饰
  'accent-100': '#1d4ed8',   // 蓝色 - 对比强调
  'accent-200': '#1e3a8a',   // 深蓝 - 文字
  'text-100': '#111827',     // 主文字
  'text-200': '#4b5563',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f9fafb',       // 次背景
  'bg-300': '#d1d5db',       // 边框
}
```

---

### 5. Moonshot/Kimi 紫色主题 (`moonshot`)

适用于 Kimi/Moonshot 模型评测。

```javascript
{
  'primary-100': '#7c3aed',  // 紫色 - 主强调色
  'primary-200': '#a78bfa',  // 浅紫 - 次强调色
  'primary-300': '#ede9fe',  // 淡紫 - 背景装饰
  'accent-100': '#ec4899',   // 粉色 - 对比强调
  'accent-200': '#be185d',   // 深粉 - 文字
  'text-100': '#1e1b4b',     // 主文字
  'text-200': '#6366f1',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#faf5ff',       // 次背景
  'bg-300': '#c4b5fd',       // 边框
}
```

---

### 6. 科技蓝主题 (`tech-blue`)

通用科技风格，适用于各类技术产品演示。

```javascript
{
  'primary-100': '#0ea5e9',  // 天蓝 - 主强调色
  'primary-200': '#38bdf8',  // 浅蓝 - 次强调色
  'primary-300': '#e0f2fe',  // 淡蓝 - 背景装饰
  'accent-100': '#6366f1',   // 靛蓝 - 对比强调
  'accent-200': '#4338ca',   // 深靛蓝 - 文字
  'text-100': '#0c4a6e',     // 主文字
  'text-200': '#0369a1',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f0f9ff',       // 次背景
  'bg-300': '#bae6fd',       // 边框
}
```

---

### 7. 中性灰主题 (`neutral`)

适用于多模型对比、横向评测等需要保持中立的场景。

```javascript
{
  'primary-100': '#6b7280',  // 灰色 - 主强调色
  'primary-200': '#9ca3af',  // 浅灰 - 次强调色
  'primary-300': '#e5e7eb',  // 淡灰 - 背景装饰
  'accent-100': '#3b82f6',   // 蓝色 - 对比强调（点缀）
  'accent-200': '#1d4ed8',   // 深蓝 - 文字
  'text-100': '#111827',     // 主文字
  'text-200': '#6b7280',     // 次文字
  'bg-100': '#ffffff',       // 主背景
  'bg-200': '#f9fafb',       // 次背景
  'bg-300': '#d1d5db',       // 边框
}
```

---

## 主题选择指南

| 场景 | 推荐主题 | 原因 |
|------|----------|------|
| MiniMax 模型评测 | `minimax` | 品牌色一致 |
| DeepSeek 模型评测 | `deepseek` | 品牌色一致 |
| Claude 模型评测 | `claude` | 品牌色一致 |
| GPT/OpenAI 评测 | `openai` | 品牌色一致 |
| Kimi 模型评测 | `moonshot` | 品牌色一致 |
| 多模型横向对比 | `neutral` | 保持中立 |
| 通用产品演示 | `tech-blue` | 专业科技感 |
| 不确定 | `tech-blue` | 安全的默认选择 |

---

## 自定义主题

如果预设主题不满足需求，可以自定义：

```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // 修改以下 10 个值
        'primary-100': '#你的主色',
        'primary-200': '#你的浅主色',
        'primary-300': '#你的背景装饰色',
        'accent-100': '#你的强调色',
        'accent-200': '#你的深强调色',
        'text-100': '#你的主文字色',
        'text-200': '#你的次文字色',
        'bg-100': '#你的主背景色',
        'bg-200': '#你的次背景色',
        'bg-300': '#你的边框色',
      },
    },
  },
}
```

**建议**：
- `primary-100` 应该是最醒目的颜色，用于重要标题和按钮
- `primary-300` 应该是非常浅的颜色，用于大面积背景
- `accent-100` 应该与 `primary-100` 形成对比，用于次要强调
- `text-100` 和 `bg-100` 应该有足够的对比度（建议 > 4.5:1）
