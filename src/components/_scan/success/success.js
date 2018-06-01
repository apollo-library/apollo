//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './successStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

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
            <div>
                <styles.SuccessMessage>Thank you</styles.SuccessMessage>
                <Button large onClick={() => this.resetScanTab()} colour="accent3">Reset</Button>
            </div>
        );
    }
}

export default Success;
