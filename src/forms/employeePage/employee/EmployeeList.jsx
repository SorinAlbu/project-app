import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box } from "@material-ui/core";
import { useState } from "react";
 
const EmployeeList = (props) => {

  const [employees, setEmployees] = useState(null);
  const [modalData, setModalData] = useState(null);

  const columns = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "title", headerName: "Title" },
    { field: "skill", headerName: "Skill" }
  ];

  const onCellClick = () => {

  }

  return (
    <Box width="100%" height="100%" display="flex" justifyContent="center">
    {employees === null && <div>There is no employees yet</div>}
    {employees && (
      <Box width="80%">
        <DataGrid onCellClick={onCellClick} rows={employees} columns={columns} />
      </Box>
    )}
    
  </Box>
  );
};
 
export default EmployeeList;

//{modalData && <UserModal modalData={modalData} onClose={setModalData} />}