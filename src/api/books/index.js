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
    // Accepts data in the form of:
    /* 
    {   
        id: "",
        isbn10: "",
        isbn13: "",
        title: "",
        author: "",
        publisher: ""
    }
    */

    let body = "id=" + data.id;

    if (data.isbn10.length !== 0 && data.isbn10.trim()) body += ('&isbn10=' + data.isbn10);
    if (data.isbn13.length !== 0 && data.isbn13.trim()) body += ('&isbn13=' + data.isbn13);
    if (data.title.length !== 0 && data.title.trim()) body += ('&title=' + data.title);
    if (data.author.length !== 0 && data.author.trim()) body += ('&author=' + data.author);
    if (data.publisher.length !== 0 && data.publisher.trim()) body += ('&publisher=' + data.publisher);

    let response = await fetch(serverPath + '/books', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "000") return true;
    else return false;
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

export async function addBookTag(bookID,tagID) {
    // Get tags currently on the book
    let currentData = await getBookInfo(bookID);
    if (currentData.code !== "000") return false;

    let overlapTags;

    if (currentData.data.tags.length > 0) overlapTags = currentData.data.tags.find(t => t === tagID);
    if (overlapTags) return false;

    let newTags = 'tags[]=' + tagID;
    currentData.data.tags.map(tag => newTags += '&tags[]=' + tag);

    let response = await fetch(serverPath + '/book/' + bookID, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: newTags
    });
    let json = await Functions.Data.parseJSON(response);

    if (json.code !== "000") return false;
    return true;
}

export async function removeBookTag(bookID,tagID) {
    // Get tags currently on the book
    let currentData = await getBookInfo(bookID);
    if (currentData.code !== "000") return false;

    let tagIndex;

    if (currentData.data.tags.length > 0) tagIndex = currentData.data.tags.indexOf(tagID);
    if (tagIndex === undefined) return false; // Tag not foumd

    let newTags;
    let tagsPush = '';

    newTags = currentData.data.tags.filter(t => t !== tagID); // Remove tag from array

    if (newTags.length === 0) tagsPush = 'tags[]=';
    else newTags.map(tag => tagsPush += '&tags[]=' + tag);

    let response = await fetch(serverPath + '/book/' + bookID, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: tagsPush
    });
    let json = await Functions.Data.parseJSON(response);

    if (json.code !== "000") return false;
    return true;
}