# Plugin Commands

插件管理命令模块，提供插件完整生命周期管理。

## 模块列表

| 文件 | 描述 | 状态 |
|------|------|------|
| `index.ts` | 命令组入口，显示帮助信息（隐藏命令） | ✅ 完成 |
| `init.ts` | 交互式初始化新插件项目 | ✅ 完成 |
| `checksum.ts` | 计算插件包校验和 | 🚧 待实现 |
| `pack.ts` | 打包插件 | 🚧 待实现 |
| `permission.ts` | 管理插件权限 | 🚧 待实现 |
| `run.ts` | 本地运行/调试插件 | 🚧 待实现 |

## 核心功能

### `init.ts` - 插件初始化

提供交互式和非交互式两种模式创建新插件项目。

**收集信息**：
- `name` - 插件名称（4-64字符，小写字母开头）
- `description` - 简短描述（16-256字符）
- `author` / `email` - 作者信息
- `url` - 仓库地址（可选）
- `locales` - 支持的语言（en_US 必选）
- `language` - 开发语言（elixir/python/typescript）
- `type` - 插件类型（extension/llm/tool/trigger）

**插件类型说明**：
| 类型 | 用途 |
|------|------|
| Extension | 集成外部 API 扩展平台能力 |
| Model (LLM) | 引入更多大语言模型 |
| Tool | 执行特定任务，供 LLM/Agent 调用 |
| Trigger | 通过 Webhook 接收事件启动工作流 |

## 依赖关系

- **内部依赖**:
  - [`../../utils/generator.js`](../../utils/OVERVIEW.md) - 代码生成器
  - [`../../utils/theme.js`](../../utils/OVERVIEW.md) - UI 主题配置
- **外部依赖**: `@inquirer/*`, `@oclif/core`, `zod`
