import { getSideBar, setSideBar } from '@/utils/author'
const app = {
    state: {
        sidebar: {
            open: !+getSideBar(),
        }
    },
    mutations: {
        ToggleSideBar: (state) => {
            
            state.sidebar.open ? setSideBar(0) : setSideBar(1);
            state.sidebar.open = !state.sidebar.open;
            
        }
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('ToggleSideBar');
        },
    }
}
export default app;