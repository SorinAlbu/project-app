import React from 'react';
import { useState } from "react";
import { Form, Button, Col, Card, } from 'react-bootstrap';
import { createEmployee } from '../../api/employeeApi';
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeCreation = () => {
  const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleClick = () => {
    formCheck();

    const name = document.getElementById("nameCreation").value;
    const email = document.getElementById("emailCreation").value;
    const skill = document.getElementById("skillCreation").value;
    const phone = document.getElementById("phoneCreation").value;
    const source = document.getElementById("sourceCreation").value;
    const address = document.getElementById("addressCreation").value;
    const legalForm = document.getElementById("legalFormCreation").value;
    const mobility = document.getElementById("mobilityCreation").value;
    const yearsExperience = document.getElementById("yearsExperienceCreation").value;
    const description = document.getElementById("yearsExperienceCreation").value;
    
    const employee = {
      "name": name,
      "email": email,
      "skill" : skill,
      "phone": phone,
      "source": source,
      "address": address,
      "legalForm": legalForm,
      "mobility": mobility,
      "yearsExperience": yearsExperience,
      "description": description,
    }
    console.log(employee);

    createEmployee(employee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formCheck = () => {
    const form = document.getElementById("formCreation");
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
    order:"2",
    flexGrow: "3"
  };

  return (
    <Card style={cardContainer}>
      <Card.Body>
      <Card.Title>Create employee</Card.Title>
    <Form id="formCreation" validated={validated}>
        <Form.Row>
            <Col>
                <Form.Control id="nameCreation" placeholder="Name" style={colStyle} required />
                <Form.Control id="emailCreation" type="email" placeholder="Email" style={colStyle} required />
                <Form.Control id="skillCreation" as="select" defaultValue={-1} style={colStyle}>
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
                <Form.Control id="phoneCreation" placeholder="Phone" style={colStyle} />
            </Col>
            <Col>
                <Form.Control id="sourceCreation" as="select" defaultValue={-1} style={colStyle}>
                <option disabled value={-1}>Select source</option>
                    <option>LinkedIn</option>
                    <option>BestJobs</option>
                    <option>Facebook</option>
                </Form.Control>
                <Form.Control id="addressCreation" placeholder="Address" style={colStyle} />
                <Form.Control id="legalFormCreation" placeholder="Legal form" style={colStyle} />
                <Form.Control id="yearsExperienceCreation" placeholder="Years experience" style={colStyle} />
                <Form.Group id="mobilityCreation">
                  <Form.Check type="checkbox" label="Mobility" />
                </Form.Group>
                
            </Col>

            <Form.Control as="textarea" rows={3} id="descriptionCreation" type="text" placeholder="Enter description" style={colStyle} />
        </Form.Row>

      <Button variant="primary" onClick={handleClick}>Create</Button>
    </Form>
    </Card.Body>
    </Card>
  );
};

export default EmployeeCreation;