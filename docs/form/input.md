# Input 输入框
## 概述
基本表单组件
## 代码示例

<vuep template="#example"></vuep>
<script v-pre type="text/x-template" id="example">
  <template>
    <div>
      count: {{ count }}
      <Header></Header>
      <Her></Her>
      <x-button>haah</x-button>
      <icon type='gitv' size="100px"></icon>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          count: 0
        }
      }
    }
  </script>
</script>
## API
### props
|属性|说明|类型|默认值|
|:--|:--|:---:|:---:|
|type|声明 input 类型，支持 text,number,email,password,tel|string|text|
|value|表单值，使用v-model绑定|string||
|id|输入框的 id|string||
|placeholder|placeholder 提示|string||
|show-clear|是否显示清除icon|boolean|false|

### events
|事件名|说明|返回值|
|:--|:--|:---:|
|on-enter|按下回车键时触发||
|on-click|设置 icon 属性后，点击图标时触发||
|on-change|数据改变时触发  |event|
|on-focus|输入框聚焦时触发||
|on-blur|输入框失去焦点时触发||
