import React from 'react';
import { Form, Button, Col, Card, } from 'react-bootstrap';
import { createEmployee } from '../../actions/action.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeCreation = () => {

  const handleClick = () => {
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const description = document.getElementById("description").value;

    createEmployee(firstName, lastName, email, description);
  };

  const colStyle = {
    padding: '5px',
    margin: '5px',
    border: '1px solid grey',
    borderRadius: '4px'
  };

  const cardContainer = {
    marginLeft: '4rem',
    display: "flex",
    order:"2",
    flexGrow: "3"
  };

  return (
    <Card style={cardContainer}>
      <Card.Body>
      <Card.Title>Create employee</Card.Title>
    <Form>
        <Form.Row>
            <Col>
                <Form.Control id="firstName" placeholder="First name" style={colStyle} />
                <Form.Control id="email" type="email" placeholder="Enter email" style={colStyle} />
            </Col>
            <Col>
                <Form.Control id="lastName" placeholder="Last name" style={colStyle} />
                <Form.Control as="select" style={colStyle}>
                    <option>-None-</option>
                    <option>Employed</option>
                    <option>Unemployed</option>
                </Form.Control>
            </Col>

            <Form.Control as="textarea" rows={3} id="description" type="text" placeholder="Enter description" style={colStyle} />
        </Form.Row>

      <Button variant="primary" onClick={handleClick}>Create</Button>
    </Form>
    </Card.Body>
    </Card>
  );
};

export default EmployeeCreation;