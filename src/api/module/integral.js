import request from '@/utils/request';
//积分签到详情
export function iTaskDetail(data = {}) {
    return request({
        url: `/sites/api/?url=user/integral_task`,
        method: 'post',
        data
    })
}
//点击签到
export function iTaskSign(data = {}) {
    return request({
        url: `/sites/api/?url=user/checkin`,
        method: 'post',
        data
    })

}
//推广详情
export function iTaskPromote(data={}) {
    return request({
        url: `/sites/api/?url=user/invite_new`,
        method: 'post',
        data
    })
}
//大转盘信息
export function iRoundInfo(data={}) {
    return request({
        url: `/sites/api/?url=integral_activity/content`,
        method: 'post',
        data
    })
}
//大转盘中奖纪录
export function iRoundHistory(data={}) {
    return request({
        url: `/sites/api/?url=integral_activity/record`,
        method: 'post',
        data
    })
}
//大转盘开始抽奖
export function iRoundBegin(data) {
    return request({
        url: `/sites/api/?url=integral_activity/wheel_start`,
        method: 'post',
        data
    })
}
//大转盘中奖信息公布
export function iRoundNotice(data) {
    return request({
        url: `/sites/api/?url=integral_activity/activity_roll_list`,
        method: 'post',
        data
    })
}



