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
    filterTerms: state.data.filterTerms
})

class TagItem extends Component {
    constructor() {
        super()
        this.state = {
            active: false
        };
        this.toggleFilterState = this.toggleFilterState.bind(this);
    }

    async toggleFilterState(text) {
        let searchResponse;
        this.setState({active: !this.state.active});
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
    };


    /*

    Add search bar to tag list so that these can be searhed.

    - * Push new tags list to redux as filteredTags. then map through these values on the list in the catalogue component 

    Ok, the next thing I need to do is move the filter list on the side to a separate component.
    After that, update this file so that when you click on a filter it updates a redux 'searchQuery' state.
    Once updated we can send off an API request for the books that match that search query
        The searchbar also needs to update this same query and once that is done, do an API call

    Once we get data back, we need to update a redux state which is a list of the books we want to show on the catalogue page.
    The catalogue then needs to get this new data from redux and then update the book table with the new books.

    Maybe remove notifications

    */

    render() {
        return (
            <styles.FilterItem onClick={() => this.toggleFilterState(this.props.text)} active={this.state.active}>
                <styles.Checkmark active={this.state.active}/>
                {this.props.text}
            </styles.FilterItem>
        );
    }
}

export default connect(mapStateToProps)(TagItem);
