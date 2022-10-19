const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

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

const managerQ = [
    {
        type: 'input',
        name: 'office',
        message: 'Enter Manager Office Number'
    }
];

const engineerQ = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter Engineer GitHub'
    }
];

const internQ = [
    {
        type: 'input',
        name: 'school',
        message: 'Enter Intern School'
    }
];

// team manager first, then option to add engineer, intern, or to finish building. 
// return to menu after adding an engineer or intern. 
// when finish building is selected, generate HTML.

const addManager = () => {
    inquirer.prompt([...employeeQ, managerQ])
        .then((answer) => {
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(newManager);
            addEmployee();
        });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMore',
            message: 'Add another team member?',
            choices: ['Add Engineer.', 'Add Intern.', 'Quit.']
        }
    ]);
};