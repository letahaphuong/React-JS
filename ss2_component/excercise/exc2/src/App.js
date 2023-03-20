import React, { useState } from 'react';
import './App.css';
import Person from './components/person/Person';
import Radium, { StyleRoot } from 'radium';

function App() {
  const [showPerson, setShowperson] = useState(true);
  const [persons, setPerson] = useState([
    { id: 1, name: "Vaan", age: 18 },
    { id: 2, name: "Vaan1", age: 13 },
    { id: 3, name: "Vaan1", age: 11 }
  ])

  const togglePerson = () => {
    setShowperson(!showPerson);
  }

  const deletePerson = (personIndex) => {
    let newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPerson(newPersons);
  }

  let personList = null;

  const styles = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  }

  let classes = [];
  if (persons.length <= 2) {
    classes.push('red');
  } else if (persons.length <= 1) {
    classes.push('bold');
  }

  const handleNameChanged = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...persons[personIndex]
    }

    person.name = event.target.value;

    const newPersons = [...persons];

    newPersons[personIndex] = person;
    
    setPerson(newPersons);
  }

  if (showPerson === true) {
    personList = (
      <div>
        {
          persons.map((item, index) => {
            return (
              <Person key={index}
                click={() => deletePerson(index)}
                name={item.name}
                age={item.age}
                changed={(event) => { handleNameChanged(event, item.id) }}
              />
            )
          })
        }
      </div>
    );
    styles.backgroundColor = 'green';
    styles[':hover'] = {
      backgroundColor: 'lightred',
      color: 'black'
    }
  }
  return (
    <StyleRoot>
      <div className='App'>
        <h1>This is the first reactJS app</h1>
        <p className={classes.join(' ')}>this is  dynamis class paragrap</p>
        {/* <button  onClick={(e) => changeNameHandler()}>ChangeName</button> */}
        <button style={styles} onClick={(e) => togglePerson()}>Toggle Person</button>
        {personList}
        {/* <Example /> */}
      </div>
    </StyleRoot>
  )
}

export default Radium(App);
