# Changelog

本项目的所有重要变更都会记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)。

## [Unreleased]

## [0.2.1] - 2026-01-14

### Added

- `AGENTS.md` - 智能体代理工作指南，包含构建、测试、代码风格等规范
- `CLAUDE.md` - Claude Code 工作指南，包含项目概述、常用命令、架构要点等

### Changed

- CLI 命令从 `automation` 更名为 `atomemo`
- 项目描述从 "Automation Plugin" 更新为 "Atomemo Plugin"
- 更新依赖版本：
  - `@inquirer/checkbox`: ^5.0.3 → ^5.0.4
  - `@inquirer/input`: ^5.0.3 → ^5.0.4
  - `@inquirer/select`: ^5.0.3 → ^5.0.4
  - `oclif`: ^4.22.63 → ^4.22.65
- 更新架构文档和 README，反映项目名称变更

## [0.1.3] - 2026-01-14

### Added

- `auth status` 命令 - 查看当前设备的鉴权状态，显示用户名、邮箱和会话有效期

### Changed

- 更新架构文档，补充 `auth status` 和 `plugin refresh-key` 命令

## [0.1.0] - 2026-01-13

### Added

- `plugin refresh-key` 命令 - 获取或刷新插件调试用的 API Key，自动写入 `.env` 文件
- 项目架构文档 `ARCHITECTURE.md` 和各模块的 `OVERVIEW.md` 说明文档

### Fixed

- 修复 `TypeScriptPluginGenerator` 构造函数中权限参数为 undefined 时的处理

## [0.0.1] - 2026-01-10

### Added

- `auth login` 命令 - 基于 OAuth 2.0 Device Authorization Flow 的设备授权登录
- `plugin init` 命令 - 交互式插件项目初始化向导
- TypeScript 插件模板生成器，支持以下配置：
  - 插件基本信息（名称、描述、作者）
  - 权限配置（HTTP、数据库、文件系统等）
  - 许可证选择
  - 隐私策略生成
- 本地配置存储（`~/.choiceform/atomemo.json`）

### Infrastructure

- 基于 oclif v4 框架搭建 CLI 工具
- 使用 Eta 模板引擎生成项目文件
- 集成 @inquirer/* 组件库实现交互式提示
- 使用 Zod 进行数据验证
- Mocha + Chai 测试框架
- Biome 代码质量工具
- GitHub Actions 自动发布流程

[Unreleased]: https://github.com/choice-open/automation-plugin-cli/compare/v0.2.1...HEAD
[0.2.1]: https://github.com/choice-open/automation-plugin-cli/compare/v0.1.3...v0.2.1
[0.1.3]: https://github.com/choice-open/automation-plugin-cli/compare/v0.1.0...v0.1.3
[0.1.0]: https://github.com/choice-open/automation-plugin-cli/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/choice-open/automation-plugin-cli/releases/tag/v0.0.1
