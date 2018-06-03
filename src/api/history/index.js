//Import functions
// eslint-disable-next-line
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
// eslint-disable-next-line
const serverPath = config.serverPath;

async function getHistory() {

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
    getHistory,
    getBookHistoryUsers,
    getBookCurrentLoan,
    getUserHistory,
    getUserHistoryLoans,
    getUserHistoryFines
}
