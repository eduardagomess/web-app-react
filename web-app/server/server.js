
var http = require('http'); 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 
app.use(require("cors")());
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
 

app.post('/resultado', (req, res, next) => { 
    const firstNumber = parseInt(req.body.num1)
    const secondNumber = parseInt(req.body.num2)
    const primeNumbersList = []
    
    function isPrime(number){
        let numberOfDividers = 0
        for (let i = 1; i < number + 1; i++){
            if (number % i === 0){
                numberOfDividers +=1
            }
        }
        if (numberOfDividers === 2){
            return true;
        }
        else{
            return false;
        }
    }
    
    if (secondNumber > firstNumber){
        for (let i=firstNumber; i < secondNumber; i++){
            if (isPrime(i)){
                primeNumbersList.push(i)
            }
        }
    }

    let new_list =[]
    const listSize = primeNumbersList.length
    for (let i = 0; i < primeNumbersList.length ; i++){
        
        console.log(i === listSize)
        console.log(primeNumbersList[i])
        if (i === listSize-1){
            new_list.push(primeNumbersList[i] + '.')
        }
        else{
            new_list.push(primeNumbersList[i] + ',')
        }
    
    } 

    console.log(new_list)
    res.json({dados: new_list});
}) 


 

 
var server = http.createServer(app); 
server.listen(3031);
console.log("The server is running on port 3031!")