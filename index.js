// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    messsage: 'what is the project title?',
    name: 'title',
},
{
    type: 'input',
    messsage: 'what is the description?',
    name: 'description',
},
{
    type: 'input',
    messsage:'what is the installation instructions?',
    name: 'installation',
},
{
    type: 'input',
    message: 'what is usage information?',
    name: 'usage',
},
{
    type:'input',
    message:'what is the contribution guidelines?',
    name:'contribution',
},
{
    type:'input',
    message:'what is the test instructions?',
    name: 'test',

},
{
    type: 'list',
    message: 'choose the follow list:',
    name: 'license',
    choices: ["MIT","APACHE","IBM","GNU","NO LICENSE"]
},
{
    type: 'input',
    message: 'what is my github username?',
    name: 'username',
},
{
    type: 'input',
    message: 'what is the my email address?',
    name: 'email',
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data,(error)=>{
        if(error)throw new Error("something went wrong", error);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        const createREADME=generateMarkdown(data);

    writeToFile("./createREADME/README.md",createREADME);
});
 }

// Function call to initialize app
init();
