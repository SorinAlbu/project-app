export const SEARCH_EMPLOYEE = "SEARCH_EMPLOYEE";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
 
export const searchEmployee = (firstName, lastName, email) => {
  return {
    type: SEARCH_EMPLOYEE,
    firstName: firstName,
    lastName: lastName,
    email: email
  };
};

export const createEmployee = (firstName, lastName, email, description) => {
  return {
    type: CREATE_EMPLOYEE,
    firstName: firstName,
    lastName: lastName,
    email: email,
    description: description
  };
};