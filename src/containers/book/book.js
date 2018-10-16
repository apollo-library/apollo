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
            history: null
        };
    }

    componentDidMount = async () => {
        this.updateData();
    }

    updateData = async () => {
        const param = this.props.match.params.book;

        const data = await API.Books.getBookInfo(param);

        if (data.message === "Book not found") {
            //throw a temper tantrum
        } else {
            this.setState({bookData: data});
            const history = await API.History.getBookHistory(param);
            // console.log(history.data)

            let historyParse = history.data.map((item , index) => {
                return {
                    date: item.date,
                    action: item.action,
                    user: item.user.forename + ' ' + item.user.surname + ' | ' + item.user.year + '-' + item.user.reg,
                    id: item.user._id
                };
            });

            this.setState({history: historyParse});

        }

        this.setState({ path: param});
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
                        <BookHistoryTable data={this.state.history}></BookHistoryTable>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Report;
