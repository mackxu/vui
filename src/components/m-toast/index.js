import Vue from 'vue';
import IndicatorView from './toast';

const Indicator = Vue.extend(IndicatorView);
let instance;
let timer = null;

const MToast = {
  open(options = {}) {
    if (!instance) {
      instance = new Indicator({
        el: document.createElement('div'),
      });
    }
    if (instance.visible) {
      // 先关闭其他toast
      this.close();
    }
    instance.message = typeof options === 'string' ? options : options.message || '';
    instance.mountedEl = options.el ? options.el : document.body;

    instance.mountedEl.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
      if (options.duration) {
        timer = setTimeout(() => {
          if (options.func) {
            options.func();
          }
          this.close();
        }, options.duration);
      }
    });
  },
  close() {
    if (instance) {
      instance.visible = false;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
  },
  install() {
    // 在Vue的原型上添加实例，以全局调用
    Vue.prototype.$mtoast = MToast;
  },
};

export default MToast;
