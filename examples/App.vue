<template>
  <div class="vui-examples">
    <div class="components-list">
      <h1> vui组件库 </h1>
      <template v-for="route in $router.options.routes">
        <router-link  :to="route.path" :key="route.path">
          <div class="item">{{route.name}}</div>
        </router-link>
      </template>
    </div>
    <div class="components-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    font-size: 14px;
  }
  .vui-examples{
    display: flex;
  }
  .components-content {
    flex: 1;
  }
  .components-list {
    width: 200px;
    min-height: 600px;
    margin-right: 12px;
    border-right: 1px solid #ccc;
  }
</style>
