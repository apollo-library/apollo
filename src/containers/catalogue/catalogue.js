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
    catalogueBooks: state.data.catalogue.books
})

class Catalogue extends Component {
    async componentDidMount() {
        //When component loads, get the list of filterTerms
        let tags = await API.Tags.getAllTags();
        store.dispatch(actions.pushAllTags(tags));

        //Update filteredTags so list isn't empty
        store.dispatch(actions.pushFilteredTags(tags));
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
                                <TagItem key={index} tagName={tag.name} />
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
