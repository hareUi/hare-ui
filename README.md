# hare-ui

## 安装依赖

> pnpm install

## 运行组件文档(docs目录)

> pnpm run docs:dev

## 运行测试网站(example目录)

> pnpm run dev:dev

## 新建组件(cli目录)

> pnpm run gen:component
>
> Q1:组件名称
>
> Q2:组件描述(中文名称)
>
> Q3:选用模板(选.tsx)

## 其他说明
### 引入了husky
提交之前会先对代码eslint,prettier一遍
提交时使用pnpm run commit,然后看着选就行，都是中文。

### 取类名使用bem命名规范
https://juejin.cn/post/6844903672162304013

### 写scss使用变量,之后可以切换白天/黑暗模式。
### 写scss时`伪类`或者`子类`前面加*&*可以简写很多代码,结合bem规范,写起来很香。
