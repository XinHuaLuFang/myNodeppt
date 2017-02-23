title: webpack
speaker: 鑫花璐放
files: /css/me.css
transition: newspaper


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
## 后来

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
# 安装
----
```
// 全局安装
npm install webpack -g

// 局部安装
npm install webpack --save-dev
```

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
<img src="/webpacklogo.svg" class="not">
<br>
<br>
## 当下最热门的前端资源模块化管理和打包工具
<small style="vertical-align:middle;display:inline-block"><iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=watch&count=true&v=2" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe>&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=star&count=true&v=2" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe>&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="http://ghbtns.com/github-btn.html?user=webpack&repo=webpack&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20" style="width:110px;height:20px;  background-color: transparent;"></iframe></small>

