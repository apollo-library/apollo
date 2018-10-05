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
            studentId: 0,
            dueDate: 0
        };
    }

    async withdrawBook() {
        let withdrawResponse = await API.Loans.withdrawBook(this.props.scanInput, this.state.studentId, this.state.dueDate);

        console.log(withdrawResponse)
        /* if (withdrawResponse.status === 'success') {
            store.dispatch(actions.addScanTab(3)); //Thank you
        } else {
            store.dispatch(actions.addScanTab(4)); //No due date set
            store.dispatch(actions.setScanError(withdrawResponse.status));
        } */
    }

    render() {
        return (
            <styles.WithdrawContainer>
                <styles.UserIdBar placeholder="Candidate Number" autoFocus onKeyUp={(e) => this.setState({studentId: e.target.value})} />
                <styles.DueDatePicker
                    onChange={(e) => this.setState({dueDate: e.target.value})}
                    type="date"
                    min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                />
            <Button colour="primary" onClick={() => this.withdrawBook()}>Withdraw</Button>
            </styles.WithdrawContainer>
        );
    }
}

export default ReturnRenew;
