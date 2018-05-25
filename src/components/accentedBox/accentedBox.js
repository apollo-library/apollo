//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './accentedBoxStyles.js';
import {FlexGrow} from './../../globalStyles.js'

//Images
import openBook from './../../assets/images/open-book.svg';
import moneyStack from './../../assets/images/money-stack.svg';

//Config
import config from '../../config'

//Redux
import { connect } from 'react-redux'
import { actions } from './../../store/actions.js'
import store from './../../store'

const mapStateToProps = (state) => ({
    studentDetails: state.data.studentDetails
})

class AccentedBox extends Component {
    constructor() {
        super()
        this.state = {
            hoveredStar: 0
        };
    }

    calculateStars() {
        let starsToRender = [];

        for (let i = 0; i < 5; i++) {
                if (i < this.state.hoveredStars) {
                    starsToRender.push(
                        <styles.Star key={i} onMouseLeave={() => this.emptyAllStars()} onClick={() => this.addRating(i)} xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 28 27">
                            <styles.StarPath filled d="M14.5,1.4l2.7,5.5c0.2,0.4,0.6,0.7,1.1,0.8l6.1,0.9c1.2,0.2,1.7,1.7,0.8,2.6l-4.4,4.3c-0.4,0.3-0.5,0.8-0.4,1.3
                            l1,6c0.2,1.2-1.1,2.2-2.2,1.6l-5.4-2.9c-0.4-0.2-1-0.2-1.4,0L7,24.4c-1.1,0.6-2.4-0.4-2.2-1.6l1-6c0.1-0.5-0.1-1-0.4-1.3l-4.4-4.3
                            c-0.9-0.9-0.4-2.4,0.8-2.6l6.1-0.9c0.5-0.1,0.9-0.4,1.1-0.8l2.7-5.5C12.3,0.3,13.9,0.3,14.5,1.4z"/>
                        </styles.Star>
                    )
                } else {
                    starsToRender.push(
                        <styles.Star key={i} onMouseOver={() => this.updateStarsFilled(i)} xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 28 27">
                            <styles.StarPath d="M14.5,1.4l2.7,5.5c0.2,0.4,0.6,0.7,1.1,0.8l6.1,0.9c1.2,0.2,1.7,1.7,0.8,2.6l-4.4,4.3c-0.4,0.3-0.5,0.8-0.4,1.3
                            l1,6c0.2,1.2-1.1,2.2-2.2,1.6l-5.4-2.9c-0.4-0.2-1-0.2-1.4,0L7,24.4c-1.1,0.6-2.4-0.4-2.2-1.6l1-6c0.1-0.5-0.1-1-0.4-1.3l-4.4-4.3
                            c-0.9-0.9-0.4-2.4,0.8-2.6l6.1-0.9c0.5-0.1,0.9-0.4,1.1-0.8l2.7-5.5C12.3,0.3,13.9,0.3,14.5,1.4z"/>
                        </styles.Star>
                    )
                }
        }

        return starsToRender
    }

    updateStarsFilled(starIndex) {
        this.setState({hoveredStars: (starIndex + 1)});
    }

    emptyAllStars() {
        this.setState({hoveredStars: 0});
    }

    addRating(starIndex) {
        store.dispatch(actions.removeBookToRate());
        console.log("Rating added with " + (starIndex + 1) + " stars");
    }

    render() {

        //Get the type of sidebox we want to show
        let typeOfBox = this.props.type;

        //Store of the content that we want to show inside the box
        let boxContent;

        if (typeOfBox === "latestBook") {
            boxContent =
                <styles.BoxContent>
                    <styles.BookTitle>{this.props.studentDetails.latestBook.title}</styles.BookTitle>
                    <styles.BookAuthor>{this.props.studentDetails.latestBook.author}</styles.BookAuthor>
                    <styles.SidebarButton colour={this.props.gradFrom}>View History</styles.SidebarButton>
                    <styles.BackImage src={openBook} />
                </styles.BoxContent>
        } else if (typeOfBox === "fines") {
            boxContent =
                <styles.BoxContent>
                    <styles.StudentFine>{this.props.studentDetails.currentFine}</styles.StudentFine>
                    <styles.FineDetails>Fines occur at £{config.main.fineRate} per day</styles.FineDetails>
                    <styles.SidebarButton colour={this.props.gradFrom}>View Fines</styles.SidebarButton>
                    <styles.BackImage src={moneyStack} />
                </styles.BoxContent>
        } else if (typeOfBox === "rate") {
            boxContent =
                <styles.BoxContent>
                    <styles.RateTopBar>
                        <styles.RateIntroText>How would you rate:</styles.RateIntroText>
                        <FlexGrow />
                        <styles.RateBooksLeft>{this.props.studentDetails.booksToRate.length - 1} Books Left</styles.RateBooksLeft>
                    </styles.RateTopBar>

                    {this.props.studentDetails.booksToRate.slice(0,1).map((book, index) =>
                        (
                            <div key={index}>
                                <styles.BookTitle>{book.title}</styles.BookTitle>
                                <styles.BookAuthor>{book.author}</styles.BookAuthor>
                            </div>
                        )
                    )}

                    <styles.Stars>
                        {this.calculateStars()}
                    </styles.Stars>

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
