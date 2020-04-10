import request from '@/utils/request'
//获取公众号列表
export function wstgetList(params={}) {
    return request({
        url: '/api/stat/list',
        method: 'get',
        params
    })
}
//获取公众号详情
export function wstwechatDetail(params={}) {
    return request({
        url: '/api/stat/info',
        method: 'get',
        params
    })
}
//公众号异常值分布
export function wstwrongList(params={}) {
    return request({
        url: '/api/stat/getWarnStat',
        method: 'get',
        params
    })
}
//公众号日期变化趋势
export function wstwechatDateList(params={}) {
    return request({
        url: '/api/stat/dateChangeTendency',
        method: 'get',
        params
    })
}
//单个公众号异常值
export function wstwechatBarList(params={}) {
    return request({
        url: '/api/stat/warningDistribution',
        method: 'get',
        params
    })
}
