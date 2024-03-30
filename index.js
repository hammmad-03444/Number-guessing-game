#! /usr/bin/env node
import inquirer from "inquirer";
let randomNum = Math.floor(Math.random() * 6 + 1);
const userguess = await inquirer.prompt([
    { name: "usernumber",
        type: "number",
        message: "Enter you number here"
    }
]);
if (userguess.usernumber === randomNum) {
    console.log('Congratrulations!! You won, you guessed the right number');
}
else {
    console.log('Bad luck!! better luck next time.');
}
