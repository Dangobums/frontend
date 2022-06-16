const { defineConfig } = require('@vue/cli-service')
// vue.config.js
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/imports.styl'),
        ],
      })
}

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port:3000,
    proxy: {
      '/api': {
        target: 'http://localhost:7070',
        ws: true,
        changeOrigin:true,
      }
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_shared.scss";`,
      },
    },
  },
})
