import request from '@/utils/request'
//启用公众号
export function slUsed(params={}) {
    return request({
        url: '/api/monitor/getOfficialAccount',
        method: 'get',
        params
    })
}
//返回值预计列表
export function slwechatList(params={}) {
    return request({
        url: '/api/monitor/list',
        method: 'get',
        params
    })
}
//异常公众号数量
export function slwrongList(params={}) {
    return request({
        url: '/api/monitor/getDistinctSum',
        method: 'get',
        params
    })
}
//预警提示
export function slTipList(params={}) {
    return request({
        url: '/api/monitor/getWaringSum',
        method: 'get',
        params
    })
}
//停用公众号
export function slstopWechat(data={}) {
    return request({
        url: '/api/monitor/updateStatus',
        method: 'put',
        data
    })
}
//现有问题列表
export function slcurrQuestionList(params={}) {
    return request({
        url: '/api/monitor/getExistingProblem',
        method: 'get',
        params
    })
}
//处理预警
export function slupdateWarn(data={}) {
    return request({
        url: '/api/monitor/processWarn',
        method: 'put',
        data
    })
}
//今日预警列表
export function sltodayWarn(params={}) {
    return request({
        url: '/api/monitor/getToDayProblem',
        method: 'get',
        params
    })
}
//今日统计
export function sltodayStatis(params={}){
    return request({
        url: '/api/monitor/getExistingProblemSum',
        method: 'get',
        params
    })
}