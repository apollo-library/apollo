//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './accentedBoxStyles.js';
import { Button } from './../../globalStyles.js';

import openBook from './../../assets/images/open-book.svg';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    studentDetails: state.data.studentDetails
})

class AccentedBox extends Component {

    render() {

        //Get the type of sidebox we want to show
        let typeOfBox = this.props.type;

        //Store of the content that we want to show inside the box
        let boxContent;

        if (typeOfBox === "latestBook") {
            boxContent =
                <styles.BoxContent>
                    <styles.BookTitle>{this.props.studentDetails.latestBookTitle}</styles.BookTitle>
                    <styles.BookAuthor>{this.props.studentDetails.latestBookAuthor}</styles.BookAuthor>
                    <styles.SidebarButton colour={this.props.gradFrom}>View History</styles.SidebarButton>
                    <styles.BackImage src={openBook} />
                </styles.BoxContent>
        }

        return (
            <styles.AccentedBox>
                <styles.AccentBar gradFrom={this.props.gradFrom} gradTo={this.props.gradTo}>{this.props.title}</styles.AccentBar>
                {boxContent}
            </styles.AccentedBox>
        );
    }
}

export default connect(mapStateToProps)(AccentedBox);
