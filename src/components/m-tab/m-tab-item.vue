<template>
  <div class="tab-item" :class="itemSelectedClass" @click="onItemClick">
    <slot></slot>
    <i class="tab-item-bottomLine" :class="{ 'tab-item-textLine': $parent.vip }"></i>
  </div>
</template>

<script>

export default {
  name: 'x-tab-item',
  computed: {
    itemSelectedClass() {
      const selected = this.$parent.currentIndex === this.index;
      return {
        'tab-item-selected': selected,
        'tab-item-vip-selected': selected && this.$parent.vip,
      };
    },
  },
  data() {
    return {
      index: -1,
    };
  },
  methods: {
    onItemClick() {
      this.$parent.currentIndex = this.index;
      this.$emit('on-tab-click', this.index);
    },
  },
};
</script>
