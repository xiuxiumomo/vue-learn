import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
let routes = [
    {
        path: '/',
        name: '',
        redirect:'/good',
        children: [

        ]
    },
    {
        path: '/good',
        name: 'good',
        component: () => import("@/pages/goods/index"),
        meta: {
           title: '精华'
        }
    },
    {
      path: '/articleDetail/:id',
      name: 'article_detail',
        component: () => import("@/pages/detail/index"),
        meta: {
            title: '文章详情'
        }

    },
    {
        path: '/ask',
        name: 'ask',
        component:  () => import("@/pages/ask/index"),
        meta: {
            title: '问答'
        }
    },
    {
        path: '/job',
        name: 'job',
        component:  () => import("@/pages/job/index"),
        meta: {
            title: '工作'
        }
    },
    {
        path: '/share',
        name: 'share',
        component:  () => import("@/pages/share/index"),
        meta: {
            title: '分享'
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