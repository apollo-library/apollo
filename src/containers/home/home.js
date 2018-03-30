//React imports
import React, { Component } from 'react';

//Styles
import './home.css';

//Config import
import config from './../../config.js';

//Component imports
import NavBar from './../../components/navbar/navbar.js';
import Dashboard from './../../components/dashboard/dashboard.js';
import Sidebar from './../../components/sidebar/sidebar.js';

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
