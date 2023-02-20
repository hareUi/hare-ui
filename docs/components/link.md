
# Link 链接

文字超链接

## 基本使用

基础的文字链接用法：

<preview path="../demos/link/link-1.vue" title="" description=" "></preview>

## 下划线

文字链接下划线：

<preview path="../demos/link/link-2.vue" title="" description=" "></preview>

## 禁用状态

文字链接不可用状态：

<preview path="../demos/link/link-3.vue" title="" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|  :---  | :---  | :---  | :---  | :---  |
| type | 类型 | `enum` | primary / success / warning / danger | default |
| underline | 是否下划线 | `boolean` | true / false | true |
| disabled | 是否禁用 | `boolean` | true / false | false |
| href | 原生 href 属性 | `string` | | |


### Slots 插槽

| 插槽名 | 说明 |
|  ----  | ----  |
| default | 自定义默认内容 |
