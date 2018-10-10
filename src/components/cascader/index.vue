
<template>
  <div class="area-container">
    <section class="shade" @click="onQuickClose" v-if="isShow"></section>
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
        <div :class="['conform', isReady ? 'selected-confirm' : '']" @click="confirm">
          确定
        </div>
      </div>
      <div class="area-list">
        <div class="item-col" v-show="curActivityTitle === 'province'">
          <div class="item item1"
               :class="provinceIndex === index ? 'item-selected' : ''"
               v-for="(item, index) in data" @click="selectItem('province', item.name, index)"
               :key='(item, index)'>
            {{item.name}}
          </div>
        </div>
        <div class="item-col" v-show="curActivityTitle === 'city'">
          <div class="item item4122"
               :class="cityIndex === index ? 'item-selected' : ''"
               v-for="(item, index) in this.citysByCurProvince"
               :key='(item, index)'
               @click="selectItem('city', item.name, index)">
            {{item.name}}
          </div>
        </div>
        <div class="item-col" v-show="curActivityTitle === 'town'">
          <div class="item item33"
               :class="townIndex === index ? 'item-selected' : ''"
               v-for="(item, index) in this.townsByCurCity"
               :key='(item, index)'
               @click="selectItem('town', item, index)">
            {{item}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    /*
     * isShow: 是否展示联动浮层, 默认不展示
     * quickCloseable: 点击遮罩是否可以关闭浮层，默认关闭
     * isSupportDefaultValue: 是否支持设定默认值，默认开启
     * defaultValue: 设定省市区的默认值
     * */
    isShow: {
      type: Boolean,
      default: false,
    },
    quickCloseable: {
      type: Boolean,
      default: false,
    },
    isSupportDefaultValue: {
      type: Boolean,
      default: true,
    },
    defaultValue: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    data() {
      return data;
    },
    animateClass() {
      return this.isShow ? 'show' : 'hide';
    },
  },
  methods: {
    init() {
      this.initByDefault();
    },
    // 初始化传递了默认值的状态
    initByDefault() {
      const provinceByProps = this.defaultValue.province;
      const cityByProps = this.defaultValue.city;
      const townByProps = this.defaultValue.town;
      if (!this.isSupportDefaultValue) return;                      // 默认值开关没打开，则不设置默认值
      if (!provinceByProps || !cityByProps || !townByProps) return; // 传递进组件的省市区缺少任何一个值，则不设置默认值
      const citysByCurProvinceObject = this.getItemAndIndexInJson(this.data, item => item.name === provinceByProps);
      const citysByCurProvinceData = citysByCurProvinceObject.targetItem;
      if (citysByCurProvinceData && citysByCurProvinceData.city) {
        const townsByCurCityDataObject = this.getItemAndIndexInJson(citysByCurProvinceData.city, item => item.name === cityByProps);
        const townsByCurCityData = townsByCurCityDataObject.targetItem;
        if (townsByCurCityData && townsByCurCityData.area) {
          const townByDefaultObject = this.getItemAndIndexInJson(townsByCurCityData.area, item => item === townByProps);
          if (townByDefaultObject.targetItem && townByDefaultObject.targetIndex !== -1) {
            this.citysByCurProvince = citysByCurProvinceData.city;
            this.townsByCurCity = townsByCurCityData.area;
            this.provinceIndex = citysByCurProvinceObject.targetIndex;
            this.cityIndex = townsByCurCityDataObject.targetIndex;
            this.townIndex = townByDefaultObject.targetIndex;
            this.curProvince = provinceByProps;
            this.curCity = cityByProps;
            this.curTown = townByProps;
            this.select(true, 'town', townByProps);
          }
        }
      }
    },
    // 点击list地名，设置当前list状态
    selectItem(title, name, index) {
      if (title === 'province') {
        this.select(false, 'city');
        this.provinceIndex = index;
        this.curProvince = name;
        this.citysByCurProvince = this.getItemAndIndexInJson(this.data, item => item.name === name).targetItem.city;
        this.townsByCurCity = [];
        this.curCity = '';
        this.cityIndex = -1;
        this.townIndex = -1;
      } else if (title === 'city') {
        this.select(false, 'town');
        this.cityIndex = index;
        this.curCity = name;
        this.townsByCurCity = this.getItemAndIndexInJson(this.citysByCurProvince, item => item.name === name).targetItem.area;
        this.townIndex = -1;
      } else if (title === 'town') {
        this.select(true, 'town', name);
        this.townIndex = index;
      }
    },
    // 设置组件是否选择完毕，当前激活的地区，当前选择的镇
    select(isReady, title, town = '') {
      this.isReady = isReady;
      this.curActivityTitle = title;
      this.curTown = town;
    },
    // 点击省市区标题，设置激活对应的list列表
    showList(title) {
      this.curActivityTitle = title;
    },
    // 确定当前选择的省市区
    confirm() {
      if (this.curProvince && this.curCity && this.curTown) {
        const selectedData = {
          province: this.curProvince,
          city: this.curCity,
          town: this.curTown,
        };
        this.$emit('on-confirm', selectedData);
        this.$emit('on-hideToast');
      }
    },
    // 点击遮罩层是否可以关闭浮层
    onQuickClose() {
      if (this.quickCloseable) {
        this.$emit('on-hideToast');
      }
    },
    // 获取数据中满足某条件的项以及索引位置
    getItemAndIndexInJson(arr, callback) {
      let targetItem = null;
      let targetIndex = -1;
      for (let i = 0; i < arr.length; i += 1) {
        const curItem = arr[i];
        if (callback(curItem)) {
          targetIndex = i;
          targetItem = curItem;
          break;
        }
      }
      return {
        targetItem,
        targetIndex,
      };
    },
  },
  created() {
    this.init();
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
      background: rgba(0, 0, 0, 0.2);
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
          padding-right: 0.1rem;
          line-height: 0.44rem;
          color: #b2b2b2;
        }
        .selected-confirm {
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
