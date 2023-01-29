import SubMenu from './src/sub-menu'
import { App } from 'vue'

SubMenu.install = (app: App): void => {
  // 注册组件
  app.component(SubMenu.name, SubMenu)
}

export default SubMenu
