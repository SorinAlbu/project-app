import React from 'react';
import { useState } from "react";
import { Form, Button, Col, Card } from 'react-bootstrap';
import { getEmployees } from '../../api/employeeApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './EmployeeList';

const EmployeeSearch = () => {

  const [employees, setEmployees] = useState(null);
  //const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleClick = (event) => {
    formCheck();

    if (isValid) {
      const skill = document.getElementById("skillSearch").value;
      const city = document.getElementById("citySearch").value;
      const language = document.getElementById("languageSearch").value;
      const yearsExperience = document.getElementById("rangeValue").value;
  
      const data = {
        "skill" : skill == -1 ? '' : skill,
        "city": city,
        "yearsExperience": yearsExperience,
        "language": language,
      }
      console.log(data);

      getEmployees(data)
      .then((response) => {
        console.log(response.data);
        //setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };



  const formCheck = () => {
    const form = document.getElementById("formSearch");
    isValid = form.checkValidity() === true ? true : false;
    setValidated(true);
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
    <div>
    <Card style={cardContainer}>
      <Card.Body>
      <Card.Title>Search employees</Card.Title>

      <Form id="formSearch" validated={validated} >
        <Col>
          <Form.Control id="skillSearch" as="select" defaultValue={-1} style={colStyle} >
            <option disabled value={-1}>Select skill</option>
            <option>React</option>
            <option>Java</option>
            <option>Javascript</option>
            <option>Hibernate</option>
            <option>Spring</option>
            <option>MySql</option>
            <option>Docker</option>
            <option>Maven</option>
            <option>Jenkins</option>
          </Form.Control>
          <Form.Control id="citySearch" placeholder="City" style={colStyle} />
          <Form.Control id="languageSearch" placeholder="Language" style={colStyle} />
          <Form.Label>Minimun Experience (years):</Form.Label>
          <Form.Control id="rangeInput" type="range" min="0" max="25" step="1" onChange={handleRange} />
          <output id="rangeValue"></output>
        </Col>

        <Button variant="primary" type="button" onClick={handleClick}>Search</Button>
        </Form>
    </Card.Body>
    </Card>

    {employees && (
      <EmployeeList employees={employees}/>
    )}

    </div>
  );
};

export default EmployeeSearch;