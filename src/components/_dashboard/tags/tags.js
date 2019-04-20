//React imports
import React, { Component } from 'react';

import * as API from './../../../api';

import cross from './../../../assets/images/circle-cross.svg'

//Styles
import * as styles from './tagsStyles.js'

class Tags extends Component {
    constructor() {
        super()
        this.state = {
            tags: []
        };
    }

    async componentDidMount() {
        let tags = await API.Tags.getAllTags();
        console.log(tags)
        this.setState({tags: tags})
    }

    addTagEvent(e) {
        let tagName = e.target.value;

        //Did we press enter?
        if (e.keyCode === 13) {
            this.addTag(tagName);
        }
    }

    async addTag(tagName) {
        if (tagName) {
            let data = await API.Tags.addTag(tagName);
            if (data) {
                //Clear input here
                console.log("added tag")
            }
        }
    }

    render() {
        return (
            <styles.AddTags>
                <styles.AddTagName onKeyUp={(e) => this.addTagEvent(e)} placeholder="New Tag Name" />

                <styles.Tags>
                    {this.state.tags.map((tag, index) => {
                        return <styles.Tag>
                            <styles.TagContent>
                                {tag.name}
                                <styles.DeleteIcon src={cross} />
                            </styles.TagContent>
                        </styles.Tag>
                    })}
                </styles.Tags>
            </styles.AddTags>
        );
    }
}

export default Tags;
