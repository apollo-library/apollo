//React imports
import React, { Component } from 'react';

import * as API from './../../api';

//Config
import config from './../../config.js'

// Styles
import {CenterColumn, BottomLogo, PageTitle, FlexGrow} from './../../globalStyles.js'
import logo from './../../assets/images/logo.svg'

//Component imports
import {ReportTable} from './../../components';

class Report extends Component {
    constructor() {
        super()

        this.state = {
            path: '',
            title: '',
            report: {},
            table: [],
            data: {}
        };
    }

    async componentDidMount() {
        const param = this.props.match.params.report;

        this.setState({ path: param});

        if (!config.reports[param]) {
            this.setState({ report: {page: '404'} });
        } else {
            const data = await config.reports[param].function;
            this.setState({ 
                data: data,
                table: config.reports[param].table,
                title: config.reports[param].name
            });
            console.log(data);
        }
        
    }

    render() {
        return (
            <CenterColumn>
                <FlexGrow>
                    <PageTitle>{this.state.title}</PageTitle>
                    <ReportTable data={this.state.data} table={this.state.table}  />
                    <BottomLogo src={logo} />
                </FlexGrow>
            </CenterColumn>
        );
    }
}

export default Report;
