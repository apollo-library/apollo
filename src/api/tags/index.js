//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function getAllTags() {
    let response = await fetch(serverPath + '/tags');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "001") { return []; }
    let parse = await json.data.map(tag => ({id:tag._id,name:tag.name}));
    return parse; // <- return an object with all the tags
}

async function addTag(data) {
    // <- ?
    // <- ?
    return false;
}

async function editTag(data) {
    // <- ?
    // <- ?
    return false;
}
async function deleteTag(data) {
    // <- ?
    // <- ?
    return false;
}


export {
    getAllTags,
    addTag,
    editTag,
    deleteTag
}
