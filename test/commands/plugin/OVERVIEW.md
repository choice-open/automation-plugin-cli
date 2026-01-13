# Plugin Command Tests

`plugin` 命令组的单元测试。

## 测试文件

| 文件 | 测试对象 | 覆盖状态 |
|------|----------|----------|
| `index.test.ts` | `plugin` 命令组入口 | ✅ 基础覆盖 |
| `init.test.ts` | `plugin init` 命令 | ⚠️ 部分覆盖 |
| `refresh-key.test.ts` | `plugin refresh-key` 命令 | ✅ 全面覆盖 |
| `checksum.test.ts` | `plugin checksum` 命令 | 🚧 占位测试 |
| `pack.test.ts` | `plugin pack` 命令 | 🚧 占位测试 |
| `permission.test.ts` | `plugin permission` 命令 | 🚧 占位测试 |
| `run.test.ts` | `plugin run` 命令 | 🚧 占位测试 |

## 测试框架

- **Mocha** - 测试运行器
- **Chai** - 断言库
- **@oclif/test** - oclif 命令测试工具

## 测试模式

```typescript
import { runCommand } from "@oclif/test"
import { expect } from "chai"

describe("command", () => {
  it("runs command with args", async () => {
    const { stdout } = await runCommand("plugin subcommand --flag value")
    expect(stdout).to.contain("expected output")
  })
})
```

## 当前测试覆盖

### `init.test.ts`

| 场景 | 状态 |
|------|------|
| `--no-interactive` 无参数 | ✅ 测试错误提示 |
| `--name testing` | ⚠️ 断言为空（需完善） |
| 完整交互流程 | ❌ 未覆盖 |
| 非交互式完整参数 | ❌ 未覆盖 |

### `refresh-key.test.ts`

| 场景 | 状态 |
|------|------|
| 缺少访问令牌 | ✅ 测试错误提示 |
| 访问令牌无效 | ✅ 测试错误处理 |
| 创建新的 .env 文件 | ✅ 覆盖文件操作 |
| 更新现有的 DEBUG_API_KEY | ✅ 覆盖替换逻辑 |
| 在现有文件追加 DEBUG_API_KEY | ✅ 覆盖追加逻辑 |
| 文件权限错误处理 | ✅ 覆盖异常情况 |

### 占位测试 (checksum/pack/permission/run)

当前仅测试命令是否输出 "hello world"，对应命令实现为 scaffold 占位代码。
