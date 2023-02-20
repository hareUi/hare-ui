import Progress from './src/progress'
import { App } from 'vue'

Progress.install = (app: App): void => {
  // 注册组件
  app.component(Progress.name, Progress)
}

export default Progress
