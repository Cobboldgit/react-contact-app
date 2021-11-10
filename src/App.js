import { useState, useEffect } from "react";
import "./App.css";
import Contact from "./component/Contact";
import ContactForms from "./component/ContactForms";
import { connect } from "react-redux";
import { getAllContacts } from "./action/userAction";

function App() {
  //users state array
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllContacts();
  }, []);



  return (
    <div className="app-bg">
      <div id="para">React Contact App</div>
      <ContactForms />
      <Contact />
    </div>
  );
}

const mapDispatchToProps = {
  getAllContacts,
};

export default connect(null, mapDispatchToProps)(App);
