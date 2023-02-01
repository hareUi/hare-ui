import Avatar from './src/avatar'
import { App } from 'vue'

Avatar.install = (app: App): void => {
  // 注册组件
  app.component(Avatar.name, Avatar)
}

export default Avatar
