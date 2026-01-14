# Commands

CLI 命令实现目录，采用 oclif 框架的目录约定式命令发现机制。

## 目录结构

```
commands/
├── auth/           # 认证相关命令
│   ├── index.ts    # auth 命令组入口
│   └── login.ts    # 设备授权登录
└── plugin/         # 插件管理命令
    ├── index.ts    # plugin 命令组入口
    ├── init.ts     # 初始化插件项目
    ├── checksum.ts # 校验和计算 (待实现)
    ├── pack.ts     # 打包 (待实现)
    ├── permission.ts # 权限管理 (待实现)
    └── run.ts      # 本地运行 (待实现)
```

## 命令映射

| 命令 | 文件 | 描述 |
|------|------|------|
| `atomemo auth login` | `auth/login.ts` | OAuth 2.0 设备授权登录 |
| `atomemo plugin init` | `plugin/init.ts` | 交互式创建新插件 |
| `atomemo plugin checksum` | `plugin/checksum.ts` | 计算插件校验和 |
| `atomemo plugin pack` | `plugin/pack.ts` | 打包插件 |
| `atomemo plugin permission` | `plugin/permission.ts` | 管理权限 |
| `atomemo plugin run` | `plugin/run.ts` | 本地运行调试 |

## 子目录

- [`auth/`](./auth/OVERVIEW.md) - 认证命令
- [`plugin/`](./plugin/OVERVIEW.md) - 插件管理命令

## 命令开发规范

所有命令继承自 `@oclif/core` 的 `Command` 基类，需定义：

- `description` - 命令描述
- `examples` - 使用示例
- `flags` - 命令参数
- `run()` - 执行逻辑
