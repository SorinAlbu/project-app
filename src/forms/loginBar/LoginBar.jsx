import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faKey } from '@fortawesome/free-solid-svg-icons';

const LoginBar = (props) =>{

    const loginStyle = {
        paddingTop: "1px",
        paddingLeft: "1px",
        paddingRight: "20px",
        borderRight: "1px solid	#C8C8C8",
        font: "1.2em bold, serif",
        color: "#FFFFFF"
      };

      const registerStyle = {
        paddingTop: "1px",
        paddingLeft: "1px",
        paddingRight: "20px",
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
        alignSelf: 'flex-end',
        marginTop: 10,
        position: 'absolute'
      };
return ( 
     <div style={containerLink}>
         <Link style={loginStyle} to="/login">
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faSignInAlt} />
             </div>
          Login
        </Link>
        <Link style={registerStyle} to="/register">
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faKey} />
             </div>
          Register
        </Link>
    </div> 
    
    
 ); 
}
export default LoginBar;