import Button from './components/button';
import Header from './components/header';
import Icon from './components/Icon';
import Drawer from './components/drawer';
import Cascader from './components/cascader';
import Input from './components/m-input';
import Imagecode from './components/imagecode';
import Smscode from './components/m-smscode';
import { Tabs, TabPane } from './components/m-tab';

const components = {
  Button,
  Header,
  Icon,
  Drawer,
  Cascader,
  Input,
  Smscode,
  Imagecode,
  Tabs,
  TabPane,
};

const install = (Vue) => {
  Object.keys(components).forEach((key) => {
    const name = components[key].name || key;
    Vue.component(name, components[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
