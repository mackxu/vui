<template>
    <div>
      <!--<x-tab :selectedIndex.sync="tabIndex" vip>-->
        <!--<x-tabitem>短信登录/注册</x-tabitem>-->
        <!--<x-tabitem>账号登录</x-tabitem>-->
        <!--<x-tabitem>短信登录/注册</x-tabitem>-->
        <!--<x-tabitem>账号登录</x-tabitem>-->
      <!--</x-tab>-->
      <Tabs :value.sync="tabIndex" @on-click="onChange">
        <TabPane label="选项卡1">内容1</TabPane>
        <TabPane label="选项卡2">内容2</TabPane>
        <TabPane label="选项卡3">内容3</TabPane>
        <TabPane label="选项卡4">内容4</TabPane>
      </Tabs>
      <p></p>
      <p>动画</p>
      <Tabs :value.sync="tabIndex2" animated="true" @on-click="onChange">
        <TabPane label="选项卡1">内容1</TabPane>
        <TabPane label="选项卡2">内容2</TabPane>
        <TabPane label="选项卡3">内容3</TabPane>
        <TabPane label="选项卡4">内容4</TabPane>
      </Tabs>
      <p></p>
      <p>type: account</p>
      <p></p>
      <Tabs type="account" :value.sync="tabIndex3" animated="true" @on-click="onChange">
        <TabPane label="短信验证码登录">短信验证码登录</TabPane>
        <TabPane label="账号登录">账号登录</TabPane>
      </Tabs>
    </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      tabIndex: 0,
      tabIndex2: 0,
      tabIndex3: 0,
    };
  },
  methods: {
    onChange() {},
  },
};
</script>

<style lang="less">

</style>
