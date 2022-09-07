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
      {
        type: "input",
        name: "description",
        message: "Write a brief description of the application",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter any installation instructions",
      },
      {
        type: "input",
        name: "usage",
        message: "Usage",
      },
      {
        type: "list",
        name: "license",
        message: "Which of the following licenses if required?",
        choices: [
          {
            name: "No License",
            value: "None",
          },
          {
            name: "Apache 2.0",
            value:
              "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
          },
          {
            name: "MIT",
            value:
              "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
          },
          {
            name: "Mozilla",
            value:
              "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
          },
          {
            name: "GNU GPL v3",
            value:
              "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
          },
          {
            name: "Eclipse 1.0",
            value:
              "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
          },
        ],
      },

      // final questions....
  
      {
        type: "input",
        name: "contributions",
        message: "Please enter relevent contributers",
      },
      {
        type: "input",
        name: "email",
        message: "Enter you email address so we can contact you.",
      },
      {
        type: "input",
        name: "github",
        message: "GitHub username",
      },
    ]);
  };
  
  // This will produce the answers you have given in a read m generated file
  
  const init = () => {
    questions().then((answers) => {
      const ReadmeStuff = GenREADME(answers);
  
      fs.writeFile("README.md", ReadmeStuff, (err) =>
        err ? console.log(err) : console.log("Woohoo! Read Me Generated!")
      );
    });
  };
  
  init();