import { getDeviceConfig } from '@/utils/auth'
const publicFn = {
    methods: {
        //公共的路由跳转
        commonRouterChange({ path = '', params = {}, name = '' }) {
            this.$router.push({
                path,
                params,
                name
            })
        },
        //显示成功或者失败的回调
        operationFn({ type = "success", message = "操作成功~", duration = 1000 } = {}) {
            //注意这里只支持fail success
            this.$toast[type]({ message, duration });
            return;
        },
        getCommonToken() {
            let res = getDeviceConfig();
            return res.token;
        },
        getActivityId() {
            let res = getDeviceConfig();
           
            //let activity_id = this.$route.query.activity_id ? this.$route.query.activity_id : 1;
            return res.activity_id;
        },
        cookieDevice() {
            return getDeviceConfig()
        }
    }
}
export { publicFn }