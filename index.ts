#! /usr/bin/env node
import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {message: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {message: "Select your second one operator to peform operators", 
type: "list",
name: "operator",
choices: ["Addition", "Subtraction", "Multiplication", "Division"],
}
]);
console.log(answer);

// condition test
if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber)
} else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
    } else if (answer.operator === "Multiplication"){
        console.log(answer.firstNumber * answer.secondNumber)
    } else if (answer.operator === "Division"){
        console.log(answer.firstNumber / answer.secondNumber)
    } else{
        console.log("Invalid Number")
    }

