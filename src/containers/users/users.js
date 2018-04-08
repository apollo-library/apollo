//React imports
import React, { Component } from 'react';

//Component imports
import {AccentedBox} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

class Users extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        <PageTitle>{"Users"}</PageTitle>
                        <AccentedBox
                            title="Latest Book"
                            gradFrom="accent5"
                            gradTo="accent4"

                            type="latestBook"
                        />
                    </LeftColumn>

                    <RightColumn>
                        <p>This is the Users page</p>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default Users;
