import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
require('normalize.css')
//require('@/mock')
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(Antd)
Vue.use(Viewer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
