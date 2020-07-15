// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import { Button, Select } from 'element-ui';
import { Loading } from 'element-ui';
import App from './App';
import router from './router';



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
// Vue.use(Button)
// Vue.use(Select)


/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
