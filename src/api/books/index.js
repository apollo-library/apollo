//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

async function getScanBookInfo(id) {
    let data = await fetch(serverPath + '/book/' + id);
    let json = await data.json();
    if (json.code === "002") { return {message: "Book not found"}; }
    let response = await {author: json.data.author, title: json.data.title}
    if (json.data.loanID) { response['loanID'] = json.data.loanID; }
    return response; // <- return an object with all the tags
}

async function searchBooks(query) {
    // <- query given: search term string, selected filters as ints
    // <- list of books
}

async function getBookInfo(id) {
    // <- book id given
    // <- all information about book
}

async function addBook(data) {
    // <- give object
    // <- ?
}

async function editBook(data) {
    // <- ?
    // <- ?
}

async function deleteBook(id) {
    // <- id
    // <- ?
}

async function getBookHistory(id) {

}

export {
    getScanBookInfo,
    searchBooks,
    getBookInfo,
    addBook,
    editBook,
    deleteBook,
    getBookHistory
}
