//React imports
import React, { Component } from 'react';

//Component imports
import {Searchbar, FilterItem, BookTable} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'

import * as API from './../../api';

//Config
import config from './../../config'

const mapStateToProps = (state) => ({
    filterList: state.data.catalogue.filterList,
    catalogueBooks: state.data.catalogue.books
})

class Catalogue extends Component {
    constructor() {
        super()
        this.state = {
            filterList: []
        };
    }

    async componentDidMount() {
        let filterTags = await API.Tags.getAllTags();
        this.setState({filterList: filterTags});
        //store.dispatch(actions.getFilterList(filterTags));
    }

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Catalogue"}</PageTitle>
                        {this.state.filterList.map((filter, index) =>
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
