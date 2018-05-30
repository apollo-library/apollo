//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function getAllTags() {
    let data = await fetch(serverPath + '/tags');
    let json = await data.json();
    if (json.code === "001") { return []; }
    let response = await json.data.map(tag => ({id:tag._id,name:tag.name}));
    return response; // <- return an object with all the tags
}

async function addTag(data) {

}


export {
    getAllTags,
    addTag
}
