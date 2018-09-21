//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './scanStyles.js'
import {Button} from './../../../globalStyles.js'

//Config
import config from './../../../config.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({

})

class Scan extends Component {
    constructor() {
        super()

        this.state = {
            showPopup: false
        };

    }

    render() {
        return (
            <styles.ScanContainer>
                <styles.ScanPopup active={this.state.showPopup}>
                Hey
                    <styles.BookInfo>
                        Bok title
                    </styles.BookInfo>
                </styles.ScanPopup>

                <styles.ScanButton>
                    <Button colour="primary" onClick={() => this.setState({showPopup: !this.state.showPopup})}>Scan</Button>
                </styles.ScanButton>
            </styles.ScanContainer>
        );
    }
}

export default connect(mapStateToProps)(Scan);
