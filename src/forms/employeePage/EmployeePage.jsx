import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeCreation from './employee/EmployeeCreation';
import EmployeeSearch from './employee/EmployeeSearch';

const EmployeePage = () => {

    const employeePgContainer = {
        display: "flex",
        paddingRight: "4rem",
    };

    return (
        <div style={employeePgContainer}>
            <EmployeeSearch />
            <EmployeeCreation />
        </div>
    );
};

export default EmployeePage;