//React imports
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Component imports
import {UserItem} from './../';

//Styles
import * as styles from './accentedBoxStyles.js';

import cross from './../../assets/images/circle-cross.svg';

class AccentedBox extends Component {
    constructor() {
        super()
        this.state = {
        };
    }

    render() {
        let typeOfBox = this.props.type;
        let boxContent;

        //Returns different variations of the boxContent based on it's type
        if (typeOfBox === "custom") {
            boxContent =
                <styles.BoxContent>
                    <styles.BookTitle>{this.props.data.title}</styles.BookTitle>
                    <styles.BookAuthor>{this.props.data.subtitle}</styles.BookAuthor>
                    <Link to={this.props.data.url}><styles.SidebarButton colour={this.props.gradFrom}>{this.props.data.buttonText}</styles.SidebarButton></Link>
                </styles.BoxContent>
        } else if (typeOfBox === "bookTitleAuthorPublisher") {
            boxContent =
                <styles.BoxContent>
                    <styles.BookTitle>{this.props.data.title}</styles.BookTitle>
                    <styles.BookInformation>{this.props.data.data1}</styles.BookInformation>
                    <styles.BookInformation>{this.props.data.data2}</styles.BookInformation>
                    <styles.EditButton onClick={() => this.props.callback()} colour={this.props.gradFrom}>Edit</styles.EditButton>
                </styles.BoxContent>
        } else if (typeOfBox === "bookIDs") {
            boxContent =
                <styles.BoxContent>
                    <styles.BookInformation>{this.props.data.data1}</styles.BookInformation>
                    <styles.BookInformation>{this.props.data.data2}</styles.BookInformation>
                    <styles.BookInformation>{this.props.data.data3}</styles.BookInformation>
                    <styles.EditButton onClick={() => this.props.callback()} colour={this.props.gradFrom}>Edit</styles.EditButton>
                </styles.BoxContent>
        } else if (typeOfBox === "tags") {
            boxContent =
                <styles.BoxContent tagSpacing>
                    {this.props.data.tags.map((tag, index) => {
                        //Ensures a tag exists before displaying the name
                        let tagFind = this.props.allTags.find((t) => t.id === tag);
                        if (!tagFind) return null;
                        return <styles.Tag key={index}>
                                <styles.TagContent>
                                    <p>{(this.props.allTags.find((t) => t.id === tag))
                                        ? this.props.allTags.find((t) => t.id === tag).name : null
                                    }</p>
                                    <styles.Icon src={cross} onClick={() => this.props.removeTag(tag)} />
                                </styles.TagContent>
                            </styles.Tag>
                    })}
                    <styles.EditButton onClick={() => this.props.callback()} colour={this.props.gradFrom}>Add Tag</styles.EditButton>
                </styles.BoxContent>
        } else if (typeOfBox === "noTags") {
            boxContent = <styles.BoxContent>
                    <styles.Tag>No Tags</styles.Tag>
                    <styles.EditButton onClick={() => this.props.callback()} colour={this.props.gradFrom}>Add Tag</styles.EditButton>
                </styles.BoxContent>
        } else if (typeOfBox === "onLoan") {
            boxContent =
                <styles.BoxContent>
                    {this.props.data.loans.map((loan, index) => {
                        return <UserItem key={index} bookName={loan.book.title} bookId={loan.book._id} />
                    })}
                </styles.BoxContent>
        } else if (typeOfBox === "userHistory") {
            boxContent =
                <styles.BoxContent>
                    {this.props.data.slice(0,5).map((loan, index) => {
                        //Display the first 6 history items
                        return <UserItem key={index} bookName={(loan.loan.returnDate ? "Return - " : "Withdraw - ") + loan.book.title} bookId={loan.book._id} />
                    })}

                    <Link to={'/report/user_history/' + this.props.user}>
                        <styles.SidebarButton colour={this.props.gradFrom}>View All History</styles.SidebarButton>
                    </Link>
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

export default AccentedBox;
