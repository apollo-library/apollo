//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './datePickerStyles.js'
import {Button} from './../../../globalStyles.js'

//Config
import config from './../../../config.js';

class DatePicker extends Component {
    constructor() {
        super();

        this.state = {
            studentId: 0,
            dueDate: new Date(new Date().getTime()+86400000*config.main.defaultLoanLength).toISOString().substring(0, new Date(new Date().getTime()+86400000*config.main.defaultLoanLength).toISOString().indexOf("T"))
        };
    }

    render() {
        return (
            [
                <styles.DueDatePicker
                    onChange={(e) => this.setState({dueDate: e.target.value})}
                    type="date"
                    min={new Date(new Date().getTime()+86400000).toISOString().substring(0, new Date(new Date().getTime()+86400000).toISOString().indexOf("T"))}
                    defaultValue={new Date(new Date().getTime()+86400000*config.main.defaultLoanLength).toISOString().substring(0, new Date(new Date().getTime()+86400000*config.main.defaultLoanLength).toISOString().indexOf("T"))}
                />,
                <Button colour="primary" onClick={() => this.props.callback(this.state.dueDate)}>{this.props.buttonText}</Button>
            ]
        );
    }
}

export default DatePicker;
