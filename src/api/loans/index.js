//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function returnBook(id) {
    let data = await fetch(serverPath + '/book/' + id + '/deposit');
    let json = await data.json();
    if (json.code === "000") { return {status: 'success'}; }
    return {status: json.message}
}

export {
    returnBook
}
