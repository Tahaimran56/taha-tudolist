#! /usr/bin/env node
import inquirer from "inquirer";

let condition = true;
let todos = [];

while (condition) {
    const todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: true,
        },
    ]);

    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    condition = todoQuestion.secondQuestion;
}

// you need all things in length so do like this   
//(note) add things one by one for better work
for (let i = 0; i < todos.length; i++) {
    console.log(`${i+1}. ${todos[i]}`);
}



