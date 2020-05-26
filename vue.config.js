let needPath = process.env.VUE_APP_NEEDPATH; //这里配置如果后期需要优化配置路径

module.exports = {
    publicPath: needPath  ? '/' : '/',
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 9000, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
            "/sites": {
                target: "http://10.10.10.47:11111",
                changeOrigin: true,
                ws: true

            },
        },
        before: app => {

        }
    }

}