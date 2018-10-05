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
        // 全局使用 rem()
        import: ['~vha-components/assets/stylus/method.styl']
      }
    }
  }
}