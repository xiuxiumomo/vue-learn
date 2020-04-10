import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import warningSetting from './modules/warningSetting' //预警设置
import stillLook from './modules/stillLook' //实时监控
import warningStatis from './modules/warningStatis' //预警设置
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    warningSetting,
    stillLook,
    warningStatis
  },
  getters
})

export default store
