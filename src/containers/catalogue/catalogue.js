//React imports
import React, { Component } from 'react';

//Component imports
import {Searchbar, FilterItem, BookTable} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'


import * as API from './../../api';

//Config
import config from './../../config'

const mapStateToProps = (state) => ({
    filterFilterList: state.data.filterTerms.filteredFilters,
    catalogueBooks: state.data.catalogue.books
})

class Catalogue extends Component {
    async componentDidMount() {
        let filterTags = await API.Tags.getAllTags();
        store.dispatch(actions.getFilterList(filterTags));
    }

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Catalogue"}</PageTitle>
                        <Searchbar noButton={true} filterList={true} />
                        {this.props.filterFilterList.map((filter, index) =>
                            (
                                <FilterItem key={index} text={filter.name}/>
                            )
                        )}
                    </LeftColumn>

                    <RightColumn>
                        <Searchbar />

                        <div style={{marginTop: config.styles.boxSpacing}}>
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
                        </div>
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Catalogue);
