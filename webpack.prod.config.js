var webpack = require("webpack");
//将css合并为一个css文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//避免重复配置webpack,静基础配置和生产配置融合
var merge = require("webpack-merge");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
//基础配置
var webpackBaseConfig = require("./webpack.base.config.js");
//清空构建目录
var clearWebpack = require("clean-webpack-plugin");

var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var CompressionWebpackPlugin = require("compression-webpack-plugin");

var productionGzipExtensions = ["js", "css", "html"];

webpackBaseConfig.plugins = [];
module.exports = merge(webpackBaseConfig, {
  mode: "production", //当前模式
  output: {
    filename: "./oview.min.js", //输出文件名
    library: "oview"
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  },
  entry: {
    main: "./src/index.js"
  },

  plugins: [
    new clearWebpack(), //构建生产环境包的时候清空dist目录
    new ExtractTextPlugin({
      //将所有的样式合并为一个css文件
      filename: "./css/index.css",
      allChunks: true
    }),
    new webpack.DefinePlugin({
      //定义当前的Node环境为生产环境
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),

    new VueLoaderPlugin(), //使用vue必须要加的哦
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      // cssProcessorOptions: cssnanoOptions,
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            },
            normalizeUnicode: false
          }
        ]
      },
      canPrint: true
    }),

    new CompressionWebpackPlugin({
      //开启gzip压缩,防止verndor文件过大
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"), //只有配置的文件才会被压缩
      threshold: 10240, //只处理大于此大小的文件。以字节为单位(此处为10k)
      minRatio: 0.8, //压缩比例
    })
  ]
});
