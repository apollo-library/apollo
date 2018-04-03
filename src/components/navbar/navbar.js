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
                
            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(NavBar);
