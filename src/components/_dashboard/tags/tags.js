//React imports
import React, { Component } from 'react';

import * as API from './../../../api';

import cross from './../../../assets/images/circle-cross.svg';
import tick from './../../../assets/images/circle-tick.svg';

//Styles
import * as styles from './tagsStyles.js';

class Tags extends Component {
    constructor() {
        super()
        this.state = {
            tags: [],
            searchState: false,
            errorMessage: false,
            successMessage: false,
            tagEditID: false
        };
    }

    async componentDidMount() {
        this.updateTags();
    }

    componentWillUnmount = () => {
       if (this.resetTimer) clearInterval(this.resetTimer);
    }

    addTagEvent(e) {
        let tagName = e.target.value;
        //Did we press enter?
        if (e.keyCode === 13) {
            // Check if search empty
            if (tagName === "") this.setState({searchState: "error", errorMessage: "No tag specified", successMessage: false});
            else {
                // Check if tag already exists - array will be empty if it doesn't match
                let tagFilter = this.state.tags.filter((tag) => {
                    if (tag.name.toLowerCase() === tagName.toLowerCase()) return true; // Ignores case
                    return false;
                });
                if (tagFilter.length === 0) {
                    let status = this.addTag(tagName);
                    if (status) {
                        this.setState({searchState: "success", errorMessage: false, successMessage: "Tag successfully added"});
                        this.updateTags();
                    }
                    else this.setState({searchState: "error", errorMessage: "Error adding tag", successMessage: false});
                }
                else this.setState({searchState: "error", errorMessage: "Tag already exists", successMessage: false});
            }
            if (this.resetTimer) clearInterval(this.resetTimer);
            this.resetTimer = setTimeout(() => {
                this.removeMessage();
            }, 3000);
            e.target.value = "";
        }
    }

    updateTags = async () => {
        let tags = await API.Tags.getAllTags();
        this.setState({tags: tags})
    }

    removeMessage = () => {
        this.setState({searchState: false, errorMessage: false, successMessage: false});
    }

    async addTag(tagName) {
        return await API.Tags.addTag(tagName);
    }

    removeTag = async id => {
        await API.Tags.deleteTag(id);
        this.updateTags();
    }

    makeTagEditable = (id,name) => {
        this.setState({tagEditID: id, inputValue: name});
    }

    editTag = async (id) => {
        //let currentVal = await API.Tags.getTag(id);
        if (this.state.inputValue.replace(/[^A-Za-z]+/g, '') !== "") {
            let status = await API.Tags.editTag(id,this.state.inputValue);
            if (status) {
                await this.updateTags();
                this.setState({tagEditID: false});
            }
        }
    }

    updateInputValue = e => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        return (
            <styles.AddTags>
                <styles.AddTagName state={this.state.searchState} onKeyUp={(e) => this.addTagEvent(e)} placeholder="New Tag Name" />
                {(this.state.errorMessage) ? <styles.ErrorMessage>{this.state.errorMessage}</styles.ErrorMessage> : null}
                {(this.state.successMessage) ? <styles.SuccessMessage>{this.state.successMessage}</styles.SuccessMessage> : null}
                <styles.Tags>

                    {this.state.tags.map((tag, index) => {
                        return <styles.Tag key={tag.id}>
                                {(this.state.tagEditID === tag.id)
                                ? <styles.TagContent>
                                    <styles.TagNameEditable value={this.state.inputValue} onChange={e => this.updateInputValue(e)}></styles.TagNameEditable>
                                    <styles.DeleteIcon src={tick} onClick={() => this.editTag(tag.id)} />
                                </styles.TagContent>
                                : <styles.TagContent>
                                    <p onClick={() => this.makeTagEditable(tag.id, tag.name)}>{tag.name}</p>
                                    <styles.DeleteIcon src={cross} onClick={() => this.removeTag(tag.id)} />
                                </styles.TagContent>
                                }
                        </styles.Tag>
                    })}
                </styles.Tags>
            </styles.AddTags>
        );
    }
}

export default Tags;
