// TODO: Include packages needed for this 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projTitle',
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
            choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 2-clause', 'BSD 3-clause', 'none'],
            name: 'license',
        },
        {
            type: 'number',
            message: 'For license purposes, what year is it?',
            name: 'year',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your name:',
            name: 'yourName',
        },
        {
            type: 'input',
            message: 'Please enter your email address:',
            name: 'email',
        },
    ])
    .then((answers) => {
        console.log(answers);
        const markdownContent = generateMarkdown(answers);

        fs.appendFile('README.md', markdownContent, (err) =>
            err ? console.log(err) : console.log('Success!'))
    })

// TODO: Create a function to write README file

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
