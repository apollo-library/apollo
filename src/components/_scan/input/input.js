//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './inputStyles.js'

class Start extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    }

    componentDidMount() {
        this.input.value = '';
    }

    componentDidUpdate() {
        this.input.value = '';
    }

    render() {
        return (
            <styles.SearchBar innerRef={(input) => { this.input = input }} onKeyUp={(e) => this.props.callback(e)} autoFocus></styles.SearchBar>
        );
    }
}

export default Start;
