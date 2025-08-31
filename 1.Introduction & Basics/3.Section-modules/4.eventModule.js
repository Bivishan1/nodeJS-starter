//Since, Node.js is a event driven non-blocking runtime
//Events is like every actions we perform in our computer, whether it's creating, updating, deleting, searching etc.

//Events are used to create, update, delete, search etc.
const events = require("events");

//EventEmiter has a capital letter because of it's convention and also it's a constructor
//and EventEmiiter is a class so we have to make an instance of that class
// const EventEmitter = new events.EventEmitter();
// just refactor above instance code this way by destructuring,,
const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

//registering an event,,
//commenting for the next example,
// eventEmitter.on('event1',function(param1,age,name,param3) {
//     console.log('param1',param1);
//     console.log('param2',age);
//     console.log('param3',name);
//     console.log('param4',param3);
// })
//instead of that way, we can easily use destructing / object method to console parameters,
//since we are using callback function, so it's asynchronous,
eventEmitter.on("event1", function (obj) {
    console.log('Hello async')
  console.log('new object method, yaaahhh..!',obj);
});

//to check asynchronous or synchronous way, 
console.log('this is sync');
//the reason behind emitter is asyhchronous because
//when you do event styling coding that means it is asynchronous.

// And when it is asynchronous, then main thread is going to distribute its task by its assist worker without blocking main thread.

// And of course it is more performant.

//now, we should raise or emit an event,
//this expects parameters, at first - the event name, then the multiple parameters as in the on method, we can pass parameters as much as we want
// eventEmitter.emit('event1','hello world',25,'goodbye world','hello again world');
//now raising event with object as parameters method for new example above,
eventEmitter.emit("event1", {
  param1: "hello world",
  age: 25,
  msg: "goodbye world",
  param2: "hello again world",
});




