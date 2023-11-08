import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Particles from 'vue-particles';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/theme/index.scss';
import { i18n } from '@/i18n/index.js';
import { globalComponentSize } from '@/utils/componentSize.js';
import VueCookies from 'vue-cookies'
import Axios from 'axios'
Vue.use(VueCookies);
Vue.use(Particles);
Vue.use(Element, { i18n: (key, value) => i18n.t(key, value), size: globalComponentSize });
Vue.prototype.$axios = Axios //原型挂载
Axios.defaults.baseURL = 'http://192.168.16.192:8086/'
// Axios.defaults.baseURL = 'http://192.168.16.192:8086';
Vue.config.productionTip = false;
Vue.prototype.bus = new Vue();

new Vue({
	router,
	store,
	i18n,
	render: (h) => h(App),
}).$mount('#app');
