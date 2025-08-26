//FS - file system, hence FS module used to read, write, update & delete the file.
const fs = require("fs");
//writeFileSync used to create file, write content in that file
// fs.writeFileSync('test.js','hello world...');
//it will help us to update the file content instead of totally replace like above.
// fs.appendFileSync('test.js','hello');

const data = fs.readFileSync("./test.js", "utf-8");
// const data = fs.readFileSync('./test.js',{encoding:'utf-8'});
//since only consolie data will return as buffer data, so toString method will help convert that binary buffer code
// console.log(data.toString()); // if we not define that encoding style, then just use toString();
console.log(data); // content of the test.js

// delete the specified file
fs.unlinkSync("./test.js");
