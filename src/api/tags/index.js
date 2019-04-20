//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function getAllTags() {
    let response = await fetch(serverPath + '/tags');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "001") return [];
    let parse = await json.data.map(tag => ({id:tag._id,name:tag.name}));
    return parse; // <- return an object with all the tags
}

async function addTag(name) {
    let data = "name" + '=' + name;

    let response = await fetch(serverPath + '/tags', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });

    let json = await Functions.Data.parseJSON(response);
    console.log(json)
    if (json.code === "000") return true;
    return false;
}

async function editTag(id,name) {
    let data = "name" + '=' + name;

    let response = await fetch(serverPath + '/tag/' + id, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });

    let json = await Functions.Data.parseJSON(response);
    console.log(json)
    if (json.code === "000") return true;
    return false;
}
async function deleteTag(id) {
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
