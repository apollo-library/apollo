//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function getScanBookInfo(id) {
    let data = await fetch(serverPath + '/book/' + id);
    let json = await data.json();
    if (json.code === "002") { return {}; }
    let response = await {author: json.data.author, title: json.data.title}
    if (json.data.loanID) { response['loanID'] = json.data.loanID; }
    return response; // <- return an object with all the tags
}


export { getScanBookInfo }
