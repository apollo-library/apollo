//React imports
import React, { Component } from 'react';

import {BookTable} from './../../'

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    studentDetails: state.data.studentDetails,
    booksDueSoon: state.data.booksDueSoon
})

class DueSoon extends Component {

    render() {
        return (
            <div>
                {/*<Table
                    colour="accent3"
                    data={this.props.studentDetails.booksDueSoon}
                    titles={[
                        "Title",
                        "Author",
                        "Rating",
                        "Due Date",
                    ]}
                    buttonText="Renew"
                    buttonFunction="RUN A FUNCTION HERE"
                /> */}
                <BookTable
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
