<!--
    created by zhangzihao on 2018/9/28
-->
<template>
  <div class="icon-view-wrap">
    <div class="display-unit" v-for="(preset, index) in presetList" :key="index">
      <Icon :type="preset" :size="size" hwver="I71S+" class="icon"></Icon>
      <div class="icon-name">{{preset}}</div>
    </div>
  </div>
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

export default {
  extends: null,
  mixins: [],
  components: {},
  data() {
    return {
      size: '100px',
      presetList: PresetClassList,
    };
  },
  props: {},
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="less" rel="stylesheet/less">
  .icon-view-wrap {
    .display-unit {
      display: inline-block;
      width: 150px;
      height: 150px;
      margin: 50px;
      text-align: center;
    }
    .icon {
      display: inline-block;
      margin-bottom: 10px;
    }
    .icon-name {
      font-size: 20px;
    }
  }
</style>
