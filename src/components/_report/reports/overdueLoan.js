//React imports
import React, { Component } from 'react';

import * as API from '../../../api';

import {ReportTable} from '../..';

class OverdueLoan extends Component {
    constructor() {
        super()

        this.state = {
            body: null,
            header: null
        };
    }

    componentDidMount = async () => {
        let data = await API.Loans.getOverdueLoans();

        let header = ['Book','Author','User','Due Date']

        let tableData = data.data.map((item) => {
            return [
                {style: "bold", url: "/book/" + item.raw.book._id, display: item.display.title},
                {style: "normal", url: null, display: item.display.author},
                {style: "bold", url: "/users?id=" + item.raw.user._id, display: item.display.name + ": " + item.display.reg},
                {style: "normal", url: null, display: this.formatDueDate(item.display.due)},
            ]
        });

        //Push the headings and the table body to the state
        this.setState({body: tableData, header: header});
    }

    //Format date
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

export default OverdueLoan;
