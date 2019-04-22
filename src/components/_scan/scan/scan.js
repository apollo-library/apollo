//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './scanStyles.js';
import {Button} from './../../../globalStyles.js';

import * as API from './../../../api';

//Components
import {DatePicker, Success, Input, Error, MultiInput} from './../../';

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
            userData: [],
            newBookID: "",
            newBookISBN10: "",
            newBookISBN13: "",
            newBookTitle: "",
            newBookAuthor: "",
            newBookPublisher: ""
        };
    }

    componentDidMount = () => {
        this.switchDisplay();
    }

    componentWillUnmount = () => {
        if (this.resetTimer)  clearInterval(this.resetTimer);
    }

    enterBookID = async (e) => {
        this.setState({scanInput: e.target.value})
        if (e.keyCode === 13) {  //Check for enter
            // Run a reg-ex to check if the input to the scan box mathes the format of the Challoner's barcodes on the books
            if (this.state.scanInput.match(/[R|r]\d{4,5}[a-z|A-Z](0577|057)/g)) {
                const data = await API.Books.getScanBookInfo(this.state.scanInput);
                if (data.loanID) {
                    const loan = await API.Loans.getLoanInformation(data.loanID);
                    let loans = 0;
                    if (loan.data.user.loanIDs) loans = loan.data.user.loanIDs.length;
                    console.log(loan.data.user)
                    let user = await API.Users.getUser(loan.data.user._id);
                    console.log(user)
                    let userData = [
                                <styles.BookInfoTitle key={0}>{loan.data.user.forename + ' ' + loan.data.user.surname + ' | ' + loan.data.user.year + '-' + loan.data.user.reg}</styles.BookInfoTitle>,
                                <styles.BookInfoAuthor key={1}>{'Books on loan: ' + loans}</styles.BookInfoAuthor>
                    ];
                    if (user.data.fine !== 0) userData.push(<styles.BookInfoFine key={2}>{'Fine detected - please pay £' + (user.data.fine / 100).toFixed(2)}</styles.BookInfoFine>)
                    this.setState({
                        userData: userData
                    });
                }
                
                if (data.message === 'Book not found') {
                    // Book not found in system - give option to add book
                    this.setState({newBookID: this.state.scanInput});
                    await this.setState({scanStage: 'add-book-isbn'});
                }
                else {
                    this.setState({scannedBookData: data});
                    if (data.loanID) await this.setState({scanStage: 'return-renew'});    // Renew / Return
                    else await this.setState({scanStage: 'withdraw-id'});                 // Withdraw
                }
                this.switchDisplay();
            } else this.setError('Not a barcode'); // REGEX not compatible
        }
    }

    // Handlers for input boxes
    updateBookISBN10 = e => this.setState({newBookISBN10: e.target.value});
    updateBookISBN13 = e => this.setState({newBookISBN13: e.target.value});
    updateBookTitle = e => this.setState({newBookTitle: e.target.value});
    updateBookAuthor = e => this.setState({newBookAuthor: e.target.value});
    updateBookPublisher = e => this.setState({newBookPublisher: e.target.value});

    submitISBN = async () => {
        await this.setState({scanStage: 'add-book-details'});
        this.switchDisplay();
    }

    addBook = async () => {
        let data = {
            id: this.state.newBookID,
            isbn10: this.state.newBookISBN10,
            isbn13: this.state.newBookISBN13,
            title: this.state.newBookTitle,
            author: this.state.newBookAuthor,
            publisher: this.state.newBookPublisher
        }
        let status = await API.Books.addBook(data);
        if (status) {
            await this.setState({scanStage: 'success', successMessage: 'Book successfully added to system'});
            this.switchDisplay();
        } else this.setError('Error adding book');
    }


    enterCandidateNumber = async (e) => {
        this.setState({candidateNumber: e.target.value})
        if (e.keyCode === 13) {  //Check for enter
            const data = await API.Users.getUser(this.state.candidateNumber);
            if (data.code === "003") this.setError('User not found'); // Candidate number not found
            else {
                let loans = 0;
                console.log(data.data)
                if (data.data.loans) loans = data.data.loans.length;
                await this.setState({
                    userData:   [<styles.BookInfoTitle key={0}>{data.data.forename + ' ' + data.data.surname + ' | ' + data.data.year + '-' + data.data.reg}</styles.BookInfoTitle>,
                                <styles.BookInfoAuthor key={1}>{'Books on loan: ' + loans}</styles.BookInfoAuthor>],
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
           await this.setState({scanStage: 'success', successMessage: 'Book successfully withdrawn'});
           this.switchDisplay();
        } else this.setError('Error withdrawing book');
    }

    renewBook = async(renewDate) => {
        const renewResponse = await API.Loans.renewBook(this.state.scanInput, renewDate);
        if (renewResponse.status === "success") {
            await this.setState({scanStage: 'success', successMessage: 'Book successfully renewed'});
            this.switchDisplay();
        } else this.setError('Error renewing book');
    }

    returnBook = async () => {
        const returnResponse = await API.Loans.returnBook(this.state.scanInput);
        if (returnResponse.status === "success") {
            await this.setState({scanStage: 'success', successMessage: 'Book successfully returned'});
            this.switchDisplay();
        } else this.setError('Error returning book');
    }

    resetScan = async () => {
        // Clear data and reset scan box
        await this.setState({scanStage: 'start', scannedBookData: {}, successMessage: '', candidateNumber: '', userData: []});
        this.switchDisplay();
    }

    setError = (message) => {
        this.setState({error: <Error message={message} />});
    }

    resetError = async () => {
        // Reset all error messages
        await this.setState({error: []});
    }

    switchDisplay = () => {
        this.resetError(); // Presuming no errors are carried over

        switch(this.state.scanStage) {
            case 'start':
                this.setState({
                    scanTitle: 'Scan Barcode',
                    scanBox: <Input callback={this.enterBookID} />
                });
                break;
            case 'add-book-isbn':
                this.setState({
                    scanTitle: 'Add ISBN 10 and ISBN13',
                    scanBox: [
                        <MultiInput title="ISBN10" val={this.state.newBookISBN10} changeCallback={this.updateBookISBN10} key={0}></MultiInput>,
                        <MultiInput title="ISBN13" val={this.state.newBookISBN13} changeCallback={this.updateBookISBN13} key={1}></MultiInput>,
                        <Button colour="primary" onClick={() => this.submitISBN()} key={2}>Submit</Button>
                    ]
                });
                break;
            case 'add-book-details':
                this.setState({
                    scanTitle: 'Add Book Details',
                    scanBox: [
                        <MultiInput title="Title" val={this.state.newBookTitle} changeCallback={this.updateBookTitle} key={3}></MultiInput>,
                        <MultiInput title="Author" val={this.state.newBookAuthor} changeCallback={this.updateBookAuthor} key={4}></MultiInput>,
                        <MultiInput title="Publisher" val={this.state.newBookPublisher} changeCallback={this.updateBookPublisher} key={5}></MultiInput>,
                        <Button colour="primary" onClick={() => this.addBook()} key={6}>Add Book</Button>
                    ]
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
