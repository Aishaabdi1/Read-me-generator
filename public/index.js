const inquirer = require("inquirer");
const fs = require("fs");
// mandatory packages to be able to run my code

// following questions that user will be prompted ot answer 
const questions = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please write down the title of your application",
      },