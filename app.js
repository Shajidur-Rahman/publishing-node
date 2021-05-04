const port = 3000;
const hostname = '0.0.0.0';
const http = require('http');
const express = require('express');
const path = require("path");
const app = express();
const fs = require('fs')

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})



app.listen(port, hostname, ()=>{
    console.log(`The application started successfully on port http://${hostname}:${port}`);
});