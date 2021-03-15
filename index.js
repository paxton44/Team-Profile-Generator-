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
      name: 'manager',
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
    const id = 1;
    const manager = new Manager(data.name, id, data.email, data.officeNumber);
    team.push(manager);
    addMember();

  });