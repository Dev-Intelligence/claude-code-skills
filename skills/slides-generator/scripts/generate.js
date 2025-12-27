#!/usr/bin/env node

/**
 * 幻灯片项目生成脚本
 * 通用配色系统，不绑定特定品牌
 *
 * 用法：
 *   node scripts/generate.js <项目名称> [--theme=<主题>]
 *
 * 示例：
 *   node scripts/generate.js tech-demo --theme=tech-blue
 *   node scripts/generate.js product-showcase --theme=cyberpunk
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TEMPLATE_ROOT = path.resolve(__dirname, '..', 'assets', 'template');

// 通用主题配置（从 themes/index.js 同步）
const THEMES = {
  'red-vibrant': {
    name: "红色活力",
    tags: ["红色", "活力", "对比"],
    colors: {
      'primary-100': '#de283b',
      'primary-200': '#ff6366',
      'primary-300': '#ffccc4',
      'accent-100': '#25b1bf',
      'accent-200': '#005461',
      'text-100': '#1a1a1a',
      'text-200': '#404040',
      'bg-100': '#ffffff',
      'bg-200': '#f5f5f5',
      'bg-300': '#cccccc',
    }
  },
  'blue-professional': {
    name: "深蓝专业",
    tags: ["蓝色", "专业", "商务"],
    colors: {
      'primary-100': '#2563eb',
      'primary-200': '#3b82f6',
      'primary-300': '#bfdbfe',
      'accent-100': '#10b981',
      'accent-200': '#065f46',
      'text-100': '#0f172a',
      'text-200': '#475569',
      'bg-100': '#ffffff',
      'bg-200': '#f1f5f9',
      'bg-300': '#cbd5e1',
    }
  },
  'orange-warm': {
    name: "橙色温暖",
    tags: ["橙色", "温暖", "活力"],
    colors: {
      'primary-100': '#d97706',
      'primary-200': '#f59e0b',
      'primary-300': '#fef3c7',
      'accent-100': '#7c3aed',
      'accent-200': '#5b21b6',
      'text-100': '#1c1917',
      'text-200': '#57534e',
      'bg-100': '#ffffff',
      'bg-200': '#fafaf9',
      'bg-300': '#d6d3d1',
    }
  },
  'green-nature': {
    name: "绿色自然",
    tags: ["绿色", "自然", "环保"],
    colors: {
      'primary-100': '#10a37f',
      'primary-200': '#34d399',
      'primary-300': '#d1fae5',
      'accent-100': '#1d4ed8',
      'accent-200': '#1e3a8a',
      'text-100': '#111827',
      'text-200': '#4b5563',
      'bg-100': '#ffffff',
      'bg-200': '#f9fafb',
      'bg-300': '#d1d5db',
    }
  },
  'purple-elegant': {
    name: "紫色优雅",
    tags: ["紫色", "浪漫", "优雅"],
    colors: {
      'primary-100': '#7c3aed',
      'primary-200': '#a78bfa',
      'primary-300': '#ede9fe',
      'accent-100': '#ec4899',
      'accent-200': '#be185d',
      'text-100': '#1e1b4b',
      'text-200': '#6366f1',
      'bg-100': '#ffffff',
      'bg-200': '#faf5ff',
      'bg-300': '#c4b5fd',
    }
  },
  'tech-blue': {
    name: "科技蓝",
    tags: ["蓝色", "科技", "现代"],
    colors: {
      'primary-100': '#0ea5e9',
      'primary-200': '#38bdf8',
      'primary-300': '#e0f2fe',
      'accent-100': '#6366f1',
      'accent-200': '#4338ca',
      'text-100': '#0c4a6e',
      'text-200': '#0369a1',
      'bg-100': '#ffffff',
      'bg-200': '#f0f9ff',
      'bg-300': '#bae6fd',
    }
  },
  'neutral-gray': {
    name: "中性灰",
    tags: ["灰色", "中性", "对比"],
    colors: {
      'primary-100': '#6b7280',
      'primary-200': '#9ca3af',
      'primary-300': '#e5e7eb',
      'accent-100': '#3b82f6',
      'accent-200': '#1d4ed8',
      'text-100': '#111827',
      'text-200': '#6b7280',
      'bg-100': '#ffffff',
      'bg-200': '#f9fafb',
      'bg-300': '#d1d5db',
    }
  },
  'dark-sapphire': {
    name: "深蓝宝石",
    tags: ["深色", "蓝色", "专业", "科技"],
    colors: {
      'primary-100': '#1f3a5f',
      'primary-200': '#4d648d',
      'primary-300': '#3d5a80',
      'accent-100': '#cee8ff',
      'accent-200': '#a0c4e8',
      'text-100': '#cee8ff',
      'text-200': '#a0c4e8',
      'bg-100': '#0f1c2e',
      'bg-200': '#162438',
      'bg-300': '#1f3a5f',
    }
  },
  'cyberpunk': {
    name: "赛博朋克",
    tags: ["霓虹", "赛博朋克", "科幻", "未来"],
    colors: {
      'primary-100': '#ff6b6b',
      'primary-200': '#dd4d51',
      'primary-300': '#ff9999',
      'accent-100': '#00ffff',
      'accent-200': '#00999b',
      'text-100': '#ffffff',
      'text-200': '#cccccc',
      'bg-100': '#0f0f0f',
      'bg-200': '#1a1a1a',
      'bg-300': '#333333',
    }
  },
  'neon-purple': {
    name: "霓虹紫",
    tags: ["霓虹", "紫色", "夜店", "科幻"],
    colors: {
      'primary-100': '#6c35de',
      'primary-200': '#a364ff',
      'primary-300': '#cb80ff',
      'accent-100': '#ff00ff',
      'accent-200': '#b300b2',
      'text-100': '#ffffff',
      'text-200': '#d4d4d4',
      'bg-100': '#241b35',
      'bg-200': '#2d2345',
      'bg-300': '#373737',
    }
  },
  'summer-meadow': {
    name: "夏日草地",
    tags: ["自然", "夏季", "草地", "绿色"],
    colors: {
      'primary-100': '#8fbf9f',
      'primary-200': '#68a67d',
      'primary-300': '#b8d4c3',
      'accent-100': '#f18f01',
      'accent-200': '#833500',
      'text-100': '#2d4a3e',
      'text-200': '#4a6b5d',
      'bg-100': '#f5ecd7',
      'bg-200': '#ebe3ce',
      'bg-300': '#d4cbb8',
    }
  },
  'gold-luxury': {
    name: "金色奢华",
    tags: ["金色", "奢华", "高端"],
    colors: {
      'primary-100': '#ffd700',
      'primary-200': '#ddb900',
      'primary-300': '#fff4b3',
      'accent-100': '#c49216',
      'accent-200': '#5e3b00',
      'text-100': '#ffd700',
      'text-200': '#ddb900',
      'bg-100': '#1e1e1e',
      'bg-200': '#2a2a2a',
      'bg-300': '#3a3a3a',
    }
  },
  'vermilion-chinese': {
    name: "中国朱红",
    tags: ["中国风", "朱红", "金色", "传统"],
    colors: {
      'primary-100': '#c74331',
      'primary-200': '#8b2f22',
      'primary-300': '#e8a089',
      'accent-100': '#f2c335',
      'accent-200': '#c2950c',
      'text-100': '#4a2c20',
      'text-200': '#6b4a3e',
      'bg-100': '#efd8bb',
      'bg-200': '#e5cba8',
      'bg-300': '#d4b894',
    }
  },
  'minimal-bw': {
    name: "极简黑白",
    tags: ["极简", "黑白", "经典"],
    colors: {
      'primary-100': '#000000',
      'primary-200': '#333333',
      'primary-300': '#666666',
      'accent-100': '#7f7f7f',
      'accent-200': '#4a4a4a',
      'text-100': '#000000',
      'text-200': '#4a4a4a',
      'bg-100': '#ffffff',
      'bg-200': '#f5f5f5',
      'bg-300': '#e0e0e0',
    }
  },
  'banking-trust': {
    name: "金融信任",
    tags: ["专业", "银行", "金融", "信任"],
    colors: {
      'primary-100': '#0070c0',
      'primary-200': '#004e86',
      'primary-300': '#b3d4f0',
      'accent-100': '#ffc000',
      'accent-200': '#b38600',
      'text-100': '#1a1a1a',
      'text-200': '#4a4a4a',
      'bg-100': '#f5f5f5',
      'bg-200': '#ebebeb',
      'bg-300': '#d1d1d1',
    }
  }
};

/**
 * 递归复制目录
 */
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * 生成 Tailwind 配置内容
 */
function generateTailwindConfig(themeName) {
  const theme = THEMES[themeName] || THEMES['tech-blue'];

  return `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        'primary-100': '${theme.colors['primary-100']}',
        'primary-200': '${theme.colors['primary-200']}',
        'primary-300': '${theme.colors['primary-300']}',
        'accent-100': '${theme.colors['accent-100']}',
        'accent-200': '${theme.colors['accent-200']}',
        'text-100': '${theme.colors['text-100']}',
        'text-200': '${theme.colors['text-200']}',
        'bg-100': '${theme.colors['bg-100']}',
        'bg-200': '${theme.colors['bg-200']}',
        'bg-300': '${theme.colors['bg-300']}',
      },
    },
  },
  plugins: [],
}`;
}

/**
 * 获取主题列表
 */
function getThemeList() {
  return Object.keys(THEMES).join('|');
}

/**
 * 解析命令行参数
 */
function parseArgs(args) {
  const result = {
    projectName: null,
    theme: 'tech-blue',
    title: null
  };

  for (const arg of args) {
    if (arg.startsWith('--theme=')) {
      result.theme = arg.split('=')[1];
    } else if (arg.startsWith('--title=')) {
      result.title = arg.split('=')[1];
    } else if (!arg.startsWith('--')) {
      result.projectName = arg;
    }
  }

  return result;
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
幻灯片项目生成器

用法：
  node scripts/generate.js <项目名称> [选项]

选项：
  --theme=<主题>    主题名称 (${getThemeList()})
  --title=<标题>    项目标题（用于 index.html）
  --help            显示帮助信息

可用主题：
${Object.entries(THEMES).map(([id, t]) => `  ${id.padEnd(20)} ${t.name} (${t.tags.join(', ')})`).join('\n')}

示例：
  node scripts/generate.js tech-demo --theme=tech-blue
  node scripts/generate.js product-showcase --theme=cyberpunk --title="产品展示"
    `);
    process.exit(0);
  }

  const config = parseArgs(args);

  if (!config.projectName) {
    console.error('错误：请提供项目名称');
    process.exit(1);
  }

  const targetPath = path.resolve(process.cwd(), config.projectName);

  // 检查目标目录是否存在
  if (fs.existsSync(targetPath)) {
    console.error(`错误：目录 ${config.projectName} 已存在`);
    process.exit(1);
  }

  console.log(`\n🚀 开始创建项目: ${config.projectName}`);
  console.log(`   主题: ${config.theme} (${THEMES[config.theme]?.name || '自定义'})`);

  try {
    // 1. 创建目标目录
    fs.mkdirSync(targetPath, { recursive: true });

    // 2. 复制模板文件
    console.log('\n📁 复制模板文件...');

    const filesToCopy = [
      'package.json',
      'vite.config.js',
      'postcss.config.js',
      'index.html'
    ];

    for (const file of filesToCopy) {
      const src = path.join(TEMPLATE_ROOT, file);
      const dest = path.join(targetPath, file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`   ✓ ${file}`);
      }
    }

    // 复制 src 目录
    const srcDir = path.join(TEMPLATE_ROOT, 'src');
    if (fs.existsSync(srcDir)) {
      copyDirSync(srcDir, path.join(targetPath, 'src'));
      console.log(`   ✓ src/`);
    }

    // 3. 应用主题
    console.log('\n🎨 应用主题...');
    const tailwindConfig = generateTailwindConfig(config.theme);
    fs.writeFileSync(
      path.join(targetPath, 'tailwind.config.js'),
      tailwindConfig
    );
    console.log(`   ✓ tailwind.config.js (${THEMES[config.theme]?.name || config.theme})`);

    // 4. 更新 index.html 标题（如果提供）
    if (config.title) {
      console.log('\n📝 更新标题...');
      const indexPath = path.join(targetPath, 'index.html');
      let indexContent = fs.readFileSync(indexPath, 'utf-8');
      indexContent = indexContent.replace(
        /<title>.*<\/title>/,
        `<title>${config.title}</title>`
      );
      fs.writeFileSync(indexPath, indexContent);
      console.log(`   ✓ index.html`);
    }

    // 5. 提示后续步骤
    console.log(`
✅ 项目创建成功！

后续步骤：
  1. cd ${config.projectName}
  2. 修改 src/data/slidesData.js（填入你的内容）
  3. 修改 src/data/navigation.js（如需调整导航）
  4. npm install
  5. npm run dev

提示：
  - 配色参考: references/palettes.md
  - 更多主题可从 palettes.md 选取
`);

  } catch (error) {
    console.error('\n❌ 创建失败:', error.message);
    process.exit(1);
  }
}

main();
