import { useState } from 'react';
import './App.css';
import Contact from './component/Contact';
import ContactForms from './component/ContactForms';

function App() {
  //users state array
  const [users, setUsers] = useState([]);

  //function to add new user
  function addUser(user) {
    setUsers([...users, user])
  }

  return (
    <div className='app-bg'>
      <div id="para">React Contact App</div>
      <ContactForms inputDetail={addUser}/>
      <Contact details={users}/>
    </div>
  );
}

export default App;
