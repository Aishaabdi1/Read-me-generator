const inquirer = require("inquirer");
const fs = require("fs");
// mandatory packages to be able to run my code

// questions the user will enter - these will be pasted into HTML 
const questions = () => {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Please write down the title of your application",
      },