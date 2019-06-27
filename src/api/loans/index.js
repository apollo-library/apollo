//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

export async function returnBook(id) {
    // Return a book that is currently out by id
    let response = await fetch(serverPath + '/book/' + id + '/deposit');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message}
}

export async function renewBook(id,date) {
    /* Renew a book that is currently out:
        - id: ID of the book
        - date: isostring of date to return
    */

    let data = "due=" + date;   // <- construct data into POST format
    let response = await fetch(serverPath + '/book/' + id + '/renew', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message};
}

export async function withdrawBook(id, userID, date) {
    /* Withdraw a book:
        - id: ID of the book
        - userID: ID of the user
        - date: isostring of date to return
    */

    let data = "due=" + date + "&userID=" + userID;   // <- construct data into POST format
    let response = await fetch(serverPath + '/book/' + id + '/withdraw', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message};
}

export async function getLoans() {
    // Get all the books currently on loan

    let response = await fetch(serverPath + '/loans');
    let json = await Functions.Data.parseJSON(response);
    if (json.code !== "000") return {status: json.message, code: json.code};

    // Filter needed data
    let rtn = {
        count: json.count,
        data: json.data.map((loan) => {
            return {
                display: {
                    title: loan.book.title,
                    author: loan.book.author,
                    name: loan.user.forename + ' ' + loan.user.surname,
                    reg: loan.user.year + '-' + loan.user.reg,
                    due: loan.loan.dueDate
                },
                raw: loan
            }
        })
    }
    return rtn;
}

export async function getOverdueLoans() {
    // Get all loans that are overdue

    let response = await fetch(serverPath + '/loans/overdue');
    let json = await Functions.Data.parseJSON(response);

    // Filter needed data
    let rtn = {
        count: json.count,
        data: json.data.map((loan) => {
            return {
                display: {
                    title: loan.book.title,
                    author: loan.book.author,
                    name: loan.user.forename + ' ' + loan.user.surname,
                    reg: loan.user.year + '-' + loan.user.reg,
                    due: loan.loan.dueDate
                },
                raw: loan
            }
        })
    }
    return rtn;
}

export async function getDueSoonLoans() {
    // Get all loans within 3 days of being due back

    let response = await fetch(serverPath + '/loans/due');
    let json = await Functions.Data.parseJSON(response);

    // Filter needed data
    let rtn = {
        count: json.count,
        data: json.data.map((loan) => {
            return {
                display: {
                    title: loan.book.title,
                    author: loan.book.author,
                    name: loan.user.forename + ' ' + loan.user.surname,
                    reg: loan.user.year + '-' + loan.user.reg,
                    due: loan.loan.dueDate
                },
                raw: loan
            }
        })
    }
    return rtn;
}

export async function getLoanInformation(id) {
    // Get information about a particular loan from loan id
    
    let response = await fetch(serverPath + '/loan/' +id);
    let json = await Functions.Data.parseJSON(response);
    return json;
}
