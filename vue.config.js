const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
const AutoImportComponents = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        dts: true,
        imports: [
          "vue",
          "vue-router",
          {
            "vue-request": ["useRequest "],
          },
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      AutoImportComponents({
        dts: true,
        resolvers: [
          AntDesignVueResolver({
            importStyle: false, // css in js
          }),
        ],
      }),
    ],
  },
});
