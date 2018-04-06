//React imports
import React, { Component } from 'react';

//Component imports
import {Navbar, AccentedBox} from './../../components';
import {CenterColumn, LeftColumn, RightColumn} from './../../globalStyles.js'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history} />

                <CenterColumn>
                    <LeftColumn>
                        <AccentedBox
                            title="Latest Book"
                            gradFrom="accent5"
                            gradTo="accent4"

                            type="latestBook"
                        />
                        <AccentedBox
                            title="Fines"
                            gradFrom="accent2"
                            gradTo="accent1"

                            type="fines"
                        />
                        <AccentedBox
                            title="Rate"
                            gradFrom="accent3"
                            gradTo="accent4"

                            type="rate"
                        />
                    </LeftColumn>
                    <RightColumn>
                        hi
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Dashboard;
