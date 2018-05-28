import React, { Component } from "react";

import * as API from './../api/index.js';

class Test extends Component {
    async componentDidMount() {
        let fun = await API.Loans.returnBook('abc');
        console.log(fun);
    }

    render() {
        return(
            <div className="info-bar">
                <p>Hello</p>
            </div>
        )
    }
}

export default Test;
