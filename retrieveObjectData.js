// Sample array of employee objects
var employees = [
    { id: 1, name: 'John', department: 'HR', salary: 50000 },
    { id: 2, name: 'Jane', department: 'Finance', salary: 60000 },
    { id: 3, name: 'Doe', department: 'HR', salary: 55000 },
    { id: 4, name: 'Smith', department: 'IT', salary: 70000 },
    { id: 5, name: 'Alice', department: 'IT', salary: 65000 },
    { id: 6, name: 'Bob', department: 'Finance', salary: 62000 }
  ];
  
  // Function to group employees by department and count them
  function groupEmployeesByDepartment(employees) {
    var departmentCount = {};
    employees.forEach(function(employee) {
      if (departmentCount[employee.department]) {
        departmentCount[employee.department]++;
      } else {
        departmentCount[employee.department] = 1;
      }
    });
    return departmentCount;
  }
  
  // Grouping employees by department and counting them
  var departmentCount = groupEmployeesByDepartment(employees);
  console.log(departmentCount);
  