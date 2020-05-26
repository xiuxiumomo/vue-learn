
import { integral as api } from "@/api/index";
const integral = {
  state: {
   
  },

  mutations: {
    
  },
  actions: {
   
    iTaskDetail: async function ({ commit }, params = {}) {
      let res = await api.iTaskDetail(params);
      return res;
    },
    iTaskSign: async function ({ commit }, params = {}) {
      let res = await api.iTaskSign(params);
      return res;

    },
    iTaskPromote: async function({commit},params={}) {
      let res = await api.iTaskPromote(params);
      return res;
    },
    iRoundInfo: async function({commit},params={}) {
      let res = await api.iRoundInfo(params);
      return res;
    },
    iRoundHistory: async function({commit},params={}) {
      let res = await api.iRoundHistory(params);
      return res;
    },
    iRoundBegin: async function({commit},params={}) {
      let res = await api.iRoundBegin(params);
      return res;
    },
    iRoundNotice: async function({commit},params={}){
      let  res = await api.iRoundNotice(params);
      return res;
    }
    
  }
};

export default integral;
