//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './searchbarStyles.js'
import {Button} from './../../../globalStyles.js'

//Config
import config from '../../../config'

//Redux
import { actions } from './../../../store/actions.js'
import store from './../../../store'

class Searchbar extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        };
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.setSearchFilterTerm = this.setSearchFilterTerm.bind(this);
    }

    updateSearchTerm(e) {
        if (e.keyCode === 13) {
            //We pressed enter
            this.setSearchFilterTerm();
        }
        this.setState({searchTerm: e.target.value});
    }

    setSearchFilterTerm() {
        if (this.state.searchTerm !== "") {
            store.dispatch(actions.updateFilterList(this.state.searchTerm, "search"));
        }
    }

    render() {
        return (
            <styles.SearchBar>
                <styles.SearchBox onKeyUp={(e) => this.updateSearchTerm(e)} type="text" placeholder="Search"/>
                <Button onClick={() => this.setSearchFilterTerm()} colour="primary">Search</Button>
            </styles.SearchBar>
        );
    }
}

export default Searchbar;
