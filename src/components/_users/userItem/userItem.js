//React imports
import React, { Component } from 'react';

import {Link} from 'react-router-dom';

//Styles
import * as styles from './userItemStyles.js'

class UserItem extends Component {
    render() {
        return (
            <Link to={'/book/' + this.props.bookId}>
                <styles.FilterItem active={false}>
                    <styles.Checkmark active={false}/>
                    {this.props.bookName}
                </styles.FilterItem>
            </Link>
        );
    }
}

export default UserItem;
