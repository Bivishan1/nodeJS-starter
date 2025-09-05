// console.log("welcome to Express JS")
//created first express with line 3 - 13.
const express = require('express');
const express1 = require('express');
//instance of express, storing in variable.
const app= express1();

// parsing into json format to console the data in terminal otherwise in console , the output will undefine..
// in simple meaing, from the server (here) we are parsing the data into json format.
// here. express1.json is a middleware function. note , we can pass as many as middleware function inside the use method.
// we can use built middleware or custom middleware function inside use method.
// using builtint middleware function provided by express i.e. .json
// .. this .json method not only helps us to convert to json format but also helps to convert json to javascript object.
// we can also use .text() method to convert to text format.
// app.use(express.json());
app.use(express.text())

app.get('/', (req, res)=> {
    console.log("User hit the resource");
    res.send('Welcome to new home page')
})

// route path here is : '/example' and send reponse 'Getting' and request method is GET.
app.get('/example', (req, res, next)=> {
    res.send('Getting ')
})

app.post('/example', (req, res, next) =>{
    res.send('body data saving....');
    // getting the data from the body requested by server here,,,
    // here we get the data by body or payload, if we send the data in json format (like we send data in body in postman or thunderclient kind of like tools for testing). otherwise it will be just empty object.
    // const data = req.body;
    //displaying a whole body object in terminal (means, it console a whole data from input body in terminal)
    // console.log(data);
    //  console.log('name:',data.name);
    // console.log('age',data.age);
    //instead of manually calling properties each, let's use distructing,
    //commenting for text format
    // const {name, age} = req.body;
    // console.log(name , age);
    const data = req.body;
    console.log(data);
})

// 
app.put('/example',(req, res)=> {
res.send('example eUpdating')
})

app.delete('/example',(req, res)=> {
    res.send('example Deleting')
})

app.listen(7000, ()=> {
    console.log('listening on port 7000');
});