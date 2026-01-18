# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 Choiceform Atomemo Platform 的插件开发命令行工具,基于 oclif v4 框架构建,支持创建、开发、打包和发布 Atomemo 插件。

## 常用命令

### 开发命令

```bash
# 构建项目 (清理 dist 并重新编译 TypeScript)
npm run build

# 代码检查和自动格式化 (使用 Biome)
npm run check

# 运行测试 (Mocha + Chai)
npm test

# 运行单个测试文件
npx mocha --require ts-node/register test/path/to/test.test.ts
```

### CLI 测试命令

```bash
# 使用开发模式运行 CLI (使用 ts-node,无需构建)
./bin/dev.js <command>

# 使用生产模式运行 CLI (需要先 build)
./bin/run.js <command>

# 常用 CLI 命令示例
./bin/dev.js auth login          # 设备授权登录
./bin/dev.js auth status         # 查看认证状态
./bin/dev.js plugin init         # 初始化新插件
./bin/dev.js plugin refresh-key  # 刷新调试密钥
```

### 发布相关

```bash
# 预发布:生成 oclif manifest 和更新 README
npm run prepack

# 清理:删除 oclif.manifest.json
npm run postpack
```

## 架构要点

### 核心模块结构

1. **命令层 (`src/commands/`)**
   - `auth/` - 认证相关命令 (login, status)
   - `plugin/` - 插件相关命令 (init, refresh-key, pack, run 等)
   - 所有命令继承自 `@oclif/core` 的 `Command` 基类

2. **工具层 (`src/utils/`)**
   - `config.ts` - 配置文件管理 (`~/.choiceform/atomemo.json`)
     - 使用 Zod 验证配置 schema
     - 存储 OneAuth access token 和 API endpoints
   - `generator.ts` - 插件项目生成器 (工厂模式)
     - `TypeScriptPluginGenerator` - TypeScript 插件生成器
     - 未来将支持 Python 和 Elixir
   - `theme.ts` - CLI 主题配置 (yocto-spinner, inquirer)
   - `views.ts` - ⚠️ 已弃用,不要使用

3. **模板系统 (`src/templates/`)**
   - 使用 Eta 模板引擎 (类似 EJS)
   - `common/` - 通用模板 (manifest.yaml, .gitignore, license 等)
   - `typescript/` - TypeScript 插件模板 (package.json, tsconfig.json, src/main.ts 等)
   - 模板文件以 `.eta` 结尾,通过 `PluginGenerator` 渲染

### 关键设计模式

- **命令模式**: oclif 框架,每个命令是独立的类
- **工厂模式**: `createPluginGenerator(type, context)` 创建不同语言的生成器
- **策略模式**: `PluginGenerator` 接口,不同语言实现各自生成策略

### 配置文件位置

- 全局配置: `~/.choiceform/atomemo.json`
  - 可通过 `CHOICEFORM_CONFIG_DIR` 环境变量覆盖
  - 存储 OneAuth access token 和 API endpoints

### ESM 注意事项

- 项目使用 **ESM 模块** (`"type": "module"` in package.json)
- 使用 `import.meta.dirname` 而非 `__dirname`
- 所有 import 必须包含文件扩展名 (`.js` for compiled `.ts`)
- Mocha 测试使用 ts-node/esm loader

## 测试规范

- 测试框架: Mocha + Chai
- 测试文件命名: `*.test.ts`
- 测试目录结构与 src/ 一致
- oclif 测试使用 `@oclif/test` 工具
- 网络请求需要 mock (尚未实现 auth 命令测试)

## 已知问题

1. `src/utils/views.ts` 已弃用,考虑移除
2. `test/commands/plugin/init.test.ts` 第二个测试断言为空
3. 部分命令 (checksum, pack, permission, run) 仍为占位符实现

## 代码风格

- 使用 **Biome** 进行代码检查和格式化 (不是 ESLint/Prettier)
- Semicolons: `asNeeded` (尽量不用分号)
- Indent: 2 spaces
- 提交前运行 `npm run check` 确保代码质量

## 外部 API

- **OneAuth API**: `https://oneauth.choiceform.io`
  - `/v1/auth/device/code` - 请求设备授权码
  - `/v1/auth/device/token` - 轮询获取 access token
  - `/v1/auth/get-session` - 获取用户会话信息

- **Plugin Hub API**: `https://automation-plugin-api.choiceform.io`
  - `/v1/keys` - 刷新/创建调试密钥

## 注意事项

- 所有命令应支持 `--help` flag (oclif 自动处理)
- 使用 `@inquirer/*` 包进行交互式输入 (不是 inquirer 包本体)
- 模板渲染时注意 `autoEscape: false` 以避免转义问题
- 新增命令后需运行 `npm run prepack` 更新 README
