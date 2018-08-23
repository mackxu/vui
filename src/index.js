import Button from '../components/button';
import Header from '../components/header';

const components = {
  Button,
  Header,
};

const install = (Vue) => {
  if (install.installed) return;

  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
