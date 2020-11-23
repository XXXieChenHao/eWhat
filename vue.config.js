
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  // lintOnSave: true, // eslint-loader 是否在保存的时候检查
  assetsDir: "static", //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  css: {
    // loaderOptions: {
    //   css: {
    //     // 这里的选项会传递给 css-loader
    //     importLoaders: 1,
    //   },
    //   less: {
    //     // 这里的选项会传递给 postcss-loader
    //     importLoaders: 1,
    //   },
    //   postcss: {
    //     // 这里的选项会传递给 postcss-loader
    //     plugins: [
    //       require('postcss-pxtorem')({
    //         rootValue: 192,
    //         propWhiteList: [],
    //       }),
    //       require('autoprefixer')({}),
    //     ],
    //   },
    // }
  },
  devServer: {
    // host: 'localhost',
    // host: '0.0.0.0',
    // host: true,
    port: 8000, // 端口号
    open: 'Google Chrome', //配置自动启动浏览器 
    index: 'index.html',
    https: false, // https:{type:Boolean}
    hotOnly: true, // 热更新
    proxy: {
      "/api": {
        target: "https://emall.szyc.org.cn/",
        changeOrigin: true,
        pathRewrite: {
          //通过pathRewrite重写地址，
          '^/api': ''
        },
      },
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack: (config) => {

  },
}