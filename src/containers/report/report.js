//React imports
import React, { Component } from 'react';

//Config
import config from './../../config.js'

// Styles
import {CenterColumn, BottomLogo, PageTitle, FlexGrow} from './../../globalStyles.js'
import logo from './../../assets/images/logo.svg'

//Component imports
import {Loan, OverdueLoan, UserHistory} from './../../components';

class Report extends Component {
    constructor() {
        super()

        this.state = {
            table: null
        };
    }

    async componentDidMount() {
        let reportType, reportParam;

        // Collect information from URL
        if (this.props.match.params.report) reportType = this.props.match.params.report;
        if (this.props.match.params.subreport) reportParam = this.props.match.params.subreport;

        console.log(reportType,reportParam)

        if (reportType === "loans" && !reportParam) this.setState({table: <Loan />});
        else if (reportType === "overdue" && !reportParam) this.setState({table: <OverdueLoan />});
        else if (reportType === "user_history" && reportParam) this.setState({table: <UserHistory user={reportParam} />});

        // this.setState({ path: param});

        // if (!config.reports[param]) {
        //     this.setState({ report: {page: '404'} });
        // } else {
        //     const data = await config.reports[param].function;
        //     this.setState({
        //         data: data,
        //         table: config.reports[param].table,
        //         title: config.reports[param].name
        //     });
        //     console.log(data);
        // }

    }

    render() {
        return (
            <CenterColumn>
                <FlexGrow>
                    <PageTitle>{this.state.title}</PageTitle>
                    {/* <ReportTable data={this.state.data} table={this.state.table}  /> */}
                    {this.state.table}
                    <BottomLogo src={logo} />
                </FlexGrow>
            </CenterColumn>
        );
    }
}

export default Report;
