let a= 33;

let myfun = function() {
    console.log("inside app", a);
}

//since every content inside file is encapsulated in node.js, so
// using module export concept to alloww other file to use this function outside this file.
// module.exports = myfun;

// so now to export multiple things, we can use module.exports as an object.
// module.exports = {a:a, myfun:myfun}
//using ES6 shorthand syntax, if we have similar key and value. so can use as following,
//to use export name, i disable below code otherwise that name export will not work.
// module.exports = {a, myfun}

//using named export,
exports.country = 'Nepal';
