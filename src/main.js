import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import 'vant/lib/index.css';
import Vant from 'vant';
import router from './routes/index' //路由
import store from './store'
import './permission' //权限
import { publicFn } from './mixins/publicFn' //全局混合
import Bridge from '@/utils/myBridge.js'; //birdge
Vue.prototype.$bridge = Bridge
Vue.use(Vant)
Vue.mixin(publicFn)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
