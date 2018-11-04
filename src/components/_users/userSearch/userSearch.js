//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './userSearchStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'


class UserSearch extends Component {
    constructor() {
        super()

        this.state = {
            searchTerm: ""
        };

        this.searchBarEvent = this.searchBarEvent.bind(this);
        this.userSearch = this.userSearch.bind(this);
    }

    searchBarEvent(e) {
        this.setState({searchTerm: e.target.value});

        //Did we press enter?
        if (e.keyCode === 13) {
            this.userSearch();
        }
    }

    async userSearch() {
        let users = this.props.users;
        let query = new RegExp("(" + this.state.searchTerm + ")","gi")

        let filteredUsers = users.filter(user =>
            user.forename.match(query) || user.surname.match(query) || user._id.match(query)
        );

        store.dispatch(actions.pushUsers(filteredUsers));

    }

    render() {
        return (
            <styles.Searchbar autoFocus onKeyUp={(e) => this.searchBarEvent(e)} placeholder="Search Users"/>
        );
    }
}

export default UserSearch;
