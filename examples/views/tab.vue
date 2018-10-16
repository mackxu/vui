<template>
    <div>
      <x-tab :selectedIndex.sync="tabIndex">
        <x-tabitem>短信登录/注册</x-tabitem>
        <x-tabitem>账号登录</x-tabitem>
        <x-tabitem>短信登录/注册</x-tabitem>
        <x-tabitem>账号登录</x-tabitem>
      </x-tab>
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
};
</script>

<style lang="less">

</style>
