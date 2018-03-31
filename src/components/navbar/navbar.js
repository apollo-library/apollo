//React imports
import React, { Component } from 'react';

//Styles
import './navbar.css';

//Config import
import config from './../../config';

//Import font awesome
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

//Redux imports
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class NavBar extends Component {
    constructor() {
        super()
        this.redirect = this.redirect.bind(this)
    }
    //Run when you click on an item in the navbar
    redirect(path) {
        //Switches page
        this.props.history.push(path);
    }

    render() {
        return (
            <div className="navbar" style={{background: config.colours.lightGrey, color: config.colours.darkGrey}}>
                {config.main.pages.map((page, index) =>
                    (
                        <div
                            key={index}
                            className={"navItem " + ((page.path === this.props.currentPage) ? 'navItemActive' : '')}
                            onClick={() => {this.redirect(page.path)}}
                        >
                            <FontAwesomeIcon className="navIcon fa-fw" icon={page.icon} />
                            <p className="navLabel">{page.text}</p>
                        </div>
                    )
                )}

                <div className="navGrow" />

                <div className="navBottomGroup" style={{borderColor: config.colours.pink}}>
                    <div className="navItem">
                        <FontAwesomeIcon className="navIcon fa-fw" icon="bug" />
                        <a className="navLabel" href="https://goo.gl/forms/bbOBhb92BZjh7VTr2" target="_blank" rel="noopener noreferrer">Report Bug</a>
                    </div>

                    <div className="navItem">
                        <FontAwesomeIcon className="navIcon fa-fw" icon="sign-out-alt" />
                        <p className="navLabel">Logout</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default  connect(mapStateToProps)(NavBar);

//export default  NavBar;
