const newTeamMemberCards = Employee => {
    createNewManager = Manager => {
      return `
      <div class="col">
              <div class="card" style="width: fluid;">
                
                  <div class="card-body">
                    <h5 class="card-title">  
                    $(Manager.name)</h5>
                    <h5 id='jobRole' class="card-title">Manager</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li id='employeeID' class="list-group-item">$(Manager.ID)</li>
                    <li id='email' class="list-group-item">Email: <a href="mailto:$(Manager.Email)">$(Manager.email)</a></li>
                    <li id='officePhoneNumber' class="list-group-item">$(Manager.ManagerPhoneNumber)</li>
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
                    <h5 class="card-title">$(Engineer.Name)</h5>
                    <h5 id='jobRole' class="card-title">Engineer</h5>
                </div>
                  <ul class="list-group list-group-flush">
                    <li id='employeeID' class="list-group-item">$(Engineer.ID)</li>
                    <li id='email' class="list-group-item">Email: <a href="mailto:$(Engineer.Email)">$(Engineer.email)</a></li>
                    <li class="list-group-item">$(Engineer.Github)</li>
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
          <h5 class="card-title">$(Intern.Name)</h5>
          <h5 id='jobRole' class="card-title">Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li id='employeeID' class="list-group-item">$(Intern.ID)</li>
          <li id='email' class="list-group-item">Email: <a href="mailto:$(Intern.Email)">$(Intern.email)</a></li>
          <li id='school' class="list-group-item">$(Intern.InternSchool)</li>
        </ul>
      </div>
  </div>
       
    `;
    } 
     
    const renderArrayHTML = [];
    console.log(Employee);
    renderArrayHTML.push(renderArrayHTML
      .filter(employee => employee.getRole() === "Manager")
      .map(manager => generateManager(manager))
    )
    console.log(renderArrayHTML);
    return renderArrayHTML;


  }

module.exports = newTeamMemberCards