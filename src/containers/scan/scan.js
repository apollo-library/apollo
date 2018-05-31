//React imports
import React, { Component } from 'react';

//Component imports
import {ScanModules} from './../../components';

import {CenterColumn, PageTitle} from './../../globalStyles.js'

class Scan extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <PageTitle>Scan</PageTitle>
                </CenterColumn>
                <CenterColumn>
                    <ScanModules />
                </CenterColumn>
            </div>
        );
    }
}

export default Scan;
