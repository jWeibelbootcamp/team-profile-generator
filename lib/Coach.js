const Employee = require('./Employee');

class Coach extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return 'Coach';
    }
}

module.exports = Coach;