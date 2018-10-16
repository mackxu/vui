<!--
    created by zhangzihao on 2018/9/28
-->
<template>
  <div class="box">
    <div class="">说明：</div>
    <br>
    <div class="container">
      <cascader :isShow="isShow"
                :defaultValue="defaultValue"
                :quickCloseable="quickCloseable"
                :isSupportDefaultValue="isSupportDefaultValue"
                @on-hideToast="onHideToast"
                @on-confirm="onConfirm">
      </cascader>
    </div>
    <br>
    <div>{{selectedData}}</div>
    <br>
    <label for="area">地区：</label>
    <input name="area" class="btn" type="text" v-model="selectedStr" @click="showDrawer" placeholder="点击我展示省市区组件">
  </div>
</template>

<script>
export default {
  name: 'eCascader',
  data() {
    return {
      selectedData: '',
      selectedStr: '',
      isShow: false,
      quickCloseable: true,
      isSupportDefaultValue: true,
      defaultValue: {
        province: '内蒙古自治区',
        city: '呼和浩特市',
        town: '新城区',
      },
    };
  },
  methods: {
    onHideToast() {
      this.isShow = false;
    },
    showDrawer() {
      this.isShow = true;
    },
    onConfirm(data) {
      this.selectedData = JSON.stringify(data);
      this.selectedStr = data.province + data.city + data.town;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .btn {
    color: #f00; line-height: 1.5; font-size: 16px;
  }
  .container {
    position: relative; overflow: hidden;
    width: 400px; height: 600px; border: 1px solid #ccc;
  }
</style>
