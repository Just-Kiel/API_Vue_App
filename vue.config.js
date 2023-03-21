const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    '@inkline/inkline'
  ],
  publicPath: '/API_Vue_App/'
})
