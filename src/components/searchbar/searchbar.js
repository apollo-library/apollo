//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './searchbarStyles.js'
import {Button} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'

const mapStateToProps = (state) => ({
    currentPage: state.data.currentPage
})

class Searchbar extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.submitSearchTerm = this.submitSearchTerm.bind(this);
    }

    updateSearchTerm(e) {
        if (e.keyCode === 13) {
            //We pressed enter
            this.submitSearchTerm();
        }
        this.setState({searchTerm: e.target.value});
    }

    submitSearchTerm() {
        if (this.props.currentPage === "/catalogue") {
            if (this.state.searchTerm !== "") {
                store.dispatch(actions.updateFilterList(this.state.searchTerm, "search"));
            }
        } else if (this.props.currentPage === "/scan") {
            console.log("enter in scan document")
            console.log(this.state.searchTerm)
        }
    }

    render() {
        return (
            <styles.SearchBar>
                <styles.SearchBox onKeyUp={(e) => this.updateSearchTerm(e)} type="text" placeholder="Search"/>
                <Button onClick={() => this.submitSearchTerm()} colour="primary">Search</Button>
            </styles.SearchBar>
        );
    }
}

export default connect(mapStateToProps)(Searchbar);
