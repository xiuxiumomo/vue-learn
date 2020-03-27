/* eslint-disable */
import NProgress from "nprogress";
import router from './router'
NProgress.configure({ showSpinner: false });
import "nprogress/nprogress.css";
router.beforeEach((to, from, next) => {
    NProgress.start(); 
    next()
   
});
router.afterEach(() => {
    NProgress.done();
});