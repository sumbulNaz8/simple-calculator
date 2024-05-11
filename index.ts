#! /usr/bin/env node

import chalk from 'chalk'
import inquirer from "inquirer";
import Choices from 'inquirer/lib/objects/choices.js';
console.log(chalk.green.italic`\n\t-----------------
                                    WELCOME TO MY SIMPLE CALCULATOR
                                                                        -----------------------------------\n`)
                                                                     
do{
let answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  { message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division" ,  "Modules" , "Exponents"],
  }, 

]);
//conditional  statement
if(answer. operator === "Addition"){  
     console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}else if (answer.operator === "Subtraction") { 
    console.log(chalk.magenta(answer.firstNumber - answer.secondNumber));
}else if(answer.operator === "Multiplication"){  
    console.log(chalk.red(answer.firstNumber * answer.secondNumber));
}else if (answer.operator === "Division"){  
    console.log(chalk.yellow(answer.firstNumber / answer.secondNumber));
}else if (answer.operator === "Modules"){  
  console.log(chalk.blue(answer.firstNumber % answer.secondNumber));
}else if(answer.operator === "Exponents"){  
  console.log(chalk.yellowBright(answer.firstNumber ** answer.secondNumber));
}else{
  console.log(chalk.gray("please select valid operator"));
}

let ans =await inquirer . prompt([
  {
    name: 'continue',
    type: 'confirm',
    message: 'Do you want to perform another operation?',
    default:true
      
  }
]);
if (ans.continue === false ){
  console.log(chalk.cyan('you excited from calculator ...\n \t Goodbye have a nice day ...\n\t'));
  break;
}
}while(true)




console.log("***********************************THE END****************************************************")





      
       