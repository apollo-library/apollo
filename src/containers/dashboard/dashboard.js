//React imports
import React, { Component } from 'react';

//Component imports
import NavBar from './../../components/navbar/navbar';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar history={this.props.history} />
            </div>
        );
    }
}

export default Dashboard;
