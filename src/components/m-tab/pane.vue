<template>
  <div class="vui-tabs-pane" v-show="show"><slot></slot></div>
</template>

<script>
export default {
  name: 'TabPane',
  props: {
    label: String,
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    console.log('pane');
  },
};
</script>

<style lang="less">

</style>
