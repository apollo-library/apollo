//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './navbarStyles.js'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class Navbar extends Component {
    render() {
        return (
            <styles.Navbar>
                Hi
            </styles.Navbar>
        );
    }
}

export default connect(mapStateToProps)(Navbar);
