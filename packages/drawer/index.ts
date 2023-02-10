import type { App } from 'vue'
import Drawer from './src/drawer'
import DrawerService from './src/drawer-service'

export { Drawer, DrawerService }
export default {
  title: 'Drawer 抽屉板',
  category: '反馈',
  status: '75%',
  install(app: App): void {
    app.component(Drawer.name, Drawer)
    app.config.globalProperties.$drawerService = new DrawerService()
  }
}
