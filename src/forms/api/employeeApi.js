import axios from "axios";

const BASE_API = "https://localhost:8080/";

export const getEmployee = (data) => axios.get(`${BASE_API}admin/person`),
  {
    "firstName": data.firstName,
    "lastName": data.lastName,
    "email": data.email
  });

export const getAllEmployees = () => axios.get(`${BASE_API}admin/people`);

export const sendPost = (data) =>
  axios.post(`${BASE_API}person`,
    {
      "firstName" : data.firstName,
      "lastName" : data.lastName,
      "email" : data.email,
      "description": data.description
    }
  );

export const deleteEmployee = () => axios.delete(`${BASE_API}admin/person`);

/*
export const sendPost = (data) =>
   fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: data.title,
      body: data.body,
      userId: data.userId
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
   });

  axios.post(`${BASE_API}posts`,
    {
      "title" : data.title,
      "body" : data.body,
      "userId" : data.userId
    });
    */
