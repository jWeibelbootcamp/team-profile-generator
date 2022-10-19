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
        message: 'Enter Employee Name' // somehow need this to be 'Manager,' 'Engineer,' or 'Intern' depending. Also should disallow null. validate?
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
    ]).then((choice) => { // do I even need this? (66-68)
        choice = this.choice;
    });
    
    if (choice === 'Add Engineer.') {
        addEngineer();
    } else if (choice === 'Add Intern.') {
        addIntern();
    } else {
        quit();
    }
};

// Adds a Manager, then calls addEmployee() to inquire about further additions.
const addManager = () => {
    console.log('Your first Employee is the Team Manager:');
    inquirer.prompt([...employeeQ, managerQ])
        .then((answer) => {
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.office);
            team.push(newManager);
            addEmployee();
        });
};

// Adds an Engineer, then calls addEmployee() to inquire about further additions.
const addEngineer = () => {
    inquirer.prompt([...employeeQ, engineerQ])
        .then((answer) => {
            let newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.gitHub);
            team.push(newEngineer);
            addEmployee();
        });
};

// Adds an Intern, then calls addEmployee() to inquire about further additions.
const addIntern = () => {
    inquirer.prompt([...employeeQ, internQ])
        .then((answer) => {
            let newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
            team.push(newIntern);
            addEmployee();
        });
};

// Exits team builder and generates HTML. 
const quit = () => {

};

// Starts the app by adding a Manager for the team.
addManager();