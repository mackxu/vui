<template>
    <div>
      <!--<x-tab :selectedIndex.sync="tabIndex" vip>-->
        <!--<x-tabitem>短信登录/注册</x-tabitem>-->
        <!--<x-tabitem>账号登录</x-tabitem>-->
        <!--<x-tabitem>短信登录/注册</x-tabitem>-->
        <!--<x-tabitem>账号登录</x-tabitem>-->
      <!--</x-tab>-->
      <Tabs :value="0" animated @on-change="onChange">
        <TabPane label="选项卡1">内容1</TabPane>
        <TabPane label="选项卡2">内容2</TabPane>
        <TabPane label="选项卡3">内容3</TabPane>
        <TabPane label="选项卡4">内容4</TabPane>
      </Tabs>
    </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    onChange() {},
  },
};
</script>

<style lang="less">

</style>
