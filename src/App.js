import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./forms/navBar/NavBar";
import { Badge } from 'react-bootstrap';
import EmployeePage from './forms/employeePage/EmployeePage';
import HomePage from './forms/homePage/HomePage';
import ContactPage from './forms/contactPage/ContactPage';
import CompanyPage from './forms/companyPage/CompanyPage';
import Helmet from 'react-helmet';


function App() {

  const container = {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  };

  const titleClass = {
    padding: "1rem 3rem 1rem 3rem",
  };

  return (
    <div className="App">
      <Helmet bodyAttributes={{style: 'background-image : linear-gradient(to right, #5d8989, #d1e0e0)'}}/>
      <div style={container}>
        <h3><Badge variant="secondary" style={titleClass}>Human Resources Management</Badge></h3>
        <BrowserRouter>
          <NavBar />
          <Route path="/home" exact component={HomePage} />
          <Route path="/employee" exact component={EmployeePage} />
          <Route path="/company" exact component={CompanyPage} />
          <Route path="/contact" exact component={ContactPage} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
