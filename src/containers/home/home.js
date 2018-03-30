//React imports
import React, { Component } from 'react';

//Styles
import './home.css';

//Component imports
import NavBar from './../../components/navbar/navbar';
import Dashboard from './../../components/dashboard/dashboard';
import Sidebar from './../../components/sidebar/sidebar';

class Home extends Component {
  render() {
    return (
        <div className="apollo">
            <NavBar />
            <div className="mainContentGrowContainer">
                <Dashboard />
            </div>
            <Sidebar />
        </div>
    );
  }
}

export default Home;
