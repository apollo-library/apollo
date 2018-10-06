//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './booksStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

class Books extends Component {
    constructor() {
        super()

        this.state = {

        };
    }

    render() {
        return (
            <p>
                books page
            </p>
        );
    }
}

export default Books;
