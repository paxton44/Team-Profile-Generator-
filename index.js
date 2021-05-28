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

//make questions for team member (use node js mini project as solid example.)
const promptUser = () =>
  inquirer.prompt([{
      type: 'input',
      name: 'companyName',
      message: "Enter your Company's name",
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter the Manager's ID number.",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter the Manager's email address.",
    },
    {
      type: 'input',
      name: 'officePhoneNumber',
      message: "Enter the Manager's phone number.",
    },
  ])


  .then((data) => {
    //Making sure an id is established 
    const id = 1;

    //making const for manager to add new data 
    const manager = new Manager(data.companyName, id, data.email, data.officePhoneNumber);
    //using push to push new data to a new array
    teamMembers.push(manager);
    
    // //making const for engineer to add new data from module.exports Engineer 
    // const engineer = new Engineer(data.companyName, id, data.email, data.github);
    // //using push to push new data to a new array
    // teamMembers.push(engineer);
    
    
    
    
    console.log(teamMembers);

    //calling addNewTeamMember to actually trigger adding a new member 
    // addNewTeamMember();
    // console.log(data);
    
  }
    );

    //Calls the user prompt
    promptUser();

    //Add new Employee function that includes:
    function addEmployee() 
    inquirer.prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Select from the options below",
        options: ["Manager", "Engineer", "Intern", "N/A I do not want to create a new employee."],
      },
    
    ])
    addEmployee();


    //Add new Manager
    const addManager = () => 
    inquirer.prompt([
      {
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
    
    ]);


    //Add new Engineer 
    const addEngineer = () =>  
    inquirer.prompt([
      {
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
    
    ]);

    //Add new Intern 
    const addIntern = () =>  
    inquirer.prompt([
      {
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
        message: "Enter the Intern's School.",
      },
    
    ]);