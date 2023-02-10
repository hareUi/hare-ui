
# Message 消息

## 基本使用

<preview path="../demos/message/message-1.vue" title="基本使用" description="调用`Message`函数进行消息提示"></preview>

## 组件 API

### Message 配置项

| 参数       | 说明         | 类型       | 可选值                         | 默认值  |
|----------|------------|----------|-----------------------------|------|
| message  | 消息内容       | string   | -                           | -    |
| type     | 消息类型       | string   | info/success/warning/danger | info |
| duration | 消息持续毫秒数    | number   | -                           | 2000 |
| center   | 消息是否居中     | boolean  | -                           | true |
| onClose  | 消息消失是的回调函数 | function | -                           | -    |
