
import { stillLook as api } from "@/api/index";
const stillLook = {
    state: {
        slwechatList: {
            data: [],
            total: 0
        }
    },
    mutations: {
        slwechatList: (state,response)=>{
            let result = response.data;
            state.slwechatList = {
                data: result.data,
                total: result.total
            }
        }

    },
    /* eslint-disable */
    actions: {
        slUsed: async function({ commit }, params) {
            let response = await api.slUsed(params);
            return response;
        },
        slwechatList: async function({ commit }, params) {
            let response = await api.slwechatList(params);
            if(response.code==200) {
                commit('slwechatList',response)
            }
            return response;
        },
        slwrongList: async function({ commit }, params) {
            let response = await api.slwrongList(params);
            return response;
        },
        slTipList: async function({ commit }, params) {
            let response = await api.slTipList(params);
            return response;
        },
        slstopWechat: async function({ commit }, params) {
            let response = await api.slstopWechat(params);
            return response;
        },
        slcurrQuestionList: async function({commit},params) {
            let response = await api.slcurrQuestionList(params);
            return response;
        },
        slupdateWarn: async function({commit},params) {
            let response = await api.slupdateWarn(params);
            return response;
        },
        sltodayWarn: async function({commit},params) {
            let response = await api.sltodayWarn(params);
            return response;
        },
        sltodayStatis: async function({commit},params) {
            let response = await api.sltodayStatis(params);
            return response;
        },

    }
};

export default stillLook;
