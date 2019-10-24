import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Mouse from './views/Mouse.vue'
import Infinite from './views/Infinite.vue'
import CanvasHtml from './views/CanvasHtml.vue'
import MyTable from './views/MyTable'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/mouse',
      name: 'mouse',
      component: Mouse
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: Infinite
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: CanvasHtml
    },
    {
      path: '/myTable',
      name: 'myTable',
      component: MyTable
    }
  ]
})
