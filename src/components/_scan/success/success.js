//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './successStyles.js'
import {Button} from './../../../globalStyles.js'

//Redux
import { actions } from './../../../store/actions.js'
import store from './../../../store'

class Success extends Component {
    componentDidMount() {
        setTimeout(function(){
            store.dispatch(actions.resetScanTab());
        }, 3000);
    }

    resetScanTab() {
        store.dispatch(actions.resetScanTab());
    }

    render() {
        return (
            <styles.SuccessMessage>
                <styles.SuccessTitle>Thank you</styles.SuccessTitle>
                <br />
                <Button large onClick={() => this.resetScanTab()} colour="accent3">Reset</Button>
            </styles.SuccessMessage>
        );
    }
}

export default Success;
