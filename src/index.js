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
