import Cookie from 'js-cookie';
const deviceConfig = 'DEVICE_CONFGI'; //设置和获取设备的信息
const isFirst = 'isFirst';
import { getClient } from '@/utils'
export function setDeviceConfig(configData) {
    let client = getClient();
    let defaultData = {
        'device-udid': '',
        'token': '',
        'device-client': client,
        'device-code': client == 'iphone' ? '6002' : '6001',
        'api-version': '1.15'

    }
    let params = {
        ...defaultData,
        ...configData
    }
    return Cookie.set(deviceConfig, params,{expires: 365*2});
}
export function getDeviceConfig() {
    let res = Cookie.get(deviceConfig);
    if(res) {
        return JSON.parse(res);
    }else{
        return null
    } 
}
export function clearDeviceConfig() {
    return Cookie.remove(deviceConfig)
}
//存储第一个 1代表
export function setIsFirst(num) {
   return  localStorage.setItem(isFirst,num)
}
//获取第一次
export function getIsFirst() {
    return localStorage.getItem(isFirst)
}
//移除第一次
export function removeIsFirst() {
    return localStorage.removeItem(isFirst)
}