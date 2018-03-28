import React, { Component } from 'react';
import './App.css';

import {main, colours} from './config.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{"I'm the main container"}</h1>
        <p>{main.name}</p>
        <p>{colours.test}</p>
      </div>
    );
  }
}

export default App;
