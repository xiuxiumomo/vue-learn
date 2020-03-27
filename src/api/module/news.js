import request from '@/utils/request';
export function newsGetList(params = {}) {
    return request({
        url: '/api/news/list',
        method: 'get',
        params
    })
}