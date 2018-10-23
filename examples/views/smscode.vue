<template>
  <div>
    <x-smscode @on-six-code="getSmscode"></x-smscode>
  </div>
</template>

<script>
export default {
  name: 'e-smscode',
  methods: {
    getSmscode(code) {
      console.log(code);
    },
  },
};
</script>

<style lang="less">

</style>
