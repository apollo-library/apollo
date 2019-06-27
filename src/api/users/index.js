//Import functions
// eslint-disable-next-line
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

const serverPath = config.serverPath;

export async function getAllUsers() {
    // Return a list of all users

    let response = await fetch(serverPath + '/users');
    let json = await Functions.Data.parseJSON(response);
    json.data.map((user, index) => {
        if (json.data[index].loanIDs === undefined) json.data[index].loanIDs = [];
        return null;
    });
    return json;
}

export async function getUser(id) {
    // Get information about a particular user by id
    
    let response = await fetch(serverPath + '/user/' + String(id));
    let json = await Functions.Data.parseJSON(response);
    return json;
}

export async function getUserHistory(id) {
    // Get the history of a particular user by id

    let response = await fetch(serverPath + '/user/' + String(id) + '/history/loans');
    let json = await Functions.Data.parseJSON(response);
    return json;
}

export async function getUserName(id) {
    // Returns user's concatanated name. If user doesn't exist, return undefined
    
    let response = await fetch(serverPath + '/user/' + String(id));
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return json.data.name_concat;
}