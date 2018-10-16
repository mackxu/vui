<template>
  <div class="vui-tabs-pane"><slot></slot></div>
</template>

<script>
export default {
  name: 'TabPane',
  props: {
    label: String,
  },
  mounted() {
    console.log('pane');
  },
};
</script>

<style lang="less">

</style>
