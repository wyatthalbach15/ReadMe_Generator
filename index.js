
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does your project do?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the necessary installation procedures for this project?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How does the user use the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BPL_2.0', 'BSL_1.0', 'NONE',],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can users contribute to your project?'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can a user test your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => error ? console.log(error) : console.log('Creating ReadMe...'));
 }


function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('sampleReadme.md', data);
    });
 };


init();
