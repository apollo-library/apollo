//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './datePickerStyles.js'
import {Button} from './../../../globalStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'


class DatePicker extends Component {
    constructor() {
        super()

        this.state = {
            studentId: 0,
            dueDate: 0
        };
    }

    render() {
        return (
            [
                <styles.DueDatePicker
                    onChange={(e) => this.setState({dueDate: e.target.value})}
                    type="date"
                    min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                />,
                <Button colour="primary" onClick={() => this.props.callback(this.state.dueDate)}>{this.props.buttonText}</Button>
            ]
        );
    }
}

export default DatePicker;
