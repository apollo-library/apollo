//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './filterItemStyles.js'

//Config
import config from '../../../config'

class FilterItem extends Component {
    constructor() {
        super()
        this.state = {
            checkmarkActive: false
        };
        this.toggleCheckmark = this.toggleCheckmark.bind(this);
    }

    toggleCheckmark() {
        this.setState({checkmarkActive: !this.state.checkmarkActive});
    };

    render() {
        return (
            <styles.FilterItem onClick={() => this.toggleCheckmark()} active={this.state.checkmarkActive}>
                <styles.Checkmark active={this.state.checkmarkActive}/>
                {this.props.text}
            </styles.FilterItem>
        );
    }
}

export default FilterItem;
