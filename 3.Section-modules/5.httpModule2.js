// HTTP Module
// 1. Mostly used to create a server by listening to the port
const http = require('http');

//5.Now, in next lesson, we are to define some path maybe,,, let's see,,
const server = http.createServer(function(req,res) {
    //those two req, and res are object
    // every req to the server, will store on this req object, whereas,,
    // every response from the server, will store on this res object.
    console.log('requested URL',req.url); //easily can see the requested URL.
}); 



// 4. (optonal)
server.on('connection', (req, res) => {
    console.log("New  connection")
})

//3. listening the server through port.
//listen method will expect 2 parameter  one - port number and second - callback function which will call when server starts.
server.listen(3000, ()=> {
    console.log('listening to the port number 3000');
})
