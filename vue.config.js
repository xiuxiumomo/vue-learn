const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        port: 9100,
        proxy: {
            '/market': {
                target: ' http://www.creprice.cn',
                changeOrigin: true
            },

        }
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter'
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
    }

}