const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // pluginOptions:{
  //   electronBuilder:{
  //     nodeIntegration:true
  //   }
  // },
  // configureWebpack: {
  //   resolve: {
  //     fallback: {
  //       path: require.resolve('path-browserify'),
  //     },
  //   },
  // },
  // configureWebpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.vue$/,
  //     use: [{
  //       loader: 'vue-loader',
  //       options: {
  //         prefix: false
  //       }
  //     }]
  //   })
  // },
})