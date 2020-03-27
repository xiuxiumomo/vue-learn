
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 9100,
        proxy: {
            '/api': {
                target: 'https://www.easy-mock.com/mock/5d235c4bea4b7a6f92b68156',
                ws: true,
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.module.rules.delete("svg");
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },

}