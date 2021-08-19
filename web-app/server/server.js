
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 

app.post('/resultado', (req, res, next) => { 
    console.log(req.body.num1)
    //code
}) 

 
var server = http.createServer(app); 
server.listen(3031);
console.log("The server is running on port 3031!")