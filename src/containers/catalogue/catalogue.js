//React imports
import React, { Component } from 'react';

//Component imports
import {Searchbar, FilterItem} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    filterList: state.data.catalogue.filterList
})

class Catalogue extends Component {
    constructor() {
        super()
        this.state = {
            selectedFilters: []
        };
        this.updateSelectedFilters = this.updateSelectedFilters.bind(this);
    }

    updateSelectedFilters(id) {
        this.setState({selectedFilters: this.state.selectedFilters.concat(id)});
        console.log(this.state.selectedFilters)
    };

    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Catalogue"}</PageTitle>
                        {this.props.filterList.map((filter, index) =>
                            (
                                <span key={index} onClick={() => this.updateSelectedFilters(filter.id)}>
                                    <FilterItem text={filter.text} />
                                </span>
                            )
                        )}
                    </LeftColumn>

                    <RightColumn>
                        <Searchbar />
                    </RightColumn>
                </CenterColumn>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Catalogue);
