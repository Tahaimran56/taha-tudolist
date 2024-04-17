#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 25000;
let mypin = 1122;

console.log("Welcome to Taha's ATM Machine");

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            type: "number",
            message: "Enter your pin number"
        }
    ]
);

if (pinAnswer.pin === mypin) {
    console.log("Login successful");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select an option",
                type: "list",
                choices: ["withdraw", "check balance", "fastcash"]
            }
        ]
    );

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "Enter your amount to withdraw"
                }
            ]
        );

        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        } else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successful`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    } else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    if (operationAns.operation === "fastcash") {
        let Fastcash = await inquirer.prompt(
            [
                {
                    message: "Select one operation",
                    name: "cash",
                    type: 'list',
                    choices: [2000, 5000, 10000, 20000]
                },
            ]
        )
        if (Fastcash.cash === 2000) {
            console.log("Thank you for using our bank");
            console.log("2,000 successfully transferred to your account");
        }
        else if (Fastcash.cash === 5000) {
            console.log("Thank you for using our bank");
            console.log("5,000 successfully transferred to your account");
        }
        else if (Fastcash.cash === 10000) {
            console.log("Thank you for using our bank");
            console.log("10,000 successfully transferred to your account");
        }
        else {
            console.log("Thank you for using our bank");
            console.log("20,000 successfully transferred to your account");
        }
    }
} else {
    console.log("Incorrect pin number");
}



