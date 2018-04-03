//React imports
import React, { Component } from 'react';

//Component imports
import {Navbar} from './../../components';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar history={this.props.history} />
            </div>
        );
    }
}

export default Dashboard;
