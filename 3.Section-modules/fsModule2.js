//now, diving into more details
//https://www.udemy.com/course/all-you-need-to-know-nodejs-with-practical-project/learn/lecture/40366282
//now, using asynchronous methods to create , read , update or delete the file

//asynchronous method to create a file, which is best practice which makes sure we are not blocking our main thread,
const fs = require("fs");

// //this method expects 4 parameter but one last is optional,,
// fs.writeFile("test.txt", "hello world", (err) => {

//   if (!err) console.log("file created successfully"); else console.log(err);

// });

// //to check whether our above write file method output in asynchronous or synchronous way, 
// console.log('this is sync');

// appendfile 
//this method expects 4 parameter but one last is optional,,
// fs.appendFile("test.txt", "bye the world", (err) => {

//   if (!err) console.log("file updated successfully"); else console.log(err);

// });

// //to check whether our above write file method output in asynchronous or synchronous way, 
// console.log('this is sync for append');

//read file
// //this method expects 4 parameter but one last is optional,,
// fs.readFile("./test.txt", {encoding:'utf-8'}, (err, data)=> {
//     if (!err) {console.log(data)}
// } );

// //to check whether our above write file method output in asynchronous or synchronous way, 
// console.log('reading the file,,,');

//delete the file in asynchronous way
fs.unlink('./test.txt', (err)=> {
    if (!err) {
        console.log('file deleted successfully');
    }
})

console.log('this is sync for delete');