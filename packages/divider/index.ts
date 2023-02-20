import Divider from './src/divider'
import { App } from 'vue'

Divider.install = (app: App): void => {
  // 注册组件
  app.component(Divider.name, Divider)
}

export default Divider
