//React imports
import React, { Component } from 'react';

import * as API from './../../api';

//Config
import config from './../../config.js'

//Component imports
import {Books} from './../../components';

class Reports extends Component {
    constructor() {
        super()

        this.state = {

        };
    }

    render() {
        return (
            <p>
                reports page
                <Books />
            </p>
        );
    }
}

export default Reports;
