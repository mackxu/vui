<!--
    created by zhangzihao on 2018/9/28
-->
<template>
  <div class="box">
    <div class="">说明：</div>
    <div class="">1 点击组件外部按钮触发展示抽屉组件</div>
    <div class="">2 点击组件内部X按钮隐藏抽屉组件</div>
    <div class="">3 点击组件内部遮罩隐藏抽屉组件</div>
    <br>
    <br>
    <div class="container">
      <Drawer :isShow="isShow"
              :quickCloseable="quickCloseable"
              @on-hideToast="onHideToast">
        <div slot="content">
          <p>这里是slot插槽</p>
          <p>高度会随着内容撑高</p>
          <p>这里是slot插槽</p>
          <p>高度会随着内容撑高</p>
          <p>这里是slot插槽</p>
          <p>高度会随着内容撑高</p>
          <p>这里是slot插槽</p>
          <p>高度会随着内容撑高</p>
        </div>
      </Drawer>
    </div>
    <div class="btn" @click="showDrawer">点击我展示抽屉菜单</div>
  </div>
</template>

<script>
export default {
  name: 'eDrawer',
  data() {
    return {
      isShow: true,
      quickCloseable: true,
    };
  },
  methods: {
    onHideToast() {
      this.isShow = false;
    },
    showDrawer() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .btn {
    color: #666; line-height: 1.5; font-size: 16px;
  }
  .container {
    position: relative; overflow: hidden;
    width: 300px; height: 600px; border: 1px solid #ccc;
  }
</style>
