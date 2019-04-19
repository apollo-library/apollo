//React imports
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

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
            showInfo: false,
            currentUser: "",
            searchTerm: ""
        };

        this.displayUserInfo = this.displayUserInfo.bind(this);
    }

    async componentDidMount() {
        let rawUsers = await API.Users.getAllUsers();
        this.setState({users: rawUsers.data});

        // Check URL to see if user already selected
        let url = this.props.history.location.search.substring(1).split('&');
        url.map((item) => {
            if (item.substring(0,2) === "id") if (item.split("=")[1]) this.setState({currentUser: item.split("=")[1]});
            if (item.substring(0,4) === "term") if (item.split("=")[1]) this.setState({searchTerm: item.split("=")[1].replace(/%20/g, " ")});
        });
        if (this.state.currentUser !== "") this.displayUserInfo(this.state.currentUser);
        if (this.state.searchTerm !== "") {
            let query = new RegExp("(" + this.state.searchTerm + ")","gi")
            
            let filteredUsers = this.state.users.filter(user =>
                user.name_concat.match(query) || user._id.match(query)
            );
    
            store.dispatch(actions.pushUsers(filteredUsers));
        }
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
        });

        // Push current user to url
        this.setState({currentUser: userInfo.data._id});
        this.pushURL();
    }

    searchCallback = async (term) => {
        // Push current user to url
        await this.setState({searchTerm: term});
        this.pushURL();
    }

    pushURL = () => {
        let url = [];
        if (this.state.currentUser !== "") url.push("id="+this.state.currentUser);
        if (this.state.searchTerm !== "") url.push("term="+this.state.searchTerm.replace(/\s/g, "%20"));
        let urlPush = "?" + url.join("&");

        let urlCurrent = this.props.history.location;
        if (urlCurrent.search !== urlPush) this.props.history.push("/users" + urlPush);
    }

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        

                        {this.state.showInfo ? [
                            <PageTitle>{"User: " + this.state.userInfo.name_concat}</PageTitle>,
                            <div>
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
                                user={this.state.userInfo._id}

                                type="userHistory"
                            />
                        </div>]
                        : <PageTitle>Users</PageTitle>}

                    </LeftColumn>

                    <RightColumn>
                        <UserSearch users={this.state.users} searchCallback={this.searchCallback} />

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
