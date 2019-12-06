

const app = {
    state: {
        businessPoint: 100,//下标
        contactPoint: 100
    },
    mutations: {
        setBusinessPoint: (state,points)=>{
            state.businessPoint = points
        },

        setContactPoint: (state,points)=>{
            state.contactPoint = points
        },

    },
    actions: {
      
        //设置商业点
        setBusinessPoint: async function({commit},points){
            commit('setBusinessPoint',points)
            return;
        },
        //设置联系我们点
        setContactPoint: async function({commit},points) {
            commit('setContactPoint',points)
            return;
        }


    }
};

export default app;
