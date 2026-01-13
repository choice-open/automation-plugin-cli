# Common Templates

通用模板文件，适用于所有编程语言的插件项目。

## 模板列表

| 文件 | 生成文件 | 描述 |
|------|----------|------|
| `manifest.yaml.eta` | `manifest.yaml` | 插件元数据清单 |
| `license.eta` | `license.md` | 许可证文件（空模板） |
| `privacy.eta` | `privacy.md` | 隐私政策（空模板） |

## `manifest.yaml` 结构

插件清单定义插件的核心元数据：

```yaml
name: "plugin-name"
version: "0.0.1"
description: "Plugin description"
author: "Author Name <email@example.com>"

label:                    # 多语言标签
  en_US: "Plugin Name"
  zh_Hans: "插件名称"

meta:
  icon: "assets/icon.svg"
  license: "license.md"
  privacy: "privacy.md"
  language: "typescript"
  created_at: "2026-01-13T..."

permissions:              # 按作用域分组的权限列表
  scope_name: ["action1", "action2"]
```

## 模板变量

| 变量 | 来源 | 描述 |
|------|------|------|
| `props.name` | 用户输入 | 插件名称 |
| `props.description` | 用户输入 | 插件描述 |
| `props.author` | 用户输入 | 作者名称 |
| `props.email` | 用户输入 | 作者邮箱 |
| `props.locales` | 用户选择 | 支持的语言列表 |
| `props.language` | 用户选择 | 开发语言 |
| `props.createdAt` | 系统生成 | 创建时间 |
| `props.permissions` | 处理后 | 分组后的权限数组 |
