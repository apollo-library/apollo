//React imports
import React, { Component } from 'react';

//Styles
import './navbar.css';

//Config import
import config from './../../config';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class NavBar extends Component {
  render() {
    return (
        <div className="navbar" style={{background: config.colours.lightGrey, color: config.colours.darkGrey}}>
            {config.main.pages.map((page, index) =>(
                <div key={index} className="navItem" onClick={() => {this.props.history.push(page.path)}}>
                    <FontAwesomeIcon className="navIcon fa-fw" icon={page.icon} />
                    <p className="navLabel">{page.name}</p>
                </div>)
            )}
            <div className="navBottomGroup" style={{borderColor: config.colours.pink}}>
                <div className="navItem">
                    <FontAwesomeIcon className="navIcon fa-fw" icon="sign-out-alt" />
                    <p className="navLabel">Logout</p>
                </div>
            </div>
        </div>
    );
  }
}

export default NavBar;
