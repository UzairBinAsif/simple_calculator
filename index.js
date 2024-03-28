#! /usr/bin/env node
console.log("\nCalculator By Uzair Bin Asif");
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "Firstnumber" },
    { message: "Enter second number", type: "number", name: "Secondnumber" },
    {
        message: "select one of the operator",
        type: "list",
        name: "operator",
        choices: ["Add", "subtract", "multiply", "divide"]
    },
]);
// conditional statements
if (answer.operator === "Add") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "subtract") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "divide") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "multiply") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else
    (console.log("Please enter a valid Operator"));
console.log("Thanks for using my calculator\nTHE END");
