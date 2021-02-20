import React from "react";
import Employee from './Employee';
 
const EmployeeList = (props) => {

  const containerList = {
    padding: "8px",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerList}>
      {props.employees &&
        props.employees.map((employee, employeeIndex) => (
          <Employee
            key={`employee-${employeeIndex}`}
            firstName={employee.firstName}
            lastName={employee.lastName}
            description={employee.description}
          />
        ))}
    </div>
  );
};
 
export default EmployeeList;