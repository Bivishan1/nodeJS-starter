// Here we talked about one use case of buffer and that is `<b> read stream </b>` from server that are converted

// (the buffer that is converted) into stream and fill up buffer, and then send to client whenever the buffer is filled up.

// Then the buffer or chunk of data is sent to client.

// The process continuously run until finished data from server to client.

// The benefit of reading stream is the client continuously read data.

// This read stream provide us a better user experience. So, to summarize, read stream is the process of buffering.

// ========================= reading steam ==================================
//first, we we won't use  read file instead we use reading stream mechanism (from fs) to read large file for better UX.

const fs = require("fs");
//since, this method return event emitter, so let's store in variable [19]
//so, event by the name of the data is already defined by the NodeJS. [19]
// const readStream = fs.createReadStream("./data.txt", {encoding:"utf-8"}); // call this object or .toString()
const readStream = fs.createReadStream("./data.txt");

//to read a whole buffer at a time,,[y]
const content = [];

//now registering above data event,, so the default event will be data.
//since, register (by on method) takes two parameters,
// 'data' is already define by node.js , as we said earlier above.
readStream.on("data", (buffer) => {
// [y]
//now, after pushing in content array, it contains buffer. which needs to concat in 'end' event below [37].
content.push(buffer);
});
//[y]
//like data event, there is another built in event which is 'end' event. whenever, data streaming is finished , then this 'end' event will be fire.
//registering 'end' event. that takes two parameter, one 'end' event and another callback function.
readStream.on('end', function() {
    //concating above content buffer (it made buffer while we push buffer in that content array) with the Buffer object. [y]
    //since it return an string, so let's store in variable. [y]
const finalData = Buffer.concat(content).toString()
console.log(finalData);
})
