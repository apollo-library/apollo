//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './successStyles.js';

//Redux
import { actions } from './../../../store/actions.js'
import store from './../../../store'


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
