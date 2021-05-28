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
    //making const for manager to add new data 
    const manager = new Manager(data.companyName, data.id, data.email, data.officePhoneNumber);
    //using push to push new data to a new array
    teamMembers.push(manager);
    console.log(teamMembers);
    
    //calls add employee function to continue prompting the user.
    addEmployee();
  }
    );

    //Calls the user prompt
    promptUser();

    //Add new Employee function that includes:
    function addEmployee() {
    inquirer.prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Select from the options below",
        choices: ["Manager", "Engineer", "Intern", "N/A I do not want to create a new employee."],
      },
    
    ])
        
      .then((data) => {


        if (data.addEmployee === 'Manager') {
          addManager();
        }
        else if (data.addEmployee === 'Engineer') {
          addEngineer();
        }
        else if (data.addEmployee === 'Intern') {
          addIntern();
        } 
        
        else return;

      }
       )

  }


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
    
    ])
    
    .then((data) => {
      
      //making const for manager to add new data 
      const manager = new Manager(data.Manager, data.ManagerID, data.ManagerEmail, data.ManagerPhoneNumber);
      //using push to push new data to a new array
      teamMembers.push(manager);
      console.log(manager);
      addEmployee();
      
    }
      );


    