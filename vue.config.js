module.exports = {
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },
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
      },
      '^/v1': {
        target: 'https://vision.googleapis.com/',
        changeOrigin: true
      }
    }
  }
}
