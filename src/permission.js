import router from './routes'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css' 
router.beforeEach((to, from, next) => {
    NProgress.start()
    //可以控制进入和不允许进入
    next()
})

router.afterEach(() => {
    NProgress.done()
})