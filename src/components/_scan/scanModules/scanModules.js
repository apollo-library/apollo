//React imports
import React, { Component } from 'react';

//Component imports
import {ContentTabs, Searchbar, ReturnRenew, Withdraw} from './../..';

import {CenterColumn, RightColumn, BottomLogo} from './../../../globalStyles.js'

import logo from './../../../assets/images/logo.svg'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scanStatesToShow: state.ui.scanStatesToShow
})

class ScanModules extends Component {
    /* calculateScanModules() {
        let secondModule = null;
        let thirdModule = null;
        let fourthModule = null;
        let fifthModule = null;
        let sixthModule = null;
        let combinedModules = [];

        for (let i = 0; i < this.props.scanStatesToShow.length; i++) {
            switch (this.props.scanStatesToShow[i]) {
                case 0: //Initial state, just the search bar at the top of the page
                    break;
                case 1: //Scanned barcode, display book info. Show the next options for either withdraw or return / renew
                    let buttonsToRender = null;


                    //todo: wrap this in a check to see if scanned book returns [] when no book is found

                    //todo: remove the ! below this line
                    if (this.props.scannedBook.loanID) {
                        //Book IS on loan
                        buttonsToRender = <styles.OptionButtons>
                            <styles.OptionButton>
                                <Button onClick={() => this.returnBook(this.props.scanSearchTerm)} colour="accent5">Return</Button>
                            </styles.OptionButton>
                            <styles.OptionButton>
                                <Button onClick={() => this.showRenewBookOptions()} colour="accent4">Renew</Button>
                            </styles.OptionButton>
                        </styles.OptionButtons>
                    } else {
                        //Book IS NOT on loan
                        buttonsToRender = <styles.OptionButtons>
                            <styles.OptionButton>
                                <styles.StudentInput type="text" placeholder="Search" autoFocus></styles.StudentInput>
                            </styles.OptionButton>
                            <styles.OptionButton>
                                <styles.WithdrawDatePicker
                                    onChange={(e) => this.updateRenewDate(e)}
                                    type="date"
                                    min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                                />
                            <Button colour="accent3">Submit</Button>
                            </styles.OptionButton>
                        </styles.OptionButtons>
                    }

                    secondModule = <styles.SecondModule key={this.props.scanState}>
                        <styles.BookDetails>
                            <styles.BookTitle>{this.props.scannedBook.title}</styles.BookTitle>
                            <styles.BookAuthor>{this.props.scannedBook.author}</styles.BookAuthor>
                        </styles.BookDetails>
                        {buttonsToRender}
                    </styles.SecondModule>

                    break;
                case 2: //WITHDRAW. Show options for selecting a student and the due date
                    thirdModule = <p>Im state 2</p>
                    break;
                case 3: //RENEW. Show option for selecting how many weeks to renew book for
                    fourthModule = <styles.FourthModule>
                        <styles.RenewDatePicker
                            onChange={(e) => this.updateRenewDate(e)}
                            type="date"
                            min={new Date().toISOString().substring(0, new Date().toISOString().indexOf("T"))}
                        />
                        <Button onClick={() => this.renewBook(this.props.scanSearchTerm, this.state.renewDate)} colour="accent4">Submit</Button>
                    </styles.FourthModule>
                    break;
                case 4: //Thank you message before automatically moving on back to initial state
                    fifthModule = <p key={this.props.scanState}>Thank you!</p>
                    break;
                case 5: //No book found after scanned
                    sixthModule = <p>No book found</p>
                    break;
                default: //Default case for switch statement
                    combinedModules.push(<p>Please refresh the page</p>)
            }
        }

        combinedModules.push(secondModule);
        combinedModules.push(thirdModule);
        combinedModules.push(fourthModule);
        combinedModules.push(fifthModule);
        combinedModules.push(sixthModule);

        return combinedModules;
    }*/

    /* async returnBook(bookID) {
        console.log("Book returned")
        let returnStatus = await API.Loans.returnBook(bookID);
        if (returnStatus.status === 'success') {
            store.dispatch(actions.setScanState(4));
        }
    }

    showRenewBookOptions() {
        store.dispatch(actions.setScanState(3));
    }

    updateRenewDate(e) {
        this.setState({renewDate: e.target.value});
    }

    async renewBook(bookID, dueDate) {
        console.log("Book returned")
        let renewStatus = await API.Loans.renewBook(bookID, dueDate);
        if (renewStatus.status === 'success') {
            store.dispatch(actions.setScanState(4));
        }
    } */


    render() {
		let tabReturns = [
			{
				title: "Scan",
				componentToShow: <Searchbar />,
                colour: "primary",
				active: true
			},
			{
				title: "Withdraw",
				componentToShow: <Withdraw />,
				colour: "accent2",
				active: false
			},
            {
				title: "Return / Renew",
				componentToShow: <ReturnRenew />,
                colour: "accent5",
				active: false
			},
            {
				title: "Thank You",
				componentToShow: <ReturnRenew />,
                colour: "accent3",
				active: false
			},
            {
				title: "Error", //No book found after scan
				componentToShow: <ReturnRenew />,
                colour: "accent2",
				active: false
			},
            {
				title: "Error", //No renew date set
				componentToShow: <ReturnRenew />,
                colour: "accent2",
				active: false
			},
            {
				title: "Error", //Error when returning
				componentToShow: <ReturnRenew />,
                colour: "accent2",
				active: false
			}
		];

        return (
            <CenterColumn>
                <RightColumn style={{flex: 1}}>
                    <ContentTabs tabs={
                        this.props.scanStatesToShow.map((tab, index) => {
                            if (index === this.props.scanStatesToShow.length - 1) {
                                tabReturns[tab].active = true;
                            } else {
                                tabReturns[tab].active = false;
                            }

                            if (tab < tabReturns.length) return tabReturns[tab]
                            else console.log("Scan tab does not exist")

                            return null;
                        })
                    } />
                    <BottomLogo src={logo} />
                </RightColumn>
            </CenterColumn>
        );
    }
}

export default connect(mapStateToProps)(ScanModules);
