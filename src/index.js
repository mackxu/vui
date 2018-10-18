// import vue from 'vue';
import Button from './components/button';
import Header from './components/header';
import Icon from './components/Icon';
import Drawer from './components/drawer';
import Cascader from './components/cascader';
import MToast from './components/m-toast/index';
import Toast from './components/toast/index';

const components = {
  Button,
  Header,
  Icon,
  Drawer,
  Cascader,
  MToast,
  Toast,
};

const install = (Vue) => {
  Object.keys(components).forEach((name) => {
    Vue.component(name, components[name]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
