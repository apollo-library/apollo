//React imports
import React, { Component } from 'react';

import * as API from './../../../api';

import {ReportTable} from './../../';

class Loan extends Component {
    constructor() {
        super()

        this.state = {
            body: null,
            header: null
        };
    }

    componentDidMount = async () => {
        let data = await API.Loans.getLoans();
        let tableData = data.data.map((item) => {
            return [
                {style: "bold", url: "/book/" + item.raw.book._id, display: item.display.title},
                {style: "normal", url: null, display: item.display.author},
                {style: "bold", url: "/users?id=" + item.raw.user._id, display: item.display.name + ": " + item.display.reg},
                {style: "normal", url: null, display: this.formatDueDate(item.display.due)},
            ]
        });
        let header = ['Book','Author','User','Due Date']
        this.setState({body: tableData, header: header});
    }

    formatDueDate = (date) => {
        let dueDate = new Date(date);
        return dueDate.getDate() + "/" + (dueDate.getMonth() + 1) + "/" + dueDate.getFullYear();
    }

    render = () => {
        return (
            <ReportTable body={this.state.body} header={this.state.header} />
        )
    }
}

export default Loan;