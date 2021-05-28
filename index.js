//add requirements
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


//consts for each type of employee
const Employee = require('./library/employee');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const Manager = require('./library/manager');


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
      name: 'phoneManager',
      message: "Enter the Manager's phone number.",
    },
  ])

  .then((data) => {
    //Making sure an id is established 
    const id = 1;

    //making const for manager to add new data 
    const manager = new Manager(data.name, data.id, data.email, data.phoneManager);
    
    //using push to push new data to a new array
    team.push(manager);

    //calling addMember to actually trigger adding a new member 
    addMember();

  });