# Toast 文字提示
## 概述

一个简短的 toast ，用来反馈用户相关操作的提示。支持自定义位置和持续时间。

## 代码示例
```
<template>
  <button @click="showToast">Show Toast</button>
</template>
<script>
  import { Mtoast } from 'vue/src/m-toast';
  export default {
    methods: {
      showToast () {
        Mtoast.open({
          message: '领取失败，请稍后重试',
          duration: 2000,
        });
      },
    }
}
</script>
```
## 效果图
##### TV端Toast样式
<img src="/vui/other/../assets/img/tv-toast.png" width="50%"/>
##### 手机端Toast样式
<img src="/vui/other/../assets/img/m-toast.png" width="20%"/>
## API
### Props
| 属性     | 说明                                     | 类型   | 默认值                         | 可选值 | 必填 |
| :------- | :--------------------------------------- | :----- | :----------------------------- | :----- | ---- |
| message  | 显示的文本内容                           | String | 空                             | \      | 是   |
| duration | 持续时间（毫秒），若为 -1或不传 则不会自动关闭 | Number | 3000ms | \      | 否   |
### methods
| 方法  | 说明      | 参数 |
| :---- | :-------- | :------- |
| open  | 显示toast | 对象参数 |
| close | 关闭toast | 无       |

