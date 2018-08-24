<template>
  <div class="vui-examples">
    <p>
      <template v-for="route in $router.options.routes">
        <router-link  :to="route.path" :key="route.path">
          {{route.name}}
        </router-link>&nbsp;
      </template>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
    font-size: 30px;
  }
</style>
