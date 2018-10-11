//这是我建立的模板
console.log(10);
let aaa = 1234;
console.log(aaa,'a');
// module.exports === exports //true
function sum(a,b){
    return a+b;
}
let obj = {
    name:"zhufeng",
    age:9
};

// console.log(exports);
// let obj = {};
// obj.name= 123;
// exports.aaa = 'aaa'; // {aaa:'aaa'}
// exports.sum = sum;// {aaa:'aaa',sum:sum}
// exports = obj; // {name:''} // exports  是不支持直接修改自己的指向的
// exports.obj = obj;//{obj:{name:''}}

module.exports = obj; //module.exports 是支持我们直接修改对象的地址的；
exports.zzz = 100;// {zzz:100} // module.exports d额权重高于 exports
// module.exports = aaa; // 也支持我们直接用值类型覆盖；
//当有两个及多个module.exports时；最下边的哪个才是最终起作用的；

// console.log(1000);// 位于 exports下边的代码仍然是可以执行的；