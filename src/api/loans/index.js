//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function returnBook(id) {
    let response = await fetch(serverPath + '/book/' + id + '/deposit');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message}
}

async function renewBook(id,date) {
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

async function withdrawBook(id, userID, date) {
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

async function getLoans() {
    let response = await fetch(serverPath + '/loans');
    let json = await Functions.Data.parseJSON(response);
    if (json.code !== "000") return {status: json.message, code: json.code};
    let rtn = {
        count: json.count,
        data: json.data.map((loan) => {
            return {
                display: {
                    title: loan.book.title,
                    author: loan.book.author,
                    name: loan.user.forname + ' ' + loan.user.surname
                },
                raw: loan
            }
        })
    }
    return rtn;
}

async function getOverdueLoans() {
    let response = await fetch(serverPath + '/loans/overdue');
    let json = await Functions.Data.parseJSON(response);
    let rtn = {
        count: json.count,
        data: json.data.map((loan) => {
            return {
                display: {
                    title: loan.book.title,
                    author: loan.book.author,
                    name: loan.user.forname + ' ' + loan.user.surname
                },
                raw: loan
            }
        })
    }
    return rtn;
}

async function reserveBook(id) {

}

async function getBookReservation(id) {

}

async function deleteReservation(id) {

}

export {
    returnBook,
    renewBook,
    withdrawBook,
    getLoans,
    getOverdueLoans,
    reserveBook,
    getBookReservation,
    deleteReservation
}
