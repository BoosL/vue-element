module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV === "production",
  runtimeCompiler: false,
  productionSourceMap: true,
  crossorigin: "",
  integrity: false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "./_components.scss";`
      },
    },

    modules: false

  },

  devServer: {
    port: 2000,
    disableHostCheck: true,
    // host: "192.168.0.3",
    https: false,
    open: false,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       "^/api": ""
    //     }
    //   }
    // }
  }

};
