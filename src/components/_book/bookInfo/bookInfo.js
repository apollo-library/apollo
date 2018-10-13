//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './bookInfoStyles.js'

import * as API from './../../../api';

//Config
import config from './../../../config.js'

//Componenets
import {AccentedBox} from './../../';


class BookInfo extends Component {
    constructor() {
        super()

        this.state = {
            accent: 'accent3',
            informationBox: [],
            idBox: [],
            tagsBox: [],

            informationTitleColour: 'primary',
            informationAuthorColour: 'primary',
            informationPublisherColour: 'primary',

            idISBN10Colour: 'primary',
            idISBN13Colour: 'primary'
        };

    }

    componentDidMount = () => {
        this.displayInformationBox()
        this.displayIDBox()
        this.displayTagsBox()
    }

    componentWillReceiveProps = () => {
        this.displayInformationBox()
        this.displayIDBox()
        this.displayTagsBox()
    }

    displayInformationBox = () => {
        this.setState({
            informationTitleColour: 'primary',
            informationAuthorColour: 'primary',
            informationPublisherColour: 'primary',

            informationBox: <AccentedBox
                title="Book Information"
                gradFrom="accent5"
                gradTo="accent4"
                data={ {
                    title: this.props.data.title,
                    data1: this.props.data.author,
                    data2: this.props.data.publisher
                } }
                callback={this.editInformation}
                type="bookTitleAuthorPublisher"
            />
        });
    }

    displayIDBox = () => {
        this.setState({
            idISBN10Colour: 'primary',
            idISBN13Colour: 'primary',

            idBox:  <AccentedBox
                title="ISBN and ID"
                gradFrom="accent1"
                gradTo="accent2"
                data={ {
                    data1: "ID: " + this.props.data._id,
                    data2: "ISBN10: " + this.props.data.ISBN10,
                    data3: "ISBN13: "+ this.props.data.ISBN13
                } }
                callback={this.editIDs}
                type="bookIDs"
            />
        });
    }

    displayTagsBox = () => {
        let tagsBox;
        if (this.props.data.tags.length) {
            tagsBox = <AccentedBox
                title="Tags"
                gradFrom="accent3"
                gradTo="accent4"
                data={ {
                    tags: this.props.data.tags
                } }
                callback={this.editTags}
                type="tags"
            />
        } else {
            tagsBox = <AccentedBox
                title="Tags"
                gradFrom="accent3"
                gradTo="accent4"
                callback={this.editTags}
                type="noTags"
            />
        }
        
        this.setState({
            tagsBox: tagsBox
        });
    }

    formatDueDate = (date) => {
        let dueDate = new Date(date);

        dueDate = dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

        return dueDate;
    }

    updateData = async (type, val, ref, box) => {
        console.log(type,val)
        if (val !== "") {
            let data = await API.Books.editBook(this.props.data._id, type, val);
            console.log(data)
            if (data.message = 'Success') {
                ref.value = '';
                if (box === 'information') {
                    if (type === 'title') this.setState({informationTitleColour: 'accent5'})
                    if (type === 'author') this.setState({informationAuthorColour: 'accent5'})
                    if (type === 'publisher') this.setState({informationPublisherColour: 'accent5'})
                    this.editInformation()
                } else if (box === 'id') {
                    if (type === 'ISBN10') this.setState({idISBN10Colour: 'accent5'})
                    if (type === 'ISBN13') this.setState({idISBN13Colour: 'accent5'})
                    this.editIDs()
                }
            } else {
                if (box === 'information') {
                    if (type === 'title') this.setState({informationTitleColour: 'accent6'})
                    if (type === 'author') this.setState({informationAuthorColour: 'accent6'})
                    if (type === 'publisher') this.setState({informationPublisherColour: 'accent6'})
                    this.editInformation()
                } else if (box === 'id') {
                    if (type === 'ISBN10') this.setState({idISBN10Colour: 'accent6'})
                    if (type === 'ISBN13') this.setState({idISBN13Colour: 'accent6'})
                    this.editIDs()
                }
            }
        } else {
            if (box === 'information') {
                if (type === 'title') this.setState({informationTitleColour: 'accent6'})
                if (type === 'author') this.setState({informationAuthorColour: 'accent6'})
                if (type === 'publisher') this.setState({informationPublisherColour: 'accent6'})
                this.editInformation()
            } else if (box === 'id') {
                if (type === 'ISBN10') this.setState({idISBN10Colour: 'accent6'})
                if (type === 'ISBN13') this.setState({idISBN13Colour: 'accent6'})
                this.editIDs()
            }
        }
    }

    getData = async (box) => {
        this.props.updateData()
        if (box === "information") this.displayInformationBox();
        if (box === "id") this.displayIDBox();
    }

    editInformation = () => {
        this.setState({
            informationBox: [
                <AccentedBox title="Book Information" gradFrom="accent5" gradTo="accent4" />,
                <styles.InputWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchLabel>Title:  </styles.SearchLabel>
                        <styles.SearchBar innerRef={(input) => { this.title = input }} ></styles.SearchBar>
                        <styles.SearchButton onClick={() => this.updateData('title', this.title.value, this.title, 'information')} colour={this.state.informationTitleColour}>Update</styles.SearchButton>
                    </styles.SearchWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchLabel>Author:  </styles.SearchLabel>
                        <styles.SearchBar innerRef={(input) => { this.author = input }} ></styles.SearchBar>
                        <styles.SearchButton onClick={() => this.updateData('author', this.author.value, this.author, 'information')} colour={this.state.informationAuthorColour}>Update</styles.SearchButton>
                    </styles.SearchWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchLabel>Publisher:  </styles.SearchLabel>
                        <styles.SearchBar innerRef={(input) => { this.publisher = input }} ></styles.SearchBar>
                        <styles.SearchButton onClick={() => this.updateData('publisher', this.publisher.value, this.publisher, 'information')} colour={this.state.informationPublisherColour}>Update</styles.SearchButton>
                    </styles.SearchWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchButton onClick={() => this.getData('information')} colour={'accent3'}>Done</styles.SearchButton>
                    </styles.SearchWrapper>
                </styles.InputWrapper>
            ]
        });
    }

    editIDs = () => {
        this.setState({
            idBox: [
                <AccentedBox title="ISBN and ID" gradFrom="accent1" gradTo="accent2" />,
                <styles.InputWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchLabel>ISBN10:  </styles.SearchLabel>
                        <styles.SearchBar innerRef={(input) => { this.isbn10 = input }} ></styles.SearchBar>
                        <styles.SearchButton onClick={() => this.updateData('ISBN10', this.isbn10.value, this.isbn10, 'id')} colour={this.state.idISBN10Colour}>Update</styles.SearchButton>
                    </styles.SearchWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchLabel>ISBN13:  </styles.SearchLabel>
                        <styles.SearchBar innerRef={(input) => { this.isbn13 = input }} ></styles.SearchBar>
                        <styles.SearchButton onClick={() => this.updateData('ISBN13', this.isbn13.value, this.isbn13, 'id')} colour={this.state.idISBN13Colour}>Update</styles.SearchButton>
                    </styles.SearchWrapper>
                    <styles.SearchWrapper>
                        <styles.SearchButton onClick={() => this.getData('id')} colour={'accent3'}>Done</styles.SearchButton>
                    </styles.SearchWrapper>
                </styles.InputWrapper>
            ]
        });
    }

    editTags = () => {
        console.log('tags')
    }

    render = () => {
        return (
            <styles.BookInfoContainer>
                {this.state.informationBox}
                {this.state.idBox}
                {this.state.tagsBox}
            </styles.BookInfoContainer>
        )
    }
}

export default BookInfo;