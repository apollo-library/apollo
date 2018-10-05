//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './scanStyles.js'
import {Button} from './../../../globalStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

//Components
import {Withdraw} from './../../';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'


class Scan extends Component {
    constructor() {
        super()

        this.state = {
            showPopup: true,
            scannedBookData: {},
            scanOptions: null,
            scanInput: ""
        };

        this.handleScanInput = this.handleScanInput.bind(this)
    }

    async handleScanInput(e) {
        this.setState({scanInput: e.target.value})

        //Check for enter
        if (e.keyCode === 13) {
            //Run a reg-ex to check if the input to the scan box mathes the format of the Challoners barcodes on the books
            if (this.state.scanInput.match(/[R|r]\d{4,5}[a-z|A-Z](0577|057)/g)) {
                let scannedBookData = await API.Books.getScanBookInfo(this.state.scanInput);
                this.setState({scannedBookData: scannedBookData});

                if (scannedBookData.loanID) {
                    //Renew / Return

                } else {
                    //Withdraw
                    this.setState({scanOptions: <Withdraw scanInput={this.state.scanInput} />})
                }
            }
        }
    }

    render() {
        return (
            <styles.ScanContainer>
                <styles.ScanPopup active={this.state.showPopup}>
                    <styles.SearchBar onKeyUp={(e) => this.handleScanInput(e)} autoFocus />
                    {this.state.scanOptions}
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

export default Scan;
