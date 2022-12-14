// Regex stuff from "ihateregex.io".
// Import all required files.
const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const Manager = require("./lib/Manager");
const Coach = require("./lib/Coach");
const Intern = require("./lib/Intern");
const generateHTML = require('./src/htmlGenerator');

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
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID',
        validate: messageInput => {
            const pass = messageInput.match(/^[1-9]\d*$/) // requires numbers of any length.
            if (pass) {
                return true;
            } return 'Employee IDs may only be positive numbers and may not be blank.';
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Employee Email',
        validate: messageInput => {
            const pass = messageInput.match(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/) // "simple" regex email filter.
            if (pass) {
                return true;
            } return 'Email address must be valid.';
        } 
    }
];

// Manager specific question.
const managerQ = {
    type: 'input',
    name: 'office',
    message: 'Enter Manager Office Number',
    validate: messageInput => {
        const pass = messageInput.match(/^[1-9]\d*$/) // requires numbers of any length.
        if (pass) {
            return true;
        } return 'Office Number may only be positive numbers and may not be blank.';
    } 
};

// Coach specific question.
const coachQ = {
    type: 'input',
    name: 'gitHub',
    message: 'Enter Coach GitHub',
    validate: messageInput => {
        if (messageInput.length > 0) {
            return true;
        } else {
            console.log('Enter a valid GitHub.') // maybe make this sound better.......
            return false;
        }
    }
};

// Intern specific question.
const internQ = {
    type: 'input',
    name: 'school',
    message: 'Enter Intern School',
    validate: messageInput => {
        if (messageInput.length > 0) {
            return true;
        } else {
            console.log('Enter a valid School.') // maybe make this sound better.......
            return false;
        }
    }
};

// Function to add more employees after the Manager or quit the application.
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMore',
            message: 'Add another team member?',
            choices: ['Add Coach.', 'Add Intern.', 'Quit.']
        }
    ]).then((choice) => {
        if (choice.addMore === 'Add Coach.') { // this just ran quit regardless of what i picked...
            addCoach();
        } else if (choice.addMore === 'Add Intern.') {
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

// Adds an Coach, then calls addEmployee() to inquire about further additions.
const addCoach = () => {
    inquirer.prompt([...employeeQ, coachQ])
        .then((answer) => {
            let newCoach = new Coach(answer.name, answer.id, answer.email, answer.gitHub);
            team.push(newCoach);
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
    fs.writeFileSync(path.join(__dirname, '/dist/', 'index.html'), generateHTML(team))
};

// Starts the app by adding a Manager for the team.
addManager(); 