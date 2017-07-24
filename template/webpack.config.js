var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postcss = require('postcss');
var posttorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');

var pxtoremOptions = {
  rootValue: 75,//如果以750宽度视觉稿
  propWhiteList: [] //需要转换为rem的属性, []全部属性都转换
}
module.exports = {
    entry: {
      'js/vendor': ['vue', 'vue-router','vuex'],  //提出来，作为一个单独文件
      'js/index': './src/main.js' //入口
    },
    output: {
        path: __dirname+'/build/',
        chunkFilename: '[name].[hash].js',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                    postcss: [posttorem(pxtoremOptions),autoprefixer]
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url-loader?limit=8192&name=imgs/[name].[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json','scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'TopTitle': path.join(__dirname,'./src/components/common/TopTitle'),
            'FootGuide': path.join(__dirname,'./src/components/footer/FootGuide'),
            'FiveStar': path.join(__dirname,'./src/components/common/FiveStar'),
            'helper': path.join(__dirname,'./src/helper/index'),
            'Api' : path.join(__dirname,'./src/config/api'),
            'config' : path.join(__dirname,'./src/config/config'),
            'location' : path.join(__dirname,'./src/config/location'),
            'mixin' : path.join(__dirname,'./src/mixin/index')
            /*'home':resolve('./src/views/home'),
            'components':resolve('./src/components'),
            'api':resolve('./src/config/api'),
            'helper':resolve('./src/helper')*/
        }
    },
    plugins:[
    		new HtmlWebpackPlugin({
          title: 'initVue',
    			filename:'./index.html',
    			inject:true,
    			template:'./index.html',
    			hash:false,
          chunksSortMode: 'dependency'
    		}),
        new webpack.optimize.CommonsChunkPlugin({
          names: ['js/vendor'],
          minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/manifest',
            chunks: ['js/vendor']
        })
    	],
    devServer: {
        proxy: {
          '/mock': {
            target: 'http://localhost:3020',
            changeOrigin: true,
            pathRewrite:{
              '^/mock': ''
            }
          }
        },
        historyApiFallback: true,
        noInfo: true

    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#cheap-module-source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true  //no console
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
