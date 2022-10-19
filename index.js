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
        message: 'Enter Employee Name', 
        validate: messageInput => {
            if (messageInput.length > 0) {
                return true;
            } else {
                console.log('Names require at least one character.')
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter Employee ID',
        // validate: messageInput => {
        //     if (typeof(messageInput) === 'number' && messageInput !== NaN) {
        //         return true;
        //     } else {
        //         console.log('Employee IDs may only be numbers and may not be blank.')
        //         return false;
        //     }
        // }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Employee Email'
    }
];

// Manager specific question.
const managerQ = 
    {
        type: 'number',
        name: 'office',
        message: 'Enter Manager Office Number'
    }
;

// Engineer specific question.
const engineerQ = 
    {
        type: 'input',
        name: 'gitHub',
        message: 'Enter Engineer GitHub'
    }
;

// Intern specific question.
const internQ = 
    {
        type: 'input',
        name: 'school',
        message: 'Enter Intern School'
    }
;

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
        
        if (choice === 'Add Engineer.') { // this just ran quit regardless of what i picked...
            addEngineer();
        } else if (choice === 'Add Intern.') {
            addIntern();
        } else {
            quit();
        }
    });
};

// Adds a Manager, then calls addEmployee() to inquire about further additions.
const addManager = () => {
    console.log('Your first Employee is the Team Manager:');
    inquirer.prompt([...employeeQ, managerQ])
        .then((answer) => {
            console.log(answer)
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.office);
            console.log(newManager);
            team.push(newManager);
            console.log(team);
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
    console.log('Click the Link to View Your Current Team!')


};

// Starts the app by adding a Manager for the team.
addManager();