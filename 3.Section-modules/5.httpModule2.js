// HTTP Module
// 1. Mostly used to create a server by listening to the port
const http = require("http");

//5.Now, in next lesson, we are to define some path maybe,,, let's see,,
const server = http.createServer(function (req, res) {
  //those two req, and res are object
  // every req to the server, will store on this req object, whereas,,
  // every response from the server, will store on this res object.
  console.log("requested URL", req.url); //easily can see the requested URL.
  if (req.url === "/") {
    // you will see below write's text in the browser documnt, which directly came from the server.
    //parsing HTML tag within write method
    // adding multiple write method.
    res.write("<h1>this is a home page</h1>");
    res.write("<p>this is a paragraph description</p>");
  }
  // about route request,
  else if (req.url === "/about") {
    
    res.write("<h2>this is a about page</h2>");
    res.write("<i>this is a italic text.</i>");
  }
  //contact route request
  else if (req.url === "/contact") {
    res.write("<h3>this is a contact page</h3>");
  }
  //for any gibberish route request
  else {
    res.write("<h4>404 Not Found</h4>");
  }
  // we have to end the response once open,
  res.end();
});

// 4. (optonal)
server.on("connection", (req, res) => {
  console.log("New  connection");
});

//3. listening the server through port.
//listen method will expect 2 parameter  one - port number and second - callback function which will call when server starts.
server.listen(3000, () => {
  console.log("listening to the port number 3000");
});

//Note : don't forget to restart the terminal after every single code update.
