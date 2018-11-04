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
    filteredUsers: state.data.users
})

class Users extends Component {
    constructor() {
        super()
        this.state = {
            tagsToDisplay: 15,
            users: undefined,
            userInfo: {},
            userHistory: {}
        };

        this.displayUserInfo = this.displayUserInfo.bind(this);
    }

    async componentDidMount() {
        let rawUsers = await API.Users.getAllUsers();

        this.setState({users: rawUsers.data})
    }

    async displayUserInfo(id) {
        let userInfo = await API.Users.getUser(id);
        let userHistory = await API.Users.getUserHistory(id);

        this.setState({
            userInfo: userInfo.data,
            userHistory: userHistory.data
        })
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


                    </LeftColumn>

                    <RightColumn>
                        <UserSearch users={this.state.users} />

                        <div style={{marginTop: config.styles.boxSpacing}} />

                        <BookTable
                               type="users"
                               colour="accent1"
                               data={this.props.filteredUsers}
                               titles={[
                                   "Name",
                                   "Year",
                                   "ID",
                                   "Number of Loans",
                                   "Details"
                               ]}
                               buttonText="Details"
                               callback={this.displayUserInfo}
                           />
                    </RightColumn>
                </CenterColumn>
                <div style={{marginTop: config.styles.boxSpacing}} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Users);
