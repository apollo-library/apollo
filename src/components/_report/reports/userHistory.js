//React imports
import React, { Component } from 'react';

import * as API from '../../../api';

import {ReportTable} from '../..';

class UserHistory extends Component {
    constructor() {
        super()

        this.state = {
            body: null,
            header: null
        };
    }

    componentDidMount = async () => {
        let data = await API.Users.getUserHistory(this.props.user);

        let header = ['Action','Book','Author','Due Date']

        let tableData = data.data.map((item) => {
            return [
                {style: "normal", url: null, display: item.loan.returnDate ? "Return" : "Withdraw"},
                {style: "bold", url: "/book/" + item.book._id, display: item.book.title},
                {style: "normal", url: null, display: item.book.author},
                {style: "normal", url: null, display: this.formatDueDate(item.loan.dueDate)},
            ]
        });

        //Push the headings and the table body to the state
        this.setState({body: tableData, header: header});
    }

    //Format date
    formatDueDate = (date) => {
        let dueDate = new Date(date);
        return dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();
    }

    render = () => {
        return (
            <ReportTable body={this.state.body} header={this.state.header} />
        )
    }
}

export default UserHistory;
