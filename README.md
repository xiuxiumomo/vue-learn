# vue-app

> 项目说明，这是一个移动端的前端框架。项目的基础配置Vue+VueRouter+Vuex，ui组件用的 [vant](https://youzan.github.io/vant)

Vant：轻量、可靠的移动端 Vue 组件库。基本上页面中常见的组件库，在库中都能见到。如基础组件，表单组件，反馈组件，展示组，业务组件等。在框架中使用命令： yarn add vant –D 或者npm install install –D  在全局的main.js中引入vant

# 基础框架介绍
##  框架中样式怎么写
```
-- assets
    -- less
        -- module //模块每个页面算一个模块
            -- a.less
            -- b.less
        -- reset.less //重置默认样式
        -- valiable.less //常亮配置主题色文字颜色等
        -- common.less //公共的样式
        -- index.less //引入以上所有挂载到main.js中

```
###  公共的方法Mixin
```
Vue提供了一种Mixin的写法，允许在Vue中注入写好的mixin如
const publicFn = {
    methods: {
         //显示成功或者失败的回调
        operationFn({type="success",message="操作成功~"}={}) {
            this.$toast[type](message);
            return;
        }
    }
    }
export { publicFn }

```

## 路由模块与全局permission控制
### 添加路由
```
Vue路由在模块中添加： 如添加一个路由，在page中相应的添加一个页面test

{
    path: "/test",
    name: "Test",
    //采用懒加载方式
    component: () => import(“@/pages/test/index”), 
    meta: {}
},


```
### 权限控制
权限的作用： 在进入页面之前先做判断是否可以进入，如果不允许进入，则跳转其他页面如：404等其他错误页面。应用场景：在地址栏手动输入某个页面地址，但是这个页面需要登录才能进入，否则连见到的机会都没有。
```

import router from './routes'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css‘
Import {getToken} from ‘./utils
router.beforeEach((to, from, next) => {
//可以控制进入和不允许进入
If(!getToken()) {
	//dosth
	return
}
    next();
});
router.afterEach(() => {
});

```
## axios请求库
### axios介绍

```
Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
Axio安装与使用：
1.安装 Yarn add Axios qs –D
2.常用的请求写法axios.request(config)
    - axios.get(url[, config]) 
    - axios.delete(url[, config])
    - axios.post(url[, data[, config]])
    - axios.put(url[, data[, config]])
    - axios.patch(url[, data[, config]])

3.创建实例
    const service = axios.create({
        // baseURL: process.env.VUE_APP_URL,
        timeout: 40000 //请求超时时间
    });

```
### axios拦截器
```
//建立拦截器
// request 发出请求前参数定义
service.interceptors.request.use(
    config => {
           return config;
    },
    error => {
        Promise.reject(error);
    }
); //对效响应数据进行封装
service.interceptors.response.use(    response => {
        const res = response.data;
        if (res.code !== 200) {
           Toast('请求出错...')
        }
        return res;
    },
    error => {
        return Promise.resolve(error);
    }
);


```
### vuex的使用
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

~~~
Vuex的使用方法 简单的写法
	
const app = {
      state: {
       },
      mutations: {

       },
      actions: {

        }
   }
 export default app

~~~

## 环境配置
### vueCli3环境配置
```
1.环境文件的命名
    - -1.测试环境 .env.development
    --2.生产环境 .env.production
    --3.其他环境自行添加
2.文件内容
可以定义一些不同环境下的变量如：请求接口等参数
 注意变量名称一定要以： APP_ENV_开头 如：
NODE_ENV = development
VUE_APP_URL = http://www.baidu.com
3.在组件中使用
Process.env.URL
4.配置打包命令
{
    “dev”: “vue-cli-service serve --mode production“ //修改想要的env
}

```
## 线上部署
[配置方案](https://s1.ax1x.com/2020/04/21/J3yj4s.jpg)

## 启动
- 1. npm install
- 2. npm run dev

## 打包
- npm run build