import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/icons'
import '@/assets/less/index.less'
import { publicFn } from './mixins/publicFn'
import pagenation from '@/global/pagenation/index'
import './permission'
Vue.config.productionTip = false
const ElementUI = window.ELEMENT;
Vue.use(ElementUI, { size: 'mini' })
Vue.use(pagenation)
console.log('jenkens-test')
console.log('定时构建22')
Vue.mixin(publicFn)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
