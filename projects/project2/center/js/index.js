
console.log('当前是否开发环境'+dev);
console.log('我是project2的center')
require('center/style/style2.css')
require('jquery')
// console.log(data2);
if(module.hot){
    module.hot.accept();
}

