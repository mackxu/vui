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
        fontColor: 'red',
        duration: 5000,
      });
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .toast-eg-wrapper{
    padding: 12px;
    button{
      margin: 20px;
      margin-top: 60px;
    }
    .m-wrapper{
      position: relative;
      overflow: hidden;
      width: 375px;
      height: 667px;
      border: 1px solid #ccc;
      .btn-show-toast{
        margin: 10px;
      }
    }
  }
</style>
