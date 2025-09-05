# Express Framework Introduction & Basic Project Setup

_. first to initialize a NOde.js project: `npm init` => this will create a package.json file.
_. in package.json, the name will be default set as your folder name.
_. Then, this all contain object having key and value pairs.
_. We can called script as a script notation instead of script key randomly.
_. The description , author will be blank because we didn't write anything during npm init.
_. To install a package, we can use NPM (Node Package Manager).
_. Let's install our first npm package which is express. i.e. npm i express
==========================================================================
_. after instaling express, we can see dependencies section added and another object notation showing express package details.
_. Also notice, node_modules folder is created after adding express package.
_. Also notice, express folder inside node_modules folder.

===========================================================================
In the script object:
_. We can configure script object in following way. script1 is name of script, and must write following 'node location of the executable file'.
_. and it's also a convention to start a script name with 'script'.
\*. let's put it it as a 'start' as a script name, and now you don't need to write 'npm run start' instead 'npm start', if your script name is other than 'start', then you have to write 'npm run scriptName'.

"scripts": {
"script1" : "node ./index"
},
"scripts": {
"start": "node ./index"
},

\*. 'package-lock.json' is a file that stores all the dependencies and track their depencies versions.

# First Express Server :

_. Express.js is a framework of Node.js.
_. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
\*. Express.js is a minimalist web framework for Node.js.

<!-- Installing Nodemon -->

Which is a third party package that helps to restart the server automatically when we make changes in our code. Instead of doing manually stopping the server and restarting it (server) again.
------Steps -----

1. Now, simply change node with nodemon in scripts object of start name like this :
   ` "scripts": {
  "start": "nodemon ./index"
},`

  <p> then, simply run the command `npm start`'. </p>

Now, you can simply see in the terminal console is that, server is simply starting with the nodemon tag.

Note : Generally, from the server (which is in index.js file), we have to request payload or json body to recieve that data from the client input.

# Note :

\*. when we send a request (by hitting or triggering a route path), the request is divided into some part, e.g. header section, body section etc.

\*. when we send a response to the server to store them. we usually use post, put, delete. For example :
If you want to sign up that means you need to send username, email, password, etcetera to server to store them.

If the methods are post or put or patch, then you can send payload or request body.

Usually we pass this payload as a Json format.

That means key value pair.

One point you should keep in your mind in which format you want to send data to server.

You have to mention it in <b>Header section </b>.

A request header is a Http header that can be used in an Http request to provide information about the

request context.

For example, accept in which format you as a client allow to get response.

You may allow to get response in Json format or any plain text format.

Another header is content type.

It could be application / Json = That means in Json format you are sending request body
or application / text = That means you want to send request body in plain text format.

So, the postman will help you here.

It will set this type of header automatically for us.

# Note : 
Even if we don't send any data in the payload or in the body (in json format ), then it will send you an empty object , if we try to post the method and attempt to retrive the data by req.body.





