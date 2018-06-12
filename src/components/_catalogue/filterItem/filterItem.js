//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './filterItemStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    filterTerms: state.data.filterTerms
})

class FilterItem extends Component {
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

    render() {
        return (
            <styles.FilterItem onClick={() => this.toggleFilterState(this.props.text)} active={this.state.active}>
                <styles.Checkmark active={this.state.active}/>
                {this.props.text}
            </styles.FilterItem>
        );
    }
}

export default connect(mapStateToProps)(FilterItem);
