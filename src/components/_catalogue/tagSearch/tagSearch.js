//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './tagSearchStyles.js'

import * as API from './../../../api';

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
        filteredTags = this.props.tags.filter((tag) => {
            return (tag.name.toLowerCase().indexOf(filterTerm) > -1);
        });

        store.dispatch(actions.pushFilteredTags(filteredTags));

        //SEARCH HERE
    }

    render() {
        return (
            <styles.Searchbar onKeyUp={(e) => this.updateTagsFilter(e)} placeholder="Search Tags"/>
        );
    }
}

export default connect(mapStateToProps)(TagSearch);
