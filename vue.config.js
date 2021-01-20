module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy:{
      // '^/waste-item/': {
      //   target: 'http://localhost:8080/',
      //   changeOrigin: true
      // },
      // '^/login': {
      //   target: 'http://localhost:8080/',
      //   changeOrigin: true
      // },
      '^/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  }
}
