# Utils

工具函数和共享模块目录。

## 模块列表

| 文件 | 描述 |
|------|------|
| `config.ts` | 配置文件管理（加载/保存/更新） |
| `generator.ts` | 插件项目代码生成器 |
| `theme.ts` | Inquirer 交互组件主题定义 |
| `views.ts` | Eta 模板引擎实例（已弃用，功能迁移至 generator） |

## `config.ts` - 配置管理

管理 CLI 的本地配置文件 (`~/.choiceform/atomemo.json`)。

**配置 Schema**：

```typescript
{
  auth?: {
    endpoint?: string   // 认证服务端点
    access_token?: string // 访问令牌
  },
  hub?: {
    endpoint?: string   // Hub API 端点
  }
}
```

**API**：

| 函数 | 描述 |
|------|------|
| `load()` | 加载配置，不存在则创建默认配置 |
| `save(config)` | 保存配置（带 Schema 验证） |
| `update(partial)` | 深度合并更新配置 |

**环境变量**：
- `CHOICEFORM_CONFIG_DIR` - 自定义配置目录
- `NODE_ENV=production` - 使用生产环境端点

## `generator.ts` - 代码生成器

**接口定义**：

```typescript
interface PluginGenerator {
  type: string
  context: { props: Record<string, unknown>, target: string }
  renderer: Eta
  generate(): Promise<void>
}
```

**工厂函数**：

```typescript
createPluginGenerator(type, context) // 目前仅支持 "typescript"
```

**`TypeScriptPluginGenerator`**:
- 遍历 `common/` 和 `typescript/` 模板目录
- `.eta` 文件通过 Eta 渲染
- 其他文件直接复制
- 自动将权限列表按 scope 分组

## `theme.ts` - 交互主题

为 `@inquirer/*` 组件提供自定义图标和样式：

```typescript
checkboxTheme = {
  icon: { checked: " [✔︎]", unchecked: " [ ]", cursor: "→" }
}

selectTheme = {
  icon: { cursor: "→" },
  indexMode: "number"
}
```

## 依赖关系

```
generator.ts ──uses──> Eta (templates/)
config.ts ──uses──> zod (schema validation)
           ──uses──> es-toolkit (object merge)
```
