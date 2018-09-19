# Tabs 标签页
## 概述
选项卡切换组件
## 代码演示
## API
### Tabs 
#### props
|属性|说明|类型|默认值|
|:--|:--|:---:|:---:|
|line-width|线条宽度|number|1|
|active-color|选中时文字颜色|||
|default-color|默认文字颜色|||
|bar-active-color|设置底部bar颜色|||
|custom-bar-width|设置底部bar宽度，默认宽度是整体tab宽度平分|string、function|||

### tab item
#### props
|属性|说明|类型|默认值|
|:---|:---|:---:|:----:|
|active-class|当前项选中时的class|string|||
#### events
|事件名|说明|返回值|
|:--|:--|:---:|
|on-item-click|当前 tabItem 被点击时触发||