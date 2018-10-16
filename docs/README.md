# vui

> A Vue Libary project

gitLab: [http://gitlab.qiyi.domain/ott-fe/vui](http://gitlab.qiyi.domain/ott-fe/vui)

docs：[http://ott-fe.gitlab.qiyi.domain/vui/#/](http://ott-fe.gitlab.qiyi.domain/vui/#/)

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

\# 标题

\## 概述

\## 代码演示

\## 效果图

组件尚未完成的，效果图可以写待完善，统一放到docs/assets/img/组件名.jpg，有多个图的，名称用组件名-xxx.jpg（png也可）

\## API

\### props

\|属性|说明|类型|默认值|是否必填|

\|:--|:--|:--:|:--|:--|

\|content|显示的正文内容，只在非 confirm 模式下有效|String|空|是|

\### events

\|事件名|说明|

\|:---|:--|

\|on-ok|点击确定的回调，只在 confirm 模式下有效|

\### slot

\|名称|说明|

\|:--|:--|

\|content|主体内容|

\|title|这是title|
