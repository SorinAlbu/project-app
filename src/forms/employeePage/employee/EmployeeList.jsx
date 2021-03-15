import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import { deleteEmployees } from '../../api/employeeApi';
 
const EmployeeList = (props) => {

  //const [modalData, setModalData] = useState(null);
  const [rows, setRows] = useState(props.employees);
  const [deletedRows, setDeletedRows] = useState([]);
  const [deleteIds, setDeleteIds] = useState([]);

  const columns = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "primarySkill", headerName: "Primary skill", width: 150 },
    { field: "yearsExperience", headerName: "Years Experience", type: 'number', width: 200 }
  ];

  const handleHover = () => {
    // to display in a modal all details
  }

  const handleDelete = () => {
    setRows(rows.filter(
        (r) => deletedRows.filter((dr) => dr == r.id).length < 1)
      );

      console.log(deleteIds);
      /*
      deleteEmployees(deleteIds)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        */
  }

  const handleSelected = (selectionModel) => {
    setDeletedRows(selectionModel.selectionModel.filter( (sr) => rows.filter( (r) => r.id === sr).length < 1));
    
    let arr = [];
    for (const item of selectionModel.selectionModel) {
      arr.push({
        id: item
      });
    }

    setDeleteIds(arr);
  }

  const bttnBox = {
    margin: "10px 0 10px 0"
  }

  const tableCard = {
    width: "80%"
  } 

  return (
    <div style={tableCard}>
      <div style={bttnBox}>
        <Button variant="primary" type="button" onClick={handleDelete}>Delete</Button>
      </div>
      
      <div>
        <Card>
          {rows && (
            <Box width="100%" height="800px">
              <DataGrid onRowHover={ handleHover }
                        rows={ rows }
                        columns={ columns }
                        pageSize={10}
                        onSelectionModelChange={ handleSelected }
                        checkboxSelection={true}                        
                        components={{
                          Toolbar: GridToolbar,
                        }}
                        />
            </Box>
          )}
        </Card>
      </div>
    </div>
  );
};
 
export default EmployeeList;

//{modalData && <UserModal modalData={modalData} onClose={setModalData} />}