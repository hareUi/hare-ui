import type { App } from 'vue'
import Message from './src/message'
;(Message as any).install = function (app: App): void {
  // 这个写法为了兼容vue2否则无法在this上使用
  app.config.globalProperties.$message = Message
}
// 用可以去引入组件通过use的方式，或者可以直接导入
export { Message }

export default Message
