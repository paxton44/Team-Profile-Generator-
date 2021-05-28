//Activity 28 word.js shows how to import a module to be used within or to extend a constructor function.
const Employee = require("./Employee");


//Making a class constructor just like my Employee module to be exported
class Engineer extends Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email, github ) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    // //name
    // getName() {

    //     return this.name;

    // };


    // //id
    // getID() {

    //     return this.id;

    // };


    // //email
    // getEmail() {

    //     return this.email;

    // };

    //don't need to use the stuff from Employee because its the parent of all the roles so the only necessary things to call are the github page link and to return the role
    
    //github

    //return role

    //employeeRole
    getEmployeeRole() {
        // return this.employeeRole;
        //just returning the variable Engineer because it encapsulates all of the data associated with creating an Engineer role. 
        return "Engineer";

 


    }

}

module.exports = Engineer