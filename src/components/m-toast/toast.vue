<template>
  <transition name="fade">
    <div class="m-toast-wrapper" v-if="visible">
      <p class="text">{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MToast',
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
    el: {
      type: HTMLBodyElement,
      require: false,
      // eslint-disable-next-line
      default: function () {
        return document.body;
      },
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .m-toast-wrapper{
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: 60%;
    text-align: center;
    line-height: 18px;
    padding: 10px 20px;
    background: rgba(0, 0, 0, .7);
    border-radius: 20px;
    color: #fff;
    opacity: 1;
    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity .5s;
    }
    &.fade-enter,
    &.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    .text{
      margin: 0;
      font-size: 15px;
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
</style>
