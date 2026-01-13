# Templates

Eta 模板引擎模板文件目录，用于生成新插件项目的脚手架代码。

## 目录结构

```
templates/
├── common/              # 语言无关的通用模板
│   ├── manifest.yaml.eta
│   ├── license.eta
│   └── privacy.eta
└── typescript/          # TypeScript 专用模板
    ├── package.json.eta
    ├── README.md.eta
    ├── tsconfig.json.eta
    ├── tsdown.config.ts.eta
    ├── src/
    │   └── main.ts.eta
    └── test/
        └── main.test.ts.eta
```

## 模板引擎

使用 [Eta](https://eta.js.org/) 模板引擎，配置如下：

```typescript
new Eta({
  autoTrim: false,    // 保留空白
  autoEscape: false,  // 不转义 HTML
  varName: "props",   // 变量名
  views: "templates/" // 模板根目录
})
```

## 模板语法

```eta
<%# 注释 %>
<%= props.name %>           // 输出变量
<%- rawContent %>           // 原始输出
<% for (const x of arr) { %> // 控制流
  <%= x %>
<% } %>
<%- %>                      // 去除尾部空白
```

## 子目录

- [`common/`](./common/OVERVIEW.md) - 通用模板
- [`typescript/`](./typescript/OVERVIEW.md) - TypeScript 模板

## 扩展规划

未来将支持更多语言：
- `elixir/` - Elixir 插件模板（计划中）
- `python/` - Python 插件模板（计划中）
