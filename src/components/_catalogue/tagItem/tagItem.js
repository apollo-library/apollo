//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './tagItemStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    searchQuery: state.data.searchQuery
})

class TagItem extends Component {
    constructor() {
        super()
        this.state = {
            active: false
        };
        this.toggleTagState = this.toggleTagState.bind(this);
    }

    async toggleTagState(tagName) {
        let searchResponse;
        this.setState({active: !this.state.active});


        //Write this function in the reducer
        store.dispatch(actions.updateFilterTags(tagName));

        //SEARCH HERE

        //THIS IS OLD CODE JUST HREE FOR REFERENCE
        /*
        if (this.state.active) {
            store.dispatch(actions.updateFilterList(text, "remove"));
            searchResponse = await API.Books.searchBooks(this.props.filterTerms);
        } else {
            store.dispatch(actions.updateFilterList(text, "add"));
            searchResponse = await API.Books.searchBooks(this.props.filterTerms);
            console.log(searchResponse)
        }

        if (searchResponse.message === "Success") {
            store.dispatch(actions.setCatalogueBooks(searchResponse.data));
        }
        */
    };


    /*


    Once updated we can send off an API request for the books that match that search query
        The searchbar also needs to update this same query and once that is done, do an API call

    Once we get data back, we need to update a redux state which is a list of the books we want to show on the catalogue page.
    The catalogue then needs to get this new data from redux and then update the book table with the new books.

    Maybe remove notifications

    */

    render() {
        console.log(this.props.searchQuery)
        return (
            <styles.FilterItem onClick={() => this.toggleTagState(this.props.tagName)} active={this.state.active}>
                <styles.Checkmark active={this.state.active}/>
                {this.props.tagName}
            </styles.FilterItem>
        );
    }
}

export default connect(mapStateToProps)(TagItem);
