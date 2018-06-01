//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './errorStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scanError: state.ui.scanError
})

class Error extends Component {
    render() {
        return (
            <div>
                <styles.ErrorTitle>Error: </styles.ErrorTitle>
                <styles.ErrorMessage>{this.props.scanError}</styles.ErrorMessage>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Error);
