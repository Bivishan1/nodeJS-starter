// a = 30;
// console.log('inside indexss',a);
//
let content = require("./app.js");
// console.log('it is my function',myfun);
//instead of consoling function, we can directly call when we import in the following way.
// console.log('this is a variable a value',content.a);
//to use name export i disable below console code.
// console.log(content);

//using named export, while importing, it has to be same name of variable or object which are exporting from another file,,
let { country } = require("./app.js");
console.log("name export country is", country);
