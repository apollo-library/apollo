//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

export async function getBookHistory(id) {
    // Get the history associated with a particular book from id
    let response = await fetch(serverPath + '/book/' + id + '/history');
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    return json;
}
