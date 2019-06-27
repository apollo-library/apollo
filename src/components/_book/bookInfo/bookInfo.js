//React imports
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

//Styles
import * as styles from './bookInfoStyles.js';
import {Button} from './../../../globalStyles';

import * as API from './../../../api';

//Componenets
import {AccentedBox, BookEdit, AlertBox} from './../../';


class BookInfo extends Component {
    constructor() {
        super()
        this.state = {
            accent: 'accent3',

            // true / false for showing or hiding
            informationBox: true,
            idBox: true,
            tagsBox: true,

            // Colours are the drop shadows of the submit box - primary intially, red for error, green for success
            informationTitleColour: 'primary',
            informationAuthorColour: 'primary',
            informationPublisherColour: 'primary',
            idISBN10Colour: 'primary',
            idISBN13Colour: 'primary',
            
            allTags: [],
            addTag: -1, // This is the default value which is caught to prevent errors

            // State stores for what is currently in the input boxes
            inputTitle: '',
            inputAuthor: '',
            inputPublisher: '',
            inputISBN10: '',
            inputISBN13: '',

            deletePrompt: null // Delete box starts minimised
        };

    }

    componentDidMount = async () => {
        // Fetch all the tags from the server
        const tags = await API.Tags.getAllTags();
        this.setState({allTags: tags});
    }

    // Handlers for input boxes
    updateInputTitle = e => this.setState({inputTitle: e.target.value});
    updateInputAuthor = e => this.setState({inputAuthor: e.target.value});
    updateInputPublisher = e => this.setState({inputPublisher: e.target.value});
    updateInputISBN10 = e => this.setState({inputISBN10: e.target.value});
    updateInputISBN13 = e => this.setState({inputISBN13: e.target.value});

    formatDueDate = (date) => {
        let dueDate = new Date(date);
        return dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();
    }

    // Toggles the information boxes
    displayInformationBox = () => {
        this.setState({
            informationTitleColour: 'primary',
            informationAuthorColour: 'primary',
            informationPublisherColour: 'primary',
            informationBox: true
        });
    }
    displayIDBox = () => {
        this.setState({
            idISBN10Colour: 'primary',
            idISBN13Colour: 'primary',
            idBox: true
        });
    }
    displayTagBox = async () => {
        let allTags = await API.Tags.getAllTags();
        this.setState({allTags: allTags})
        this.setState({tagsBox: false})
    }

    // Editing data
    getData = async (box) => {
        // Gets new data from the server for the book (through callback function)
        await this.props.updateData()
        
        // Redisplays the specified box
        if (box === "information") this.displayInformationBox();
        if (box === "id") this.displayIDBox();
    }
    updateData = async (type, val) => {
        // Pushes data to server
        let col = 'accent6';
        if (val) {
            let data = await API.Books.editBook(this.props.data._id, type, val);
            if (data.message === 'Success') col = 'accent5';
        }

        // Sets the colour of the button dropdown: red for failure, green for success
        if (type === 'title') this.setState({informationTitleColour: col, inputTitle: ''});
        if (type === 'author') this.setState({informationAuthorColour: col, inputAuthor: ''});
        if (type === 'publisher') this.setState({informationPublisherColour: col, inputPublisher: ''});
        if (type === 'ISBN10') this.setState({idISBN10Colour: col, inputISBN10: ''});
        if (type === 'ISBN13') this.setState({idISBN13Colour: col, inputISBN13: ''});
    }


    // Tag management
    updateSelectedTag = (e) => {
        // Handler for changing dropdown selected
        this.setState({addTag: e.target.value})
    }
    addTag = async () => {
        // Adds a tag to the book
        if (this.state.addTag === -1) {
            return;
        }

        let data;
        let selected = this.props.data.tags.find(x => x === this.state.addTag); // See if tag is already applied

        if (!selected) { // add tag
            data = await API.Books.addBookTag(this.props.data._id, this.state.addTag);
        }

        if (data) {
            //Sucessfully added new tag
            this.props.updateData();
            this.setState({tagsBox: true});
            this.setState({addTag: -1}); // Reset dropdown
        }
    }
    removeTag = async (id) => {
        let res = await API.Books.removeBookTag(this.props.data._id, id);

        // res returns true on success and false on failure
        if (res) {
            //Sucessfully removed tag
            this.props.updateData();
        }
    }


    // Deleteing book management
    deleteBookPrompt = async () => {
        // Displays prompt box to confirm book deletion
        this.setState({
            deletePrompt: <AlertBox
                text={"Deleting book '" + this.props.data.title + "' is permanent. Continue?"}
                successCallback={() => this.deleteBook(this.props.data._id)}
                failureCallback={() => this.setState({deletePrompt: null})}
                successText='Delete'
                failureText='Cancel'
            />
        });
    }
    deleteBook = async (id) => {
        // Deletes book from system - response returns true on success and false on failure
        let response = await API.Books.deleteBook(id);
        if (response) this.setState({deletePrompt: <Redirect to='/catalogue' />}); // Redirect tag redirects the page to /catalogue
    }

    render = () => {
        // Returns the three containers for the information - each checks for displaying information box or editing box
        return (
            <styles.BookInfoContainer>
                {
                    (this.state.informationBox) ?
                    <AccentedBox
                        title="Book Information"
                        gradFrom="accent5"
                        gradTo="accent4"
                        data={ {
                            title: this.props.data.title,
                            data1: this.props.data.author,
                            data2: this.props.data.publisher
                        } }
                        callback={() => this.setState({informationBox: false})}
                        type="bookTitleAuthorPublisher"
                    /> : [
                    <AccentedBox key={0} title="Book Information" gradFrom="accent5" gradTo="accent4" />,
                    <styles.InputWrapper key={1}>
                        <BookEdit
                            title={'Title: '}
                            val={this.state.inputTitle}
                            changeCallback={this.updateInputTitle}
                            updateData={() => this.updateData('title', this.state.inputTitle)}
                            colour={this.state.informationTitleColour}
                            searchID={'title'}
                        />
                        <BookEdit
                            title={'Author: '}
                            val={this.state.inputAuthor}
                            changeCallback={this.updateInputAuthor}
                            updateData={() => this.updateData('author', this.state.inputAuthor)}
                            colour={this.state.informationAuthorColour}
                            searchID={'author'}
                        />
                        <BookEdit
                            title={'Publisher: '}
                            val={this.state.inputPublisher}
                            changeCallback={this.updateInputPublisher}
                            updateData={() => this.updateData('publisher', this.state.inputPublisher)}
                            colour={this.state.informationPublisherColour}
                            searchID={'publisher'}
                        />
                        <styles.SearchWrapper>
                            <styles.SearchButton onClick={() => this.getData('information')} colour={'accent3'}>Done</styles.SearchButton>
                        </styles.SearchWrapper>
                    </styles.InputWrapper>
                    ]
                }
                {
                    (this.state.idBox) ?
                    <AccentedBox
                        title="ISBN and ID"
                        gradFrom="accent1"
                        gradTo="accent2"
                        data={ {
                            data1: "ID: " + this.props.data._id,
                            data2: "ISBN10: " + this.props.data.ISBN10,
                            data3: "ISBN13: "+ this.props.data.ISBN13
                        } }
                        callback={() => this.setState({idBox: false})}
                        type="bookIDs"
                    /> : [
                        <AccentedBox key={0} title="ISBN and ID" gradFrom="accent1" gradTo="accent2" />,
                        <styles.InputWrapper key={1}>
                            <BookEdit
                                title={'ISBN10: '}
                                val={this.state.inputISBN10}
                                changeCallback={this.updateInputISBN10}
                                updateData={() => this.updateData('ISBN10', this.state.inputISBN10)}
                                colour={this.state.idISBN10Colour}
                                searchID={'ISBN10'}
                            />
                            <BookEdit
                                title={'ISBN13: '}
                                val={this.state.inputISBN13}
                                changeCallback={this.updateInputISBN13}
                                updateData={() => this.updateData('ISBN13', this.state.inputISBN13)}
                                colour={this.state.idISBN13Colour}
                                searchID={'ISBN13'}
                            />
                            <styles.SearchWrapper>
                                <styles.SearchButton onClick={() => this.getData('id')} colour={'accent3'}>Done</styles.SearchButton>
                            </styles.SearchWrapper>
                        </styles.InputWrapper>
                    ]

                }
                {(this.state.tagsBox) ?
                    (this.props.data.tags.length) ?
                    <AccentedBox
                        title="Tags"
                        gradFrom="accent3"
                        gradTo="accent4"
                        data={ {
                            tags: this.props.data.tags
                        } }
                        allTags={this.state.allTags}
                        callback={() => this.displayTagBox()}
                        removeTag={this.removeTag}
                        type="tags"
                    /> :
                    <AccentedBox
                        title="Tags"
                        gradFrom="accent3"
                        gradTo="accent4"
                        callback={() => this.displayTagBox()}
                        type="noTags"
                    />
                : [
                    <AccentedBox key={0} title="Tags" gradFrom="accent3" gradTo="accent4" />,
                    <styles.InputWrapper key={1}>
                        <styles.SearchWrapper>
                            <styles.SearchLabel>Tag to add:  </styles.SearchLabel>
                            <styles.Dropdown onChange={(e) => this.updateSelectedTag(e)} defaultValue="default">
                                <option value="default" disabled hidden>Choose tag</option>
                                {this.state.allTags.map((tag, index) =>
                                    <option value={tag.id} key={tag.id}>{tag.name}</option>
                                )}
                            </styles.Dropdown>
                            <styles.SearchButton onClick={() => this.addTag('tag', this.state.addTag)} colour={this.state.idISBN10Colour}>Add</styles.SearchButton>
                        </styles.SearchWrapper>
                        <styles.SearchWrapper>
                            <styles.SearchButton onClick={() => this.setState({tagsBox: true})} colour={'accent3'}>Done</styles.SearchButton>
                        </styles.SearchWrapper>
                    </styles.InputWrapper>
                ]
                }
                <styles.DangerTitle>⚠ Danger Zone ⚠</styles.DangerTitle>
                <styles.DeleteButton>
                    <Button colour="accent6" onClick={() => this.deleteBookPrompt()}>Delete Book</Button>
                </styles.DeleteButton>
                {this.state.deletePrompt}
            </styles.BookInfoContainer>
        )
    }
}

export default BookInfo;
