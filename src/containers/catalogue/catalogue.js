//React imports
import React, { Component } from 'react';

//Component imports
import {Searchbar, FilterItem} from './../../components';

import {CenterColumn, LeftColumn, RightColumn, PageTitle} from './../../globalStyles.js'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    filterList: state.globalData.catalogue.filterList
})

class Catalogue extends Component {
    render() {
        return (
            <div>
                <CenterColumn>
                    <LeftColumn small>
                        <PageTitle>{"Catalogue"}</PageTitle>
                        {this.props.filterList.map((filter, index) =>
                            (
                                <FilterItem key={index} text={filter.text} id={filter.id}/>
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
