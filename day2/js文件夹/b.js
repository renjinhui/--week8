//这是我建立的模板
// console.log(12);
// console.log(module); //当前模块的一些信息
// console.log(__dirname); //当前文件夹的绝对路径
// console.log(__filename);//当前文件 的绝对路径
// console.log(exports === module.exports);
//exports 和 module.exports 是指向同一个地址的

// console.log(require); // require是个函数；作用是获取对应的模块；

// console.log(window);// node 中的全局变量 是 global;而不是window
// console.log(global.require);

// *****  node 执行时  一个模块就是一个私有作用域； *****

//require module ... 全是属于这个模块的私有变量；不属于global
// let qqq = require('./a.js');//require中参数是另一个模块的路径
// console.log(qqq,aaa,"b");
// console.log(qqq,"b");
// console.log(qqq);//这个qqq 是个空对象；原因就是 a.js 中没有导出的操作；
//require 可以上引用的文件执行； 但是不能直接获取文件中的变量；因为每一个文件对于node来说都会形成一个 私有作用域
// console.log(qqq.sum(10,20));


/*
* 练习
* 我怎么在b中调用 a中的方法？
* 假设 a 有个 求和函数 ? funtion sum(a,b){return a+b}
* b怎么调用 a中的sum 函数
*
* */



console.log(222);
// require('./a.js');// 只是把 a.js 文件执行了；不需要他的返回结果；
let qqq = require('./a');//  .js 的后缀可以省略
// console.log(qqq);

console.log(333);
