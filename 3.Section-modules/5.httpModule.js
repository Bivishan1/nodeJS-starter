// HTTP Module
// Mostly used to create a server by listening to the port
const http = require('http');

//creating a server
const server = http.createServer(); //since it will return a instance so we will store them in variable.

//listening the server through port.
//listen method will expect 2 parameter  one - port number and second - callback function which will call when server starts.
server.listen(3000, ()=> {
    console.log('listening to the port number 3000');
})