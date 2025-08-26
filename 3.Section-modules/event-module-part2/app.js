//pasting same code from index.js
const events = require("events");
//now creating a file using eventemitter.
const fs = require("fs");
const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

//we register an event i.e. event1 for event1 to emit the event in the index.js.
//we write a creating file function inside the callback function which is a parameter in eventEmitter registering event,,
// eventEmitter.on("event1", function (obj) {
eventEmitter.on("event1", function (content) {
  //commment this to create file
  //     console.log('Hello async')
  //   console.log('new object method, yaaahhh..!',obj);
  //creating file
  fs.writeFile("test.txt", content, (err) => {
    if (!err) {
      console.log("file created successfully");
    }
  });
});

// //to check asynchronous or synchronous way,
// console.log('this is sync');

// eventEmitter.emit("event1", {
//   param1: "hello world",
//   age: 25,
//   msg: "goodbye world",
//   param2: "hello again world",
// });

//removing raising event above by commenting.

module.exports = eventEmitter;
