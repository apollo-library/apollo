import React, { Component } from "react";

import * as API from './../api/index.js';

class Test extends Component {
    async componentDidMount() {
        //let fun = await API.Loans.returnBook('abc');
        //let fun = await API.Books.getScanBookInfo('abc');
        //let fun = await API.Loans.renewBook('abc', '2018-05-30');
        //let fun = await API.Loans.withdrawBook('abc', 'zyx', '2018-06-30');

        let thing = {
            "searchTerm": "wfdwqdwqdqwdqwd",
            "selectedFilters": [
                1,
                3,
                6,
                2
            ]
        };

        let fun = await API.Books.searchBooks(thing);

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
