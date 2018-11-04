//React imports
import React, { Component } from 'react';

//Component imports
import {AccentedBox, UserSearch, BookTable} from './../../components';

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
            userHistory: {},
            showInfo: false
        };

        this.displayUserInfo = this.displayUserInfo.bind(this);
    }

    async componentDidMount() {
        let rawUsers = await API.Users.getAllUsers();

        this.setState({users: rawUsers.data})
    }

    componentWillUnmount() {
        store.dispatch(actions.resetFilteredUsers());
    }

    async displayUserInfo(id) {
        let userInfo = await API.Users.getUser(id);
        let userHistory = await API.Users.getUserHistory(id);
        //console.log(userInfo)
        this.setState({
            userInfo: userInfo.data,
            userHistory: userHistory.data,
            showInfo: true
        })
    }

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        <PageTitle>Users</PageTitle>

                        {this.state.showInfo ? <div>
                            <AccentedBox
                                title="Books on Loan"
                                gradFrom="accent5"
                                gradTo="accent4"
                                data={this.state.userInfo}

                                type="onLoan"
                            />
                            <AccentedBox
                                title="History"
                                gradFrom="accent2"
                                gradTo="accent1"
                                data={this.state.userHistory}

                                type="userHistory"
                            />
                        </div>
                        : null}

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
                                   "No. Loans",
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
