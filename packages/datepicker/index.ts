import Datepicker from './src/datepicker'
import { App } from 'vue'

Datepicker.install = (app: App): void => {
  // 注册组件
  app.component(Datepicker.name, Datepicker)
}

export default Datepicker
