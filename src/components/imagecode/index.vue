<template>
  <div
    class="imagecode-wrapper"
    :style="{ width: _width, height: _height, lineHeight: _height }"
    @click="update">
    <img :src="url" alt="点击重新获取" :style="{ height: _height }">
  </div>
</template>

<script>

export default {
  name: 'imagecode',
  props: {
    width: {
      type: Number,
      default: 120,
    },
    height: {
      type: Number,
      default: 44,
    },
  },
  computed: {
    _width() {
      return `${this.width / 100}rem`;
    },
    _height() {
      return `${this.height / 100}rem`;
    },
  },
  data() {
    return {
      count: 0,
      url: '',
    };
  },
  methods: {
    getUrl() {
      this.count += 1;
      return `http://passport.ptqy.gitv.tv/apis/register/vcode.action?width=${this.width}&height=${this.height}&_t=${this.count}`;
    },
    update() {
      this.url = this.getUrl();
      this.$emit('on-update-image');
    },
  },
  created() {
    this.url = this.getUrl();
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  .imagecode-wrapper {
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
</style>
