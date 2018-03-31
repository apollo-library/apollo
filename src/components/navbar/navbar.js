//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './navbarStyles.js'
import {styled, css} from 'styled-components';

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
    render() {
        return (
            <styles.Navbar>
                {config.main.pages.map((page, index) =>
                    (
                        <styles.NavItem
                            key={index}
                            onClick={() => {this.props.history.push(page.path)}}
                            navItemActive={page.path === this.props.currentPage}
                        >
                            <styles.NavIcon>
                                <FontAwesomeIcon className="fa-fw" icon={page.icon} />
                            </styles.NavIcon>
                            <p className="navLabel">{page.text}</p>
                        </styles.NavItem>
                    )
                )}

                <styles.NavGrow />

                <styles.NavBottomGroup>
                    <styles.NavItem>
                        <styles.NavIcon>
                            <FontAwesomeIcon className="navIcon fa-fw" icon="bug" />
                        </styles.NavIcon>
                        <a className="navLabel" href="https://goo.gl/forms/bbOBhb92BZjh7VTr2" target="_blank" rel="noopener noreferrer">Report Bug</a>
                    </styles.NavItem>

                    <styles.NavItem>
                        <styles.NavIcon>
                            <FontAwesomeIcon className="navIcon fa-fw" icon="sign-out-alt" />
                        </styles.NavIcon>
                        <p className="navLabel">Logout</p>
                    </styles.NavItem>
                </styles.NavBottomGroup>

            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(NavBar);
