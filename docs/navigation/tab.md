# Tabs 标签页
## 概述
选项卡切换组件
## 代码演示
## API
### Tabs 
#### props
|属性|说明|类型|默认值|
|:--|:--|:--|:--|
|type|标签的基本样式`vip`、`account`|string|vip|
|activeKey|当前激活tab面板的 key|string|第一个tab|

### tab item
#### props
|属性|说明|类型|默认值|
|:---|:---|:---:|:----:|
|key|对应的`activeKey`|string|||
|tab|tab头显示的文字|string|||
#### events
|事件名|说明|返回值|
|:--|:--|:---:|
|on-item-click|当前 tabItem 被点击时触发||
