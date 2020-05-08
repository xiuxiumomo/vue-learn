
module.exports = {
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 9000, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
            // "/api": {
            //     target: "https://www.easy-mock.com/mock/5d235c4bea4b7a6f92b68156",
            //     changeOrigin: true,
            //     ws: true

            // },
            "/api": {
                target: "http://127.0.0.1:3000",
                changeOrigin: true,
                ws: true

            },

        },
        before: app => {

        }
    }

}