import axios from "axios";
import qs from "qs";
import {Toast} from 'vant';
import {getDeviceConfig,clearDeviceConfig} from '@/utils/auth'
import router from '@/routes'
var filterParams = function (params = {}) {
    if (Object.keys(params).length === 0) {
        return {}
    }
    for (let k in params) {
        if (params[k] === "" || params[k] === undefined || params[k] === null) {
            delete params[k];
        }
    }
    return params;

}
function getError(code,msg) {
    if(code==100) {
        Toast('token有误,请重新登录~');
        router.replace({
            path: '/404'
        })
        //clearDeviceConfig();
        return
    }
    Toast(msg)
}
// 创建axios实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_URL,
    timeout: 40000 //请求超时时间
});

// request拦截器1
service.interceptors.request.use(
    config => {
        const configData = getDeviceConfig(); //获取本地存储的设备
        if(configData) {
            config.headers['device-udid'] = configData['device-udid'];
            config.headers['device-client'] = configData['device-client'];
            config.headers['device-code'] = configData['device-code'];
            config.headers['api-version'] = configData['api-version'];
        }
        if (
            config.method == "post" ||
            config.method == "put" ||
            config.method == "patch"
        ) {
            if (config.data) {
                let data = JSON.parse(JSON.stringify(config.data));
                data = filterParams(data);
                config.data =  qs.stringify(data);
            }
        } else {
            config.params = config.params || {}
            let params = JSON.parse(JSON.stringify(config.params));
            params = filterParams(params);
            config.params = params;
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
        
        const res = response.data;
        if (res.status.succeed != 1) {
           getError(res.status.error_code,res.status.error_desc)
        }
        return res;
    },
    error => {
        return Promise.resolve(error);
    }
);

export default service;