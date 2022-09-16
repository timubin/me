import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_portfolio",
        "template_3qwaser",
        form.current,
        "18A2gVmQB1Dzfy5nk"
      )
      .then(
        (result) => {
          alert('Message send successfully');
          setDone(true);
          form.reset();
        },
        (error) => {
          alert(error.message);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="user_name" className="user"  placeholder="Name" required/>
          <input type="email" name="user_email" className="user" placeholder="Email" required/>
          <textarea name="message" className="user" placeholder="Message" required/>
          <input style={{zIndex:'999'}} type="submit" value="Send" className="button"/> 
         
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        
      </div>
    </div>
  );
};

export default Contact;
