//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './searchbarStyles.js'
import {Button} from './../../../globalStyles.js'

//Config
import config from '../../../config'

class Searchbar extends Component {
    render() {
        return (
            <styles.SearchBar>
                <styles.SearchBox type="text" placeholder="Search"/>
                <Button colour="primary">Search</Button>
            </styles.SearchBar>
        );
    }
}

export default Searchbar;
