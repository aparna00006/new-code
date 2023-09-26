const http = require('http');

const express= require('express');

const app= express();
// adding middleware
app.use((req, res, next) => {
     console.log('In the middleware-1');
     next();
})
app.use((req, res, next) => {
    console.log('In the middleware-2')
   // sending reponse from here
    res.send('<h1> hello to node js </h1>')
});

app.listen(3000);