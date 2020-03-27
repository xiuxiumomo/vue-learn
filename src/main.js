import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'
import '@/assets/less/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import { publicFn } from './mixins/publicFn'
import './permission'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.mixin(publicFn)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
