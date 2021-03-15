import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import EmployeeCreation from './employee/EmployeeCreation';
import EmployeeSearch from './employee/EmployeeSearch';
//import { Button } from 'react-bootstrap';

//-----------------------UNUSED-------------------------

const EmployeePage = () => {

    const employeePgContainer = {
        display: "flex",
        justifyContent: "center",
        margin: "4rem 0 0 0"
    };

    /*
    const handleClick = () => {}
    */

    return (
        <div style={employeePgContainer}>
            <EmployeeSearch />
        </div>
    );
};

export default EmployeePage;

/*
<Button variant="primary" type="button" onClick={handleClick}>Search</Button>
<EmployeeCreation />
*/