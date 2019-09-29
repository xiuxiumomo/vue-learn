import request from '@/utils/request'
export function getNews(params = {}) {
    return request({
        method: 'get',
        url: '/api/news',
        params
    })
}