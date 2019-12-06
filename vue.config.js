

const path = require('path');
function resolveSrc(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        https: false,
        hotOnly: false,
        open: true,
        proxy: {
            "/api": {
                target: "https://cnodejs.org",
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    "^/api": "/"
                  }
              },
        },
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolveSrc('src'))
    }
   
}




