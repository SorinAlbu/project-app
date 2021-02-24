import React from 'react';
import { Form, Button, Col, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Register = () =>{

    const handleClick = () =>{
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const verifyPassword = document.getElementById("verifyPassword").value;
        const email = document.getElementById("email").value;
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
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control id="username" placeholder="Username" style={colStyle} />
                    <Form.Control id="password" type="password" placeholder="Password" style={colStyle} />
                    <Form.Control id="verifyPassword" type="password" placeholder="Verify Password" style={colStyle} />
                    <Form.Control id="email" type="email" placeholder="Email" style={colStyle} />
                </Col>                 
            </Form.Row>
    
          <Button variant="primary" onClick={handleClick}>Register</Button>
        </Form>
        </Card.Body>
        </Card>
      );
};

export default Register;