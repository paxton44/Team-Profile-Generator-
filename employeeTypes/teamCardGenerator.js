const newTeamMemberCards = Employees => {
  createNewManager = Manager => {

    return `
      <div class="col">
              <div class="card" style="width: fluid;">
                
                  <div class="card-body">
                    <h5 class="card-title">  
                    ${Manager.getName()}</h5>
                    <h5 id='jobRole' class="card-title">Manager</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li id='employeeID' class="list-group-item">${Manager.getID()}</li>
                    <li id='email' class="list-group-item">Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a></li>
                    <li id='officePhoneNumber' class="list-group-item">${Manager.getOfficePhoneNumber()}</li>
                  </ul>
                </div>
            </div>
           
      `;
  }

  createNewEngineer = Engineer => {
    return `
    <div class="col">
              <div class="card" style="width: fluid;">
                 
                <div class="card-body">
                    <h5 class="card-title">${Engineer.getName()}</h5>
                    <h5 id='jobRole' class="card-title">Engineer</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li id='employeeID' class="list-group-item">${Engineer.getID()}</li>
                    <li id='email' class="list-group-item">Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a></li>
                    <li class="list-group-item">${Engineer.getGithub()}</li>
                  </ul>
                </div>
            </div>
       
    `;
  }

  createNewIntern = Intern => {
    return `
    <div class="col">
    <div class="card" style="width: fluid;">
     
        <div class="card-body">
          <h5 class="card-title">${Intern.getName()}</h5>
          <h5 id='jobRole' class="card-title">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li id='employeeID' class="list-group-item">${Intern.getID()}</li>
          <li id='email' class="list-group-item">Email: <a href="mailto:$(Intern.getEmail())">${Intern.getEmail()}</a></li>
          <li id='school' class="list-group-item">${Intern.getInternSchool()}</li>
        </ul>
      </div>
  </div>
       
    `;

  }
  //Manager 
  const renderArrayHTML = [];

  renderArrayHTML.push(Employees
    .filter(Employee => Employee.getEmployeeRole() === "Manager")
    .map(Manager => createNewManager(Manager))
  )
  //Engineer
  renderArrayHTML.push(Employees
    .filter(Employee => Employee.getEmployeeRole() === "Engineer")
    .map(Engineer => createNewEngineer(Engineer))
  )
  //Intern
  renderArrayHTML.push(Employees
    .filter(Employee => Employee.getEmployeeRole() === "Intern")
    .map(Intern => createNewIntern(Intern))
  )
  console.log(renderArrayHTML);
  return renderArrayHTML;


}

module.exports = newTeamMemberCards