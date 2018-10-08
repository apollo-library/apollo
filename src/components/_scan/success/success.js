//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './successStyles.js';

//Redux
import { actions } from './../../../store/actions.js'
import store from './../../../store'


class Success extends Component {

    componentDidMount() {
        setTimeout(function(){
            store.dispatch(actions.unsetSuccessScreen());
        }, 2000);
    }

    render() {
        return (
            <styles.SuccessMessage>
                <styles.SuccessTitle>Thank you</styles.SuccessTitle>
            </styles.SuccessMessage>
        );
    }
}

export default Success;
