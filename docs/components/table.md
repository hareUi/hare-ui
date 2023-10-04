# Table 表格

## 基本使用

<preview path="../demos/table/table-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数    | 说明         | 类型           | 可选值 | 默认值 |
| ------- | ------------ | -------------- | ------ | ------ |
| data    | 显示的数据   | `array`        | -      | -      |
| columns | 表格列配置项 | `ColumnItem[]` | -      | -      |

> table 组件实现了**虚拟滚动**功能，可适配超大数据渲染

#### Column

表格列的数据描述对象，是 columns 中的一项

| 参数      | 说明                       | 类型     | 默认值 |
| --------- | -------------------------- | -------- | ------ |
| title     | 表格列头展示的文字         | `string` | -      |
| dataIndex | 列数据在数据项中对应的路径 | `string` | -      |

