# Tabs 标签页
## 概述
选项卡切换组件
## 代码演示

### 默认Vip主题
<vuep template="#example" iframe></vuep>

<script v-pre type="text/x-template" id="example">
  <style>
    @import "../assets/mquery.css"
  </style>
  <template>
    <Tabs>
      <tab-pane label="选项卡1">内容1</tab-pane>
      <tab-pane label="选项卡2">内容2</tab-pane>
    </Tabs>
  </template>
</script>

### 支持动画

<vuep template="#example2" iframe></vuep>

<script v-pre type="text/x-template" id="example2">
  <style>
    @import "../assets/mquery.css"
  </style>
  <template>
    <Tabs :animated="true" @on-click="onChange">
      <tab-pane label="选项卡1">内容1</tab-pane>
      <tab-pane label="选项卡2">内容2</tab-pane>
      <tab-pane label="选项卡3">内容3</tab-pane>
      <tab-pane label="选项卡4">内容4</tab-pane>
    </Tabs>
  </template>
  <script>
    
    export default {
      methods: {
        onChange() {
          console.log('tab change')
        }
      }
    }
  </script>
</script>

### 属性value支持双向绑定
<vuep template="#example3" iframe></vuep>

<script v-pre type="text/x-template" id="example3">
  <style>
    @import "../assets/mquery.css"
  </style>
  <template>
    <Tabs :value.sync="tabIndex">
      <tab-pane label="选项卡1">内容1</tab-pane>
      <tab-pane label="选项卡2">内容2</tab-pane>
      <tab-pane label="选项卡3">内容3</tab-pane>
    </Tabs>
  </template>
  <script>
    
    export default {
      data() {
        return {
          tabIndex: 1
        }
      }
    }
  </script>
</script>

### 账户主题

<vuep template="#example4" iframe></vuep>

<script v-pre type="text/x-template" id="example4">
  <style>
    @import "../assets/mquery.css"
  </style>
  <template>
    <Tabs type="account">
      <tab-pane label="短信验证码登录">短信验证码登录</tab-pane>
      <tab-pane label="账号登录">账号登录</tab-pane>
    </Tabs>
  </template>
</script>

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
|on-click|用户点击切换标签页时触发|-|

### tab item
#### props
|属性|说明|类型|默认值|
|:---|:---|:---:|:----:|
|label|tab头显示的文字|string|||
