import BackToTop from './src/back-to-top'
import { App } from 'vue'

BackToTop.install = (app: App): void => {
  // 注册组件
  app.component(BackToTop.name, BackToTop)
}

export default BackToTop
