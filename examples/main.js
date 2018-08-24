import Vue from 'vue';
import vui from '../src';
import App from './App';
import router from './router.config';

Vue.config.productionTip = false;

Vue.use(vui);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
