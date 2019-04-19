var webpack = require("webpack");
//打包时会自动生成index.html并替换已有的index.html，bundle.js也会自行添加到 html 中
var HtmlwebpackPlugin = require("html-webpack-plugin");
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

var productionGzipExtensions = ['js', 'css','html']

webpackBaseConfig.plugins = [];
module.exports = merge(webpackBaseConfig, {
  mode: "production", //当前模式
  output: {
    libraryTarget: "umd", //输出为umd格式
    filename: "./js/[name].[hash].js", //输出文件名
    chunkFilename: "./js/[name].[hash].chunk.js"
  },

  optimization:{
    splitChunks:{
      chunks:"all",
      minSize:2000
    }
  },
  plugins: [
    new clearWebpack(), //构建生产环境包的时候清空dist目录
    new ExtractTextPlugin({
      //将所有的样式合并为一个css文件
      filename: "./css/[name].[hash].css",
      allChunks: true
    }),
    new webpack.DefinePlugin({
      //定义当前的Node环境为生产环境
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),

    new HtmlwebpackPlugin({
      //指定构建生成之后的html
      filename: "index.html", //此文件路径是相对于dist,
      template: "index.html",
      inject: true,
      minify: {
        // 移除注释
        removeComments: true,
        // 不要留下任何空格
        collapseWhitespace: true,
        // 当值匹配默认值时删除属性
        removeRedundantAttributes: true,
        // 使用短的doctype替代doctype
        useShortDoctype: true,
        // 移除空属性
        removeEmptyAttributes: true,
        // 从style和link标签中删除type="text/css"
        removeStyleLinkTypeAttributes: true,
        // 保留单例元素的末尾斜杠。
        keepClosingSlash: true,
        // 在脚本元素和事件属性中缩小JavaScript(使用UglifyJS)
        minifyJS: true,
        // 缩小CSS样式元素和样式属性
        minifyCSS: true,
        // 在各种属性中缩小url
        minifyURLs: true
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

    new CompressionWebpackPlugin({//开启gzip压缩,防止verndor文件过大
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),//只有配置的文件才会被压缩
      threshold: 10240,//只处理大于此大小的文件。以字节为单位(此处为10k)
      minRatio: 0.8,//压缩比例
      deleteOriginalAssets:true//是否删除原始文件
    })
  ]
});
