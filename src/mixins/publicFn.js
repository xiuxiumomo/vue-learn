const publicFn = {
    methods: {
        //公共的路由跳转
        commonRouterChange({ query = {}, params = {}, name = '' }) {
            this.$router.push({
                name,
                query,
                params
            })
        }
    }
}
export { publicFn }