//React imports
import React, { Component } from 'react';

//Styles
import './catalogue.css';

//Config import
import config from './../../config.js';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Catalogue extends Component {
  render() {
    return (
        <div>
            <h1>Catalogue</h1>
            <FontAwesomeIcon icon="book"/>
        </div>
    );
  }
}

export default Catalogue;
