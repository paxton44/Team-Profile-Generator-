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
    console.log(teamMembers);

    //calling addNewTeamMember to actually trigger adding a new member 
    // addNewTeamMember();
    // console.log(data);
    
  }
    );

    //Calls the user prompt
    promptUser();

    //Add new Employee function that includes:

    //Add new Manager

    //Add new Engineer 

    //Add new Intern 


