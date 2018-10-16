import Button from './components/button';
import Header from './components/header';
import Icon from './components/Icon';
import Drawer from './components/drawer';
import Cascader from './components/cascader';

const components = {
  Button,
  Header,
  Icon,
  Drawer,
  Cascader,
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
