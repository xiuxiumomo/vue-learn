import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import 'normalize.css'
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
