//React imports
import React, { Component } from 'react';

//Styles
import './students.css';

//Config import
import {main} from './../../config.js';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Students extends Component {
  render() {
    return (
        <div>
            <h1>Students</h1>
            <FontAwesomeIcon icon="users"/>
        </div>
    );
  }
}

export default Students;
