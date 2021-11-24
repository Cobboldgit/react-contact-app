import { useState, useEffect } from "react";
import Contact from "../component/Contact";
import ContactForms from "../component/ContactForms";
import { connect } from "react-redux";
import { getAllContacts } from "../action/userAction";
import {signOut} from "../action/authActions"

function Home(props) {
  useEffect(() => {
    props.getAllContacts();
  }, []);

  return (
    <div className="app-bg">
      <button onClick={props.signOut}>Sign out</button>
      <div id="para">React Contact App</div>
      <ContactForms />
      <Contact />
    </div>
  );
}

const mapDispatchToProps = {
  getAllContacts,
  signOut
};

export default connect(null, mapDispatchToProps)(Home);
