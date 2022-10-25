const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Coach = require('../lib/Coach');
const Intern = require('../lib/Intern');

test ('test employee constructor', () => {
    const employee = new Employee('Jason', 1, 'weibel.jason@gmail.com')
    expect(employee.name).toBe('Jason');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('weibel.jason@gmail.com');
    expect(employee.getName()).toBe('Jason')
    expect(employee.getId()).toBe(1)
    expect(employee.getEmail()).toBe('weibel.jason@gmail.com')
    expect(employee.getRole()).toBe('Employee')
})

test ('test manager constructor', () => {
    const employee = new Manager('Jason', 1, 'weibel.jason@gmail.com', '01')
    expect(employee.officeNumber).toBe('01');
    expect(employee.getOfficeNumber()).toBe('01')
    expect(employee.getRole()).toBe('Manager')
})

test ('test coach constructor', () => {
    const employee = new Coach('Jason', 1, 'weibel.jason@gmail.com', 'gitHub')
    expect(employee.gitHub).toBe('gitHub');
    expect(employee.getGitHub()).toBe('gitHub')
    expect(employee.getRole()).toBe('Coach')
})

test ('test intern constructor', () => {
    const employee = new Intern('Jason', 1, 'weibel.jason@gmail.com', 'Georgia Tech')
    expect(employee.school).toBe('Georgia Tech');
    expect(employee.getSchool()).toBe('Georgia Tech')
    expect(employee.getRole()).toBe('Intern')
})
