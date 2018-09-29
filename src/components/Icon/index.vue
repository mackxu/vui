<!--
    created by zhangzihao on 2018/9/27
-->
<template>
  <i :class="iconClass" :style="iconStyle"></i>
</template>

<script>
const PresetClassList = [
  'warning',
  'gitv',
  'v',
  'v-novip',
  'v-vip',
  'crown-common',
  'crown-tennis',
  'm-crown',
  'm-crown-vip',
  'arrow-right',
  'gold-bag',
  'success',
  'close-solid',
  'close-hollow',
  'm-warning',
  'cash-tag',
];

const GradientClassSetting = new Map([
  ['v-vip', {
    backupColor: '#f4c288',
  }],
  ['m-crown-vip', {
    backupColor: '#f4c288',
  }],
]);

// 不支持字体渐变的hwver的黑名单
const GradientHwverBlackList = [
  'I71',
  '长虹智能电视',
];

export default {
  extends: null,
  mixins: [],
  components: {},
  data() {
    return {
      backupStyle: null,
      isGradientIcon: false,
    };
  },
  props: {
    size: {
      type: String,
      default: '14px',
    },
    type: {
      type: String,
      required: true,
    },
    hwver: {
      type: String,
      default: '',
    },
    backupColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    hwVer() {
      return (this.hwver || window.hwver);
    },
    iconClass() {
      // type合法性检测
      if (PresetClassList.indexOf(this.type) < 0) {
        throw new Error(`Icon Type Error: type ${this.type} do not exist!
        http://ott-fe.gitlab.qiyi.domain/vui/#/base/icon`);
      }
      return `icon-${this.type}`;
    },
    iconStyle() {
      let backStyle = {};
      if (this.isGradientIcon && !this.isSupportIconGradient) {
        const presetSetting = GradientClassSetting.get(this.type);
        backStyle = {
          background: 'none',
          color: this.backupColor || (presetSetting && presetSetting.backupColor) || '#000',
        };
      }
      return {
        fontSize: this.size,
        ...backStyle,
      };
    },
    isSupportIconGradient() {
      if (this.isGradientIcon && !this.hwVer) {
        throw new Error('Props Error: gradient icon need hwver !!! \n' +
          'see more info in doc http://ott-fe.gitlab.qiyi.domain/vui/#/base/icon');
      }
      return (GradientHwverBlackList.indexOf(this.hwver) < 0);
    },
  },
  methods: {
    checkIconGradientProp() {
      this.isGradientIcon = getComputedStyle(this.$el)['-webkit-background-clip'] === 'text';
    },
    init() {
      this.checkIconGradientProp();
    },
  },
  watch: {},
  mounted() {
    this.init();
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  @import './assets/icon';
</style>
