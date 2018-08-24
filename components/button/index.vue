<template>
  <div class="btn-container">
    <slot>{{text}}</slot>
  </div>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    text: String,
  },
};
</script>

<style>
  .btn-container {
    color: aquamarine;
    font-size: 24px;
  }
</style>
