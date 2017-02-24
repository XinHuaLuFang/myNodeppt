title: webpack
speaker: 鑫花璐放
files: /css/me.css

[slide]
<img src="/webpacklogo.svg" class="not">
<br>
<br>
## 当下最热门的前端资源模块化管理和打包工具
<small style="vertical-align:middle;display:inline-block"><iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=watch&count=true&v=2" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe>&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=star&count=true&v=2" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe>&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe></small>

[slide]
## 一个简单的web应用所用到的资源
----
<div class="columns2 mb25">
    <img src="/demo01.png" width="270" height="300">
    <ul style="text-align: left">
        <li>简单的css</li>
        <li>几张图片</li>
        <li>简单的一些js文件</li>
    </ul>
</div>
```
<link rel="stylesheet" href="/stylesheets/bootstrap.min.css" type="text/css"/>
<link rel="stylesheet" href="/stylesheets/bookmark.css" type="text/css"/>
<link rel="stylesheet" href="/stylesheets/mricode.pagination.css" type="text/css"/>
<link rel="stylesheet" href="/stylesheets/animate.css" type="text/css"/>

<script src="javascripts/jquery-2.1.4.min.js"></script>
<script src="javascripts/mricode.pagination.js"></script>
<script src="javascripts/bootstrap.min.js"></script>
<script src="javascripts/main.js"></script>
<script src="javascripts/wow.min.js"></script>
```

[slide]
# 后来
<div class="columns2">
    <img src="/demo02.png" width="292" height="735" style="max-height: 735px">
    <ul style="text-align: left">
        <li>各种前端模块的引用</li>
        <li>为了让页面更炫酷功能更亲民，引入的第三方js插件(jQuery)</li>
        <li>为了让写代码更方便，强调组件化，使用的一系列框架(react,redux... ...)</li>
        <br>
        <br>
        <br>
        <p style="font-size: 66px; color: #16d5b5; text-align: center">臃肿</p>
    </ul>
</div>



[slide]
## 随之而来的前端工具
----
* 包管理：<span class="text-success">*bower*</span> <span class="text-success">*npm*</span> {:&.bounceIn}
* 构建工具：<span class="text-success">*gulp*</span> <span class="text-success">*grunt*</span>
* 打包工具：<span class="text-success">*broserify*</span> <span class="text-success">*webpack*</span>
* 编译：<span class="text-success">*babel*</span>

[slide]
# webpack
## 一个新兴的模块打包工具
![](/demo03.png)

[slide]
# WebPack Grunt Gulp
* Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack可以替代Gulp/Grunt类的工具。
* Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。
* Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。
[slide]
# 安装
----
首先要安装 Node.js， Node.js 自带了包管理器 npm。 {:.left}
```
// 全局安装
npm install webpack -g

// 局部安装
npm install webpack --save-dev
```

[slide]
# demo1
[magic data-transition="vertical3d"]

index.html {:.left}
```
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>
```

entry.js {:.left}
```
document.write('It works.');
```

然后编译 entry.js 并打包到 bundle.js： {:.left}
```
webpack entry.js bundle.js
```

======

接下来添加一个模块module.js {:.left}
```
// module.js
module.exports = "It works from module.js."
```

修改入口entry.js {:.left}
```
// entry.js
document.write('It works.')
document.write(require('./module.js')) // 添加模块
```

重新打包 {:.left}
```
webpack entry.js bundle.js
```
[/magic]

[slide]
# 加载器 / Loader
* Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换；
* Loader 可以理解为是模块和资源的转换器，它会把js、css、图片等转化为模块，这样，我们就可以通过 require 来加载任何类型的模块或文件；
* 命名：一般以 **xxx-loader** 的方式命名，如 json-loader ts-loader;

[slide]
# demo2_0
[magic data-transition="vertical3d"]
添加style.css: {:.left}
```
body { background: lightblue; }
```

用 css-loader 来读取它，再用 style-loader 把它插入到页面中，修改entry.js: {:.left}
```
require("!style-loader!css-loader!./style.css") // 载入 style.css
document.write('It works.');
document.write(require('./module.js'))
```

安装loader: {:.left}
```
npm install css-loader style-loader
```

======

每次 require CSS 文件的时候都要写 loader 前缀，是一件很繁琐的事情。我们可以根据模块类型（扩展名）来自动绑定需要的 loader。 {:.left}
```
// entry.js
require("!style-loader!css-loader!./style.css")
```
将entry.js中loader前缀删除： {:.left}
```
require("./style.css")
```

打包： {:.left}
```
webpack entry.js bundle.js --module-bind "css=style-loader!css-loader"
```

[/magic]

[slide]
# 插件
* 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定；
* Webpack 本身内置了一些常用的插件，还可以通过 npm 安装第三方插件；
## demo4
修改 webpack.config.js，添加plugins： {:.left}
```
plugins: [
    new webpack.BannerPlugin('suninfo')
]
```
然后运行 webpack，打开 bundle.js ,可以看到头部出现了我们指定的注释信息。

[slide]
# 配置文件
Webpack 在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的 webpack.config.js 文件，这个文件是一个 node.js 模块，返回一个 json 格式的配置信息对象，或者通过 --config 选项来指定配置文件。 {:.left}
```
var webpack = require('webpack')

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
  }
}
```

[slide]
# 配置文件

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
Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。 {:.left}
======
## 加载器 / Loaders
------
加载器将所有文件转换为模块，在配置中主要有两个目的： 1. 标识哪种文件应该被特定的加载器转换（test: 正则）； 2. 转换该文件，以便它可以添加到依赖关系图中。 {:.left}
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
以下写法定义相同的加载器： {:.left}
```
{test: /\.css$/, loader: 'css-loader'}
{test: /\.css$/, use: 'css-loader'}
{test: /\.css$/, use: {
    loader: 'css-loader',
    options: {}
}}
```

======
## 加载器 / Loaders
------
使用加载器的三种方式：
1. 配置文件
```
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }
    ]
}
```

2. require
```
require('style-loader!css-loader?modules!./styles.css');
```
3. CLI
```
webpack --module-bind "css=style-loader!css-loader"
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






