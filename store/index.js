import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex)
const store = function() {
    return new Vuex.Store({
        modules: {
            user,
        },
        getters
    })
}
export default store
