//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './errorStyles';

class Error extends Component {
    render() {
        return (
            <styles.ErrorMessage>
                <styles.ErrorTitle>{this.props.message}</styles.ErrorTitle>
            </styles.ErrorMessage>
        );
    }
}

export default Error;
