//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function returnBook(id) {
    let data = await fetch(serverPath + '/book/' + id + '/deposit');
    let json = await data.json();
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
    let json = await response.json();
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
    let json = await response.json();
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message};
}

async function getLoans() {
    // <- nothing
    // <- ?
}

async function getOverdueLoans() {
    // <- nothing
    // <- ?
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
