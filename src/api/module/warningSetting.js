import request from '@/utils/request'
//获取公众号列表
export function wsGetwechatList(params={}) {
    return request({
        url: '/api/wechat/list',
        method: 'get',
        params
    })
}
//公众号列表修改状态
export function wsPutwechatList(data={}) {
    return request({
        url: '/api/wechat/update',
        method: 'put',
        data
    })
}
//返回值列表
export function wsgetReturnList(params={}) {
    return request({
        url: '/api/value/list',
        method: 'get',
        params
    })
}
//删除返回值列表
export function wsdelReturnList(params={}) {
    return request({
        url: '/api/value/delete',
        method: 'delete',
        params
    })
}
//返回值添加
export function wsaddReturnList(data={}) {
    return request({
        url: 'api/value/add',
        method: 'post',
        data
    })
}