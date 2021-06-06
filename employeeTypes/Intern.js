//Activity 28 word.js shows how to import a module to be used within or to extend a constructor function.
const Employee = require("./Employee");


//Making a class constructor just like my Employee module to be exported
class Intern extends Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email, InternSchool ) {
        super(name, id, email);
        this.InternSchool = InternSchool;

    }

    getInternSchool(){
        return this.InternSchool;
    }

    getEmployeeRole() {
 
        return "Intern";

 


    }

}

module.exports = Intern