import Layout from '@/views/layout/Layout'
const test = {
    path: '/testPage',
    name: 'Test',
    meta: { title: '测试', icon: 'eye' },
    component: Layout,
    children: [
        {
            path: 'index',
            name: 'testPage',
            component: () => import('@/views/testPage/index'),
            meta: { title: '测试页面' }
        },
        {
            path: 'detail',
            name: 'testDetail',
            component: () => import('@/views/testPage/detail'),
            meta: { title: '测试详情' }
        },

    ]
}
export default test