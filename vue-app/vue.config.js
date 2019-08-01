module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: 9000,
        https: false,
        hotOnly: false,
        open: true

    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px2rem-exclude")({
                        remUnit: 37.5
                    })
                ]
            }
        }
    }
}