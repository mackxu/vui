
<template>
  <div>
    <section class="shade" @click="onShadeClose" v-if="isShow"></section>
    <section class="toast" :class="!isShow ? 'toast-hide' : ''">
      <div class="close-btn" @click="onClose">
        <icon type="close-hollow" size="20px"></icon>
      </div>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>

import Icon from '../Icon';

export default{
  name: 'Drawer',
  component: {
    Icon,
  },
  props: {
    /*
     * isShow: 是否展示当前隐藏在底部的toast浮层, 默认不展示
     * quickCloseable: 点击遮罩是否可以关闭浮层，默认关闭
     * */
    isShow: {
      type: Boolean,
      default: false,
    },
    quickCloseable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClose() {
      this.$emit('on-hideToast');
    },
    onShadeClose() {
      if (this.quickCloseable) {
        this.$emit('on-hideToast');
      }
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .toast {
    position: absolute; bottom: 0; left: 0; z-index: 11;
    width: 100%; max-height: 4rem; overflow: scroll;
    background-color: #f1f1f1;
    transition: transform 300ms;
  }
  .toast-hide {
    transform: translateY(100%);
  }
  .shade {
    position: absolute; left: 0; top: 0;
    width: 100%; height:100%;
    background:rgba(0,0,0,0.2);
    opacity:0.5;
    z-index: 11;
  }
  .close-btn {
    float: right;
    width: 0.2rem; height: 0.2rem; margin: 0.1rem;
    background-size: 100% 100%;
  }
</style>
