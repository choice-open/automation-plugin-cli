# Command Tests

CLI 命令的单元测试目录，结构镜像 `src/commands/`。

## 目录结构

```
commands/
└── plugin/           # plugin 命令组测试
    ├── index.test.ts
    ├── init.test.ts
    ├── checksum.test.ts
    ├── pack.test.ts
    ├── permission.test.ts
    └── run.test.ts
```

## 子目录

- [`plugin/`](./plugin/OVERVIEW.md) - 插件命令测试

## 缺失测试

| 命令 | 状态 |
|------|------|
| `auth login` | ❌ 无测试文件 |
| `auth` (index) | ❌ 无测试文件 |

## 测试约定

- 测试文件命名: `{command}.test.ts`
- 测试命令通过 `@oclif/test` 的 `runCommand()` 执行
- 验证 stdout 输出内容
