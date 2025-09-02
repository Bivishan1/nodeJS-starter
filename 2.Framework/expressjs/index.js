// console.log("welcome to Express JS")
//created first express with line 3 - 13.
const express = require('express');
const express1 = require('express');
//instance of express, storing in variable.
const app= express1();

app.get('/', (req, res)=> {
    console.log("User hit the resource");
    res.send('Welcome to home page')
})

app.listen(700, ()=> {
    console.log('listening on port 700');
})

