#! /usr/bin/env node
import inquirer from "inquirer";

const currency:any= {
    USD: 1,
    EUR: 0.91,
    GBP: 0.81,
    PKR: 280,
    INR: 76.1
}

let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your currency",
        type: "list",
        choices: ["USD", "GBP", "INR", "EUR", "PKR"]
    },
    {
        name: "to",
        message: "Enter destination currency",
        type: "list",
        choices: ["USD", "GBP", "INR", "EUR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter amount",
        type: "number"
    }
]);

let fromAmount = currency[user_answer.from];
let to = currency[user_answer.to];
let amount = user_answer.amount;

let base = amount / fromAmount; // Convert amount to the base currency
let result = base * to; // Convert the base amount to the destination currency
console.log(`${amount} ${user_answer.from} is equal to ${result} ${user_answer.to}`);
