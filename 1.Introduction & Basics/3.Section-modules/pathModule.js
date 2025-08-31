// const path = require('../3.Section-pathModule/1.pathModule');
const path = require('path');
//instead of using backward slash (\ <= usually consider as escape character), we should use forward slash (/) in nodejs.
const mypath = "F:/NodeLearn/3.Section-pathModule/pathModule.js";
// console.log(path); // just empty object
// console.log(typeof path); // object

//now using parse path method
const parsePath = path.parse(mypath); // just parsing whole path or object , 
// console.log(parsePath);
//output as follow
// while i have define .js in mypath
// {
//   root: 'F:/',
//   dir: 'F:/NodeLearn/3.Section-pathModule',
//   base: 'pathModule.js',
//   ext: '.js',
//   name: 'pathModule'
// }
// PS F:\NodeLearn> node 3.Section-pathModule/pathModule
// {
// while i don't have .js extension in mypath.
//   root: 'F:/',
//   dir: 'F:/NodeLearn/3.Section-pathModule',
//   base: 'pathModule',
//   ext: '',
//   name: 'pathModule'
// }

//now various methods in mypath
console.log(path.extname(mypath)); // .js - just extension
console.log(path.basename(mypath)); // pathModule.js - file name
console.log(path.dirname(mypath)); // F:/NodeLearn/3.Section-pathModule