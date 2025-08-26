
//so now applying total new instance of eventEmitter by importing from app.js
const eventEmitter = require("./app.js");
//removing this to import the eventEmitter in index.js completely,,
// const events = require("events");

// const { EventEmitter } = events;

// const eventEmitter = new EventEmitter();

//removing register event to apply the next example in app.js....
//https://www.udemy.com/course/all-you-need-to-know-nodejs-with-practical-project/learn/lecture/40366298#questions
// //register an event i.e. event1.
// eventEmitter.on("event1", function (obj) {
//     console.log('Hello async')
//   console.log('new object method, yaaahhh..!',obj);
// });

// //to check asynchronous or synchronous way, 
// console.log('this is sync');


//emit or raise the event to execute,,
// it i.e. object only passed to that event1 when we emit or raise, which will be passed to the callback function's parameter.
//comment for the file content
// eventEmitter.emit("event1", {
//   param1: "hello world",
//   age: 25,
//   msg: "goodbye world",
//   param2: "hello again world",
// });
eventEmitter.emit("event1", "hello world guyss");




