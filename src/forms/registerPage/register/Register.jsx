import React from 'react';
import { useState } from "react";
import { Form, Button, Col, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () =>{
  const [validated, setValidated] = useState(false);
  let isValid = true;

    const handleClick = () => {
      formCheck();

      if (!checkPswMatch()) {
        toast.error("Password mistach!", {position: toast.POSITION.TOP_CENTER});
        return;
      }
      
      if (isValid) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        const user = {
          username: username,
          password: password,
          email: email
        }

        console.log(user);

        /*
        createUser(user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
        */
      }
    }

    const formCheck = () => {
      const form = document.getElementById("formUserCreation");
      isValid = form.checkValidity() === true ? true : false;
      setValidated(true);
    };

    const checkPswMatch = () => {
      const password = document.getElementById("password").value;
      const verifyPassword = document.getElementById("verifyPassword").value;

      return password === verifyPassword;
    }

    const colStyle = {
        padding: '5px',
        margin: '5px',
        border: '1px solid grey',
        borderRadius: '4px'
      };
    
      const cardContainer = {
        marginLeft: '4rem',
        display: "flex",
        order: "1",
      };

      return (
        <Card style={cardContainer}>
          <Card.Body>
          <Card.Title>Register</Card.Title>
        <Form id="formUserCreation" validated={validated}>
            <Form.Row>
                <Col>
                    <Form.Control id="username" placeholder="Username" style={colStyle} required />
                    <Form.Control id="password" type="password" placeholder="Password" style={colStyle} required />
                    <Form.Control id="verifyPassword" type="password" placeholder="Verify Password" style={colStyle} required />
                    <Form.Control id="email" type="email" placeholder="Email" style={colStyle} required />
                </Col>                 
            </Form.Row>
    
          <Button variant="primary" onClick={handleClick}>Register</Button>
        </Form>
        </Card.Body>
        </Card>
      );
};

export default Register;