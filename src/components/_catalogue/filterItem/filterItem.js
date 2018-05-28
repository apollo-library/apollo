//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './filterItemStyles.js'

//Redux
import { actions } from './../../../store/actions.js'
import store from './../../../store'

class FilterItem extends Component {
    constructor() {
        super()
        this.state = {
            active: false
        };
        this.toggleFilterState = this.toggleFilterState.bind(this);
    }

    toggleFilterState(id) {
        this.setState({active: !this.state.active});
        if (this.state.active) {
            store.dispatch(actions.updateFilterList(id, "remove"));
        } else {
            store.dispatch(actions.updateFilterList(id, "add"));
        }
    };

    render() {
        return (
            <styles.FilterItem onClick={() => this.toggleFilterState(this.props.id)} active={this.state.active}>
                <styles.Checkmark active={this.state.active}/>
                {this.props.text}
            </styles.FilterItem>
        );
    }
}

export default FilterItem;