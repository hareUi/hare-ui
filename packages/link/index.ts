import Link from './src/link'
import { App } from 'vue'

Link.install = (app: App): void => {
  // 注册组件
  app.component(Link.name, Link)
}

export default Link
