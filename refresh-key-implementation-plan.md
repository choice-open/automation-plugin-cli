# 实现 `automation plugin refresh-key` 命令的详细计划

## 命令概述
新命令将用于刷新或创建插件开发调试所需的 API Key，主要功能包括：
1. 检查现有访问令牌
2. 从自动化插件 API 获取调试 API Key
3. 管理 .env 文件中的 DEBUG_API_KEY 条目

## 实现步骤

### 1. 创建命令文件
**文件路径**: `src/commands/plugin/refresh-key.ts`

参考现有模式，如 `auth/login.ts` 和 `plugin/init.ts`：

```typescript
import { Command } from "@oclif/core"
import { colorize } from "@oclif/core/ux"
import { dedent } from "ts-dedent"
import { promises as fs } from "node:fs"
import { join } from "node:path"
import * as configStore from "../../utils/config.js"
```

### 2. 命令实现逻辑

#### 步骤 1: 检查访问令牌
```typescript
const config = await configStore.load()
if (!config.auth?.access_token) {
  this.log(colorize("red", "未找到访问令牌。请先运行 'automation auth login'。"))
  return process.exit(1)
}
```

#### 步骤 2: 获取调试 API Key
根据 `specs/hub/debug-api-key.md` 规范：
- 端点: `https://automation-plugin-api.choiceform.io/api/v1/debug_api_key`
- 方法: GET
- 认证: Bearer token
- 响应: `{ api_key: string }`

#### 步骤 3: 管理 .env 文件
- 检查当前目录是否存在 `.env` 文件
- 如果存在，读取并检查是否已有 `DEBUG_API_KEY`
- 更新现有 Key 或追加新 Key
- 保留所有其他内容

### 3. 错误处理
- API 调用时的网络错误
- .env 文件操作的文件系统错误
- 无效的 API 响应

### 4. 用户反馈
- 显示成功获取的 API Key（出于安全考虑进行掩码处理）
- 确认 .env 文件已更新
- 针对常见失败情况提供清晰的错误信息

### 5. 测试
**文件路径**: `test/commands/plugin/refresh-key.test.ts`

测试场景包括：
- 缺少访问令牌的情况
- 成功刷新 API Key
- 创建新的 .env 文件
- 更新现有的 .env 文件（已有 Key）
- 在现有 .env 文件中追加（新 Key）
- API 错误处理

## 架构集成

### 命令发现
由于命令将放置在 `src/commands/plugin/` 目录中，oclif 的基于目录的发现系统将自动识别该命令。

### 依赖关系
- **内部依赖**: `../../utils/config.js` - 用于访问令牌管理
- **外部依赖**: `@oclif/core`, `ts-dedent`, `node:fs`, `node:path`

### 配置
无需额外配置 - 使用配置中的现有认证端点。

## 文件结构
```
src/commands/plugin/
├── index.ts         # 现有命令组入口
├── init.ts          # 现有命令
├── refresh-key.ts   # 新增: 调试 API Key 刷新
└── OVERVIEW.md      # 更新以包含新命令
```

## 命令用法
```bash
automation plugin refresh-key
```

## 成功输出示例
```
✓ 调试 API Key 刷新成功
✓ 已更新 .env 文件中的 DEBUG_API_KEY

您的调试 API Key 已保存到 .env 文件。
Key 预览: abc123...xyz789
```

## 错误输出示例
```
✗ 未找到访问令牌。请先运行 'automation auth login'。
```

```
✗ 刷新调试 API Key 失败: 网络错误
```

```
✗ 更新 .env 文件失败: 权限被拒绝
```