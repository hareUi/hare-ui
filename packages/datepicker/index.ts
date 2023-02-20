import DatePicker from './src/datepicker'
import { App } from 'vue'

DatePicker.install = (app: App): void => {
  // 注册组件
  app.component(DatePicker.name, DatePicker)
}

export default DatePicker
