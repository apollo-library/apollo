//React imports
import React, { Component } from 'react';

//Component imports
import {TagItem, UserSearch, BookTable} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'


import * as API from './../../api';

//Config
import config from './../../config'

const mapStateToProps = (state) => ({

})

class Users extends Component {
    constructor() {
        super()
        this.state = {
            tagsToDisplay: 15,
            users: undefined
        };
    }

    async componentDidMount() {
        let rawUsers = await API.Users.getAllUsers();

        this.setState({users: rawUsers.data})
    }

    render() {
        let tagsDisplayed = 0;
        let activeTags = 0;

        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>Users</PageTitle>



                        <TagItem tagName={"Year 7"} active={false} />
                        <TagItem tagName={"Year 8"} active={false} />
                        <TagItem tagName={"Year 9"} active={false} />
                        <TagItem tagName={"Year 10"} active={false} />
                        <TagItem tagName={"Year 11"} active={false} />
                        <TagItem tagName={"Year 12"} active={false} />
                        <TagItem tagName={"Year 13"} active={false} />

                    </LeftColumn>

                    <RightColumn>
                        <UserSearch />

                        <div style={{marginTop: config.styles.boxSpacing}} />

                        <BookTable
                               type="users"
                               colour="accent1"
                               data={this.state.users}
                               titles={[
                                   "Name",
                                   "Year",
                                   "ID",
                                   "Number of Loans",
                                   "Details"
                               ]}
                               buttonText="Details"
                           />
                    </RightColumn>
                </CenterColumn>
                <div style={{marginTop: config.styles.boxSpacing}} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Users);
