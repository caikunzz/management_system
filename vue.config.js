const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        dts: true,
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true,
        },
      }),
    ],
  },
});
