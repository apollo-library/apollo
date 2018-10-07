//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './return-renewStyles.js'
import {Button} from './../../../globalStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'


class ReturnRenew extends Component {
    constructor() {
        super()

        this.state = {
            renewDate: 0
        };
    }

    async returnBook() {
        let returnResponse = await API.Loans.returnBook(this.props.scanInput);

        /* if (returnResponse.status === 'success') {
            store.dispatch(actions.addScanTab(3)); //Thank you
        } else {
            store.dispatch(actions.addScanTab(4)); //Error when returning
            store.dispatch(actions.setScanError(returnResponse.status));
        } */
        console.log(returnResponse)
    }

    async renewBook() {
        let renewResponse = await API.Loans.renewBook(this.props.scanInput, this.state.renewDate);

        /* if (renewResponse.status === 'success') {
            store.dispatch(actions.addScanTab(3)); //Thank you
        } else {
            store.dispatch(actions.addScanTab(4)); //No renew date set
            store.dispatch(actions.setScanError(renewResponse.status));
        } */
        console.log(renewResponse)
    }

    render() {
        return (
            <styles.ReturnRenewContainer>
                <styles.ReturnContainer>
                    <Button colour="primary" onClick={() => this.returnBook()}>Return</Button>
                </styles.ReturnContainer>

                <styles.RenewContainer>
                    <styles.RenewDatePicker
                        onChange={(e) => this.setState({renewDate: e.target.value})}
                        type="date"
                        min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                    />
                    <Button colour="primary" onClick={() => this.renewBook()}>Renew</Button>
                </styles.RenewContainer>
            </styles.ReturnRenewContainer>
        );
    }
}

export default ReturnRenew;
