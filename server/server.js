
const http = require('http'); 
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
    
    // Function to verify if the number is prime
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
        for (let i = firstNumber; i < secondNumber; i++){
            if (isPrime(i)){
                primeNumbersList.push(i)
            }
        }
    }else{
        for (let i = secondNumber; i < firstNumber; i++){
            if (isPrime(i)){
                primeNumbersList.push(i)
            }
        }
    }

    // edit list
    let newPrimeNumbersList = []
    const listSize = primeNumbersList.length

    for (let i = 0; i < primeNumbersList.length ; i++){
        if (i === listSize-1){
            newPrimeNumbersList.push(primeNumbersList[i] + '.')
        }
        else{
            newPrimeNumbersList.push(primeNumbersList[i] + ',')
        }
    } 
    res.json({dados: newPrimeNumbersList});
}) 


var server = http.createServer(app); 
server.listen(3031);
