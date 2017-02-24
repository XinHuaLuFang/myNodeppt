/**
 * Created by zx on 2017/2/24.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',

    entry: __dirname + '/app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [precss, autoprefixer];
                }
            }
        })
    ]
};