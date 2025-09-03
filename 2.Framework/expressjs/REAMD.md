# Express Framework Introduction & Basic Project Setup
*. first to initialize a NOde.js project: `npm init` => this will create a package.json file.
*. in package.json, the name will be default set as your folder name.
*. Then, this all contain object having key and value pairs.
*. We can called script as a script notation instead of script key randomly.
*. The description , author will be blank because we didn't write anything during npm init.
*. To install a package, we can use NPM (Node Package Manager).
*. Let's install our first npm package which is express. i.e. npm i express
==========================================================================
*. after instaling express, we can see dependencies section added and another object notation showing express package details.
*. Also notice, node_modules folder is created after adding express package.
*. Also notice, express folder inside node_modules folder.

===========================================================================
In the script object:
*. We can configure script object in following way. script1 is name of script, and must write following 'node location of the executable file'.
*. and it's also a convention to start a script name with 'script'.
*. let's put it it as a 'start' as a script name, and now you don't need to write 'npm run start' instead 'npm start', if your script name is other than 'start', then you have to write 'npm run scriptName'.

  "scripts": {
    "script1" : "node ./index"
  },
  "scripts": {
    "start": "node ./index"
  },


*. 'package-lock.json' is a file that stores all the dependencies and track their depencies versions.

# First Express Server :
*. Express.js is a framework of Node.js.
*. Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
*. Express.js is a minimalist web framework for Node.js.

<!-- Installing Nodemon -->
Which is a third party package that helps to restart the server automatically when we make changes in our code. Instead of doing manually stopping the server and restarting it (server) again.
------Steps -----
1. Now, simply change node with nodemon in scripts object of start name like this :
`  "scripts": {
    "start": "nodemon ./index"
  }, `

  <p> then, simply run the command `npm start`'. </p>

Now, you can simply see in the terminal console is that, server is simply starting with the nodemon tag.