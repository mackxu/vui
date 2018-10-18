<template>
  <transition name="fade">
    <div class="tv-toast-wrapper" v-if="visible"><p class="toast-content" v-html="message"></p></div>
  </transition>
</template>

<script>
export default {
  name: 'TVToast',
  data() {
    return {
      visible: false,
    };
  },
  props: {
    duration: {
      type: Number,
      require: false,
      default: 3000,
    },
    message: {
      type: String,
      require: true,
    },
    fontColor: {
      type: String,
      require: false,
    },
  },
};
</script>
<style lang="less" rel="stylesheet/less">
  .tv-toast-wrapper{
    position: fixed;
    bottom: 120px;
    left: 50%;
    transform: translate(-50%, 0);
    background: rgba(0, 0, 0, .85);
    height: 90px;
    max-width: 50%;
    border-radius: 40px;
    padding: 0 45px;
    font-size: 0px;
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity .5s;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
    .toast-content{
      width: 780px;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .text{
      margin: 0;
      line-height: 90px;
      font-size: 36px;
      color: #fff;
      &.active{
        color: #ffb400;
      }
    }
  }
</style>
