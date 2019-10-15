import request from '~/plugins/axios'
//获取用户列表
export function userList(params={}) {
    return request({
        url: '/vue/userList',
        method: 'get',
        params
    })
}