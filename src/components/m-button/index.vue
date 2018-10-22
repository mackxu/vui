<template>
  <!--<div class="btn-container">-->
  <button class="m-button" :class="clsName" @click="clickHandler" :style="styleObj"><slot></slot></button>
  <!--</div>-->
</template>

<script>
export default {
  name: 'XButton',
  props: {
    type: {
      type: String,
      require: false,
      default: 'default',
    },
    styleObj: {
      type: String,
      require: false,
      default: '',
    },
  },
  data() {
    return {
      clsName: 'disabled',
    };
  },
  methods: {
    clickHandler(e) {
      if (this.type === 'disabled') return;
      this.$emit('on-click', e);
    },
  },
  mounted() {
    switch (this.type) {
      case 'svip':
        this.clsName = 'svip';
        break;
      case 'vip':
        this.clsName = 'vip';
        break;
      case 'disabled':
        this.clsName = 'disabled';
        break;
      case 'default':
        this.clsName = 'default';
        break;
      case 'defaultBg':
        this.clsName = 'default-bg';
        break;
      default:
        this.clsName = 'default-bg';
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .m-button {
    width: 90%;
    height: 40px;
    box-sizing: border-box;
    line-height: 38px;
    border-radius: 20px;
    font-size: 16px;
    margin: 0 auto;
    box-shadow: 0px 2px 4px 0px rgba(143,110,65,0.3);
    &:focus{
      outline: none 0;
    }
    &.default-bg {
      background: #37B133;
      color: #fff;
      border: 1px solid #37B133;
    }
    &.default{
      border: 1px solid #37B133;
      background: #fff;
      color: #37B133;
    }
    &.svip{
      background:linear-gradient(75deg,rgba(211,162,95,1) 0%,rgba(225,192,140,1) 100%);
      color: #fff;
      border: 1px solid rgba(225,192,140,1);
    }
    &.vip{
      color: rgba(211,162,95,1);
      background: #fff;
      border: 1px solid #fff;
    }
    &.disabled{
      background:rgba(218,218,218,1);
      color: #fff;
      border: 1px solid rgba(218,218,218,1);
      box-shadow: none;
    }
  }
</style>
