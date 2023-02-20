import { App } from 'vue'
import Drawer from './src/drawer'
import DrawerService from './src/drawer-service'

Drawer.install = (app: App): void => {
  // 注册组件
  app.component(Drawer.name, Drawer)
  app.config.globalProperties.$drawerService = new DrawerService()
}

export default Drawer
