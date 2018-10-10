//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './scanStyles.js'
import {Button} from './../../../globalStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

//Components
import {DatePicker, Success, Input, Error} from './../../';

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
            scanInput: "",
            scanStage: 'start',
            scanBox: []
        };

        this.resetScan = this.resetScan.bind(this);
        this.enterBookID = this.enterBookID.bind(this);
        this.enterCandidateNumber = this.enterCandidateNumber.bind(this);
        this.withdrawBook = this.withdrawBook.bind(this);
        this.renewBook = this.renewBook.bind(this);
        this.returnBook = this.returnBook.bind(this);
    }

    componentDidMount() {
        this.switchDisplay();
    }


    async enterBookID(e) {
        this.setState({scanInput: e.target.value})
        // e.persist();
        //Check for enter
        if (e.keyCode === 13) {
            //Run a reg-ex to check if the input to the scan box mathes the format of the Challoners barcodes on the books
            if (this.state.scanInput.match(/[R|r]\d{4,5}[a-z|A-Z](0577|057)/g)) {
                let data = await API.Books.getScanBookInfo(this.state.scanInput);
                this.setState({scannedBookData: data});

                if (data.loanID) {
                    //Renew / Return
                    // e.target.value = "";
                    this.setState({scanStage: 'return-renew'});
                    this.switchDisplay()
                    
                } else {
                    //Withdraw
                    // e.target.value = "";
                    this.setState({scanStage: 'withdraw-id'});
                    this.switchDisplay()
                    
                }
            }
        }
        console.log(this.state.scannedBookData);
    }

    async enterCandidateNumber(e) {
        this.setState({candidateNumber: e.target.value})
        // e.persist();

        //Check for enter
        if (e.keyCode === 13) {
            //Run a reg-ex to check if the input to the scan box mathes the format of the Challoners barcodes on the books
            
            let data = await API.Users.getUser(this.state.candidateNumber);
            
            if (data.code === "003") { // Some error
                console.log('error');
            } else { // Success
                console.log(data);
                // e.target.value = "";
                this.setState({userData: data.data, studentId: data.data._id});
                this.setState({scanStage: 'withdraw-date'});
                this.switchDisplay()
            }
            
        }
        console.log(this.state.candidateNumber);
    }

    async withdrawBook(dueDate) {
        const withdrawResponse = await API.Loans.withdrawBook(this.state.scanInput, this.state.studentId, dueDate);
        if (withdrawResponse.status === 'success') {
           this.setState({scanStage: 'success', successMessage: 'Book successfully withdrawn'});
           this.switchDisplay()
        } else {
            //Error
        }
    }

    async renewBook(renewDate) {
        const renewResponse = await API.Loans.renewBook(this.state.scanInput, renewDate);
        if (renewResponse.status === "success") {
            this.setState({scanStage: 'success', successMessage: 'Book successfully renewed'});
            this.switchDisplay()
        } else {
            //error
        }
        
    }

    async returnBook() {
        const returnResponse = await API.Loans.returnBook(this.state.scanInput);
        if (returnResponse.status === "success") {
            this.setState({scanStage: 'success', successMessage: 'Book successfully returned'});
            this.switchDisplay()
        } else {
            //error
        }
    }

    resetScan() {
        this.setState({scanStage: 'start'})
        this.setState({scannedBookData: {}, successMessage: '', candidateNumber: '', userData: {}})
        this.switchDisplay(true)
    }

    switchDisplay(override) {
        if (override) {
            this.setState({scanBox: <Input callback={this.enterBookID} />});
            return;
        }

        switch(this.state.scanStage) {
            case 'start':
                this.setState({scanBox: <Input callback={this.enterBookID} />})
                break;
            case 'withdraw-id':
                this.setState({scanBox: <Input callback={this.enterCandidateNumber} />})
                break;
            case 'withdraw-date':
                this.setState({scanBox: <DatePicker callback={this.withdrawBook} buttonText={"Withdraw"} />})
                break;
            case 'return-renew':
                this.setState({scanBox: [<Button colour="primary" onClick={() => this.returnBook()}>Return</Button>,<DatePicker callback={this.renewBook} buttonText={"Renew"} />]})
                break;
            case 'success':
                this.setState({scanBox: <Success message={this.state.successMessage} />})
                break;
            case 'error':
                this.setState({scanBox: <Error message={this.state.errorMessage}/> })
            default:
                break;
        }
        
    }

    render() {

        // Decide what to display
        
        
        return (
            <styles.ScanContainer>
                <styles.ScanPopup active={this.state.showPopup}>
                    <h2>{this.state.scanStage}</h2>
                    <styles.ItemContainer>
                        {this.state.scanBox}
                    </styles.ItemContainer>
                        


                    <styles.BookInfo>
                        <styles.BookInfoTitle>
                            {this.state.scannedBookData.title}
                        </styles.BookInfoTitle>

                        <styles.BookInfoAuthor>
                            {this.state.scannedBookData.author}
                        </styles.BookInfoAuthor>
                    </styles.BookInfo>
                    <Button colour="primary" onClick={() => this.resetScan()}>Reset</Button>
                </styles.ScanPopup>

                <styles.ScanButton>
                    <Button colour="primary" onClick={() => this.setState({showPopup: !this.state.showPopup})}>Scan</Button>
                </styles.ScanButton>
            </styles.ScanContainer>
        );
        
    }
}

export default Scan;

