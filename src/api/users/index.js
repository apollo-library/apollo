//Import functions
// eslint-disable-next-line
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

const serverPath = config.serverPath;

async function getAllUsers() {
    let response = await fetch(serverPath + '/users');
    let json = await Functions.Data.parseJSON(response);
    json.data.map((user, index) => {
        if (json.data[index].loanIDs === undefined) json.data[index].loanIDs = [];
    });
    return json;
}

async function addUser(data) {

}

async function getUser(id) {
    let response = await fetch(serverPath + '/user/' + String(id));
    let json = await Functions.Data.parseJSON(response);
    return json;
}

async function getUserHistory(id) {
    let response = await fetch(serverPath + '/user/' + String(id) + '/history/loans');
    let json = await Functions.Data.parseJSON(response);
    return json;
}

async function deleteUser() {

}

export {
    getAllUsers,
    addUser,
    getUser,
    getUserHistory,
    deleteUser
}
