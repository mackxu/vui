# vui

> A Vue Libary project

## examples

[http://localhost:8081](http://localhost:8081)

## 在项目中指定tag install
npm install git+ssh://git@gitlab.qiyi.domain:10022/ott-fe/vui.git#v1.0.1

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

## 发布组件库
``` bash
# output vui bundle
npm run lib

# add version tag
npm version major | minor | patch

# push
git push && git push origin --tags
```