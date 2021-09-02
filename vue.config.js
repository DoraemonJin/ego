module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8888',//目标路径 真实网址 
                //   ws: true,//
                changeOrigin: true, //允许跨域
                pathRewrite: { //重写路径
                    "^/api": ''
                }
            },
            '/foo': {
                target: 'http://iwenwiki.com',
                changeOrigin: true, //允许跨域
                pathRewrite: { //重写路径
                    "^/foo": ''
                }
            }
        }
    }
}