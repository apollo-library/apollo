//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './withdrawStyles.js'
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

class Withdraw extends Component {
    constructor() {
        super()
        this.state = {
            studentID: "",
            dueDate: ""
        };
    }

    updateStudentID(e) {
        this.setState({studentID: e.target.value});
    }

    updateDueDate(e) {
        this.setState({dueDate: e.target.value});
    }

    async withdrawBook() {
        if (this.state.renewDate !== "") {
            let withdrawResponse = await API.Loans.withdrawBook(this.props.scanSearchTerm, this.props.studentID, this.state.dueDate);

            if (withdrawResponse.status === 'success') {
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
                            <styles.StudentIDInput
                            onChange={(e) => this.updateStudentID(e)}
                            type="text"
                            placeholder="Student ID"
                        />
                        </styles.OptionButton>
                        <styles.OptionBorder />
                        <styles.OptionButton>
                            <styles.DueDatePicker
                                onChange={(e) => this.updateDueDate(e)}
                                type="date"
                                min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                            />
                            <br />
                            <Button large onClick={() => this.withdrawBook()} colour="accent2">Withdraw</Button>
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

export default connect(mapStateToProps)(Withdraw);
