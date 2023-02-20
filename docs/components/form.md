# Form 表单

## 基本使用

#### 切换密码显示的 bug:由于&&运算符的特性,导致图标无法更换

<preview path="../demos/form/form-1.vue" title="基本使用" description=" "></preview>

## 组件 API

### Attributes 属性

| 参数        | 说明                                    | 类型   | 可选值                      | 默认值       |
| ----------- | --------------------------------------- | ------ | --------------------------- | ------------ |
| layout      | 设置label布局方式，有水平和垂直两种选择 | string | 'horizontal'\| 'vertical'   | 'horizontal' |
| label-align | 设置label对齐方式                       | string | 'start'\| 'center' \| 'end' | 'start       |
| label-size  | 设置label大小                           | string | 'sm'\|'md'\|'lg'            | 'md'         |
| model       | 设置form组件绑定的数据                  | Object |                             |              |
| rules       | 设置form表单校验规则                    | Object |                             |              |

### Methods 方法

| 方法名 | 说明 | 类型 |
| ------ | ---- | ---- |
|   validate     | 表单校验方法，获取表单实例后调用 |   (callback?: (isValid: boolean, invalidFields?: ValidateFieldsError) => void) => Promise\<boolean\>     |

### Events 事件

| 事件名  | 说明    | 类型 |
| ------- | ------------ | ---- |
| submit | 提交表单事件 |   ()=>{}        |

### Slots 插槽

| 插槽名 | 说明 | 参数 |
| ------ | ---- | ---- |
|        |      |      |
