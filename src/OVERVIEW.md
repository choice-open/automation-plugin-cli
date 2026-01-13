# Source Code (src/)

CLI 主要源代码目录。

## 目录结构

```
src/
├── index.ts          # CLI 入口点
├── commands/         # oclif 命令实现
│   ├── auth/         # 认证命令
│   └── plugin/       # 插件管理命令
├── templates/        # 项目脚手架模板
│   ├── common/       # 通用模板
│   └── typescript/   # TypeScript 模板
└── utils/            # 共享工具模块
```

## 入口文件

`index.ts` 极其简洁，仅重导出 oclif 的 `run` 函数：

```typescript
export { run } from "@oclif/core"
```

实际命令发现和路由由 oclif 框架基于 `commands/` 目录结构自动处理。

## 子目录

| 目录 | 描述 | 详情 |
|------|------|------|
| [`commands/`](./commands/OVERVIEW.md) | CLI 命令实现 | oclif 约定式命令 |
| [`templates/`](./templates/OVERVIEW.md) | Eta 模板文件 | 项目脚手架 |
| [`utils/`](./utils/OVERVIEW.md) | 工具函数 | 配置、生成器、主题 |

## 构建输出

通过 `tsc` 编译输出到 `dist/`，结构与 `src/` 镜像。

oclif 配置 (`package.json`):
```json
{
  "oclif": {
    "commands": "./dist/commands"
  }
}
```

## 模块依赖图

```
index.ts
    │
    └──> @oclif/core (run)
    
commands/
    ├── auth/login.ts ──> utils/config.ts
    └── plugin/init.ts ──> utils/generator.ts
                           utils/theme.ts
                               │
                               └──> templates/
```
