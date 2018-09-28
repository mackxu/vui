
<template>
  <div class="area-container">
    <section class="shade" @click="hideAreaToast" v-if="isShowAreaToast"></section>
    <div class="area-content" :class="animateClass">
      <div class="area-header">
        <div class="item"
             :class="curActivityTitle === 'province' ? 'item-focus' : ''"
             @click="showList('province')">
          <div class="text">{{curProvince || '请选择'}}</div>
        </div>
        <div class="item"
             :class="curActivityTitle === 'city' ? 'item-focus' : ''"
             @click="showList('city')"
             v-show="curProvince.length > 0">
          <div class="text">{{curCity || '请选择'}}</div>
        </div>
        <div class="item"
             :class="curActivityTitle === 'town' ? 'item-focus' : ''"
             @click="showList('town')"
             v-show="curCity.length > 0">
          <div class="text">{{curTown || '请选择'}}</div>
        </div>
        <div :class="['conform', isReady ? 'selected-comform' : '']" @click="comform">
          确定
        </div>
      </div>
      <div class="area-list">
        <div class="item-col" v-show="curActivityTitle === 'province'">
          <div class="item"
               :class="provinceIndex === index ? 'item-selected' : ''"
               v-for="item, index in data"
               @click="selectItem('province', item.name, index)">
            {{item.name}}
          </div>
        </div>
        <div class="item-col" v-show="curActivityTitle === 'city'">
          <div class="item"
               :class="cityIndex === index ? 'item-selected' : ''"
               v-for="item, index in this.citysByCurProvince"
               @click="selectItem('city', item.name, index)">
            {{item.name}}
          </div>
        </div>
        <div class="item-col" v-show="curActivityTitle === 'town'">
          <div class="item"
               :class="townIndex === index ? 'item-selected' : ''"
               v-for="item, index in this.townsByCurCity"
               @click="selectItem('town', item, index)">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commonUtils from '../../utils/common';
import data from './area-json';

export default{
  data() {
    return {
      curProvince: '',
      curCity: '',
      curTown: '',
      citysByCurProvince: [],
      townsByCurCity: [],
      isShowProvinceList: true,      // 是否显示省列表
      isShowCityList: false,         // 是否显示市列表
      isShowTownList: false,         // 是否显示区列表
      curActivityTitle: 'province',
      isReady: false,
      provinceIndex: -1,
      cityIndex: -1,
      townIndex: -1,
    };
  },
  props: {
    isShowAreaToast: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    data() {
      return data;
    },
    animateClass() {
      return this.isShowAreaToast ? 'show' : 'hide';
    },
  },
  methods: {
    selectItem(title, name, index) {
      if (title === 'province') {
        this.select(false, 'city');
        this.provinceIndex = index;
        this.curProvince = name;
        this.citysByCurProvince = commonUtils.find(this.data, item => item.name === name).city;
        this.townsByCurCity = [];
        this.curCity = '';
        this.cityIndex = -1;
        this.townIndex = -1;
      } else if (title === 'city') {
        this.select(false, 'town');
        this.cityIndex = index;
        this.curCity = name;
        this.townsByCurCity = commonUtils.find(this.citysByCurProvince, item => item.name === name).area;
        this.townIndex = -1;
      } else if (title === 'town') {
        this.select(true, 'town', name);
        this.townIndex = index;
      }
    },
    select(isReady, title, town = '') {
      this.isReady = isReady;
      this.curActivityTitle = title;
      this.curTown = town;
    },
    showList(title) {
      this.curActivityTitle = title;
    },
    comform() {
      if (this.curProvince && this.curCity && this.curTown) {
        this.$emit('on-comformArea', this.curProvince + this.curCity + this.curTown);
        this.$emit('on-hideAreaToast');
      }
    },
    hideAreaToast() {
      this.$emit('on-hideAreaToast');
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../styles/func";

  .area-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .hide {
      top: 100%;
    }
    .show {
      top: 50%;
    }
    .shade {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 1);
      opacity: 0.5;
      z-index: 11;
    }
    .area-content {
      position: absolute;
      left: 0;
      height: 50%;
      width: 100%;
      background-color: #fff;
      z-index: 12;
      font-size: 0.14rem;
      transition: all 200ms;
      .area-header {
        position: relative;
        height: 0.45rem;
        border-bottom: 0.01rem solid #dadada;
        .item {
          float: left;
          width: 26%;
          padding-left: 0.15rem;
          padding-right: 0.1rem;
          line-height: 0.44rem;
          color: #666;
          .text {
            padding: 0 0.05rem;
            height: 0.44rem;
            line-height: 0.44rem;
            .line-clamp(1);
          }
        }
        .item-focus {
          .text {
            border-bottom: 0.01rem solid #37B133;
          }
        }
        .conform {
          position: absolute;
          right: 0;
          top: 0;
          height: 0.44rem;
          padding-left: 0.15rem;
          padding-right: 0.15rem;
          line-height: 0.44rem;
          color: #b2b2b2;
        }
        .selected-comform {
          color: #333;
        }
      }
      .area-list {
        overflow: scroll;
        height: 85%;
        will-change: transform;
        .item-col {
          float: left;
          padding-left: 0.15rem;
          padding-right: 0.1rem;
          width: 100%;
          line-height: 0.4rem;
          color: #666;
        }
        .item {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .item-focus {
          color: #37B133;
        }
        .item-selected {
          color: #37B133;
        }
      }
    }
  }
</style>
