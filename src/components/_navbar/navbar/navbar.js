//React imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Styles
import * as styles from './navbarStyles.js'
import {FlexGrow} from './../../../globalStyles.js'

//Images
import logo from './../../../assets/images/logo.svg';

//Config
import config from '../../../config'

//Redux
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class Navbar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <styles.Navbar>
                <styles.Root>
                    <styles.Logo>
                        <Link to={'/'}>
                            <img src={logo} alt="Apollo Logo" />
                        </Link>
                    </styles.Logo>

                    {config.main.pages.map((page, index) =>
                        (
                            <styles.Item  key={index}itemActive={page.path === this.props.currentPage}>
                                <styles.ItemLink to={page.path}>
                                    {page.text}
                                </styles.ItemLink>
                            </styles.Item>
                        )
                    )}
                    <FlexGrow />
                </styles.Root>
            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
