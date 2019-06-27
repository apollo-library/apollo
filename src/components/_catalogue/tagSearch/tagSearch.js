//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './tagSearchStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../../store/actions.js'
import store from './../../../store'

const mapStateToProps = (state) => ({
    tags: state.data.catalogue.tags
})

class TagSearch extends Component {
    constructor() {
        super()

        this.updateTagsFilter = this.updateTagsFilter.bind(this);
    }

    updateTagsFilter(e) {
        let filterTerm = e.target.value.toLowerCase()

        let filteredTags = []
        //Check if a tag with the search term exists and adds to an array 'filteredTags'
        filteredTags = this.props.tags.filter((tag) => {
            return (tag.name.toLowerCase().indexOf(filterTerm) > -1);
        });

        //Send the list of tags that full under the search term to Redux
        store.dispatch(actions.pushFilteredTags(filteredTags));
    }

    render() {
        return (
            <styles.Searchbar onKeyUp={(e) => this.updateTagsFilter(e)} placeholder="Search Tags"/>
        );
    }
}

export default connect(mapStateToProps)(TagSearch);
