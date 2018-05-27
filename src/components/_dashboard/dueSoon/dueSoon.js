//React imports
import React, { Component } from 'react';

import {BookTable} from './../../'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    booksDueSoon: state.globalData.studentDetails.booksDueSoon
})

class DueSoon extends Component {
    render() {
        return (
            <div>
                <BookTable
                    type="dueSoon"
                    colour={this.props.colour}
                    data={this.props.booksDueSoon}
                    titles={[
                        "Title",
                        "Author",
                        "Rating",
                        "Due Date",
                        "Action"
                    ]}
                    buttonText="Renew"
                    buttonFunction="RUN A FUNCTION HERE"
                />
            </div>
        );
    }
}

export default connect(mapStateToProps)(DueSoon);
