//这是我建立的模板
let qqq = require('jquery');
let axios = require('axios');
// let qqq = require('jquery1');
// let qqqq = require('../node_modules/jquery/dist/jquery');
//查找顺序  现在本级路径下的 node_modules 下查找；若本级没有node_modules 或者 node_mudules 下不存在这个包，则向上级文件夹继续查找，。。。 直到查到C盘
// console.log(qqq); // $不存在 ?????
axios.get('https://www.souyidai.com/soeasy/invest/fulllist?productType=0&pageNo=0&t=0.07790502888077011').then((data)=>{
    console.log(data.data);
});