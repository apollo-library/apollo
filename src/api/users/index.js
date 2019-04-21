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
        return null;
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

async function getUserName(id) {
    // Returns user's concatanated name. If user doesn't exist, return undefined.
    let response = await fetch(serverPath + '/user/' + String(id));
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return json.data.name_concat;
}

export {
    getAllUsers,
    addUser,
    getUser,
    getUserHistory,
    deleteUser,
    getUserName
}
