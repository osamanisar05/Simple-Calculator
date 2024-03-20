#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : "Enter your first number :" , type : "number", name : "Firt_Number" },
    {message : "Enter your Second number :" ,type : "number", name : "Second_Number"},
    {message : "Select one of the operator to perform operation :", type : "list", name : "Operator", 
    choices : ["Addition" , "Substraction" ,"Division", "Multiplication"],
},
]);
if (answer.Operator === "Addition"){
    console.log(answer.Firt_Number + answer.Second_Number);
}
else if (answer.Operator === "Substraction"){
    console.log(answer.Firt_Number - answer.Second_Number);
}
else if (answer.Operator === "Division"){
    console.log(answer.Firt_Number / answer.Second_Number);
}
else if (answer.Operator === "Multiplication"){
    console.log(answer.Firt_Number * answer.Second_Number);
}
else {
    console.log("Please select a valid operator.");
}