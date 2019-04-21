//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './multiInputStyles.js'

class MutliInput extends Component {
    constructor(props) {
        super(props)

        this.state = {

        };
    }

    render() {
        return (
            <styles.MultiInputWrapper>
                {(this.props.title) ? <styles.InputTitle>{this.props.title}</styles.InputTitle> : null}
                <styles.SearchBar val={this.props.value} onChange={e => this.props.changeCallback(e)}></styles.SearchBar>
            </styles.MultiInputWrapper>
        );
    }
}

export default MutliInput;
