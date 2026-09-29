// exercise 1
console.log("This is my first program")
console.log("Welcome John your month salary is 500000")

// exercise 2
const num1 = 5; 
const num2 = 3; 
// add two numbers 
const sum = num1 + num2; 
// display the sum 
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum); 

// exercise 3
const prompt = require('prompt-sync')(); // required line
console.log("starting")
const name = prompt("Enter your name: ");
console.log("Hello, ${name}");
// checks if number from user is positive, negative or zero
const number = parseInt(prompt("Enter a number: "));

//is number positive?
if (number > 0)
    {
        console.log("The number is positive");
    }

//is number 0?
else if (number == 0)
    {
        console.log("The number is zero");
    } 

//is number negative?
else 
{
    console.log("The number is negative.");
}