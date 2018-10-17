# Button按钮

## 概述

按钮，提供几种基础样式和尺寸，可自定义图标。

## 代码示例
```
<template>
  <Button type="defaultBtn" size="normal" @click="goToApply(e)">立即申请</Button>
<template>
<script>
  export default {
    data() {
      return {
      };
    }
    methods: {
       goToApply(){
          console.log('test Event:' + e.target);
       }
    }
  }
</script>
```

## 效果图
##### 1号 button 高度60px 字号28px 较小尺寸（size=small）
<img src="/vui/other/../assets/img/small.png" width="56%"/>
##### 2号 button 高度70px 字号30px 正常尺寸（size=normal）
<img src="/vui/other/../assets/img/normal.png" width="85%"/>
##### 3号 button 高度80px 字号30px 最大尺寸（size=normal）
<img src="/vui/other/../assets/img/large.png" width="100%"/>
##### 非VIP样式按钮 type=defaultBtn （VIP样式 type=vipBtn）
<img src="/vui/other/../assets/img/defaultBtn.png" width="48%"/>

##### 手机端按钮
<img src="/vui/other/../assets/img/m-button.png" width="345"/>

## API
### Props
| 属性     | 说明                       |  类型   | 默认值     | 可选值               | 必填 |
| :------- | :------------------------- | :-----: | :--------- | :------------------- | ---- |
| disabled | 禁用状态                   | Boolean | 空         | \                    | 否   |
| type     | 按钮显示样式，有意义的命名 | String  | defaultBtn | defaultBtn, vipBtn   | 是   |
| size     | 尺寸                       | String  | normal     | small, normal, large | 是   |
| styleObj | 自定义样式                 | String  | 空         | \                    | 否   |
### Events

| 事件  | 说明     | 参数 |
| :---- | :------- | :------- |
| on-click | 点击事件 | 函数     |

