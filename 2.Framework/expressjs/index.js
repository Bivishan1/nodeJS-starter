// console.log("welcome to Express JS")
//created first express with line 3 - 13.
const express = require('express');
const express1 = require('express');
//instance of express, storing in variable.
const app= express1();

app.get('/', (req, res)=> {
    console.log("User hit the resource");
    res.send('Welcome to new home page')
})

app.get('/example', (req, res, next)=> {
    res.send('Getting ')
})

app.post('/example', (req, res, next) =>
    res.send('Saving)'
))

app.put('/example',(req, res)=> {
res.send(' example eUpdating')
})


app.delete('/example',(req, res)=> {
    res.send(' example Deleting')
})

app.listen(7000, ()=> {
    console.log('listening on port 7000');
})