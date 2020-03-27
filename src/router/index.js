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
  user,
  news,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
