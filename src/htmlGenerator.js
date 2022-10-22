function insertTeamCards(team) {
    const HTML = [];
    HTML.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => buildManagerCard(manager)));
    HTML.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => buildEngineerCard(engineer)).join(''));
    console.log(team);
    HTML.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => buildInternCard(intern)).join(''));
    return HTML.join('');
}

function buildManagerCard(manager) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">
      Manager
    </div>
    <div class="card-body">
      <p>${manager.getName()}</p>
      <p>${manager.getId()}</p>
      <p>${manager.getEmail()}</p>
      <p>${manager.getOfficeNumber()}</p>
    </div>
  </div>`
}

function buildEngineerCard(engineer) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">
      Engineer
    </div>
    <div class="card-body">
      <p>${engineer.getName()}</p>
      <p>${engineer.getId()}</p>
      <p>${engineer.getEmail()}</p>
      <p>${engineer.getGitHub()}</p>
    </div>
  </div>`
}

function buildInternCard(intern) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">
      Intern
    </div>
    <div class="card-body">
      <p>${intern.getName()}</p>
      <p>${intern.getId()}</p>
      <p>${intern.getEmail()}</p>
      <p>${intern.getSchool()}</p>
    </div>
  </div>`
}

function generateHTML(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="./assets/css/style.css"/>
        <title>Team Generator</title>
      </head>

      <body>
        <main class='container' style='display:flex'>
          ${insertTeamCards(team)}
        </main>
      </body>
    </html>`;
}

module.exports = generateHTML;