import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/Login';

const LoginPage = () => {

    const loginPgContainer = {
        display: "flex",
        paddingRight: "4rem",
        justifyContent: "center"
    };

    return (
        <div style={loginPgContainer}>
            <Login />
        </div>
    );
};
export default LoginPage;