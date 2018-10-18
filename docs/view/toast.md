# Toast 文字提示
## 概述

一个简短的 toast ，用来反馈用户相关操作的提示。支持自定义位置和持续时间。

## 代码示例
```vue
<template>
  <div class="toast-eg-wrapper">
    <h5>手机端Toast显示</h5>
    <div class="m-wrapper" ref="MWrapper">
      <MButton class="btn" type="svip" @on-click="open">点击显示手机端Toast</MButton>
    </div>

    <h5>TV端Toast显示</h5>
    <br/>
    <Button class="btn" @on-click="openTV" size="small">点击显示TV端Toast</Button>

  </div>
</template>

<script>
// import Toast from 'components/toast';
export default {
  name: 'MToastEg',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    open() {
      this.$mtoast.open({
        message: '抱歉，请使用微信或支付宝参加该活动,请使用微信或支付宝参加该活动,请使用微信或支付宝参加该活动',
        duration: 1500,
        // 非公开属性 使用时不用传 为了在PC上显示手机Toast
        el: this.$refs.MWrapper,
      });
    },
    close() {
      this.$toast.close();
    },
    openTV() {
      // Toast.open({
      //   message: '抱歉，请使用微信或支付宝参加该活动',
      //   duration: 3000,
      // });
      // or
      this.$toast.open({
        message: '请使用【微信或支付宝】请使用微信或支付宝请使用微信或支付宝',
        duration: 5000,
      });
    },
  },
};
</script>
```
## 效果图
##### TV端Toast样式
<img src="/vui/other/../assets/img/tv-toast.png"/>
##### 手机端Toast样式
<img src="/vui/other/../assets/img/m-toast.png" width="50%"/>
## API
### Props
| 属性     | 说明                                     | 类型   | 默认值                         | 可选值 | 必填 |
| :------- | :--------------------------------------- | :----- | :----------------------------- | :----- | ---- |
| message  | 显示的文本内容                           | String | 空                             | \      | 是   |
| duration | 持续时间（毫秒），若为 -1或不传 则不会自动关闭 | Number | 3000ms | \      | 否   |
| fontColor | 重点字体的颜色 | String | #ffb400 | css颜色值      | 否   |
### methods
| 方法  | 说明      | 参数 |
| :---- | :-------- | :------- |
| open  | 显示toast | 对象参数 |
| close | 关闭toast | 无       |

