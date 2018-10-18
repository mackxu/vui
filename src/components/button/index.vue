<template>
  <!--<div class="btn-container">-->
  <button class="tv-button"
          :class="[focused ? 'active' : '', size === 'large' ? 'large' : size === 'small' ? 'small' : 'normal', type === 'vip' ? 'vip' : 'default']"
          @click="clickHandler"
          :style="styleObj">
    <slot></slot>
  </button>
  <!--</div>-->
</template>

<script>
export default {
  name: 'XButton',
  props: {
    // text: {
    //   type: String,
    //   require: true,
    //   default: '确定',
    // },
    size: {
      type: String,
      require: false,
      default: 'normal',
    },
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
    focused: {
      type: Boolean,
      require: false,
      default: false,
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
    // switch (this.type) {
    //   case 'svip':
    //     this.clsName = 'svip';
    //     break;
    //   case 'vip':
    //     this.clsName = 'vip';
    //     break;
    //   case 'disabled':
    //     this.clsName = 'disabled';
    //     break;
    //   case 'default':
    //     this.clsName = 'default';
    //     break;
    //   case 'defaultBg':
    //     this.clsName = 'default-bg';
    //     break;
    //   default:
    //     this.clsName = 'default-bg';
    // }
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .tv-button {
    /*display: block;*/
    width: auto;
    height: 70px;
    padding: 0 35px;
    box-sizing: border-box;
    line-height: 68px;
    border-radius: 40px;
    font-size: 30px;
    margin: 0 auto;
    box-shadow: 0px 2px 4px 0px rgba(143,110,65,0.3);
    &:focus{
      outline: none 0;
    }
    &.large{
      height: 80px;
      line-height: 78px;
      font-size: 30px;
      padding: 0 40px;
    }
    &.small{
      height: 60px;
      line-height: 58px;
      font-size: 28px;
      padding: 0 30px;
    }
    &.vip {
      background: #383838;
      color: #E6BA8E;
      border: 1px solid #383838;
      &.active{
        transform: scale(1.1);
        background:linear-gradient(10deg,rgb(189,137,82),rgb(228,196,161));
        color: #582C00;
        border: 1px solid rgb(228,196,161);
      }
    }
    &.default{
      background:#383838;
      color: #B2B2B2;
      border: 1px solid rgb(218,218,218);
      /*box-shadow: none;*/
      &.active{
        transform: scale(1.1);
        background:#5DAD47;
        color: #fff;
        border: 1px solid #5DAD47;
      }
    }
    /*&.disabled{*/
      /*background:rgb(218,218,218);*/
      /*color: #fff;*/
      /*border: 1px solid rgb(218,218,218);*/
      /*box-shadow: none;*/
    /*}*/
  }
</style>
