
import { app as api } from "@/api/index";
const app = {
  state: {
    status: 0,
    newsList: {
      data: []
    }
  },

  mutations: {
    setStatus: function (state, params = {}) {
      let { status } = params;
      state.status = status;
    },
    newsGetList: function(state,params={}) {
      let data = params.data;
      state.newsList.data = data;
    }
  },

  actions: {
    setStatus: async function ({ commit }, params = {}) {
      commit('setStatus', params)
    },
    newsGetList: async function ({ commit }, params = {}) {
      let res = await api.newsGetList(params);
      if (res.code == 200) {
        commit('newsGetList', res)
      }
      return res;

    }
  }
};

export default app;
