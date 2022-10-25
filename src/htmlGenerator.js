function insertTeamCards(team) {
    const HTML = [];
    HTML.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => buildManagerCard(manager)));
    HTML.push(team.filter(employee => employee.getRole() === 'Coach').map(coach => buildCoachCard(coach)).join(''));
    console.log(team);
    HTML.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => buildInternCard(intern)).join(''));
    return HTML.join('');
}

function buildManagerCard(manager) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">${manager.getName()}</div>
    <div class="card-body">
      <p><i class="fa-solid fa-clipboard-list" style="padding-right: 2px"></i>Manager</p>
      <p>Number: ${manager.getId()}</p>
      <p>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></p>
      <p>Office No.: ${manager.getOfficeNumber()}</p>
    </div>
  </div>`
}

function buildCoachCard(coach) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">${coach.getName()}</div>
    <div class="card-body">
      <p><i class="fa-solid fa-baseball" style="padding-right: 2px"></i>Coach</p>
      <p>Number: ${coach.getId()}</p>
      <p>Email: <a href='mailto:${coach.getEmail()}'>${coach.getEmail()}</a></p>
      <p>GitHub: <a href='${coach.getGitHub()}'>${coach.getGitHub()}</a></p>
    </div>
  </div>`
}

function buildInternCard(intern) {
    return `<div class="card" style="width: 18rem">
    <div class="card-header">${intern.getName()}</div>
    <div class="card-body">
      <p><i class="fa-solid fa-socks" style="padding-right: 2px"></i>Intern</p>
      <p>Number: ${intern.getId()}</p>
      <p>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></p>
      <p>School: ${intern.getSchool()}</p>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="../src/assets/css/style.css"/>
        <title>Team Generator</title>
      </head>

      <main id='background-image'>      

        <header>
          <h1>Batter Up!</h1> 
        </header>

        <body>
          <div class='container-fluid'>
            <div class='row'>
              ${insertTeamCards(team)}
            </div>
          </div>
        </body>
      </main>
    </html>`;
}

module.exports = generateHTML;