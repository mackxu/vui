import Vue from 'vue';

import MToast from 'components/m-toast/index';
import Toast from 'components/toast/index';

import vui from '../src';
import App from './App';
import router from './router.config';

Vue.config.productionTip = false;

Vue.use(vui);
// use 调用之后 可以通过 this.$toast.xx 和 this.$mtoast.xx 使用
Vue.use(MToast);
Vue.use(Toast);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
