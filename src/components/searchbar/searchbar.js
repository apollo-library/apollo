//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './searchbarStyles.js'
import {Button} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'

import * as API from './../../api';

const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage,
    filterTerms: state.data.filterTerms
})

class Searchbar extends Component {
    constructor() {
        super()
        this.state = {
            scanSearchTerm: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.submitSearchTerm = this.submitSearchTerm.bind(this);
    }

    updateSearchTerm(e) {
        if (e.keyCode === 13) {
            //We pressed enter
            this.submitSearchTerm();
        }
        this.setState({scanSearchTerm: e.target.value});
    }

    async submitSearchTerm() {
        if (this.props.currentPage === "/catalogue") {
            store.dispatch(actions.updateFilterList(this.state.scanSearchTerm, "search"));
            let searchResponse = await API.Books.searchBooks(this.props.filterTerms);

            if (searchResponse.message === "Success") {
                store.dispatch(actions.setCatalogueBooks(searchResponse.data));
            }

        } else if (this.props.currentPage === "/scan") {
            store.dispatch(actions.resetScanTab(0));

            let scannedBook = await API.Books.getScanBookInfo(this.state.scanSearchTerm);
            store.dispatch(actions.setScanSearchTerm(this.state.scanSearchTerm));
            store.dispatch(actions.setScannedBook(scannedBook));

            if (scannedBook.loanID) {
                store.dispatch(actions.addScanTab(2)); //Renew / Return
            } else {
                store.dispatch(actions.addScanTab(1)); //Withdraw
            }
        }
    }

    render() {
        return (
            <styles.SearchBar>
                <styles.SearchBox onKeyUp={(e) => this.updateSearchTerm(e)} type="text" placeholder={this.props.currentPage === "/catalogue" ? "Search" : "Scan"} autoFocus/>
                <Button onClick={() => this.submitSearchTerm()} colour="primary">{this.props.currentPage === "/catalogue" ? "Search" : "Scan"}</Button>
            </styles.SearchBar>
        );
    }
}

export default connect(mapStateToProps)(Searchbar);
