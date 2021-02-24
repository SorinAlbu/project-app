import axios from "axios";

const BASE_API = "http://localhost:8989/";

/*
const options = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  }
}
*/

export async function getEmployees(data) {
  let url = '?skill=' + data.skill +
            '&language=' + data.language +
            '&city=' + data.city +
            '&yearsExperience=' + data.yearsExperience

  return await axios.get(`${BASE_API}admin/people/skill` + url);
}

export const getAllEmployees = async() => await axios.get(`${BASE_API}admin/people`);

export async function createEmployee(data) {
  return await axios.post(`${BASE_API}admin/person`,
    {
      "name": data.name,
      "email": data.email,
      "primarySkill" : data.primarySkill,
      "skills": data.skills,
      "phone": data.phone,
      "source": data.source,
      "city": data.city,
      "legalForm": data.legalForm,
      "mobility": data.mobility,
      "yearsExperience": data.yearsExperience,
      "notes": data.description,
      "salary": data.salary,
    });
  }

export const deleteEmployee = async (id) => await axios.delete(`${BASE_API}admin/person/{id}`, id);

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
