/**
 * Created by zx on 2017/2/24.
 */
require("!style-loader!css-loader!./style.css") // 载入 style.css
document.write('It works.');
document.write(require('./module.js'))