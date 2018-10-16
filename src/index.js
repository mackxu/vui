import Button from './components/button';
import Header from './components/header';
import Icon from './components/Icon';
import smscode from './components/m-smscode';
import input from './components/m-input';

const components = {
  Button,
  Header,
  Icon,
  smscode,
  input,
};

const install = (Vue) => {
  Object.keys(components).forEach((name) => {
    const comp = components[name];
    console.log(comp.name || name);
    // 优先用组件的name属性
    Vue.component(comp.name || name, comp);
  });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
