# TypeScript Templates

TypeScript 插件项目专用模板。

## 目录结构

```
typescript/
├── package.json.eta      # npm 包配置
├── README.md.eta         # 项目说明
├── tsconfig.json.eta     # TypeScript 配置
├── tsdown.config.ts.eta  # 构建工具配置
├── src/
│   └── main.ts.eta       # 入口文件模板
└── test/
    └── main.test.ts.eta  # 测试文件模板
```

## 生成的项目特性

### 构建工具链

| 工具 | 用途 |
|------|------|
| `tsdown` | TypeScript 构建（基于 esbuild） |
| `vitest` | 单元测试框架 |
| `biome` | 代码格式化与检查 |
| `bumpp` | 版本管理 |

### TypeScript 配置

- 目标: ESNext
- 模块系统: ESM (preserve)
- 严格模式启用
- 仅输出声明文件（bundler 处理 JS）

### 输出格式

- 格式: ESM only
- 平台: neutral
- 输出目录: `dist/`
- 入口: `src/index.ts` → `dist/index.mjs`

## 模板变量

继承 common 模板的所有变量，额外使用：

| 变量 | 描述 |
|------|------|
| `props.version` | 初始版本号 |

## 依赖项

生成的项目包含以下依赖：

**运行时**：
- `zod` - 数据验证

**开发时**：
- `@types/node`, `typescript` - 类型支持
- `tsdown` - 构建
- `vitest` - 测试
- `bumpp` - 版本管理
