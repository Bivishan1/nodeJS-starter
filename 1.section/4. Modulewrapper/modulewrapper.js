//this all i.e. exports, module, global, __dirname, __filename are all global objects in node.js which are called module wrapper because they are wrapped around every file in node.js.
//more details about module wrapper : https://www.udemy.com/course/all-you-need-to-know-nodejs-with-practical-project/learn/lecture/40366104#questions
console.log(exports); //blank object
console.log(module); //
console.log(global); //
console.log("display directory path", __dirname);
console.log("display file path", __filename);

// if we write any code in node.js, the module wrapper will wrap that code inside a iffe function.
//For example,,,
let a = 30; // this code will wrapped inside a function like below in node.js code,
// (function (exports, require, module, __filename, __dirname) {
//     let a= 30; // so only this will be accessible inside this function.
// })();

//and also, module wrapper will wrap in the import called like this,
let file = require("../3. Module & global object - 3/app.js"); // this will also be wrapped inside a iffe function and allow to access those all keys, methods which were, module, exports, etc.
// so that's why the NPM was born because of this module wrapper concept, so that we can import and export the code from one file to another file in node.js.
