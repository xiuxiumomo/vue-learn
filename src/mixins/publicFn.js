
const publicFn = {
    methods: {
        //公共的路由跳转
        commonRouterChange({ query = {}, params = {}, name = '' }) {
            this.$router.push({
                name,
                query,
                params
            })
        },
        //显示成功或者失败的回调
        operationFn({type="success",message="操作成功~"}={}) {
            //注意这里只支持fail success
            this.$toast[type](message);
            return;
        }
    }
}
export { publicFn }