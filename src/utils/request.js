import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import store from '../store';
import qs from 'qs';
import { getToken } from '@/utils/auth';
// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API,
    timeout: 15000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
    config => {
        if (
            config.method == 'post' ||
            config.method == 'put' ||
            config.method == 'patch'
        ) {
            let token = getToken() || '';
            // config.data.token = token;
            if (config.data) {
                let data = JSON.parse(JSON.stringify(config.data));
                for (let k in data) {
                    if (
                        data[k] === '' ||
                        data[k] === null ||
                        data[k] === undefined
                    ) {
                        delete config.data[k];
                    }
                }
                config.data = qs.stringify(config.data);
            }
            config.headers['Content-Type'] =
                'application/x-www-form-urlencoded';
            config.headers['token'] = token;
        } else {
            let params = JSON.parse(JSON.stringify(config.params));
            for (let k in params) {
                if (params[k] === '') {
                    delete config.params[k];
                }
            }
            let token = getToken() || '';
            config.headers['token'] = token;
        }
        return config;
    },
    error => {
        // eslint-disable-next-line
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        console.log(res)
        if (res.status !== 200 && res.code !== 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 2000
            });
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了; 401:token失效
            if (
                res.code === 50008 ||
                res.code === 50012 ||
                res.code === 50014 ||
                res.code === 401
            ) {
                MessageBox.confirm(
                    '你已被登出，可以取消继续留在该页面，或者重新登录',
                    '确定登出',
                    {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }
                ).then(() => {
                    store.dispatch('FedLogOut').then(() => {
                        location.reload(); // 为了重新实例化vue-router对象 避免bug
                    });
                });
            }
        }
        return res;
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error)
    }
);

export default service;
