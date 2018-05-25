//React imports
import React, { Component } from 'react';

//Component imports
import {AccentedBox} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

class Catalogue extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Catalogue"}</PageTitle>
                        <AccentedBox
                            title="Latest Book"
                            gradFrom="accent5"
                            gradTo="accent4"

                            type="latestBook"
                        />
                    </LeftColumn>

                    <RightColumn>
                        <p>This is the catalogue</p>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Catalogue;
