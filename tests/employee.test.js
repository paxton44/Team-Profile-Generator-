//used activity 11 in OOP for reference and jest documentation 
const Employee = require("tests\employee.test.js");

test('creates new employee name', async () => {
    const newEmployee = "Mitch";
    const newEmployeeObject = new Employee(name);
    expect(newEmployeeObject).toBe(newEmployee);
  })

  test('can create new employee ID', async () => {
    const newEmployee = "Mitch";
    const newEmployeeObject = new Employee(name);
    expect(newEmployeeObject).toBe(newEmployee);
  })

  test('can create new employee email', async () => {
    const newEmployee = "Mitch";
    const newEmployeeObject = new Employee(name);
    expect(newEmployeeObject).toBe(newEmployee);
  })




