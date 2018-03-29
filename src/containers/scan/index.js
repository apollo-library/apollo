//React imports
import React, { Component } from 'react';

//Styles
import './scan.css';

//Config import
import {main} from './../../config.js';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Scan extends Component {
  render() {
    return (
        <div>
            <h1>Scan</h1>
            <FontAwesomeIcon icon="barcode"/>
        </div>
    );
  }
}

export default Scan;
