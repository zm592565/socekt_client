import App from './App.vue'
import functions from '@/functions/function'
import tools from '@/functions/tools'
import router from './router'
import EasyScroll from 'easyscroll';
import store from '@/store';
Vue.use(EasyScroll);
Vue.config.productionTip = false
Vue.prototype.$functions = functions;
Vue.prototype.$tools=tools;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
