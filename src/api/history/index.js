//Import functions
// eslint-disable-next-line
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
// eslint-disable-next-line
const serverPath = config.serverPath;

async function getBookHistory(id) {
    let response = await fetch(serverPath + '/book/' + id + '/history');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    return json;
}

async function getBookHistoryUsers(id) {
    
}

async function getBookCurrentLoan(id) {

}

async function getUserHistory(id) {

}

async function getUserHistoryLoans(id) {

}

async function getUserHistoryFines(id) {

}

export {
    getBookHistory,
    getBookHistoryUsers,
    getBookCurrentLoan,
    getUserHistory,
    getUserHistoryLoans,
    getUserHistoryFines
}
