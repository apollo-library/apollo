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
        books: [
            {
                title: "Rocket Propulsion Elements",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 2",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 3",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 4",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 5",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 6",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 7",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 8",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 9",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 10",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 11",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 12",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 13",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 14",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 15",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 16",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 17",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 18",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 19",
                author: "George Paul Sutton"
            },
            {
                title: "Rocket Propulsion Elements 20",
                author: "George Paul Sutton"
            }
        ],
        filterList: [
            {
                id: 1,
                name: "Filter 1"
            },
            {
                id: 2,
                name: "Filter 2"
            },
            {
                id: 3,
                name: "Filter 3"
            },
            {
                id: 4,
                name: "Filter 4"
            },
            {
                id: 5,
                name: "Filter 5"
            },
            {
                id: 6,
                name: "Filter 6"
            },
            {
                id: 7,
                name: "Filter 7"
            },
            {
                id: 8,
                name: "Filter 8"
            },
            {
                id: 9,
                name: "Filter 9"
            },
            {
                id: 10,
                name: "Filter 10"
            },
            {
                id: 11,
                name: "Filter 11"
            },
            {
                id: 12,
                name: "Filter 12"
            },
            {
                id: 13,
                name: "Filter 13"
            },
            {
                id: 14,
                name: "Filter 14"
            },
            {
                id: 15,
                name: "Filter 15"
            },
            {
                id: 16,
                name: "Filter 16"
            },
            {
                id: 17,
                name: "Filter 17"
            },
            {
                id: 18,
                name: "Filter 18"
            },
            {
                id: 19,
                name: "Filter 19"
            },
            {
                id: 20,
                name: "Filter 20"
            }
        ]
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
    console.log(localState.filterTerms)
    return {...state, localState}
}

function getScannedBook(state, bookID) {
    let localState = state;
    localState.scannedBook = {
        title: "Rocket Propulsion Elements",
        author: "George Paul Sutton",
        loanID: "7890"
    }

    console.log("Looked up with with ID: " + bookID)

    return {...state, localState}
}

function returnBook(state) {
    console.log("Book returned")
    return state
}

export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return{...state, currentPage: action.newCurrentPage }
        case TYPES.REMOVE_NOTIFICATION:
            return removeNotification(state, action.notificationToRemoveID)
        case TYPES.REMOVE_BOOK_TO_RATE:
            return removeBookToRate(state)
        case TYPES.UPDATE_FILTER_LIST:
            return updateFilterList(state, action.id, action.action)
        case TYPES.GET_SCANNED_BOOK:
            return getScannedBook(state, action.bookID)
        case TYPES.RETURN_BOOK:
            return returnBook(state)
        default:
            return state
    }
}
