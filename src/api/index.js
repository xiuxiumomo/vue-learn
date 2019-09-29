/**
 *      district=CR //县
 *      town= //镇
 *      sinceyear=1 最近年
 */
import request from '@/utils/request'
export function getNews(params = {}) {
    const defaultParam = {
        city: 'fuzhou',
        proptype: 11,
        sinceyear: 1,
        flag: 1,
        isv3: 0,
        type: 'forsale',
        matchrand: 'a0b92382',
        based: 'price',
        dtype: 'line'
    }
    let _params = Object.assign({},defaultParam,params)
    return request({
        method: 'get',
        url: '/market/chartsdatanew.html',
        params: _params
    })
}