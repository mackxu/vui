# Modal 对话框
## 概述
Modal对话框组件，手机端使用，TV端暂缺。

有两种用法，普通组件使用和封装好的全局实例调用。
## 代码示例
- 普通组件使用(用于对对话框有特殊定制需求时)
```vue
<template>
    <Button type="primary" @click="showModal1 = true">Display dialog box</Button>
    <Modal
        v-if="showModal1"
        :btnTexts="['确定'， '取消']"
        @on-click="click">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                showModal1: false
            }
        },
        methods: {
            click (idx) {
                // Logic
            }
        }
    }
</script>
```
- 全局实例调用（简单使用通用对话框）
```vue
<script>
    export default {
        methods: {
            fn () {
                // Logic
                this.$Modal.open({
                  text: '您确定要取消吗',
                  btnTexts: [{
                      text: '确定'
                      onClick() {
                          // Logic
                      },
                  },{
                      text: '取消'
                      onClick() {
                          // Logic
                      },
                  }],
                });
            },
        }
    }
</script>
```

## API
### props
|属性|说明|类型|默认值|是否必填|
|:--|:--|:--|:--|:--|:--|
|text|提示文字|string|-|否，不填时必须通过slot来填|
|btnTexts|底部按钮文字|array[object]，object定义{text: '例子', onClick: () => null}|[]|是|
|width|宽度|string|待定|否|
|showMask|是否展示遮罩|boolean|true|否|
|quickClose|点击空白处是否自动关闭弹框|boolean|false|否|

### events
|属性|说明|返回值|
|:--|:--|:--|:--|
|on-click|底部按钮点击事件，参数idx表示按钮下标|无|

### slot
|名称|说明|
|:--|:--|
|content|自定义content内容|
|footer|自定义底部按钮|

### instance
通过直接使用$Modal对象的方式使用，形如：

- this.$Modal.open(config)
- this.$Modal.close()

以上方法隐式创建与维护 Vue 组件，组件会被自动挂载到body标签最后，若open时页面中已经有其他的modal，先关闭此modal再打开新的modal。

参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

|属性|说明|类型|默认值|是否必填|
|:--|:--|:--|:--|:--|:--|
|text|提示文字|string|-|是|
|btnTexts|底部按钮文字|array[object]，object定义{text: '例子', onClick: () => null}|[]|是|
|width|宽度|string|待定|否|
|showMask|是否展示遮罩|boolean|true|否|
|onClick|底部按钮点击事件，参数idx表示按钮下标|function(idx)|-|无|

