//Activity 28 word.js shows how to import a module to be used within or to extend a constructor function.
const Employee = require("./Employee");


//Making a class constructor just like my Employee module to be exported
class Engineer extends Employee {
    // Just like constructor functions, classes can accept arguments
    //use the prompt questions in constructor
    //looked at activity 28 in the word.js for an example of class constructors 
    constructor(name, id, email, github ) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        //in order to call the parent (Employee) we need to use the super constructor 
        //I looked at activity 23 rectangle.js to see how the rectangle extends the shape.js module. it uses the props from the parent (shapes.js) with the new get returns
        // super(area, perimeter);
        // this.sideA = sideA;
        // this.sideB = sideB;

        super(name, id, email);
        this.github = github;
        

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
    getGithub(){
        return this.github;
    }
    
    //employeeRole
    getEmployeeRole() {
        // return this.employeeRole;
        //just returning the variable Engineer because it encapsulates all of the data associated with creating an Engineer role. 
        return "Engineer";

 


    }

}

module.exports = Engineer