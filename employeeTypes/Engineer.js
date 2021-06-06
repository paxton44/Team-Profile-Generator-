//Activity 28 word.js shows how to import a module to be used within or to extend a constructor function.
const Employee = require("./Employee");


//Making a class constructor just like my Employee module to be exported
class Engineer extends Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email, github ) {
    

        super(name, id, email);
        this.github = github;
        

    }

    
    getGithub(){
        return this.github;
    }
    
    getEmployeeRole() {
     
        return "Engineer";

 


    }

}

module.exports = Engineer