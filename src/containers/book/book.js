//React imports
import React, { Component } from 'react';

import * as API from './../../api';

//Component imports
import {BookHistoryTable, BookInfo} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

class Report extends Component {
    constructor() {
        super()

        this.state = {
            path: '',
            bookData: {
                data: {
                    tags: []
                }
            },
            history: null,
            dueDate: ''
        };
    }

    componentDidMount = async () => {
        // Fetch the data from the server initially
        this.updateData();
    }

    updateData = async () => {
        const param = this.props.match.params.book; // from URL

        const data = await API.Books.getBookInfo(param);
        
        let dueDate;
        if (data.data.loanID) { // Get loan information if applicalbe
            const loanInfo = await API.Loans.getLoanInformation(data.data.loanID);
            dueDate = loanInfo.data.loan.dueDate;
        }
        this.setState({dueDate: dueDate})

        if (data.message !== "Book not found") { // Catch if book does not exists
            // Get the history for the book
            this.setState({bookData: data});
            const history = await API.History.getBookHistory(param);

            // Parse history data to pass into table
            let historyParse = history.data.map((item) => {
                let user;
                if (item.user.forename) user = item.user.forename + ' ' + item.user.surname + ' | ' + item.user.year + '-' + item.user.reg;
                else user = '(Removed)';
                return {
                    date: item.date,
                    action: item.action,
                    user: user,
                    id: item.user._id
                };
            });
            this.setState({history: historyParse});
        }

        this.setState({path: param});
    }


    render = () => {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        <PageTitle>{"Book Details"}</PageTitle>
                        <BookInfo data={this.state.bookData.data} updateData={this.updateData}></BookInfo>
                    </LeftColumn>

                    <RightColumn>
                        <PageTitle>{"History"}</PageTitle>
                        <BookHistoryTable dueDate={this.state.dueDate} data={this.state.history}></BookHistoryTable>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Report;
