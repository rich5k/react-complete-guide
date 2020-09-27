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

  const  switchNameHandler = (newName1,newName2)=> {
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name="Richie";
      setPersonsState({
        persons:[
          {name: newName1},
          {name: newName2},
          {name: 'Stephanie'}
        ],
      })
    }
    const nameChangedHandler= (event) =>{
      setPersonsState({

        persons:[
          {name:'Max'},
          {name: event.target.value},
          {name: 'Stephanie'}
        ]
      })
    }
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={()=>switchNameHandler('John','Doe')}>Switch Name</button>
          <Person 
            name={personsState.persons[0].name}/>
          <Person 
            name={personsState.persons[1].name} 
            click={switchNameHandler.bind(this,'Kwame','Fosu')}
            changed={nameChangedHandler}>My Hobby is gaming.</Person>
      </div>
    );
}

export default app;

