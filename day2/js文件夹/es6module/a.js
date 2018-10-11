// //这是我建立的模板
// console.log('123');
// console.log(c);
// import {c} from './c.js'
// // {c}这里边的c 是根据导出的部分决定的；导出文件 导出的什么变量名；这边接收的就是用什么变量名；
// import {obj} from './b.js' // import 等级？？
// console.log('a');
// // import {c} from './c.js'

// import qqq from './b.js';
import qqq,{name,name2,name3} from './b.js'

// console.log(qqq,name,name2,name3);

import * as www from './b.js';

console.log(www.name2);

// es6的文件引入方式 是由 导出方式决定的
// 1、若导出方式是  export default obj;
// 那么 我们的引入方式 就是 import 自定义变量名 from './b.js'

// 2、若导出方式是  export {obj};
// 那么我们的引入方式 就是  import {obj} from './b.js';引入的变量名需要跟 导出的变量名 保持一致

//3 import * as 自定义变量名 from  './b.js'
//这种引入方式 是把 b中的所有导出都放到 一个自定义变量名的对象中；



















