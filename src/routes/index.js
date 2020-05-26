import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
let routes = [
    // 首页
    {
        path: '/',
        name: 'Home',
        redirect: 'showPage',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/showPage',
        name: 'ShowPage',
        component: () => import('@/pages/showPage/index'),
        meta: {
            title: '展示页'
        }
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/pages/test/index'),
        meta: {
           title: '测试页'
        }
    },
    {
        path: '/appToAddress',
        name: 'appToAddress',
        component: () => import('@/pages/appToAddress/index'),
        meta: {
            title: '进入页'
        }
    },
    {
        path: '/luckyRound',
        name: 'lucykRound',
        component: () => import('@/pages/luckyRound/index'),
        meta: {
            keepAlive: true,
            title: '积分抽奖'
        }
    },
    {
        path: '/luckyHistory',
        name: 'luckyHistory',
        component: () => import('@/pages/luckyHistory/index'),
        meta: {
            title: '抽奖历史'
        }
    },
    {
        path: '/integralTask',
        name: 'integralTask',
        component: () => import('@/pages/integralTask/index'),
        meta: {
            title: '积分任务'
        }
    },
    {
        path: '/promote',
        name: 'promote',
        component: () => import('@/pages/promote/index'),
        meta: {
            title: '推广'
        }
    },
    {
        path: '/change',
        name: 'change',
        component: ()=> import('@/pages/change/index'),
        meta: {
            title: '连接'
        }
    },
    {
        path: '*',
        name: 'all',
        redirect: '/404',
        component: () => import("@/pages/404"),
        hidden: true,
        meta: {}
    },
    {
        path: '/404',
        name: '404',
        component: () => import("@/pages/404"),
        hidden: true,
        meta: {
            title: '404页'
        }
    }
]

export default new Router({
    mode: 'history',//不加/
    routes
})