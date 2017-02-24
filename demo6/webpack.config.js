/**
 * Created by zx on 2017/2/24.
 */
var webpack = require('webpack');
const { resolve } = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('suninfo')
    ],
    devServer: {
        hot: true,
        contentBase: resolve(__dirname),
        publicPath: '/'
    }
}