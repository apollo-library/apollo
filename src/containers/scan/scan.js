//React imports
import React, { Component } from 'react';

//Styles
import './scan.css';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import NavBar from './../../components/navbar/navbar';

class Scan extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
                <h1>Scan</h1>
                <FontAwesomeIcon icon="barcode"/>
            </div>
        );
    }
}

export default Scan;
