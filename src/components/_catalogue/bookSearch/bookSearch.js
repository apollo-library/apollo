//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './bookSearchStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    tags: state.data.catalogue.tags,
    searchQuery: state.data.searchQuery
})

class BookSearch extends Component {
    constructor() {
        super()

        this.state = {
            searchTerm: ""
        };

        this.searchBarEvent = this.searchBarEvent.bind(this);
        this.bookSearch = this.bookSearch.bind(this);
    }

    searchBarEvent(e) {
        this.setState({searchTerm: e.target.value});

        //Did we press enter?
        if (e.keyCode === 13) {
            this.bookSearch();
        }
    }

    async bookSearch() {
        await store.dispatch(actions.updateSearchTerm(this.state.searchTerm));

        let searchResponse = await API.Books.searchBooks(this.props.searchQuery);
        console.log(searchResponse)
    }

    render() {
        return (
            <styles.Searchbar autoFocus onKeyUp={(e) => this.searchBarEvent(e)} placeholder="Search Books"/>
        );
    }
}

export default connect(mapStateToProps)(BookSearch);
