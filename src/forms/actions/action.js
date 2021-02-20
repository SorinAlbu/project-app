export const SEARCH_EMPLOYEE = "SEARCH_EMPLOYEE";
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE";
export const SEARCH_BY_ID = "SEARCH_BY_ID";
 
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

  export const searchById = (id) => {
    return {
      type: SEARCH_BY_ID,
      id: id,
    };
  };
