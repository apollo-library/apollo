//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './successStyles.js';

class Success extends Component {
    render() {
        return (
            <styles.SuccessMessage>
                <styles.SuccessTitle>{this.props.message}</styles.SuccessTitle>
            </styles.SuccessMessage>
        );
    }
}

export default Success;
