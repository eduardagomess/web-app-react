var http = require('http'); 
const express = require('express');
const app = express();
app.use(require("cors")());
 

var server = http.createServer(app); 
server.listen(3030);
console.log("Servidor rodando na porta 3030!")