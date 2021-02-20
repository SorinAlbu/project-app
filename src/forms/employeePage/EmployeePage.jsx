import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeCreation from './employee/EmployeeCreation';
import EmployeeSearch from './employee/EmployeeSearch';
import { getAllEmployees } from '../api/employeeApi';

const EmployeePage = () => {

    const employeePgContainer = {
        display: "flex",
        paddingRight: "4rem",
    };

    const handleSearch = () => {
        console.log(getAllEmployees());
        
    };

    return (
        <div style={employeePgContainer}>
            <EmployeeSearch />
            <EmployeeCreation />

            <input id="id" />
            <button onClick={handleSearch}>cauta ID</button>
        </div>
    );
};

export default EmployeePage;