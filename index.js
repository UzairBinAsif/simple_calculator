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
        choices: ["Add", "sub", "div", "multiply"]
    },
]);
// conditional statements
if (answer.operator === "Add") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "sub") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "div") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else if (answer.operator === "multiply") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else
    (console.log("Please enter a valid Operator"));
console.log("Thanks for using my calculator\nTHE END");
