//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './scanStyles.js';
import {Button} from './../../../globalStyles.js';

import * as API from './../../../api';

//Components
import {DatePicker, Success, Input, Error} from './../../';

class Scan extends Component {
    constructor() {
        super()

        this.state = {
            showPopup: false,
            scannedBookData: {},
            scanOptions: null,
            scanInput: "",
            scanStage: 'start',
            scanTitle: '',
            scanBox: [],
            error: [],
            userData: []
        };
    }

    componentDidMount = () => {
        this.switchDisplay();
    }

    componentWillUnmount = () => {
        if (this.resetTimer) this.resetTimer.clearTimeout();
    }

    enterBookID = async (e) => {
        this.setState({scanInput: e.target.value})
        if (e.keyCode === 13) {  //Check for enter
            // Run a reg-ex to check if the input to the scan box mathes the format of the Challoner's barcodes on the books
            if (this.state.scanInput.match(/[R|r]\d{4,5}[a-z|A-Z](0577|057)/g)) {
                const data = await API.Books.getScanBookInfo(this.state.scanInput);
                console.log(data)
                if (data.loanID) {
                    const loan = await API.Loans.getLoanInformation(data.loanID);
                    console.log(loan.data.loan.dueDate)
                    // Check due date to see if overdue

                    let now = new Date();
                    let due = new Date(loan.data.loan.dueDate)
                    now.setHours(0,0,0,0);
                    console.log(due,now)
                    if (due < now) console.log('overdue')
                    else console.log('on time')

                    let loans = 0;
                    if (loan.data.user.loanIDs) loans = loan.data.user.loanIDs.length;
                    this.setState({
                        userData:   [<styles.BookInfoTitle key={0}>{loan.data.user.forename + ' ' + loan.data.user.surname + ' | ' + loan.data.user.year + '-' + loan.data.user.reg}</styles.BookInfoTitle>,
                                    <styles.BookInfoAuthor key={1}>{'Books on loan: ' + loans}</styles.BookInfoAuthor>]
                    });
                }
                
                if (data.message === 'Book not found') this.setError('Book not in system'); // Book not found in system
                else {
                    this.setState({scannedBookData: data});
                    if (data.loanID) this.setState({scanStage: 'return-renew'});    // Renew / Return
                    else this.setState({scanStage: 'withdraw-id'});                 // Withdraw
                    this.switchDisplay();
                }
            } else this.setError('Book not in system'); // REGEX not compatible
        }
    }

    enterCandidateNumber = async (e) => {
        this.setState({candidateNumber: e.target.value})
        if (e.keyCode === 13) {  //Check for enter
            const data = await API.Users.getUser(this.state.candidateNumber);
            if (data.code === "003") this.setError('User not found'); // Candidate number not found
            else {
                let loans = 0;
                if (data.data.loanIDs) loans = data.data.loanIDs.length;
                this.setState({
                    userData:   [<styles.BookInfoTitle>{data.data.forename + ' ' + data.data.surname + ' | ' + data.data.year + '-' + data.data.reg}</styles.BookInfoTitle>,
                                <styles.BookInfoAuthor>{'Books on loan: ' + loans}</styles.BookInfoAuthor>],
                    studentId: data.data._id,
                    scanStage: 'withdraw-date',
                });
                this.switchDisplay();
            }
        }
    }

    withdrawBook = async (dueDate) => {
        const withdrawResponse = await API.Loans.withdrawBook(this.state.scanInput, this.state.studentId, dueDate);
        if (withdrawResponse.status === 'success') {
           this.setState({scanStage: 'success', successMessage: 'Book successfully withdrawn'});
           this.switchDisplay();
        } else this.setError('Error withdrawing book');
    }

    renewBook = async(renewDate) => {
        const renewResponse = await API.Loans.renewBook(this.state.scanInput, renewDate);
        if (renewResponse.status === "success") {
            this.setState({scanStage: 'success', successMessage: 'Book successfully renewed'});
            this.switchDisplay();
        } else this.setError('Error renewing book');
    }

    returnBook = async () => {
        const returnResponse = await API.Loans.returnBook(this.state.scanInput);
        if (returnResponse.status === "success") {
            this.setState({scanStage: 'success', successMessage: 'Book successfully returned'});
            this.switchDisplay();
        } else this.setError('Error returning book');
    }

    resetScan = () => {
        // Clear data and reset scan box
        this.setState({scanStage: 'start', scannedBookData: {}, successMessage: '', candidateNumber: '', userData: []});
        this.switchDisplay(true);
    }

    setError = (message) => {
        this.setState({error: <Error message={message} />});
    }

    resetError = () => {
        // Reset all error messages
        this.setState({error: []});
    }

    switchDisplay = (override) => {
        this.resetError(); // Presuming no errors are carried over

        if (override) {
            // This to get around a quirk of setState taking time
            this.setState({
                scanTitle: 'Scan Barcode',
                scanBox: <Input callback={this.enterBookID} />
            });
            return;
        }

        switch(this.state.scanStage) {
            case 'start':
                this.setState({
                    scanTitle: 'Scan Barcode',
                    scanBox: <Input callback={this.enterBookID} />
                });
                break;
            case 'withdraw-id':
                this.setState({
                    scanTitle: 'Enter User ID',
                    scanBox: <Input callback={this.enterCandidateNumber} />
                });
                break;
            case 'withdraw-date':
                this.setState({
                    scanTitle: 'Enter Loan End Date',
                    scanBox: <DatePicker callback={this.withdrawBook} buttonText={"Withdraw"} />
                });
                break;
            case 'return-renew':
                this.setState({
                    scanTitle: 'Return or Renew Book',
                    scanBox: [<Button colour="primary" onClick={() => this.returnBook()} key={0}>Return</Button>,<DatePicker key={1} callback={this.renewBook} buttonText={"Renew"} />]
                });
                break;
            case 'success':
                this.setState({
                    scanTitle: 'Success',
                    scanBox: <Success message={this.state.successMessage} />
                });
                this.resetTimer = setTimeout(() => {
                    this.resetScan();
                }, 3000);
                break;
            default:
                break;
        }
    }

    render = () => {
            return (
            <styles.ScanContainer>
                <styles.ScanPopup active={this.state.showPopup}>
                    <h2>{this.state.scanTitle}</h2>
                    <styles.ItemContainer>
                        {this.state.scanBox}
                        {this.state.error}
                    </styles.ItemContainer>
                    <styles.BottomInfo>
                        <styles.ResetButton>
                            <Button colour="accent6" onClick={() => this.resetScan()}>Reset</Button>
                        </styles.ResetButton>
                        <styles.BookInfo>
                            <styles.BookInfoTitle>
                                {this.state.scannedBookData.title}
                            </styles.BookInfoTitle>

                            <styles.BookInfoAuthor>
                                {this.state.scannedBookData.author}
                            </styles.BookInfoAuthor>
                            {this.state.userData}
                        </styles.BookInfo>
                    </styles.BottomInfo>
                </styles.ScanPopup>

                <styles.ScanButton>
                    <Button colour="primary" onClick={() => this.setState({showPopup: !this.state.showPopup})}>Scan</Button>
                </styles.ScanButton>
            </styles.ScanContainer>
        );

    }
}

export default Scan;
