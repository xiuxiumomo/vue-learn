import { user as api } from "~/api/index";
const user = {
    state: {
        userList: {
            data: [],
            total: 0
        }
    },
    mutations: {
        USER_LIST: (state, res) => {
            state.userList = res.data;
        }
    },

    actions: {
        userGetList: async function ({ commit }, params = {}) {
            let res = await api.userList(params);
            let resData = res.data;
            if (resData.code === 200) {
                commit('USER_LIST', resData)
            }
            return res
        }
    }
};

export default user;
