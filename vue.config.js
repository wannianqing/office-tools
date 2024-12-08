const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: '/office-tools/',
  transpileDependencies: true,
  assetsDir:'',
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "办公组件演示";
      return args;
    });
  },
});
