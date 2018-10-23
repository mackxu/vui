<template>
    <div>
      <Tabs>
        <tab-pane label="选项卡1">内容1</tab-pane>
        <tab-pane label="选项卡2">内容2</tab-pane>
      </Tabs>
      <hr>
      <p> value 双向绑定 </p>
      <Tabs :value.sync="tabIndex" @on-click="onChange">
        <tab-pane label="选项卡1">内容1</tab-pane>
        <tab-pane label="选项卡2">内容2</tab-pane>
        <tab-pane label="选项卡3">内容3</tab-pane>
      </Tabs>
      <p></p>
      <hr>
      <p>动画</p>
      <Tabs :animated="true" @on-click="onChange">
        <tab-pane label="选项卡1">内容1</tab-pane>
        <tab-pane label="选项卡2">内容2</tab-pane>
        <tab-pane label="选项卡3">内容3</tab-pane>
        <tab-pane label="选项卡4">内容4</tab-pane>
      </Tabs>
      <p></p>
      <hr>
      <p>type: account</p>
      <p></p>
      <Tabs type="account" @on-click="onChange">
        <tab-pane label="短信验证码登录">短信验证码登录</tab-pane>
        <tab-pane label="账号登录">账号登录</tab-pane>
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
