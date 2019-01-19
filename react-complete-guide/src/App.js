import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is App!</h1>
        <Person name="Ionut" age="26"/>
      </div>
    );
  }
}

export default App;
