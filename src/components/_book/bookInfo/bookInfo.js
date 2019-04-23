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
            informationBox: true,
            idBox: true,
            tagsBox: true,

            informationTitleColour: 'primary',
            informationAuthorColour: 'primary',
            informationPublisherColour: 'primary',

            idISBN10Colour: 'primary',
            idISBN13Colour: 'primary',

            allTags: [],
            addTag: -1,

            inputTitle: '',
            inputAuthor: '',
            inputPublisher: '',
            inputISBN10: '',
            inputISBN13: '',

            deletePrompt: null
        };

    }

    componentDidMount = async () => {
        const tags = await API.Tags.getAllTags();
        this.setState({allTags: tags});
    }

    // Handlers for input boxes
    updateInputTitle = e => this.setState({inputTitle: e.target.value});
    updateInputAuthor = e => this.setState({inputAuthor: e.target.value});
    updateInputPublisher = e => this.setState({inputPublisher: e.target.value});
    updateInputISBN10 = e => this.setState({inputISBN10: e.target.value});
    updateInputISBN13 = e => this.setState({inputISBN13: e.target.value});

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

    formatDueDate = (date) => {
        let dueDate = new Date(date);
        return dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();
    }

    updateData = async (type, val) => {
        let col = 'accent6';
        if (val) {
            let data = await API.Books.editBook(this.props.data._id, type, val);
            if (data.message === 'Success') col = 'accent5';
        }

        if (type === 'title') this.setState({informationTitleColour: col, inputTitle: ''});
        if (type === 'author') this.setState({informationAuthorColour: col, inputAuthor: ''});
        if (type === 'publisher') this.setState({informationPublisherColour: col, inputPublisher: ''});
        if (type === 'ISBN10') this.setState({idISBN10Colour: col, inputISBN10: ''});
        if (type === 'ISBN13') this.setState({idISBN13Colour: col, inputISBN13: ''});
    }

    getData = async (box) => {
        await this.props.updateData()
        if (box === "information") this.displayInformationBox();
        if (box === "id") this.displayIDBox();
    }

    updateSelectedTag = (e) => {
        this.setState({addTag: e.target.value})
    }

    addTag = async () => {
        if (this.state.addTag === -1) {
            return;
        }

        let data;
        let selected = this.props.data.tags.find(x => x === this.state.addTag);

        if (!selected) {
            data = await API.Books.addBookTag(this.props.data._id, this.state.addTag);
        }

        if (data) {
            //Sucessfully added new tag
            this.props.updateData();
            this.setState({tagsBox: true});
            this.setState({addTag: -1});
        }
    }

    displayTagBox = async () => {
        let allTags = await API.Tags.getAllTags();
        this.setState({allTags: allTags})
        this.setState({tagsBox: false})
    }


    removeTag = async (id) => {
        let res = await API.Books.removeBookTag(this.props.data._id, id);

        //TODO: Check this works with new data from server
        if (res) {
            //Sucessfully removed tag
            this.props.updateData();
        }
    }

    deleteBookPrompt = async () => {
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
        let response = await API.Books.deleteBook(id);
        if (response) this.setState({deletePrompt: <Redirect to='/catalogue' />});
    }

    render = () => {
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
                <styles.DangerTitle>Danger Section:</styles.DangerTitle>
                <Button colour="accent6" onClick={() => this.deleteBookPrompt()}>Delete Book</Button>
                {this.state.deletePrompt}
            </styles.BookInfoContainer>
        )
    }
}

export default BookInfo;
