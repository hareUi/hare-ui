import Menu from './src/menu'
import MenuItem from './src/menuitem'
import SubMenu from './src/submenu'
import { App } from 'vue'

Menu.install = (app: App): void => {
  // 注册组件
  app.component(Menu.name, Menu)
}
MenuItem.install = (app: App): void => {
  app.component(MenuItem.name, MenuItem)
}
SubMenu.install = (app: App): void => {
  app.component(SubMenu.name, SubMenu)
}

export { Menu, MenuItem, SubMenu }
