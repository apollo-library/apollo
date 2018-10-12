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
            accent: 'accent3'
        };

    }


    formatDueDate = (date) => {
        let dueDate = new Date(date);

        dueDate = dueDate.getDate() + "/" + dueDate.getMonth() + "/" + dueDate.getFullYear();

        return dueDate;
    }

    render() {
        return (
            <styles.BookInfoContainer>
                <AccentedBox
                    title="Book Information"
                    gradFrom="accent5"
                    gradTo="accent4"
                    data={ {
                        title: this.props.data.title,
                        data1: this.props.data.author,
                        data2: this.props.data.publisher
                    } }

                    type="customText"
                />

                <AccentedBox
                    title="ISBN and ID"
                    gradFrom="accent1"
                    gradTo="accent2"
                    data={ {
                        data1: "ID: " + this.props.data._id,
                        data2: "ISBN10: " + this.props.data.ISBN10,
                        data3: "ISBN13: "+ this.props.data.ISBN13
                    } }

                    type="customTextNoTitle"
                />

                { (this.props.data.tags.length) ? <AccentedBox
                    title="Tags"
                    gradFrom="accent3"
                    gradTo="accent4"
                    data={ {
                        tags: this.props.data.tags
                    } }

                    type="tags"
                /> : null }
            </styles.BookInfoContainer>
        )
    }
}

export default BookInfo;