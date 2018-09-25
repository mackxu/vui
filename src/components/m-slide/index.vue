
<template>
  <div>
    <section class="shade" @click="onClose" v-if="isShowToast"></section>
    <section class="toast" :style="{ bottom: bottomPosition + 'px' }">
      <div class="close-btn" @click="onClose"></div>
      <slot name="content"></slot>
    </section>
  </div>

</template>

<script>
export default{
  props: {
    isShowToast: {
      type: Boolean,
      default: false,
    },
    contentId: {
      type: String,
      require: true,
    },
  },
  computed: {
    bottomPosition() {
      if (this.isShow) {
        return 0;
      }
      return -document.querySelector(this.contentId).clientHeight;
    },
  },
  methods: {
    onClose() {
      this.$emit('on-hideToast');
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .toast {
    position: absolute; bottom: 0; left: 0; z-index: 11;
    height: 2.8rem; width: 100%;
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
