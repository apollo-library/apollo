//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './errorStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    scanError: state.ui.scanError
})

class Error extends Component {
    componentDidMount() {
        setTimeout(function(){
            store.dispatch(actions.resetScanTab());
        }, 3000);
    }

    resetScanTab() {
        store.dispatch(actions.resetScanTab());
    }

    render() {
        return (
            <div>
                <styles.ErrorTitle>Error: </styles.ErrorTitle>
                <styles.ErrorMessage>{this.props.scanError}</styles.ErrorMessage>
                <br />
                <Button large onClick={() => this.resetScanTab()} colour="accent3">Reset</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Error);
