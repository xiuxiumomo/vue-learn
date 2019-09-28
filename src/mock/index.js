import Mock from 'mockjs'
Mock.mock('/api/news', 'get',{
    code: 200,
    data: [
        {
            id: 1,
            title: '新闻啊啊啊啊'
        }
    ]
    
})
export default Mock