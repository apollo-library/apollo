//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './bookDetailsStyles.js'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    scannedBook: state.data.scannedBook
})

class BookDetails extends Component {


    render() {
        return (
            <styles.BookInfo>
                <img alt="This is temporary to stop a warning from showing" src="http://via.placeholder.com/150x200" />
                <p>{this.props.scannedBook.title}</p>
                <p>{this.props.scannedBook.author}</p>
                <p>{this.props.scannedBook.publisher}</p>
            </styles.BookInfo>
        );
    }
}

export default connect(mapStateToProps)(BookDetails);
