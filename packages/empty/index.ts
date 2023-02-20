import Empty from './src/empty'
import { App } from 'vue'

Empty.install = (app: App): void => {
  // 注册组件
  app.component(Empty.name, Empty)
}

export default Empty
