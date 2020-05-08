import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/index';
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')