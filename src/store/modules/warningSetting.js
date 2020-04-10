// import Cookies from "js-cookie";
import { warningSetting as api } from "@/api/index";
const lookpic = {
    state: {
      wswechatList: {
          data: []
        
      },
      wsgetReturnList: {
          data: []
      }
    },
    mutations: {
      
        wsGetwechatList: (state, response) => {
          let result = response.data;
         
          state.wswechatList = {
              data: result
          }
        },
        wsgetReturnList: (state,response)=>{
            let result = response.data;
            
            state.wsgetReturnList = {
                data: result
            }
        }
     
    },
    /* eslint-disable */
    actions: {
      
        wsGetwechatList: async function({ commit }, params) {
            let response = await api.wsGetwechatList(params);
            if (response.code == 200) {
                commit("wsGetwechatList", response);
            }
            return response;
        },
        wsPutwechatList: async function({ commit }, params) {
            let response = await api.wsPutwechatList(params);
           
            return response;
        },
        wsgetReturnList: async function({ commit }, params) {
            let response = await api.wsgetReturnList(params);
            if (response.code == 200) {
                commit("wsgetReturnList", response);
            }
            return response;
        },
        wsdelReturnList: async function({ commit }, params) {
            let response = await api.wsdelReturnList(params);
            
            return response;
        },
        wsaddReturnList: async function({ commit }, params) {
            let response = await api.wsaddReturnList(params);
            
            return response;
        },

    }
};

export default lookpic;
