const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const AutoImportComponents = require("unplugin-vue-components/webpack");
const AntDesignVueResolver = require("unplugin-vue-components/resolvers");
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
      AutoImportComponents({
        resolvers: [AntDesignVueResolver],
      }),
    ],
  },
});
