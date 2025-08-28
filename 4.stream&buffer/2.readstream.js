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

//now registering above data event,, so the default event will be data.
//since, register (by on method) takes two parameters,
// 'data' is already define by node.js , as we said earlier above.
readStream.on("data", (buffer) => {
  console.log("buffering...", buffer.toString());
});

// So every time the buffer is filled up by the stream and within this callback function of data event [25], we can receive this buffer [25].
// And you can access this (parameter) buffer. [24]
//so, the actual meaing behind the stream and buffer is like, data stream hudai jada buffer filled up hudai janxa, jun bistarai filled up hunxa, rah, buffer lai complete gardai gayesi client lai dekhauxa, so like that, in above example, happens same, if mah sanga large bunch of text ko data data.txt ma xa, ra maile yo readStream bata data read garda dherai data haru stream  hudai aayera buffer ma audai display garxa jun concept chai like async await jasto, (but purai chai hain async await ko jasto) data bistarai dekhauxa load hudai and complete ``garxa last ma,, so this process of displaying data is called :`actual data is reading by steaming mechanism.` vanne concept is called stream and buffer.
//  // so readSteam method is very useful for large file streaming (reading) and buffering (displaying).
