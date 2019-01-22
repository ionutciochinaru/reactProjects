import React, { Component } from 'react';
import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person/Person';
import Hobbies from './Person/Hobbies';
import IdInfo from './Person/IdInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is App!</h1>
        <Person name="Test" age="26"/>
        <Hobbies hobbie="Gameing"/>
        <IdInfo/>
      </div>
    );
  }
}

export default App;
