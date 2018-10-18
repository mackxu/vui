# Button按钮

## 概述

按钮，提供几种基础样式和尺寸，可自定义图标。

## 代码示例
```vue
<template>
  <div class="toast-eg-wrapper">
    <h5>手机端MButton显示</h5>
    <div class="m-wrapper" ref="MWrapper">
      <MButton class="btn" type="svip" @on-click="clickBtn1">开通奇异果VIP</MButton>
      <MButton class="btn" type="vip" @on-click="clickBtn5">取消包月服务</MButton>
      <MButton class="btn" type="disabled">不可点击</MButton>
      <MButton class="btn" type="defaultBg">登录</MButton>
      <MButton class="btn" type="default">免费注册</MButton>
    </div>

    <h5>TV端Button显示</h5>
    <Button class="btn" @on-click="clickTVBtn1" type="vip" size="small">开通VIP</Button>
    <Button class="btn" @on-click="clickTVBtn2" type="vip" size="small" :focused="true">开通VIP</Button><br/>
    <Button class="btn" type="vip">在TV端进行激活</Button>
    <Button class="btn" type="vip" :focused="true">在TV端进行激活</Button><br/>
    <Button class="btn" type="vip" size="large">开通VIP会员立享优惠价</Button>
    <Button class="btn" type="vip" size="large" :focused="true">开通VIP会员立享优惠价</Button><br/>
    <Button class="btn">残忍拒绝</Button>
    <Button class="btn"  :focused="true">立即登录</Button>

  </div>
</template>

<script>
export default {
  name: 'ButtonEg',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    clickBtn1(e) {
      console.log(e);
    },
    clickBtn5(e) {
      console.log(e);
    },
    clickTVBtn1(e) {
      console.log(e);
    },
    clickTVBtn2(e) {
      console.log(e);
    },
  },
};
</script>
```

## 效果图
##### 手机端 button
<img src="/vui/other/../assets/img/m-btn.png" width="50%"/>
##### TV端 button
<img src="/vui/other/../assets/img/tv-btn.png" width="85%"/>

## API
### Props
#### 手机端 Button
| 属性     | 说明                       |  类型   | 默认值     | 可选值               | 必填 |
| :------- | :------------------------- | :-----: | :--------- | :------------------- | ---- |
| type     | 按钮显示样式 | String  | defaultBg | svip、vip、disabled、defaultBg、default   | 否   |
| styleObj | 自定义样式                 | String  | 空         | \                    | 否   |
#### TV端 Button
| 属性     | 说明                       |  类型   | 默认值     | 可选值               | 必填 |
| :------- | :------------------------- | :-----: | :--------- | :------------------- | ---- |
| type     | 按钮显示样式，有意义的命名 | String  | default | default、vip   | 否   |
| size     | 尺寸                       | String  | normal     | small, normal, large | 否   |
| focused     | 是否获焦                       | Boolean  | false     | true、false | 否   |
| styleObj | 自定义样式                 | String  | 空         | \                    | 否   |

### Events

| 事件  | 说明     | 参数 |
| :---- | :------- | :------- |
| on-click | 点击事件 | 函数     |

