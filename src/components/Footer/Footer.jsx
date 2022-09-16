import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-linkedin";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
         <span>tarikulislammubin@gmail.com</span>
        <div className="f-icons">
        <a target="_blank" href="https://www.linkedin.com/in/tarikul-islam-mubin" rel="noopener noreferrer"><Insta color="white" size={"3rem"} /></a>  
         <a target="_blank" href="https://www.facebook.com/Tarikulislammubin" rel="noopener noreferrer"><Facebook color="white" size={"3rem"} /></a> 
          <a target="_blank" href="https://github.com/timubin" rel="noopener noreferrer"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
