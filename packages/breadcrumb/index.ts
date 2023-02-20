import Breadcrumb from './src/breadcrumb'
import { App } from 'vue'

Breadcrumb.install = (app: App): void => {
  // 注册组件
  app.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
