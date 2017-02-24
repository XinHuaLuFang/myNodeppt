[slide]
# DEMO1
[magic data-transition="vertical3d"]
```
mkdir app1 && cd app1
npm init -y
npm install --save-dev webpack
```
## app1/app/index.js {:.left}
```
function component () {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}

document.body.appendChild(component());
```
## app1/index.html {:.left}
```
<html>
    <head>
        <title>webpack app1</title>
        <script src="http://apps.bdimg.com/libs/lodash/3.5.0/lodash.js"></script>
    </head>
    <body>
        <script src="app/index.js"></script>
    </body>
</html>
```
=======
```
npm install lodash --save
```
[/magic]





[slide]
# 配置

[magic data-transition="vertical3d"]
## 入口 / Entry
------
单个入口点语法 {:.left}
```
module.exports = {
    entry: {
        main: './entry.js'
    }
}
```
简写 {:.left}
```
module.exports = {
    entry: './entry.js'
}
```
对象语法 {:.left}
```
module.exports = {
    entry: {
        app: './app.js',
        test: './test.js'
    }
};
```
======
## 输出 / Output
------
```
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
```
======
## 加载器 / Loaders
------
加载器将所有文件转换为模块，在配置中主要有两个目的： 1. 标识哪种文件应该被特定的加载器转换（test）； 2. 转换该文件，以便它可以添加到依赖关系图中。 {:.left}
```
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    }
}
```
======
## 插件 / Plugins
------
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: './path/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './index.html'});
    ]
}
```
[/magic]