# Tests

单元测试目录。

## 目录结构

```
test/
├── tsconfig.json       # 测试专用 TypeScript 配置
├── commands/           # 命令测试
│   └── plugin/         # plugin 命令组
└── utils/              # 工具模块测试
    └── config.test.ts
```

## 测试栈

| 工具 | 用途 |
|------|------|
| Mocha | 测试运行器 |
| Chai | 断言库 (expect 风格) |
| @oclif/test | oclif 命令测试辅助 |
| ts-node | TypeScript 直接执行 |

## 运行测试

```bash
npm test           # 运行所有测试
npm run posttest   # 测试后运行 biome check
```

测试命令配置:
```bash
mocha --forbid-only "test/**/*.test.ts"
```

## 子目录

| 目录 | 描述 | 详情 |
|------|------|------|
| [`commands/`](./commands/OVERVIEW.md) | 命令测试 | 覆盖 plugin 命令组 |
| [`utils/`](./utils/OVERVIEW.md) | 工具测试 | config 模块全覆盖 |

## 测试覆盖概况

| 模块 | 覆盖率 |
|------|--------|
| `utils/config.ts` | ✅ 高 |
| `commands/plugin/init.ts` | ⚠️ 中 |
| `commands/plugin/index.ts` | ⚠️ 低 |
| `commands/plugin/*.ts` (其他) | 🚧 占位 |
| `commands/auth/*` | ❌ 无 |
| `utils/generator.ts` | ❌ 无 |

## 待改进

1. 添加 `auth login` 命令测试（需 mock 网络请求）
2. 完善 `plugin init` 交互模式测试
3. 添加 `generator.ts` 单元测试
4. 实现 `checksum/pack/permission/run` 真实功能后更新测试
