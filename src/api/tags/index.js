//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

export async function getAllTags() {
    // Get all the current tags

    let response = await fetch(serverPath + '/tags');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "001") return [];
    let parse = await json.data.map(tag => ({id:tag._id,name:tag.name}));
    return parse; // <- return an object with all the tags
}

export async function getTag(id) {
    // Get a tag's name from id

    let response = await fetch(serverPath + '/tag/' + id);
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return json.data.name;
    else return false;
}

export async function addTag(name) {
    // Add a new tag

    let data = "name=" + name;

    let response = await fetch(serverPath + '/tags', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });

    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return true;
    return false;
}

export async function editTag(id,name) {
    /* Edit the name of a tag
        - id: ID of the tag
        - name: name to change tag to
    */

    let data = "name=" + name;

    let response = await fetch(serverPath + '/tag/' + String(id), {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });

    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return true;
    return false;
}

export async function deleteTag(id) {
    // Delete a particular tag by id

    let response = await fetch(serverPath + '/tag/' + String(id), {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return true;
    return false;
}
