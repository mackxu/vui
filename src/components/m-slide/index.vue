
<template>
  <div>
    <section class="shade" @click="onShadeClose" v-if="isShowToast"></section>
    <section class="toast" :style="{ bottom: bottomPosition + 'px' }">
      <div class="close-btn" @click="onClose"></div>
      <slot name="content"></slot>
    </section>
  </div>

</template>

<script>
export default{
  props: {
    /*
     * isShowToast: 是否展示当前隐藏在底部的toast浮层, 默认不展示
     * isClickShadeCloseToast: 点击遮罩是否可以关闭浮层，默认开启
     * contentId:slot内容的父容器id，可以依据该id容器设置toast高度
     * toastHegiht: slot内容的父容器高度, 可以设定toast高度
     * */
    isShowToast: {
      type: Boolean,
      default: false,
    },
    isClickShadeCloseToast: {
      type: Boolean,
      default: true,
    },
    contentId: {
      type: String,
      default: '',
    },
    toastHegiht: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    bottomPosition() {
      if (this.isShowToast) {
        return 0;
      }
      if (this.contentId) {
        return -document.querySelector(this.contentId).clientHeight;
      }
      return -this.toastHegiht || -400;
    },
  },
  methods: {
    onClose() {
      this.$emit('on-hideToast');
    },
    onShadeClose() {
      if (this.isClickShadeCloseToast) {
        this.$emit('on-hideToast');
      }
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .toast {
    position: absolute; bottom: 0; left: 0; z-index: 11;
    width: 100%;
    background-color: #f1f1f1;
    transition: bottom 300ms;
  }
  .shade {
    position: absolute; left: 0; top: 0;
    width: 100%; height:100%;
    background:rgba(0,0,0,1);
    opacity:0.5;
    z-index: 11;
  }
  .close-btn {
    float: right;
    width: 0.25rem; height: 0.25rem; margin: 0.1rem;
    background-size: 100% 100%;
  }
</style>
