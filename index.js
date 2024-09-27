// Write your solution in this file!
const employee = {
    name: "Antony Oloo",
    streetAddress: "198 Kitengela"
  };


  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the updated key-value pair
    return {
      ...employee,
      [key]: value
    };
  }

  // This function updates the employee object in place (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly (mutate it)
    employee[key] = value;
    return employee;
  }
  
  // This function returns a new employee object with the specified key deleted (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a copy of the employee object using the spread operator
    const newEmployee = { ...employee };
    
    // Delete the key from the copied object
    delete newEmployee[key];
    
    return newEmployee;
  }
  
  // This function deletes the key from the employee object in place (destructive)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Directly delete the key from the original employee object
    delete employee[key];
    
    return employee;
  }
  
