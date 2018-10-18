import Vue from 'vue';
import IndicatorView from './toast';

const Indicator = Vue.extend(IndicatorView);
let instance;
let timer = null;

const Toast = {
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
    instance.fontColor = options.fontColor || '#ffb400';
    document.body.appendChild(instance.$el);
    instance.message = this.showActive(instance.message, instance.fontColor);
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
  showActive(str, fontColor) {
    const start = str.indexOf('【');
    const end = str.indexOf('】');
    if (start === -1 || end === -1) return `<span class="text">${str}</span>`;
    return `<span class="text">${str.substring(0, start)}</span><span class="text" style="color: ${fontColor}">${str.substring(start, end + 1)}</span><span class="text">${str.substring(end + 1, str.length)}</span>`;
  },
  install() {
    // 在Vue的原型上添加实例，以全局调用
    Vue.prototype.$toast = Toast;
  },
};

export default Toast;
