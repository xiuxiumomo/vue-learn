import axios from "axios"
import qs from "qs"
const service = axios.create({
    timeout: 40000 //请求超时时间
});

// request拦截器1
service.interceptors.request.use(
    config => {
        if (
            config.method == "post" ||
            config.method == "put" ||
            config.method == "patch"
        ) {
            if (config.data) {
                let data = JSON.parse(JSON.stringify(config.data));
                for (let k in data) {
                    if (data[k] === "") {
                        delete config.data[k];
                    }
                }
                config.data = qs.stringify(config.data)
            }
        } else {
            config.params = config.params ? config.params : {};
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
        /**
         * code为非0时是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 200) {
            console.log('请求出错')
        }
        return res;
    },
    error => {

        let status_code = error.response.status;
        console.log('错误:' + status_code)
        return Promise.resolve(error.response.data);
    }
);

export default service;
