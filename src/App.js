import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Max'},
      {name: 'Manu'},
      {name: 'Stephanie'}
    ]
  }
  switchNameHandler = ()=> {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name="Richie";
    this.setState({
      persons:[
        {name:'Richie'},
        {name: 'Kafui'},
        {name: 'Stephanie'}
      ]})
  }
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}>My Hobby is gaming.</Person>
      </div>
    );
  }
}

export default App;
