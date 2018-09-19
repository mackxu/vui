# vui

> A Vue Libary project

## examples

[http://localhost:8081](http://localhost:8081)

## 组件库安装、升级 / 按Tag版本安装组件库
npm install git+ssh://git@gitlab.qiyi.domain:10022/ott-fe/vui.git#v1.0.1

yarn add git+ssh://git@gitlab.qiyi.domain:10022/ott-fe/vui.git#v1.0.1

## 在项目中使用组件库
``` javascript
# 全局引用
import 'vui/lib/style/vui.css'
import vui from 'vui/lib/vui.js'

Vue.use(vui)

# 一般引用
import { Button, Header } from 'vui/src/index'

# 按需引用（借助 babel-plugin-import）
import { Button, Header } from 'vui'

# mixins
import mixinsA from 'vui/src/mixins/A'

# utils
import utilsB from 'vui/src/utils/B'
```
**注意:** 全局引用和按需引用不能同时使用

## 开发新组件
``` bash
# add files
src/components/componentA/index.vue  
examples/views/componentA.vue

# register component
src/components/index.js  

# add routes for example
examples/router.config.js
```

## 编写组件文档
[vui在线文档](http://ott-fe.gitlab.qiyi.domain/vui/#/)    
本地预览命令`npm run docs`、预览地址：[http://localhost:3001](http://localhost:3001)

帮助文档：
  * 使用markdown编写文档，语法参考[markdown语法](http://xianbai.me/learn-md/article/syntax/readme.html)。
  * 文档预览工具[docsify](https://docsify.js.org/#/)

文档结构应包含但不限于：

\# 标题

\## 概述

\## 代码演示

\## API   
\### props    
\### events   
\### slot   

props

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:---|:--:|:----|
|content|显示的正文内容，只在非 confirm 模式下有效|String|空|

events

|事件名|说明|
|:-----|:---|
|on-ok|点击确定的回调，只在 confirm 模式下有效|

slot

|名称|说明|
|:-----|:---|
|无|主体内容|
|title|提示框标题，定义此 slot 时，会覆盖 props `title`|

## 发布组件库
``` bash
# output vui bundle
npm run lib

# add version tag
npm version major | minor | patch

# push
git push && git push origin --tags
```