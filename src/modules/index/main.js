import App from './App.vue'
import functions from '@/functions/function'
import router from './router'
Vue.config.productionTip = false
Vue.prototype.$functions = functions;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
