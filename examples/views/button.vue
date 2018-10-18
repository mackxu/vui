<template>
  <div class="toast-eg-wrapper">
    <h5>手机端MButton显示</h5>
    <div class="m-wrapper" ref="MWrapper">
      <MButton class="btn" type="svip" @on-click="clickBtn1">开通奇异果VIP</MButton>
      <MButton class="btn" type="vip" @on-click="clickBtn2">取消包月服务</MButton>
      <MButton class="btn" type="disabled" @on-click="clickBtn3">不可点击</MButton>
      <MButton class="btn" type="defaultBg" @on-click="clickBtn4">登录</MButton>
      <MButton class="btn" type="default" @on-click="clickBtn5">免费注册</MButton>
    </div>

    <h5>TV端Button显示</h5>
    <Button class="btn" @on-click="clickTVBtn1" type="vip" size="small">开通VIP</Button>
    <Button class="btn" @on-click="clickTVBtn2" type="vip" size="small" :focused="true">开通VIP</Button><br/>
    <Button class="btn" @on-click="clickTVBtn3" type="vip">在TV端进行激活</Button>
    <Button class="btn" @on-click="clickTVBtn4" type="vip" :focused="true">在TV端进行激活</Button><br/>
    <Button class="btn" @on-click="clickTVBtn5" type="vip" size="large">开通VIP会员立享优惠价</Button>
    <Button class="btn" @on-click="clickTVBtn6" type="vip" size="large" :focused="true">开通VIP会员立享优惠价</Button><br/>
    <Button class="btn" @on-click="clickTVBtn7" >残忍拒绝</Button>
    <Button class="btn" @on-click="clickTVBtn8"  :focused="true">立即登录</Button>

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
    clickBtn2(e) {
      console.log(e);
    },
    clickBtn3(e) {
      console.log(e);
    },
    clickBtn4(e) {
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
    clickTVBtn3(e) {
      console.log(e);
    },
    clickTVBtn4(e) {
      console.log(e);
    },
    clickTVBtn5(e) {
      console.log(e);
    },
    clickTVBtn6(e) {
      console.log(e);
    },
    clickTVBtn7(e) {
      console.log(e);
    },
    clickTVBtn8(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .toast-eg-wrapper{
    padding: 12px;
    .btn{
      margin: 20px;
    }
    .m-wrapper{
      position: relative;
      overflow: hidden;
      width: 375px;
      height: 667px;
      border: 1px solid #ccc;
      padding-top: 30px;
      .btn-show-toast{
        margin: 10px;
      }
    }
  }
</style>
