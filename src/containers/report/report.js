//React imports
import React, { Component } from 'react';

// Styles
import {CenterColumn, BottomLogo, PageTitle, FlexGrow} from './../../globalStyles.js'
import logo from './../../assets/images/logo.svg'

//Component imports
import {Loan, OverdueLoan, UserHistory} from './../../components';

import * as API from './../../api';

class Report extends Component {
    constructor() {
        super()

        this.state = {
            table: null,
            title: null
        };
    }

    async componentDidMount() {
        let reportType, reportParam;

        // Collect information from URL
        if (this.props.match.params.report) reportType = this.props.match.params.report;
        if (this.props.match.params.subreport) reportParam = this.props.match.params.subreport;

        if (reportType === "loans" && !reportParam) this.setState({table: <Loan />, title: "Loans"});
        else if (reportType === "overdue" && !reportParam) this.setState({table: <OverdueLoan />, title: "Overdue Loans"});
        else if (reportType === "user_history" && reportParam) {
            let name = await API.Users.getUserName(reportParam); // Get info about user
            if (name) this.setState({table: <UserHistory user={reportParam} />, title: "History for " + name}); //user found
            else this.setState({title: "User not found"}); // user not found
        }
    }

    render() {
        return (
            <CenterColumn>
                <FlexGrow>
                    <PageTitle>{this.state.title}</PageTitle>
                    {this.state.table}
                    <BottomLogo src={logo} />
                </FlexGrow>
            </CenterColumn>
        );
    }
}

export default Report;
