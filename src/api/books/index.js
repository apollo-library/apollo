//Config
import config from './../config.js';

//Not have to refer to config everytime
const serverPath = config.serverPath;

export async function getScanBookInfo(id) {
    let data = await fetch(serverPath + '/book/' + id);
    let json = await data.json();
    if (json.code === "002") { return {message: "Book not found"}; }
    let response = await {author: json.data.author, title: json.data.title, publisher: json.data.publisher, tags: json.data.tags}
    if (json.data.loanID) { response['loanID'] = json.data.loanID; }
    return response; // <- return an object with all the tags
}

export async function searchBooks(query) {
    console.log(query)
    if (query.searchTerm === "") {
        return {message: "Search term not given"};
    }

    let filters = "";

    query.selectedFilters.forEach((tag, index) => {
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
    let json = await response.json();
    return json;
}

export async function getBookInfo(id) {
    // <- book id given
    // <- all information about book
}

export async function addBook(data) {
    // <- give object
    // <- ?
}

export async function editBook(data) {
    // <- ?
    // <- ?
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
