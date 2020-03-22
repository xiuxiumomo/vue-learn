import Layout from "@/views/layout/Layout";

const user = {
    path: "/user",
    component: Layout,
    name: "User",
    redirect: "/user/index",
    hidden: false,
    meta: {
        path: 'user',
        title: '用户',
        icon: 'home'
    },
    children: [
        {
            path: "index",
            name: "UserIndex",
            component: () => import("@/views/user/index"),
            meta: { title: "用户列表", icon: "agent" },
            hidden: false
        }
    ]
}


export default user;


