import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
let routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        redirect: 'showPage'
    },
    {
        path: '/showPage',
        name: 'ShowPage',
        component: () => import('@/pages/showPage/index')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/pages/test/index'),
        meta: {
           
        }
    },
    {
        path: '*',
        name: 'all',
        redirect: '/404',
        component: () => import("@/pages/404"),
        hidden: true
    },
    {
        path: '/404',
        name: '404',
        component: () => import("@/pages/404"),
        hidden: true
    }
]

export default new Router({
    mode: 'history',//不加/
    routes
})