import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app' //全局
import news from './modules/news' //新闻
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    app,
    news
  },
  getters
})
