import router from './routes'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })
import { setDeviceConfig } from '@/utils/auth'
const startPage = '/luckyRound'; //路口页面
router.beforeEach((to, from, next) => {
    NProgress.start()
    if(to.meta.title) {
        document.title = to.meta.title
    }
    if (to.path == '/apptoaddress') {
        let queryData = to.query.params ? JSON.parse(to.query.params) : {};
        let url = to.query.jieduVueUrl
        let activity_id = to.query.activity_id ? to.query.activity_id : 1;
        if (url == 'luckyRound') {
            queryData.activity_id = activity_id
        }
        //如果本地有没有token直接设置，如果有对比之后再设置
        setDeviceConfig({
            ...queryData
        })
        next({ path: url ? '/' + url : startPage, replace: true });
    }
    if (to.path == '/change') {
        let url = to.query.jieduVueUrl;
        next({ path: '/' + url, replace: true });
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})