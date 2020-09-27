import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app= props =>{
  const [personsState, setPersonsState]= useState({
    
    persons:[
      {name:'Max'},
      {name: 'Manu'},
      {name: 'Stephanie'}
    ]
  }
    
    
  );
  
  const [otherState, setOtherState]=useState('some other Value');

  console.log(personsState, otherState);

  const  switchNameHandler = ()=> {
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name="Richie";
      setPersonsState({
        persons:[
          {name:'Richie'},
          {name: 'Kafui'},
          {name: 'Stephanie'}
        ],
      })
    }
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name}/>
          <Person name={personsState.persons[1].name}>My Hobby is gaming.</Person>
      </div>
    );
}

export default app;

