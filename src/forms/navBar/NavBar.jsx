import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarry, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {

  const linkStyle = {
    padding: "5px",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    borderRight: "1px solid	#C8C8C8",
    font: "1.2em bold, serif",
    color: "#FFFFFF"
  };

  const iconStyle = {
    marginLeft: "4px",
    marginRight: "4px",
    display: "inline",
    padding: "5px"
  };

  const containerLink = {
    flexWrap: "wrap",
    justifyContent: "left",
    display: "inline-flex",
    margin: "3rem 0 8rem 0",
  };

  return (
    <div style={containerLink}>

      <Link style={linkStyle} to="/home">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faHome} />
        </div>
        Home
      </Link>
      
      <Link style={linkStyle} to="/employees">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        Search Employee
      </Link>

      <Link style={linkStyle} to="/employee">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faPeopleCarry} />
        </div>
        Create Employee
      </Link>
      
    </div>
  );
};

export default NavBar;

/*
      <Link style={linkStyle} to="/company">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faIndustry} />
        </div>
        Company
      </Link>

      <Link style={linkStyle} to="/contact">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        Contact
      </Link>
*/