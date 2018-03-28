import React, { Component } from 'react';
import './App.css';

import {main, colours} from './config.js'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import home from '@fortawesome/fontawesome-free-solid/faHome'
import book from '@fortawesome/fontawesome-free-solid/faBook'
import barcode from '@fortawesome/fontawesome-free-solid/faBarcode'
import users from '@fortawesome/fontawesome-free-solid/faUsers'

fontawesome.library.add(home, book, barcode, users)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{"I'm the main container"}</h1>
        <FontAwesomeIcon icon="home"/>
      </div>
    );
  }
}

export default App;
