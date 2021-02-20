import React from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import { searchEmployee } from '../../actions/action.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeSearch = () => {

  const handleClick = () => {
    const email = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    searchEmployee(firstName, lastName, email);
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
    order: "1",
    flexGrow: "1"
  };

  const handleRange = () => {
    document.getElementById("rangeValue").value = document.getElementById("rangeInput").value;
  }

  return (
    <Card style={cardContainer}>
      <Card.Body>
      <Card.Title>Search employees</Card.Title>
    <Form>
      <Col>
        <Form.Control id="firstName" placeholder="First name" style={colStyle} />
        <Form.Control id="lastName" placeholder="Last name" style={colStyle} />
        <Form.Control id="email" type="email" placeholder="Enter email" style={colStyle} />
        <Form.Label>Minimun Experience (years):</Form.Label>
        <Form.Control id="rangeInput" type="range" min="1" max="25" step="1" onChange={handleRange}/>
        <output id="rangeValue"></output>
      </Col>
      <Button variant="primary" onClick={handleClick}>Search</Button>
    </Form>
    </Card.Body>
    </Card>
  );
};

export default EmployeeSearch;