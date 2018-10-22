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
|value|当前激活tab面板的 key|string|第一个tab|
|animated|是否使用 CSS3 动画|boolean|false|

#### events
|事件名|说明|返回值|
|:--|:--|:---:|
|on-click|用户点击切换标签页时触发||

### tab item
#### props
|属性|说明|类型|默认值|
|:---|:---|:---:|:----:|
|key|对应的`activeKey`|string|||
|label|tab头显示的文字|string|||
