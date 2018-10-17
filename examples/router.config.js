import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'Button',
      path: '/',
      component: () => import('./views/button'),
    }, {
      name: 'Header',
      path: '/header',
      component: () => import('./views/header'),
    }, {
      name: 'Icon',
      path: '/icon',
      component: () => import('./views/icon'),
    }, {
      name: 'Drawer',
      path: '/drawer',
      component: () => import('./views/drawer'),
    }, {
      name: 'Cascader',
      path: '/cascader',
      component: () => import('./views/cascader'),
    }, {
      name: 'MToast',
      path: '/m-toast',
      component: () => import('./views/toast'),
    },
  ],
});
