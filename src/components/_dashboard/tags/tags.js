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
                            {tag.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" margin-left="7px" viewBox="0 0 294.72 294.72">
                            	<path fill="#fff" d="M147.36,0C65.94,0,0,66.02,0,147.36s66.02,147.36,147.36,147.36s147.36-66.02,147.36-147.36
                            	C294.72,65.94,228.7,0,147.36,0z M214.04,189.28c4.27,4.2,4.27,11.13,0,15.33l-9.43,9.43c-4.2,4.27-11.13,4.27-15.33,0l-41.92-41.92
                            	l-41.92,41.92c-4.2,4.27-11.13,4.27-15.33,0l-9.43-9.43c-4.27-4.2-4.27-11.13,0-15.33l41.92-41.92l-41.92-41.92
                            	c-4.27-4.2-4.27-11.13,0-15.33l9.43-9.43c4.2-4.27,11.13-4.27,15.33,0l41.92,41.92l41.92-41.92c4.2-4.27,11.13-4.27,15.33,0
                            	l9.43,9.43c4.27,4.2,4.27,11.13,0,15.33l-41.92,41.92L214.04,189.28z"/>
                            </svg>


                        </styles.Tag>
                    })}
                </styles.Tags>
            </styles.AddTags>
        );
    }
}

export default Tags;
