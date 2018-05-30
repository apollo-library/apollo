//React imports
import React, { Component } from 'react';

//Styles
import * as styles from './return-renewStyles.js'
import {Button} from './../../../globalStyles.js'

import * as API from './../../../api';

//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    booksDueSoon: state.data.studentDetails.booksDueSoon
})

class ReturnRenew extends Component {
    render() {
        return (
            <div>
                <Button onClick={() => this.submitSearchTerm()} colour="primary" large>Return</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps)(ReturnRenew);
