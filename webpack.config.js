const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main_bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.vue']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [{
                  loader: 'style-loader',
                }, {
                  loader: 'css-loader', 
                }, {
                  loader: 'postcss-loader',
                  options: {
                    plugins: function () { 
                      return [
                        require('autoprefixer')
                      ];
                    }
                  }
                }, {
                  loader: 'sass-loader'
                }]
              },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/app.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
}