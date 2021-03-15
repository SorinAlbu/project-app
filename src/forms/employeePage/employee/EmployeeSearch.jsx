import React from 'react';
import { useState } from "react";
import { Form, Button, Col, Card } from 'react-bootstrap';
import { getEmployees } from '../../api/employeeApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './EmployeeList';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeSearch = () => {

  const [employees, setEmployees] = useState(null);
  //const [error, setError] = useState(null);
  const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleClick = () => {
    formCheck();

    if (isValid) {
      const skill = document.getElementById("skillSearch").value;
      const city = document.getElementById("citySearch").value;
      const language = document.getElementById("languageSearch").value;
      const yearsExperience = document.getElementById("rangeValue").value;
  
      const data = {
        "skill" : skill == -1 ? '' : skill,
        "city": city,
        "yearsExperience": yearsExperience == '' ? 0 : yearsExperience,
        "language": language,
      }

      getEmployees(data)
        .then((response) => {
          setEmployees(response.data);
          toast.success("Success", {position: toast.POSITION.TOP_CENTER});
        })
        .catch((error) => {
          console.log(error);
          toast.error("An error occurred. Please contact an administrator!", {position: toast.POSITION.TOP_CENTER});
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
    borderRadius: '4px',
    width: "20rem"
  };

  const cardContainer = {
    display: "flex",
    width:"60%",
    margin: "auto"
  };

  const container = {}

  const employeeListContainer = {
    display: "flex",
    margin: "5rem 1rem 0 0rem",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }

  const handleRange = () => {
    document.getElementById("rangeValue").value = document.getElementById("rangeInput").value;
  }

  return (
    <div stlye={container}>
    <Card style={cardContainer}>
      <Card.Body>
      <Card.Title>Search employees</Card.Title>

      <Form id="formSearch" validated={validated} >

        <Form.Row>
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
          </Col>
          <Col>
            <Form.Control id="citySearch" placeholder="City" style={colStyle} />
          </Col>
          <Col>
            <Form.Control id="languageSearch" placeholder="Language" style={colStyle} />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Label>Minimun Experience (years):</Form.Label>
            <Form.Control id="rangeInput" type="range" min="0" max="25" step="1" onChange={handleRange} />
              <output id="rangeValue"></output>
            </Col>
        </Form.Row>

        <Button variant="primary" type="button" onClick={handleClick}>Search</Button>
        </Form>
    </Card.Body>
    </Card>

    <div style={employeeListContainer}>
      {employees && (
        <EmployeeList employees={employees}/>
      )}
    </div>

    </div>
  );
};

export default EmployeeSearch;