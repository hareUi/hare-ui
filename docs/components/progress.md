# Progress 进度条

#### 何时使用

1. 当操作需要较长的时间时，向用户展示操作进度。
2. 当操作需要打断现有界面或后台运行，需要较长时间时。
3. 当需要显示一个操作完成的百分比或已完成的步骤/总步骤时。

### 基本用法

基本的进度和文字配置。

<preview path="../demos/progress/progress-1.vue" title="基本的进度和文字配置" description=" "></preview>

### 设置文字位置

提供了5种位置选择

<preview path="../demos/progress/progress-2.vue" title="提供了5种位置选择" description=" "></preview>

### 圆环用法

基本的进度和文字配置。

<preview path="../demos/progress/progress-3.vue" title="基本的进度和文字配置" description=" "></preview>



### 自定义颜色

如果你觉得内置的颜色不行。

<preview path="../demos/progress/progress-4.vue" title="基本的进度和文字配置" description=" "></preview>


### Progress 参数

| 参数名          | 类型      | 默认值  | 描述                                                     | 跳转 Demo             |
| :-------------- | :-------- | :------ | :------------------------------------------------------- | :-------------------- |
| percentage      | `number`  | 0       | 可选，进度条的值最大为 100                               | [基本用法](#基本用法) |
| percentage-text | `string`  | --      | 可选，进度条当前值的文字说明比如：'30%' \| '4/5'         | [基本用法](#基本用法) |
| height          | `string`  | 20px    | 可选，进度条的高度值，默认值为 20px                      | [基本用法](#基本用法) |
| percentage-text-placement  | `'insideLeft'\|'inside'\|`<br/> `'insideRight'\|'outside'\|`<br/>`'insideBg'`  | inside   | 可选，设置进度条的文字说明位置                    | [设置文字位置](#设置文字位置) |
| is-circle       | `boolean` | false   | 可选， 显示进度条是否为圈形                              | [圆环用法](#圆环用法) |
| stroke-width    | `number`  | 6       | 可选，设置圈形进度条宽度，单位是进度条与画布宽度的百分比 | [圆环用法](#圆环用法) |
| show-content    | `boolean` | true    | 可选，设置圈形进度条内是否展示内容                       | [圆环用法](#圆环用法) |
| bar-bg-color    | `string`  | #5170ff | 可选，进度条的颜色显示，默认为天蓝色                     | [自定义颜色](#自定义颜色) |
| percentage-text-color          | `string`  | ''    | 可选，设置进度条的文字说明颜色                     | [自定义颜色](#自定义颜色) |
