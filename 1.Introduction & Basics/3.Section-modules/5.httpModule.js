// HTTP Module
// 1. Mostly used to create a server by listening to the port
const http = require('http');

//2.creating a server
const server = http.createServer(); //since it will return a instance so we will store them in variable.
//this server instance is an event emitter.
// if you try to prove, we can call server.on method to register an event.

//server instance to prove it's event emitter,
// node.js already define `connection` event
// once, this event i.e. connection, is emit, then that callback function will be call.
// so again exit in the terminal by ctrl + c and run again,
// so once, after only you run the server in browser, then you will quickly get this 'new connection' message in terminal.
//that means, when we hit into our URL, then this event i.e. connection, will fire and callback function is called.
// 4. (optinal step, just to see whether it's an event emitter). so that's why, we can say that server (above variable) is an event emitter as well,,
server.on('connection', (req, res) => {
    console.log("New  connection")
})

//3. listening the server through port.
//listen method will expect 2 parameter  one - port number and second - callback function which will call when server starts.
server.listen(3000, ()=> {
    console.log('listening to the port number 3000');
})

// so, when you start the server and listening to the port, then behind the scene event loop is going to start.
// and rapidly this event loop produce/respond new task, process the request and response to that request.
//after run this server, you will get console saying that message and behind the scene event loop is running,,,, and it holds the cursor in terminal and doesn't exit...

// #Note:
// 1. our http://localhost:3000/ is our main domain which is also called  as slash URL (/), when we hit this main domain, then we are only requesting slash url (/).
// 2. after that main domain, if we put any other path, then that will be our request URL. E.g. /about, /contact, will be called request URL.
// 3. at first, we just encounter only loading in the browser when you hit that main domain or with request url, because we have not define / i.e. main domain or any request url. that's why it's not responding us.