/*
The task: to get two or more numbers and perform basic arithmetic operations (addition, subtraction, multiplaction and division)
*/

const prompt = require('prompt-sync')(); // required line


{
    // Gets numbers for operation
    const num1 = parseInt(prompt("Enter your first number: "));
    const num2 = parseFloat(prompt("Enter your second number: "));

    // Gets the operation from the user
    let operation = prompt("Enter your operation (+, -, /, x): ")
    // Validates user's input
    while (!["+","-","/","x"].includes(operation))
    {
        console.log("Please try again.")
        operation = prompt("Enter your operation (+, -, /, x): ")
    }
}
