//React imports
import React, { Component } from 'react';

//Component imports
import {TagSearch, TagItem, BookSearch, BookTable} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'


import * as API from './../../api';

//Config
import config from './../../config'

const mapStateToProps = (state) => ({
    filteredTags: state.data.filteredTags,
    catalogueTags: state.data.catalogue.tags,
    catalogueBooks: state.data.catalogue.books
})

class Catalogue extends Component {
    constructor() {
        super()
        this.tagActive = this.tagActive.bind(this);
    }

    async componentDidMount() {
        //When component loads, get the list of filterTerms
        let rawTags = await API.Tags.getAllTags();
        let tags = [];

        rawTags.map(function(tag, i){
            let tagObj = {
                name: tag.name,
                selected: false
            }

            tags.push(tagObj);
            return tags;
        })

        store.dispatch(actions.pushAllTags(tags));

        //Update filteredTags so list isn't empty
        store.dispatch(actions.pushFilteredTags(tags));
    }

    tagActive(tagName) {
        let index = this.props.catalogueTags.findIndex(tag => tag.name === tagName)

        if (this.props.catalogueTags[index].selected) {
            return true;
        } else if (this.props.catalogueTags[index].selected === false) {
            return false;
        }
    }


    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>Catalogue</PageTitle>

                        <TagSearch />

                        {this.props.filteredTags.slice(0,15).map((tag, index) =>
                            (
                                <TagItem key={index} tagName={tag.name} active={this.tagActive(tag.name)} />
                            )
                        )}
                    </LeftColumn>

                    <RightColumn>
                        <BookSearch />


                        <div style={{marginTop: config.styles.boxSpacing}} />

                        <BookTable
                               type="catalogue"
                               colour="accent5"
                               data={this.props.catalogueBooks}
                               titles={[
                                   "Title",
                                   "Author",
                                   "Status",
                                   "Action"
                               ]}
                               buttonText="Details"
                               buttonFunction="RUN A FUNCTION HERE"
                           />
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Catalogue);
