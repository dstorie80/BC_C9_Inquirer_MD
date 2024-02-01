const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Describe your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is the motivation for this project?',
      name: 'motiviation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'builtWhy',
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What did you learn',
        name: 'solution',
    },
    {
        type: 'input',
        message: 'What are the required steps to install your project?',
        name: 'installSteps'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'collaborators'
    },
    {
        type: 'list',
        message: 'Select a licesnse',
        name: 'licenses',
        choices:['Apache License 2.0','GNU General Public License v3.0','MIT License','Mozilla Public License 2.0','The Unlicense']
    },
    {
        type: 'checkbox',
        message: 'Select badges from the list below to add to your project.',
        name: 'badgelist',
        choices:['Apache 2.0','Boost','BSD 3','BSD 2','GNU','MIT','Mozilla','Unlicense']
    },
    {
        type: 'input',
        message: 'List your features here.',
        name: 'featureList'
    },
    {
        type: 'input',
        message: 'How to contribute to this project?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'How to test this project?',
        name: 'test'
    },
    {
      type: 'input',
      message: 'What is your GitHub user name?',
      name: 'userName'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  },
  ])
  .then((answers) => {
    // write the output
    const fileContents = generateMarkdown(answers);
    const { title } = answers;

    const fileName = title.toLowerCase().replace(" ", "-");
    fs.writeFile(`${fileName}.md`, fileContents, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Success!");
      }
    });
  });




