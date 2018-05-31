//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './bookDetailsStyles.js'
import {Button, CenterColumn, RightColumn, LeftColumn, PageTitle} from './../../../globalStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scannedBook: state.data.scannedBook
})

class BookDetails extends Component {


    render() {
        return (
            <styles.BookInfo>
                <img src="http://via.placeholder.com/150x200" />
                <p>{this.props.scannedBook.title}</p>
                <p>{this.props.scannedBook.author}</p>
                <p>{this.props.scannedBook.title}</p>
            </styles.BookInfo>
        );
    }
}

export default connect(mapStateToProps)(BookDetails);
