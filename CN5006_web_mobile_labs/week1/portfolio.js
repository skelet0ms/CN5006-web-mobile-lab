/*
The task: to get two or more numbers and perform basic arithmetic operations (addition, subtraction, multiplaction and division)
*/

/*
Function to get the operation from user and validate it
OUTPUT: a validated operation
*/
function getOperation()
{
    // Gets the operation from the user
    let operation = prompt("Enter your operation (+, -, /, x): ");
    // Validates user's input
    while (!["+","-","/","x"].includes(operation))
    {
        console.log("Please try again.");
        operation = prompt("Enter your operation (+, -, /, x): ");
    }
    return operation
}

/*
Function to perform an operation on the numbers provided
INPUT: both numbers and the operation performed on them
OUTPUT: the result of the numbers and the operation
*/
function doOperation(num1, num2, operation)
{
    // Create sum variable
    let sum = 0

    // Checks to see what operation the user wants and does said operation
    // Starting with addition
    if (operation == "+")
    {
        sum = num1 + num2;
        console.log(num1 + " + " + num2 + " = " + sum);
    }
    // Then subtraction
    else if (operation == "-")
    {
        sum = num1 - num2;
        console.log(num1 + " - " + num2 + " = " + sum);
    }
    // Then division
    else if (operation == "/")
    {
        sum = num1 / num2;
        console.log(num1 + " / " + num2 + " = " + sum);
    }
    // Lastly multiplication
    else
    {
        sum = num1 * num2;
        console.log(num1 + " x " + num2 + " = " + sum);
    }
    
    // Return sum for later use
    return sum
}

const prompt = require('prompt-sync')(); // required line

// Gets numbers for operation
let num1 = parseInt(prompt("Enter your first number: "));
let num2 = parseInt(prompt("Enter your second number: "));

let operation = getOperation();

// Create sum from user's inputs
let sum = doOperation(num1, num2, operation);

// Asks if user wants to continue
let shouldContinue = prompt("Continue (y/n)?");
// Validition for continuation
while (shouldContinue != "y" && shouldContinue != "n")
{
    console.log("Please enter y or n");
    shouldContinue = prompt("Continue (y/n)? ");
}

// Continue for next numbers
while (shouldContinue == "y")
{
    // Get new number from user
    let num = parseInt(prompt("Enter a new number: "));
    
    let operation = getOperation();

    // Create sum from user's input
    sum = doOperation(sum, num, operation);

    // Asks if user wants to continue
    shouldContinue = prompt("Continue (y/n)?");
    // Validition for continuation
    while (shouldContinue != "y" && shouldContinue != "n")
    {
        console.log("Please enter y or n");
        shouldContinue = prompt("Continue (y/n)? ");
    }
}