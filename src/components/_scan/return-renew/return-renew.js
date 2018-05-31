//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './return-renewStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scannedBook: state.data.scannedBook,
    scanSearchTerm: state.ui.scanSearchTerm
})

class ReturnRenew extends Component {
    constructor() {
        super()
        this.state = {
            renewDate: ""
        };
    }

    updateRenewDate(e) {
        this.setState({renewDate: e.target.value});
        console.log(this.state.renewDate)
    }

    async returnBook() {
        await API.Loans.returnBook(this.props.scanSearchTerm);
    }

    async renewBook() {
         await API.Loans.renewBook(this.props.scanSearchTerm, this.state.renewDate);
    }

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn>
                        <styles.OptionButton>
                            <Button large onClick={() => this.returnBook()} colour="accent5">Return</Button>
                        </styles.OptionButton>
                        <styles.OptionBorder />
                        <styles.OptionButton>
                            <styles.RenewDatePicker
                                onChange={(e) => this.updateRenewDate(e)}
                                type="date"
                                min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                            />
                            <br />
                            <Button large onClick={() => this.renewBook()} colour="accent4">Renew</Button>
                        </styles.OptionButton>
                    </LeftColumn>
                    
                    <RightColumn>

                        <p>{this.props.scannedBook.title}</p>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ReturnRenew);
