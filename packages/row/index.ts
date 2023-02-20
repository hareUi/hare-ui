import Row from './src/row'
import { App } from 'vue'

Row.install = (app: App): void => {
  // 注册组件
  app.component(Row.name, Row)
}

export default Row
