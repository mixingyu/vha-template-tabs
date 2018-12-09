module.exports = {
  outputDir: 'www',
  baseUrl: '',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      stylus: {
        // 全局使用 rpx()
        import: ['~vha-components/src/assets/stylus/method.styl']
      }
    }
  }
}