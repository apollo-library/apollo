//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './bookSearchStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

//Connect Redux state to local props
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

    //Update the search term when we press enter
    searchBarEvent(e) {
        this.setState({searchTerm: e.target.value});

        //Did we press enter?
        if (e.keyCode === 13) {
            this.bookSearch();
        }
    }

    //Search books and update the redux state so it can be used in the catlogue
    async bookSearch() {
        await store.dispatch(actions.updateSearchTerm(this.state.searchTerm));

        let searchResponse = await API.Books.searchBooks(this.props.searchQuery);

        if (searchResponse.message === "Success") {
            //Update redux state with new books
            store.dispatch(actions.pushCatalogueBooks(searchResponse.data));
        } else {
            //Send empty array for the books
            store.dispatch(actions.pushCatalogueBooks([]));
        }
    }

    render() {
        return (
            <styles.Searchbar autoFocus onKeyUp={(e) => this.searchBarEvent(e)} placeholder="Search Books"/>
        );
    }
}

export default connect(mapStateToProps)(BookSearch);
