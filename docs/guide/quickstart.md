# 快速开始

> npm私有域已停止维护，暂不支持下载
>
> 您可以clone本项目在本地打包，引入本地包使用

```bash
# clone 项目
git clone git@github.com:hareUi/hare-ui.git
cd hare-ui

# 安装依赖
pnpm install

# 打包组件库
pnpm run build:lib
```


## 📦安装

使用`npm`安装组件库
```bash
npm install hare-ui --registry http://xxx
```

## 🚀使用
在`vue`项目中引入`HareUI`
```ts
import { createApp } from 'vue'
import App from './App.vue'
import HareUI from 'hare-ui'
import 'hare-ui/lib/style.css'
createApp(App).use(HareUI).mount('#app')
```
