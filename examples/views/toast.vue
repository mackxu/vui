<template>
  <div class="toast-eg-wrapper">
    <div class="m-wrapper" ref="MWrapper">
      <button @click="open"></button>
      <!--<MToast message="请稍后" :duration="4000"></MToast>-->
    </div>
  </div>
</template>

<script>
import MToast from 'components/m-toast';

export default {
  name: 'MToastEg',
  methods: {
    open() {
      MToast.open({
        message: '抱歉，请使用微信或支付宝参加该活动',
        duration: 3000,
        el: this.$refs.MWrapper,
      });
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .toast-eg-wrapper{
    padding: 12px;
    .m-wrapper{
      position: relative;
      overflow: hidden;
      width: 375px;
      height: 667px;
      border: 1px solid #ccc;
    }
  }
</style>
