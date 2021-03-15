import React from 'react';
import { useState } from "react";
import { Form, Button, Col, Card, } from 'react-bootstrap';
import { createEmployee } from '../../api/employeeApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeCreation = () => {
  const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleClick = () => {
    formCheck();

    if (isValid) {
      const name = document.getElementById("nameCreation").value;
      const email = document.getElementById("emailCreation").value;
      const primarySkill = document.getElementById("primarySkillCreation").value;
      const skills = document.getElementById("otherSkillsCreation").value;
      const phone = document.getElementById("phoneCreation").value;
      const source = document.getElementById("sourceCreation").value;
      const city = document.getElementById("cityCreation").value;
      const legalForm = document.getElementById("legalFormCreation").value;
      const mobility = document.getElementById("mobilityCreation").value;
      const yearsExperience = document.getElementById("yearsExperienceCreation").value;
      const description = document.getElementById("descriptionCreation").value;
      const salary = document.getElementById("salaryCreation").value;
      
      const employee = {
        "name": name,
        "email": email,
        "primarySkill" : primarySkill,
        "skills": skills,
        "phone": phone,
        "source": source,
        "city": city,
        "legalForm": legalForm,
        "mobility": mobility,
        "yearsExperience": yearsExperience,
        "notes": description,
        "salary": salary,
      }

      console.log(employee);
  
      createEmployee(employee)
        .then((response) => {
          toast.success("Employee successfully created!", {position: toast.POSITION.TOP_CENTER});
        })
        .catch((error) => {
          console.log(error);
          toast.error("An error occurred. Please contact an administrator!", {position: toast.POSITION.TOP_CENTER});
        });
    }
  };

  const resetForm = () => {
    document.getElementById("descriptionCreation").setValue('');
    }

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
    margin: '0 1rem 0 4rem',
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
          <Form.Control id="cityCreation" placeholder="City" style={colStyle} />
          <Form.Control id="primarySkillCreation" as="select" defaultValue={-1} style={colStyle} >
              <option disabled value={-1}>Select primary skill</option>
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
            <Form.Control id="emailCreation" type="email" placeholder="Email" style={colStyle} required />
            <Form.Control id="salaryCreation" placeholder="Salary" style={colStyle} ></Form.Control>
            <Form.Control id="phoneCreation" placeholder="Phone" style={colStyle} />

          </Col>

          <Col>
            <Form.Control id="sourceCreation" as="select" defaultValue={-1} style={colStyle}>
              <option disabled value={-1}>Select source</option>
              <option>LinkedIn</option>
              <option>BestJobs</option>
              <option>Facebook</option>
            </Form.Control>

            <Form.Control id="legalFormCreation" placeholder="Legal form" style={colStyle} />
            <Form.Control id="yearsExperienceCreation" placeholder="Years experience" style={colStyle} />
            <Form.Group>
              <Form.Check id="mobilityCreation" type="checkbox" label="Mobility" />
            </Form.Group>
          </Col>

            <Form.Control as="textarea" rows={1} id="otherSkillsCreation" type="text" placeholder="Enter other skills" style={colStyle} />
            <Form.Control as="textarea" rows={3} id="descriptionCreation" type="text" placeholder="Enter description" style={colStyle} />
        </Form.Row>

      <Button variant="primary" onClick={handleClick}>Create</Button>
    </Form>
    </Card.Body>
    </Card>
  );
};

export default EmployeeCreation;