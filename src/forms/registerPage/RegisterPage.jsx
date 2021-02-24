import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './register/Register';

const RegisterPage = () => {

    const registerPgContainer = {
        display: "flex",
        paddingRight: "4rem",
        justifyContent: "center"
    };

    return (
        <div style={registerPgContainer}>
            <Register />
        </div>
    );
};

export default RegisterPage;