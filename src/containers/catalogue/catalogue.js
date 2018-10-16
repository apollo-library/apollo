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
        this.state = {
            tagsToDisplay: 15,
        };
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

    componentWillUnmount() {
        //Reset books books being displayed
        store.dispatch(actions.resetCatalogueBooks());
        store.dispatch(actions.resetSearchQuery());
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
        const extraBookNum = {
            'textAlign': 'center',
            'color': config.colours.midGrey,
            'cursor': 'pointer',
        }

        let tagsDisplayed = 0;
        let activeTags = 0;

        return (

            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>Catalogue</PageTitle>

                        <TagSearch />

                        {this.props.catalogueTags.map((tag, index) => {
                            if (this.tagActive(tag.name)) {
                                activeTags++;
                                return <TagItem key={index} tagName={tag.name} active={true} />
                            }
                        })}

                        {this.props.filteredTags.map((tag, index) => {
                            if (!this.tagActive(tag.name) && tagsDisplayed < this.state.tagsToDisplay) {
                                tagsDisplayed++;
                                return <TagItem key={index} tagName={tag.name} active={false} />
                            }
                        })}

                        <p
                            style={extraBookNum}
                            onClick={() => this.setState({tagsToDisplay: this.state.tagsToDisplay + 15})}
                            onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                            onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                            >+ {
                                tagsDisplayed < this.state.tagsToDisplay
                                ? 0
                                : this.props.filteredTags.length - tagsDisplayed - activeTags
                            } more</p>

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
                           />
                    </RightColumn>
                </CenterColumn>
                <div style={{marginTop: config.styles.boxSpacing}} />
            </div>
        );
    }
}

export default connect(mapStateToProps)(Catalogue);
