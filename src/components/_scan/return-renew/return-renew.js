//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './return-renewStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

import * as API from './../../../api';

//Components
import {BookDetails} from './../..';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
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
        let returnResponse = await API.Loans.returnBook(this.props.scanSearchTerm);

        if (returnResponse.status === 'success') {
            store.dispatch(actions.addScanTab(3)); //Thank you
        }
    }

    async renewBook() {
        if (this.state.renewDate !== "") {
            let renewResponse = await API.Loans.renewBook(this.props.scanSearchTerm, this.state.renewDate);

            if (renewResponse.status === 'success') {
                store.dispatch(actions.addScanTab(3)); //Thank you
            } else {
                store.dispatch(actions.addScanTab(5)); //No renew date set
            }
        }
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
                        <BookDetails />
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ReturnRenew);
