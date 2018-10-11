import Button from './components/button';
import Header from './components/header';
import Icon from './components/Icon';

const components = {
  Button,
  Header,
  Icon,
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
