var path = require("path");

//导出插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require("webpack");
//打包时会自动生成index.html并替换已有的index.html，bundle.js也会自行添加到 html 中
var HtmlwebpackPlugin = require("html-webpack-plugin");
//将css合并为一个css文件

var VueLoaderPlugin = require("vue-loader/lib/plugin");
//基础配置
//清空构建目录
var clearWebpack = require("clean-webpack-plugin");

var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var CompressionWebpackPlugin = require("compression-webpack-plugin");

var productionGzipExtensions = ['js', 'css', 'html']
module.exports = {
    entry:{
        main: './examples/main.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            css: ExtractTextPlugin.extract({
                                use: "css-loader",
                                fallback: "vue-style-loader"
                            }),
                            less: ExtractTextPlugin.extract({
                                use: "less-loader",
                                fallback: "vue-style-loader"
                            })
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
                //include: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules/iview/src")]
            },

            {
                test: /\.less$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                //此处配置为iview的注意点，如果不配置的话 无法再Js文件中加载iview.css文件；其次如果使用url-loader无法加载的话，会使用file-loader进行文件加载
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=1024",
                options: {
                    limit: 10000,
                    name: "img/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "media/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: "fonts/[name].[hash].[ext]"
                }
            },
            {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".json"],
        //设置别名
        alias: {
            vue: "vue/dist/vue.esm.js",
            "@": path.resolve("src")
        }
    },
    mode: "production", //当前模式
    output: {
        path: path.join(__dirname, "./docs"), //指定输出目录
        libraryTarget: "umd", //输出为umd格式
        filename: "./js/[name].[hash].js", //输出文件名
        chunkFilename: "./js/[name].[hash].chunk.js"
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 2000
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


    ]
};