//React imports
import React, { Component } from 'react';

import {BookTable} from './../../'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    booksDueSoon: state.data.studentDetails.booksDueSoon
})

class Fines extends Component {
    constructor() {
        super()
        this.state = {
            users: undefined
        };
    }

    async componentDidMount() {
        let rawUsers = await API.Users.getAllUsers();

        let usersWithFines = []
        for (var i = 0; i < rawUsers.data.length; i++) {
            if (rawUsers.data[i].fine !== 0) {
                usersWithFines.push(rawUsers.data[i]);
            }
        }

        this.setState({users: usersWithFines})
    }

    render() {
        return (
            <div>
                <BookTable
                    type="fines"
                    colour={this.props.colour}
                    data={this.state.users}
                    titles={[
                        "Name",
                        "Fine (£)"
                    ]}
                    buttonText="Renew"
                    buttonFunction="RUN A FUNCTION HERE"
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Fines);
