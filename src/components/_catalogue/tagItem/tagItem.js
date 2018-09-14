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
        this.setState({active: !this.state.active});

        await store.dispatch(actions.updateFilterTags(tagName));


        let searchResponse = await API.Books.searchBooks(this.props.searchQuery);
        if (searchResponse.message = "Success") {
            //Update redux state with new books
            store.dispatch(actions.pushCatalogueBooks(searchResponse.data));
        }


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

    Fix API for new query data
    Send search request to API
    present book data in table


    when you select a tag, it should appear above the serach bar or below the main search bar and give you the ability to click
    remove on that tag to deselect it and stop it from doing any filtering

    Once we get data back, we need to update a redux state which is a list of the books we want to show on the catalogue page.
    The catalogue then needs to get this new data from redux and then update the book table with the new books.

    Maybe remove notifications

    */

    render() {
        return (
            <styles.FilterItem onClick={() => this.toggleTagState(this.props.tagName)} active={this.state.active}>
                <styles.Checkmark active={this.state.active}/>
                {this.props.tagName}
            </styles.FilterItem>
        );
    }
}

export default connect(mapStateToProps)(TagItem);
