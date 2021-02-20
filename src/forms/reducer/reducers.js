import { SEARCH_EMPLOYEE, CREATE_EMPLOYEE, SEARCH_BY_ID } from "../actions/action.js";

const initialState = {
  employees: [],
};
 
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_EMPLOYEE:
      return {
        employees: [
          ...state.employees,
          {
            firstName: action.firstName,
            lastName: action.lastName,
            email: action.email
          }
        ]
      };
    case CREATE_EMPLOYEE:
      return {
        
      };
    
    case SEARCH_BY_ID:
      return {
        employees: [
          ...state.employees,
          {
            name: action.name,
          }
        ]
      }

    default:
      return null;
  }
};
 
export default rootReducer;