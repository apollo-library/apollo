//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

export async function getScanBookInfo(id) {
    let response = await fetch(serverPath + '/book/' + id);
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    let parse = await {author: json.data.author, title: json.data.title, publisher: json.data.publisher, tags: json.data.tags}
    if (json.data.loanID) { parse['loanID'] = json.data.loanID; }
    return parse; // <- return an object with all the tags
}

export async function searchBooks(query) {
    let filters = "";

    query.filters.forEach((tag, index) => {
        filters += '&filters[' + index + ']=' + tag;
    });

    let data = "query=" + query.searchTerm + filters;   // <- construct data into POST format

    let response = await fetch(serverPath + '/books/search', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });
    let json = await Functions.Data.parseJSON(response);
    return json;
}

export async function getBookInfo(id) {
    let response = await fetch(serverPath + '/book/' + id);
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    return json;
}

export async function addBook(data) {
    // <- give object
    // <- ?
}

export async function editBook(book, type, val) {
    let data = type + '=' + val;

    let response = await fetch(serverPath + '/book/' + book, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    });
    let json = await Functions.Data.parseJSON(response);
    return json;
}

 export async function deleteBook(id) {
    // <- id
    // <- ?
}

export async function getBookHistory(id) {

}

/*
export {
    getScanBookInfo,
    searchBooks,
    getBookInfo,
    addBook,
    editBook,
    deleteBook,
    getBookHistory
}*/
