//Activity 28 word.js shows how to import a module to be used within or to extend a constructor function.
const Employee = require("./Employee");


//Making a class constructor just like my Employee module to be exported
class Manager extends Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email, officePhoneNumber ) {
     
        super(name, id, email);
        this.officePhoneNumber = officePhoneNumber;
        

    }


    //officePhoneNumber
    getOfficePhoneNumber(){
        return this.officePhoneNumber;
    }
    

    //employeeRole
    getEmployeeRole() {

        return "Manager";

 


    }

}

module.exports = Manager