import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'; //全局模块
import integral from './modules/integral'; //积分模块
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    integral
  },
  getters
})

export default store
