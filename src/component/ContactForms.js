import React, { useState } from "react";
import "../App.css";

function ContactForms(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");


  function handleAppContact(e) {
    e.preventDefault();

    let user = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
    };


    props.inputDetail(user);

    setName("");
    setPhoneNumber("");
    setLocation("");

  }

function handleTypeWriter() {
    
  let i = 0;
  let txt = "You are welcome, your details are safe with us.";
  let speed = 100;

  let typeWriter = (props) => {
    if (i < txt.length) {
    //   document.getElementById("test").innerHTML += txt.charAt(i);
    //   i++;
    //   setTimeout(typeWriter, speed);

      setText(txt.substring(0, i++));
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
 
  

  return (
    <div className="formBox">
     
      <form onSubmit={(e) => handleAppContact(e)}>
        <div className="detail-input">
          <input
            type="text"
            placeholder="Enter your Fullname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Enter your Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button onClick={()=>handleTypeWriter()}>Submit</button>

        <div id="test">{text}</div>
      </form>
    </div>
  );
}

export default ContactForms;
