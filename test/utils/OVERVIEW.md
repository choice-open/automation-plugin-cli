# Utils Tests

工具模块的单元测试。

## 测试文件

| 文件 | 测试对象 | 覆盖状态 |
|------|----------|----------|
| `config.test.ts` | `src/utils/config.ts` | ✅ 全面覆盖 |

## 缺失测试

| 模块 | 状态 |
|------|------|
| `generator.ts` | ❌ 无测试 |
| `theme.ts` | ❌ 无测试（纯配置，可跳过） |
| `views.ts` | ❌ 无测试（已弃用） |

## `config.test.ts` 详情

### 测试设置

使用临时目录隔离测试环境：

```typescript
beforeEach(async () => {
  testConfigDir = join(tmpdir(), `choiceform-test-${Date.now()}`)
  process.env.CHOICEFORM_CONFIG_DIR = testConfigDir
})

afterEach(async () => {
  await fs.rm(testConfigDir, { recursive: true, force: true })
})
```

### 覆盖场景

**`save()`**:
- ✅ 保存配置到文件
- ✅ 自动创建目录
- ✅ 覆盖已有配置
- ✅ Schema 验证失败

**`load()`**:
- ✅ 加载已有配置
- ✅ 文件不存在时创建默认配置
- ✅ 生产环境默认端点
- ✅ Schema 验证失败
- ✅ 空配置处理

**`update()`**:
- ✅ 更新已有配置
- ✅ 配置不存在时创建
- ✅ 深度合并嵌套对象
- ✅ 空配置基础上更新
