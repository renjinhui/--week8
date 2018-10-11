//这是我建立的模板
let fs = require('fs'); // 引入文件读写模块
/*
* readFile 的用法
* readFile(path,'utf-8',回调函数) 这个回调函数有两个参数 err ,data
* err 只有再文件读取失败是才有内容， 读取成功时  它的值是null;
* data 读取到的数据；只有读取文件成功的时候才有内容；读取失败时 是个 undefined
* */
// fs.readFile('./1.txt','utf-8',(err,data)=>{
//     if(!err){
//         console.log(data);
//     }
// });
// console.log(1234);


//  readFileSync(path,'utf-8')  这个函数的返回值就是读取到的数据
// let data = fs.readFileSync('./1.txt','utf-8');



/*
* writeFile(path,写入的内容,'utf-8',(err)=>{
*     err 若是个 null  则代表 写入成功；否则代表写入失败
* })
*
* */
// fs.writeFile('./1.txt','如果特认购的股份','utf-8',(err)=>{
//     if(!err){
//         console.log('我写入成功了')
//     }
// });
// fs.writeFileSync(path,写入的内容,'utf-8');


/*
* appendFile(path,添加的内容,'utf-8',回调函数（跟write一样）)
* appendFileSync(path,添加的内容,'utf-8');
* */


// fs.readFile('./1.txt','utf-8',(err,data)=>{
//     // console.log(err);
//     //  err 只有在文件读取失败时 才会有内容,内容是读取文件的失败信息；
//     // 读取成功时， 它的值是 null;
//     console.log(data);// err 存在时  data 是undefined
// });
// readFile 是一个异步操作
// readFileSync 是个同步操作
// let data = fs.readFileSync('./2.txt','utf-8');
// console.log(data);
// console.log(123);


// fs.writeFile('./1.txt','this is write','utf-8',(err,data)=>{
//     // write 没有第二个参数
//     console.log(err,data);
// });
// // writeFile 是个 异步执行
// // writeFileSync 是个同步
// console.log(123);

/*fs.appendFile('./1.txt','这是异步添加的内容','utf-8',(err)=>{
   if(!err){// 若 err为null  则说明 添加成功
       console.log('success');
   }
});//这个是异步操作
fs.appendFileSync('./1.txt','这是同步添加的内容','utf-8');//这个是同步操作*/

// 思路：
// 使用 readFile 先读取文件 ；
// 再拿读取的内容跟 新的字符串进行拼接
// 然后再把拼接好的字符串 重新写入到 文件当中
function myAppend(url,str) {
    let data = fs.readFileSync(url,'utf-8');
    data += str;// 把读取的内容拼接一下
    fs.writeFileSync(url,data,'utf-8');
};
myAppend('./1.txt','这是自己的函数');












