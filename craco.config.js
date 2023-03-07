const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackBar = require('webpackbar')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { ReactInspectorPlugin } = require('react-dev-inspector/plugins/webpack')

const smp = new SpeedMeasurePlugin()
const path = require('path')
module.exports = {
  webpack: smp.wrap({
    configure: (webpackConfig, { env, paths }) => {
      if (
        process.env.NODE_ENV === 'production' &&
        process.env.ANALYSE === 'true'
      ) {
        webpackConfig.plugins = webpackConfig.plugins.concat(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            openAnalyzer: true, // 构建完打开浏览器
            reportFilename: path.resolve(__dirname, `analyzer/index.html`)
          })
        )
      }
      return webpackConfig
    },
    plugins: [
      new WebpackBar()
      // new ReactInspectorPlugin()
      // {
      //   // react-dev-inspector的配置 目前这些配置足够点击页面直接在vscode编辑器中找到对应的文件了
      //   //剩余的高级配置需要自己去官网上学习，
      //   plugin: new ReactInspectorPlugin(),
      //   options: {
      //     excludes: ['xxx-file-will-be-exclude', /regexp-to-match-file /]
      //   }
      // }
    ]
    /** react-dev-inspector - dev server config */
    // devServer: overrideDevServer((serverConfig) => {
    //   // https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares
    //   serverConfig.setupMiddlewares = (middlewares) => {
    //     middlewares.unshift(launchEditorMiddleware)
    //     return middlewares
    //   }
    //   return serverConfig
    // })
  })
}
