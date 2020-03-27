
import { news as api } from '@/api'
/* eslint-disable */
const news = {
    state: {},
    mutations: {},
    actions: {
        newsGetList: async function ({ commit }, params = {}) {
            let response = await api.newsGetList(params);
            return response
        },
    }
}
export default news;