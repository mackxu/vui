# Loading 加载提示
## 概述
Loading加载器组件，手机端使用，TV端暂缺。上面是旋转的icon，下面是一句话描述，可以不填。
## 代码示例
```vue
<template>
    <Button @click="onClick">展示Loading</Button>
</template>
<script>
    export default {
        methods: {
            onClick () {
                // 1. 自动关闭
                this.$Loading.open({
                  text: '请稍候',
                  onClose() {
                    console.log('我关闭了');
                  }
                });
                
                // 2. 显式打开关闭
                this.$Loading.open('请等待');  // 若不调用close，打开的loading会一直存在
                this.$Loading.close();
            },
        }
    }
</script>
```

## 效果图
![loading](../assets/img/loading.png)

## API
### instance
通过全局注册Loading对象的方式使用，形如：
- this.$Loading.open(config)
- this.$Loading.close()

以上方法隐式创建与维护 Vue 组件，组件会被自动挂载到body标签最后，若open时页面中已经有其他的loading，先关闭此loading再打开新的loading。

参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

|属性|说明|类型|默认值|是否必填|
|:--|:--|:--|:--|:--|:--|
|text|提示文字,不填时只有图标没有文字|string|-|否|
|onClose|关闭时的回调|function()|-|否|

