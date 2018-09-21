//React imports
import React, { Component } from 'react';

//Component imports


import {CenterColumn, PageTitle} from './../../globalStyles.js'

class Scan extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <PageTitle>Scan</PageTitle>
                </CenterColumn>
                <CenterColumn>
                    <p>Hi there</p>
                </CenterColumn>
            </div>
        );
    }
}

export default Scan;
