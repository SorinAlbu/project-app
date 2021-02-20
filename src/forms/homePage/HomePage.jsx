import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeePage = () => {

    const homePgContainer = {
        display: "flex",
        paddingRight: "4rem",
        justifyContent: "center"
    };

    return (
        <div style={homePgContainer}>
            <h3>Welcome to the best HR application</h3>
        </div>
    );
};

export default EmployeePage;