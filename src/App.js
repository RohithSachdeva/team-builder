import React, { useState } from 'react';
import logo from './logo.svg';
import {v4 as uuid} from 'uuid';
import Form from './Form'
import './App.css';

const initialTeam = [
  { id: uuid(), fname: 'John', lname: 'Smith', role:'Designer', email: 'JohnSmith@gmail.com' },
  { id: uuid(), fname: 'Joe', lname: 'Smart', role:'Full Stack Developer', email: 'JoeSmart@gmail.com' }
];



function App() {
  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    role: '',
    email: ''
  });

  const onInputChange = event => {
    const inputChange = event.target.name;
    const newValue = event.target.value;
    setFormValues({
      ...formValues,
      [inputChange]: newValue,
    })
  };

  const onFormSubmit = event => {
    event.preventDefault();

    const newMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      role: formValues.job,
      email: formValues.email
    }
    setTeam([...team, newMember]);
  }

  return (
    <div className="App">
      <h1>Team Information</h1>
      <p> </p>
        <Form 
        onInputChange = {onInputChange}
        onFormSubmit = {onFormSubmit}
        formValues = {formValues}
/>
  <h3> List of Members: </h3>
  {
    team.map(tm => <div key={tm.id}> {tm.fname} {tm.lname}, {tm.role}, {tm.email} </div>)
  }      
      
        
      
    </div>
  );
}

export default App;


// import { v4 as uuid } from 'uuid';
// import './App.css'

// const initialFriends = [
//   { id: uuid(), fname: 'John', lname: 'Smith' },
//   { id: uuid(), fname: 'Jane', lname: 'Doe' },
// ]