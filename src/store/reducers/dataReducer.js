import { TYPES } from '../actions'

/* THINGS I NEED TO GET FROM API:

 - studentDetails
 - catalogue

*/

const initialStates = {
    currentPage: '',
    studentDetails: {
        concatName: "Joe Bloggs",
        latestBook:  {
            title: "Rocket Propulsion Elements",
            author: "George Paul Sutton"
        },
        currentFine: "£1.20",
        booksToRate: [
            {
                _id: "rieuoqp",
                title: "Rocket Propulsion Elements 1",
                author: "George Paul Sutton 1"
            },
            {
                _id: "nvmcxb",
                title: "Rocket Propulsion Elements 2",
                author: "George Paul Sutton 2"
            },
            {
                _id: "fhjaop",
                title: "Rocket Propulsion Elements 3",
                author: "George Paul Sutton 3"
            },
            {
                _id: "htjrwn",
                title: "Rocket Propulsion Elements 4",
                author: "George Paul Sutton 4"
            }
        ],
        notifications: [
            {
                _id: "fdkjasl",
                actionDate: "2018-04-05T10:25:43.511Z",
                dueDate: "2018-05-06T18:25:43.511Z",
                action: "overdue",
                title: "Rocket Propulsion Elements",
                author: "George Paul Sutton"
            },
            {
                _id: "uriew2",
                actionDate: "2018-04-04T18:25:43.511Z",
                dueDate: "2018-05-06T18:25:43.511Z",
                action: "renew",
                title: "Rocket Propulsion Elements",
                author: "George Paul Sutton"
            },
            {
                _id: "nvmcvb",
                actionDate: "2018-04-04T18:25:43.511Z",
                dueDate: "2018-04-04T18:25:43.511Z",
                action: "return",
                title: "Rocket Propulsion Elements",
                author: "George Paul Sutton"
            },
            {
                _id: "hgsjfoi",
                actionDate: "2018-04-04T18:25:43.511Z",
                dueDate: "2018-05-08T18:25:43.511Z",
                action: "withdraw",
                title: "Rocket Propulsion Elements",
                author: "George Paul Sutton"
            }
        ],
        booksDueSoon: [
            {
                _id: "rieuoqp",
                title: "Rocket Propulsion Elements 1",
                author: "George Paul Sutton 1",
                rating: 3,
                dueDate: "2018-05-06T18:25:43.511Z"
            },
            {
                _id: "nvmcxb",
                title: "Rocket Propulsion Elements 2",
                author: "George Paul Sutton 2",
                rating: 5,
                dueDate: "2018-05-06T18:25:43.511Z"
            },
            {
                _id: "fhjaop",
                title: "Rocket Propulsion Elements 3",
                author: "George Paul Sutton 3",
                rating: 2,
                dueDate: "2018-05-06T18:25:43.511Z"
            }
        ]
    },
    catalogue: {
        books: [],
        filterList: []
    },
    filterTerms: {
        searchTerm: "",
        selectedFilters: []
    },
    scannedBook: {}
}

function removeNotification(state, notificationToRemoveID) {
    let localState = state;
    let filteredArray = localState.studentDetails.notifications.filter((notification) => {
        return notification._id !== notificationToRemoveID
    });
    localState.studentDetails.notifications = filteredArray;

    return {...state, localState}
}

function removeBookToRate(state) {
    let localState = state;
    localState.studentDetails.booksToRate.shift();

    return {...state, localState}
}

function getFilterList(state, filterTags) {
    let localState = state;

    localState.catalogue.filterList = filterTags;

    return {...state, localState};
}

function updateFilterList(state, data, action) {
    let localState = state;
    if (action === "add") {
        localState.filterTerms.selectedFilters.push(data);
    } else if (action === "remove") {
        let filterIndex = localState.filterTerms.selectedFilters.indexOf(data)
        localState.filterTerms.selectedFilters.splice(filterIndex, 1);
    } else if (action === "search") {
        localState.filterTerms.searchTerm = data;
    } else {
        return {...state}
    }

    return {...state, localState}
}

function setScannedBook(state, scannedBook) {
    let localState = state;
    localState.scannedBook = scannedBook

    return {...state, localState}
}

function setCatalogueBooks(state, books) {
    let localState = JSON.parse(JSON.stringify(state));
    localState.catalogue.books = books;
    
    return {...state, catalogue: {books: localState.catalogue.books}}
}


export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return{...state, currentPage: action.newCurrentPage }
        case TYPES.REMOVE_NOTIFICATION:
            return removeNotification(state, action.notificationToRemoveID)
        case TYPES.REMOVE_BOOK_TO_RATE:
            return removeBookToRate(state)
        case TYPES.GET_FILTER_LIST:
            return getFilterList(state, action.filterTags)
        case TYPES.UPDATE_FILTER_LIST:
            return updateFilterList(state, action.id, action.action)
        case TYPES.SET_SCANNED_BOOK:
            return setScannedBook(state, action.bookID)
        case TYPES.SET_CATALOGUE_BOOKS:
            return setCatalogueBooks(state, action.books)
        default:
            return state
    }
}
