const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackBar = require('webpackbar')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const path = require('path')
module.exports = {
  webpack: smp.wrap({
    configure: (webpackConfig, { env, paths }) => {
      console.log('env: ', {
        env,
      })
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
            reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          }),
        )
      }
      return webpackConfig
    },
    plugins: [new WebpackBar()],
  }),
}
