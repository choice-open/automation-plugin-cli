# Agents.md

此文件为在此仓库中工作的智能体代理提供指南。

## 构建与测试命令

### 构建

```bash
npm run build
# 使用 shx rm -rf dist && tsc --build
```

### 代码检查与格式化

```bash
npm run check
# 使用 biome check --write 自动修复问题
```

### 测试

```bash
npm test
# 运行所有测试: mocha --forbid-only "test/**/*.test.ts"
# 测试后会自动运行 npm run check
```

### 单个测试

```bash
npx mocha test/path/to/test.test.ts
# 例如: npx mocha test/commands/plugin/init.test.ts
```

## 代码风格指南

### 导入

- 使用 `node:` 前缀导入 Node.js 模块：`import { readFile } from "node:fs"`
- 第三方包直接导入：`import { Command } from "@oclif/core"`
- 本地模块使用 `.js` 扩展名：`import * as config from "./config.js"`
- 按类型分组导入：第三方包 -> 本地模块

### 格式化

- 缩进：2 个空格
- 分号：按需
- 使用 Biome 进行自动格式化

### TypeScript

- 严格模式已启用（tsconfig.json）
- 优先使用 `interface` 定义对象结构，`type` 定义联合类型
- 函数参数和返回值显式声明类型
- 使用 Zod 进行运行时验证：`const ConfigSchema = z.object({...})`

### 命名约定

- 类名：PascalCase（如 `AuthLogin`、`PluginInit`）
- 函数/变量：camelCase（如 `getConfigDir`、`createPluginGenerator`）
- 常量：UPPER_SNAKE_CASE（如 `LOCALES`、`LANGUAGES`）
- 私有字段：`private` 关键字或 `#` 前缀（如 `#generateFiles`）
- 文件名：kebab-case（如 `auth-login.ts`、`plugin-init.ts`）

### 命令结构

- 所有命令继承自 `@oclif/core` 的 `Command` 类
- 使用 `Flags` 定义命令行选项
- 使用 `Args` 定义命令行参数
- 在 `run()` 方法中实现核心逻辑
- 使用 `static override description` 描述命令功能
- 使用 `static override examples` 提供使用示例

### 错误处理

- 使用 `assert()` 进行前置条件检查：`assert(config.auth?.endpoint, "Auth endpoint is required")`
- 使用 `try/catch` 捕获异常
- 使用 `z.safeParse()` 进行安全解析
- 捕获特定错误类型，如 `ExitPromptError` 和 `ENOENT`
- 使用 `switch/case` 处理不同的错误码

### 测试

- 使用 Mocha + Chai
- 测试文件以 `.test.ts` 结尾
- 使用 `describe/it` 模式组织测试
- 测试命令使用 `@oclif/test` 的 `runCommand()`
- 使用 `beforeEach/afterEach` 管理测试状态
- 使用临时目录进行文件系统测试：`join(tmpdir(), choiceform-test-${Date.now()})`
- 避免在代码中使用 `.only`（测试配置了 `--forbid-only`）

### 工具库

- CLI 交互：`@inquirer/*`（input、select、confirm、checkbox）
- 模板引擎：`eta`
- 字符串处理：`ts-dedent`
- 实用工具：`es-toolkit`
- 数据验证：`zod`
- 加载动画：`yocto-spinner`

### 配置

- 项目类型为 ESM（`"type": "module"`）
- 目标 Node 版本：>=20.0.0
- 使用 `import.meta.dirname` 获取当前文件目录
- 配置文件存储在 `~/.choiceform/atomemo.json`
- 环境变量 `CHOICEFORM_CONFIG_DIR` 可覆盖配置目录

### 通用实践

- 保持函数职责单一
- 优先使用函数式编程（如 `reduce`、`map`）
- 解耦业务逻辑和 CLI 交互
- 为公共 API 添加 JSDoc 注释
- 使用 `process.exit()` 退出程序，避免继续执行
