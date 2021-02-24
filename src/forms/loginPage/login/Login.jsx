import React from 'react';
import { Form, Button, Col, Card, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () =>{

    const handleClick = () =>{
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
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
          <Card.Title>Login</Card.Title>
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control id="username" placeholder="Username" style={colStyle} />
                    <Form.Control id="password" type="password" placeholder="Password" style={colStyle} />
                </Col>                 
            </Form.Row>
    
          <Button variant="primary" onClick={handleClick}>Login</Button>
        </Form>
        </Card.Body>
        </Card>
      );
};

export default Login;