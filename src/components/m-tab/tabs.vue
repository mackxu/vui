<template>
  <div class="vui-tabs" :class="{ 'vui-tabs-no-animation': !animated }">
    <div class="vui-tabs-nav">
      <div
        :key="index"
        :class="tabCls(item)"
        v-for="(item, index) in navList"
        @click="handleChange(index)"
      >
        <template>{{ item.label }}</template>
        <i class="vui-tabs-tab-bottomLine"></i>
      </div>
    </div>
    <div ref="panes" class="vui-tabs-content" :class="{ 'vui-tabs-content-animated': animated }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    type: {
      validator(value) {
        return ['vip', 'account'].includes(value);
      },
      default: 'vip',
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navList: [],
      activeKey: this.value,
    };
  },
  methods: {
    tabCls(item) {
      return [
        'vui-tabs-tab',
        this.type,
        { 'vui-tabs-tab-active': item.name === this.activeKey },
      ];
    },
    getTabs() {
      return this.$children.filter(item => item.$options.name === 'tab-pane');
    },
    updateNav() {
      this.getTabs()
        .forEach((pane, index) => {
          this.navList.push({
            label: pane.label,
            name: index,
          });
          pane.name = index;
        });
      this.updateStatus();
    },
    updateVisibility(nextIndex) {
      this.$refs.panes.style = `transform: translateX(${-nextIndex * 100}%)`;
    },
    updateStatus() {
      this.getTabs()
        .forEach((tab) => {
          tab.show = (tab.name === this.activeKey) || this.animated;
        });
    },
    handleChange(index) {
      console.log(index);
      const nav = this.navList[index];
      this.activeKey = nav.name;
      this.$emit('update:value', nav.name);
      this.$emit('input', nav.name);
      this.$emit('on-click', nav.name);
    },
  },
  watch: {
    value(newVal) {
      this.activeKey = newVal;
    },
    activeKey(val) {
      this.updateStatus();
      this.updateVisibility(val);
    },
  },
  mounted() {
    this.updateNav();
  },
};
</script>

<style lang="less">
  @tab-text-active-color: #37b133;
  @tab-text-active-vip-color: #c89f6e;
  .vui-tabs {
    position: relative;
    overflow: hidden;
  }

  .vui-tabs-nav {
    display: flex;
    background-color: #fff;
    height: .44rem;
  }

  .vui-tabs-tab {
    position: relative;
    flex: 1;
    text-align: center;
    line-height: .44rem;
  }

  .vui-tabs-tab-bottomLine {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: .35rem;
    margin: auto;
    height: 3px;
    border-radius: 2px;
  }

  .vui-tabs-tab-active {
    font-weight: bold;
    .vui-tabs-tab-bottomLine {
      background-color: currentColor;
    }
    &.vip {
      color: @tab-text-active-vip-color;
      .vui-tabs-tab-bottomLine {
        background: linear-gradient(104.5deg, rgba(222, 185, 130, 1), rgba(225, 192, 140, 1));
      }
    }
    &.account {
      color: @tab-text-active-color;
    }
  }

  .vui-tabs-content-animated {
    display: flex;
    will-change: transform;
    transition: transform .3s ease-in-out;
  }

  .vui-tabs-pane {
    flex-shrink: 0;
    width: 100%;
  }
  .vui-tabs-no-animation > .vui-tabs-content {
    transform: none!important;
  }
</style>
