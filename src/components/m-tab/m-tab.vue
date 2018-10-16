<template>
  <div class="tab-wrapper">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'x-tab',
  props: {
    selectedIndex: {          // 可以外部指定选中tab项
      type: Number,
      default: 0,
    },
    vip: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentIndex: this.selectedIndex,
    };
  },
  methods: {
    init() {
      if (!this.$children || !this.$children.length) return;
      const children = this.$children;
      for (let i = 0; i < children.length; i += 1) {
        children[i].index = i;
      }
      // 创建插板Dom并添加
      if (!this.vip) return;
      for (let i = 1; i < children.length; i += 1) {
        const $insert = document.createElement('div');
        $insert.classList.add('tab-insert');
        this.$el.insertBefore($insert, children[i].$el);
      }
    },
  },
  watch: {
    currentIndex(val) {
      this.$emit('update:selectedIndex', val);
    },
    selectedIndex(val) {
      this.currentIndex = val;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  @tab-text-active-color: #37b133;
  @tab-text-active-vip-color: #C89F6E;

  .tab-wrapper {
    display: flex;
    background-color: #fff;
    height: .44rem;
  }

  .tab-item {
    position: relative;
    display: block;
    flex: 1;
    text-align: center;
    line-height: .44rem;
    .tab-item-bottomLine {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: .35rem;
      margin: auto;
      height: 3px;
    }
  }

  .tab-item-selected {
    color: @tab-text-active-color;
    font-weight: bold;
    .tab-item-bottomLine {
      background-color: currentColor;
    }
  }

  .tab-item-vip-selected {
    color: @tab-text-active-vip-color;
    .tab-item-bottomLine {
      background: currentColor;
      background: linear-gradient(104.5deg, rgba(222, 185, 130, 1), rgba(225, 192, 140, 1));
      border-radius: 2px;
    }
  }

  .tab-insert {
    width: 1px;
    height: 0.2rem;
    background-color: RGBA(215, 215, 215, .5);
    align-self: center;
  }
</style>
