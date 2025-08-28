// https://www.udemy.com/course/all-you-need-to-know-nodejs-with-practical-project/learn/lecture/40366362#questions
//streaming means loading the video data gradually from the server , then stream the video data and you can play continuously in online.
//streaming means getting the data and organize them to play the steam in user end.
//So, node.js stream concept is same like that.
//so, streaming is important because it allows to play the video without downloading, which is a better UX
// 

// When we use streaming concept, that means we are breaking the whole data into some part.

// These parts are broken, part.

// These parts comes into a binary format.

// We cannot access this broken part directly.

// Instead of some broken part, it forms encapsulated packet, which is buffer, that is a encapsulated packet of binary data, but we can access this buffer.

// Every encapsulated packet or buffer has a limitation.

// A buffer may form by 4 to 5 broken parts or 5 to 6 broken part or other limitations.

// Whenever a buffer is being completed by filluping binary part, then it is sent to client like this. [in video animation]

// And again from next process, then send to client again.

// This process continuously run until finished whole data to client.

// Then, buffer only completes the buffer after it completes the buffer chunk until that sent to the client.

// =================== streaming concept ===================

// There are two  case for buffer. 1.read stream 2. write stream

// When you read data then this is called read stream.

// And when you write data then this is called write stream.