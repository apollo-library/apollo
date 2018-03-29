//React imports
import React, { Component } from 'react';

//Styles
import './home.css';

//Config import
import {main} from './../../config.js';

//Component imports
import NavBar from './../../components/navbar';
import Dashboard from './../../components/dashboard';
import Sidebar from './../../components/sidebar';

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
