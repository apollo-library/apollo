//React imports
import React, { Component } from 'react';

//Styles
import './home.css';

//Config import
import {main} from './../../config.js';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
        <div>
            <h1>Home</h1>
            <FontAwesomeIcon icon="home"/>
        </div>
    );
  }
}

export default Home;
