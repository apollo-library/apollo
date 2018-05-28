//React imports
import React, { Component } from 'react';

//Component imports
import {Searchbar, ScanModules} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

class Scan extends Component {
    render() {



        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Scan"}</PageTitle>
                        <p>Scan sidebar</p>
                    </LeftColumn>

                    <RightColumn>
                        <Searchbar />
                        <ScanModules />
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Scan;
