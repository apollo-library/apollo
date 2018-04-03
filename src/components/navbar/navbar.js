//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './navbarStyles.js'
import {Button} from './../../gloablStyles.js'

//Images
import buttonArrow from './../../assets/images/button-arrow.svg';

//Config
import config from '../../config'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class Navbar extends Component {
    render() {
        return (
            <styles.Navbar>
                <styles.NavRoot>
                    <styles.NavLogo />
                    {config.main.pages.map((page, index) =>
                        (
                            <styles.NavItem
                                key={index}
                                onClick={() => {this.props.history.push(page.path)}}
                                navItemActive={page.path === this.props.currentPage}
                            >
                                {page.text}
                            </styles.NavItem>
                        )
                    )}
                    <styles.NavGrow />
                    <Button primary>Scan</Button>
                    <styles.NavNotifications />
                </styles.NavRoot>
            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
