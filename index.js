// Import all required files.
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array to hold all team members.
const team = [];

// Employee questions for all team members.
const employeeQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter Employee Name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Employee Email'
    }
];

// Manager specific question.
const managerQ = [
    {
        type: 'input',
        name: 'office',
        message: 'Enter Manager Office Number'
    }
];

// Engineer specific question.
const engineerQ = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter Engineer GitHub'
    }
];

// Intern specific question.
const internQ = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter Intern School'
    }
];

// Function to add more employees after the Manager or quit the application.
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMore',
            message: 'Add another team member?',
            choices: ['Add Engineer.', 'Add Intern.', 'Quit.']
        }
    ]).then((response) => { // do I even need this? (66-68)
        response = this.response;
    });
    
    if (response === 'Add Engineer.') {
        addEngineer();
    } else if (response === 'Add Intern.') {
        addIntern();
    } else {
        quit();
    }
};

// Adds a Manager, then calls addEmployee() to inquire about further additions.
const addManager = () => {
    inquirer.prompt([...employeeQ, managerQ])
        .then((answer) => {
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(newManager);
            addEmployee();
        });
};

// Adds an Engineer, then calls addEmployee() to inquire about further additions.
const addEngineer = () => {
    inquirer.prompt([
        
    ])
};

// Adds an Intern, then calls addEmployee() to inquire about further additions.
const addIntern = () => {

};

// Exits team builder and generates HTML. 
const quit = () => {

};

// Starts the app by adding a Manager for the team.
addManager();