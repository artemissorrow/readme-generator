// TODO: Include packages needed for this 
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require("./utils/generateMarkdown.js");
const generateMarkdown = require('./utils/generateMarkdown.js');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a project description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter contribution guidlines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please enter test instructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Please select a license:',
            choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 2-clause', 'BSD 3-clause', 'WTFPL', 'none'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email',
        },
    ])
    .then((response) => {
        console.log(response);
        generateMarkdown(response);
    })


// TODO: Create a function to write README file
const filename = "README.md";



// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
