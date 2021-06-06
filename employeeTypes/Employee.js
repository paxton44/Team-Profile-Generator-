// //used activity 2 and 21 for a constructor example

class Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    //name
    getName() {

        return this.name;

    };


    //id
    getID() {

        return this.id;

    };


    //email
    getEmail() {

        return this.email;

    };


    //employeeRole
    getEmployeeRole() {

        return 'employee';

 


    }

}

//Using this style of export for Employee because it will be used in each role because every position is technically an employee 
module.exports = Employee