import { SEARCH_EMPLOYEE, CREATE_EMPLOYEE } from "../actions/action.js";

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
        
      }

    default:
      return null;
  }
};
 
export default rootReducer;