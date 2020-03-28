import Layout from "@/views/layout/Layout";

const news = {
    path: "/news",
    component: Layout,
    name: "News",
    redirect: "/news/index",
    hidden: false,
    meta: {
        path: 'news',
        title: '新闻',
        icon: 'author'
    },
    children: [
        {
            path: "index",
            name: "NewsIndex",
            component: () => import("@/views/news/index"),
            meta: { title: "新闻列表", icon: "agent" },
            hidden: false
        },
        {
            path: "detail",
            name: 'NewDetail',
            component: ()=> import('@/views/news/detail/index'),
            meta: {title: '新闻详情'},
            hidden: true
        }
    ]
}


export default news;


