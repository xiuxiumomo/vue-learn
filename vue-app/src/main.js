import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import 'normalize.css'
import 'vant/lib/index.css';
import Vant from 'vant';
import router from './routes/index'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
