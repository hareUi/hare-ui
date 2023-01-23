# Alert 警告

## 基本使用

<preview path="../demos/alert/alert-1.vue" title="基本使用" description="使用不同类型的Alert进行提示。"></preview>

## 文字居中

<preview path="../demos/alert/alert-2.vue" title="文字居中" description="使用`center`居中文字。"></preview>

## 字体图标

<preview path="../demos/alert/alert-3.vue" title="字体图标" description="使用`icon`展示图标。"></preview>

## 自定义关闭警告

<preview path="../demos/alert/alert-4.vue" title="关闭警告" description="使用`close`表示可关闭警告，`close-text`使用文字替换关闭图标。"></preview>

## 描述性文字

<preview path="../demos/alert/alert-5.vue" title="描述性文字" description="使用`description`对警告添加辅助描述信息。"></preview>

## 组件 API

### Attributes 属性

| 参数        | 说明                          | 类型    | 可选值                     | 默认值  |
| ----------- | ----------------------------- | ------- | -------------------------- | ------- |
| type        | 主题类型                      | string  | success/warning/info/error | success |
| title       | 提示标题                      | string  | -                          | Title   |
| center      | 文字是否居中                  | boolean | -                          | false   |
| icon        | 是否显示图标                  | boolean | -                          | false   |
| close       | 警告是否可关闭                | boolean | -                          | false   |
| close-text  | 使用自定义文字代替 close 图标 | string  | -                          | -       |
| description | 为警告添加描述性信息          | string  | -                          | -       |
