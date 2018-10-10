//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './returnRenewStyles.js'
import {Button} from '../../../globalStyles.js'

import * as API from '../../../api';

//Config
import config from '../../../config.js'

//Redux
import { connect } from 'react-redux'
import { actions } from '../../../store/actions.js'
import store from '../../../store'


class ReturnRenew extends Component {
    constructor() {
        super()

        this.state = {
            renewDate: 0
        };
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
