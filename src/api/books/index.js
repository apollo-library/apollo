//Import functions
import * as Functions from './../_functions/';

//Config
import config from './../config.js';

import { Loans } from './../';

const serverPath = config.serverPath; //Not have to refer to config everytime

export async function getScanBookInfo(id) {
    // Gets barebones information about a particular book for the scan from id
    let response = await fetch(serverPath + '/book/' + id);
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    let parse = await {
        author: json.data.author,
        title: json.data.title,
        publisher: json.data.publisher,
        tags: json.data.tags
    }
    if (json.data.loanID) { parse['loanID'] = json.data.loanID; }
    return parse; // <- return an object with all the tags
}

export async function searchBooks(query) {
    /* Gets a filtered down list of books from input array structure:
        {
            searchTerm: string
            filters: [string,...] 
        }
    */
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
    // Get full information about a particular book from ID
    let response = await fetch(serverPath + '/book/' + id);
    let json = await Functions.Data.parseJSON(response);
    if (json.code === "002") { return {message: "Book not found"}; }
    return json;
}

export async function addBook(data) {
    /* Add a book, data accepted in the form of:
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

    // Check if data given and leave empty if not
    if (data.isbn10.length !== 0 && data.isbn10.trim()) body += ('&isbn10=' + data.isbn10);
    if (data.isbn13.length !== 0 && data.isbn13.trim()) body += ('&isbn13=' + data.isbn13);
    if (data.title.length !== 0 && data.title.trim()) body += ('&title=' + data.title);
    if (data.author.length !== 0 && data.author.trim()) body += ('&author=' + data.author);
    if (data.publisher.length !== 0 && data.publisher.trim()) body += ('&publisher=' + data.publisher);
    
    // Post data to server
    let response = await fetch(serverPath + '/books', {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    });
    let json = await Functions.Data.parseJSON(response);
    
    // Handle error code
    if (json.code === "000") return true;
    else return false;
}

export async function editBook(book, type, val) {
    /* Edit a value for a book:
        - book: bookID
        - type: the type you are editing
        - val: the value you are updating to
    */
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
    // Delete a book from an id
    const data = await getBookInfo(id);

    if (data.data.loanID) {
        // Detected the book is currently on loan - returning book
        const rtn = await Loans.returnBook(id);
        if (rtn.status !== "success") return false;
    }

    let response = await fetch(serverPath + '/book/' + String(id), {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    let json = await Functions.Data.parseJSON(response);

    // Handle error codes
    if (json.code === "000") return true;
    return false;
}

export async function addBookTag(bookID,tagID) {
    /* Add a tag to a book 
        - bookID: ID of the book
        - tagID: ID of the tag
    */

    // Get tags currently on the book
    let currentData = await getBookInfo(bookID);
    if (currentData.code !== "000") return false;

    // Check for tags that are both on the book locally and on the server
    let overlapTags;
    if (currentData.data.tags.length > 0) overlapTags = currentData.data.tags.find(t => t === tagID);
    if (overlapTags) return false;

    // Generate string to push with all tags needed - new ones will then be added
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

    // Handle error codes
    if (json.code !== "000") return false;
    return true;
}

export async function removeBookTag(bookID,tagID) {
    /* Remove a tag to a book 
        - bookID: ID of the book
        - tagID: ID of the tag
    */

    // Get tags currently on the book
    let currentData = await getBookInfo(bookID);
    if (currentData.code !== "000") return false;

    let tagIndex;
    if (currentData.data.tags.length > 0) tagIndex = currentData.data.tags.indexOf(tagID);
    if (tagIndex === undefined) return false; // Tag not foumd

    let newTags;
    let tagsPush = '';

    // Remove specified tag from array of all tags
    newTags = currentData.data.tags.filter(t => t !== tagID);

    // Construct string of tags to push
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

    // Handle error codes
    if (json.code !== "000") return false;
    return true;
}
