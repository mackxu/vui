import Button from './components/button';
import Header from './components/header';

const components = {
  Button,
  Header,
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
