import axios from "axios";
import { Toast } from "vant";
import qs from "qs";
const service = axios.create({
    baseURL: '',
    timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        if (config.method == "post" || config.method == "put") {
             //去除空的字段
            if (config.data) {
                let data = JSON.parse(JSON.stringify(config.data));
                for (let k in data) {
                    if (data[k] === "") {
                        delete config.data[k];
                    }
                }
                config.data = qs.stringify(config.data);
            }
        } else {
            let params = JSON.parse(JSON.stringify(config.params));
            for (let k in params) {
                if (params[k] === "") {
                    delete config.params[k];
                }
            }

        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        //请求出错对应的关系
        const res = response.data.success;
        // if (res.status !== 200 && res.code !== 200) {
        //     Toast({
        //         message: res.message
        //     })
        // }
        if(!res){
            Toast.loading({
                mask: false,
                message: '加载中...'
            });
        }
        return res;
    },
    error => {
        Toast.loading({
            mask: false,
            message: error.message
        });
        return Promise.reject(error);
    }
);

export default service;