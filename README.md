# hare-ui

## 官方文档
使用方式请前往官方文档查看：http://hareui.snowhouse.space/

## 项目指令

### 安装依赖

> pnpm install

### 运行组件文档(docs目录)

> pnpm run docs:dev

### 运行测试网站(example目录)

> pnpm run dev:dev

### 新建组件(cli目录)

> pnpm run gen:component
>
> Q1:组件名称
>
> Q2:组件描述(中文名称)
>
> Q3:选用模板(选.tsx)

### 查看覆盖率
> pnpm run coverage

### 提交
> pnpm run commit

## 项目规范

### 使用BEM规范编写
- 写scss使用变量,之后可以切换白天/黑暗模式。
- 写scss`伪类`或者`子类`时,前面加`&`可以简写很多代码,结合bem规范,写起来就会很清晰。如下，结构清晰，层次分明。
```scss
.article {
    max-width: 1200px;
    &__body {
        padding: 20px;
    }
    &__button {
        padding: 5px 8px;
        &--primary {background: blue;}
        &--success {background: green;}
    }
}
```
