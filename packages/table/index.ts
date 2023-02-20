import Table from './src/table'
import { App } from 'vue'

Table.install = (app: App): void => {
  // 注册组件
  app.component(Table.name, Table)
}

export default Table
