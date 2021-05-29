//add requirements
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//consts for each type of employee
const Employee = require('./employeeTypes/Employee');
const Manager = require('./employeeTypes/Manager');
const Engineer = require('./employeeTypes/Engineer');
const Intern = require('./employeeTypes/Intern');

//Array for all team members to get pushed into to be displayed on html cards
const teamMembers = [];

//Var for teamMemberData
var teamMemberCardData;

//var for different company names
var companyName;

//make questions for team member (use node js mini project as solid example.)
const promptUser = () =>
  inquirer.prompt([{
      type: 'input',
      name: 'companyName',
      message: "Enter your Supervisor's name",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the Supervisor's ID number.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the Supervisor's email address.",
    },
    {
      type: 'input',
      name: 'officePhoneNumber',
      message: "Enter the Supervisor's phone number.",
    },
  ])


  .then((data) => {
    //making const for manager to add new data 
    const manager = new Manager(data.companyName, data.id, data.email, data.officePhoneNumber);
    //using push to push new data to a new array
    teamMembers.push(manager);


    //calls add employee function to continue prompting the user.
    addEmployee();
  });

//Calls the user prompt
promptUser();

//Add new Employee function that includes:
function addEmployee() {
  inquirer.prompt([{
        type: "list",
        name: "addEmployee",
        message: "Select from the options below",
        choices: ["Manager", "Engineer", "Intern", "N/A I do not want to create a new employee."],
      },

    ])

    .then((data) => {


      if (data.addEmployee === 'Manager') {
        addManager();
      } else if (data.addEmployee === 'Engineer') {
        addEngineer();
      } else if (data.addEmployee === 'Intern') {
        addIntern();
      }
      //adding the most important else if to this if statement. This is where we tell node to join the newly created data and get it put together to be generated into dynamic html.
      else if (data.addEmployee === 'N/A I do not want to create a new employee.') {
        teamMemberCardData = newTeamMemberCards(teamMembers).join("");
        createTeamPage(teamMemberCardData);

      } else return;

    })

}


//Add new Manager
const addManager = () =>
  inquirer.prompt([{
      type: "input",
      name: "Manager",
      message: "Enter the Manager's Name.",
    },

    {
      type: "input",
      name: "ManagerID",
      message: "Enter the Manager's ID.",
    },

    {
      type: "input",
      name: "ManagerEmail",
      message: "Enter the Manager's Email Address.",
    },

    {
      type: "input",
      name: "ManagerPhoneNumber",
      message: "Enter the Manager's Phone Number.",
    },

  ])

  .then((data) => {

    //making const for manager to add new data 
    const manager = new Manager(data.Manager, data.ManagerID, data.ManagerEmail, data.ManagerPhoneNumber);
    //using push to push new data to a new array
    teamMembers.push(manager);
    console.log(manager);
    addEmployee();
    console.log(teamMembers);

  });


//Add new Engineer 
//making const for addEngineer to add new data 
const addEngineer = () =>
  inquirer.prompt([{
      type: "input",
      name: "Engineer",
      message: "Enter the Engineer's Name.",
    },

    {
      type: "input",
      name: "EngineerID",
      message: "Enter the Engineer's ID.",
    },

    {
      type: "input",
      name: "EngineerEmail",
      message: "Enter the Engineer's Email Address.",
    },

    {
      type: "input",
      name: "EngineerGithub",
      message: "Enter the Engineer's Github Account.",
    },

  ])

  .then((data) => {

    //making const for Engineer to add new data 
    const engineer = new Engineer(data.Engineer, data.EngineerID, data.EngineerEmail, data.EngineerGithub);
    //using push to push new data to a new array
    teamMembers.push(engineer);
    console.log(engineer);
    addEmployee();
    console.log(teamMembers);

  });


//Add new Intern
const addIntern = () =>
  inquirer.prompt([{
      type: "input",
      name: "Intern",
      message: "Enter the Intern's Name.",
    },

    {
      type: "input",
      name: "InternID",
      message: "Enter the Intern's ID.",
    },

    {
      type: "input",
      name: "InternEmail",
      message: "Enter the Intern's Email Address.",
    },

    {
      type: "input",
      name: "InternSchool",
      message: "Enter the Intern's current School.",
    },

  ])

  .then((data) => {

      //making const for manager to add new data 
      const intern = new Intern(data.Intern, data.InternID, data.InternEmail, data.InternSchool);
      //using push to push new data to a new array
      teamMembers.push(intern);
      console.log(intern);
      addEmployee();
      console.log(teamMembers);
    }

  );


//Figure out how to display data from teamMembers in html 
//use a template literal and a for loop to print the data in my html cards 
//activity 25 helps show how to do this 


// Writing HTML File 
function writeToFile(data) {
  //this is the output route that node uses to print the user input data as an html file. 
  const fileOut = path.resolve(__dirname, "generatedTeamPage");
  const outPath = path.join(fileOut, companyName + '.html')
  fs.writeFile(outPath, data, function (err) {
    if (err) throw err;
    console.log(companyName + '.html has been generated');
  });
}

//Creating HTML file based off data passed in from the user inputs in node
function createTeamPage(data) {


  writeToFile(
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link href="assets\style.css" rel="stylesheet crossorigin="anonymous">
    
        <title>Team Profile Generator</title>
      </head>
      <body class="container" id="body">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                  <h1 class="display-4">My Team</h1>
            </div>
        </div>
          <div class="container fluid">
          <div class="row" style="width: fluid;">       
              ${data}       
            </div>               
          </div>   
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
      </body>
    </html>`

  );

}