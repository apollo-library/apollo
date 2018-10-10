//Import functions
// eslint-disable-next-line
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
// eslint-disable-next-line
const serverPath = config.serverPath;

async function getAllUsers() {

}

async function addUser(data) {

}

async function getUser(id) {
    let response = await fetch(serverPath + '/user/' + String(id));
    let json = await Functions.Data.parseJSON(response);
    return json;
}

async function deleteUser() {

}

export {
    getAllUsers,
    addUser,
    getUser,
    deleteUser
}
