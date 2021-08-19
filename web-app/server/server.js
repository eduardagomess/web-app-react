
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 

app.post('/resultado', (req, res, next) => { 
    const num1 = parseInt(req.body.num1)
    const num2 = parseInt(req.body.num2)
    const list_prime = []
    
    function isPrime(number){
        let number_of_dividers = 0
        for (let i = 1; i < number+1; i++){
            if (number % i == 0){
                number_of_dividers+=1
            }
        }
        if (number_of_dividers == 2){
            return true;
        }
        else{
            return false;
        }
    }
    
    if (num2 > num1){
        for (let i=num1; i < num2; i++){
            if (isPrime(i)){
                list_prime.push(i)
            }
        }
    }

    let new_list =[]
    const listSize = list_prime.length
    for (let i = 0; i < list_prime.length ; i++){
        
        console.log(i == listSize)
        console.log(list_prime[i])
        if (i == listSize-1){
            new_list.push(list_prime[i] + '.')
        }
        else{
            new_list.push(list_prime[i] + ',')
        }
    
    } 

    console.log(new_list)
    res.json({dados: new_list});
}) 


 

 
var server = http.createServer(app); 
server.listen(3031);
console.log("The server is running on port 3031!")