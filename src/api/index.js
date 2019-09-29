import request from '@/utils/request'
export function getNews(params = {}) {
    return request({
        method: 'get',
        url: '/market/chartsdatanew.html?city=fuzhou&proptype=11&district=CR&town=&sinceyear=1&flag=1&isv3=0&type=forsale&bldgarea1=&bldgarea2=&br=&price1=&price2=&unitprice1=&unitprice2=&bldgcode=&buildyear1=&buildyear2=&matchrand=a0b92382&based=price&dtype=line&data',
        params
    })
}