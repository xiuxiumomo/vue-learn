import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/layout/Layout";
import user from './user';
import news from './news';
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '',
    name: 'Dashbord',
    component: Layout,
    redirect: '/dashbord',
    meta: {
      title: 'Dahbord',
      icon: 'home'
    },
    children: [
      {
        path: 'dashbord',
        component: () => import("@/views/dashbord/index"),
        meta: {
          title: 'dashbord'
        },
        name: 'dashbord'
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import("@/views/login/index"),
    meta: {
      title: 'Login',
      icon: 'home'
    }

  },
  user,
  news,
  {
    path: "*",
    name: '404',
    hidden: true,
    component: () => import("@/views/404.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
