# vui

> A Vue Libary project

gitLab: [http://gitlab.qiyi.domain/ott-fe/vui](http://gitlab.qiyi.domain/ott-fe/vui)    
docs：[http://ott-fe.gitlab.qiyi.domain/vui/#/](http://ott-fe.gitlab.qiyi.domain/vui/#/) 

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
### examples
[http://localhost:8081](http://localhost:8081)

## 编写组件文档
   
本地预览命令`npm run docs`      
预览地址：[http://localhost:3001](http://localhost:3001)

### 组件文档分类有（更新于2018.9.19）
  * 基础组件(base/)
  * 视图组件(view/)
  * 布局组件(layout/)
  * 导航组件(navigation/)
  * 表单组件(form/)
  * 其他(other/)

### 文档结构应包含但不限于：
见docs/README.md

### 帮助文档：
  * 使用markdown编写文档，语法参考[markdown语法](http://xianbai.me/learn-md/article/syntax/readme.html)。
  * 文档预览工具[docsify](https://docsify.js.org/#/)
  * 设计资源https://lanhuapp.com/web/#/item/board?type=share_mark&pid=1408a997-5475-4c6a-b125-da7b1cfc2cb0&param=b7d3aab0-943e-4f3b-a740-453750d74955

## 发布组件库
``` bash
# output vui bundle
npm run lib

# add version tag
npm version major | minor | patch

# push
git push && git push origin --tags
```
