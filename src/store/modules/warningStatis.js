// import Cookies from "js-cookie";
import { warningStatis as api } from "@/api/index";
const warningStatis = {
    state: {
        wstwechatList: {
            data: [],
            total: 0

        },
    },
    mutations: {

        wstgetList: (state, response) => {
            let result = response.data;
            state.wstwechatList = {
                data: result.data,
                total: result.total
            }
        },

    },
    /* eslint-disable */
    actions: {

        wstgetList: async function ({ commit }, params) {
            let response = await api.wstgetList(params);
            if (response.code == 200) {
                commit("wstgetList", response);
            }
            return response;
        },
        wstwechatDetail: async function ({ commit }, params) {
            let response = await api.wstwechatDetail(params);
            return response;
        },
        wstwrongList: async function ({ commit }, params) {
            let response = await api.wstwrongList(params);
            return response;
        },
        wstwechatDateList: async function ({ commit }, params) {
            let response = await api.wstwechatDateList(params);
            return response;
        },
        wstwechatBarList: async function ({ commit }, params) {
            let response = await api.wstwechatBarList(params);
            return response;
        },



    }
};

export default warningStatis;
