import { TYPES } from '../actions'

import update from 'immutability-helper';


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
    searchQuery: {
        searchTerm: "",
        filters: []
    },
    catalogue: {
        tags: []
    },
    filteredTags: [],
    scannedBook: {}
}

//Eventually this will all update from an API call within the component
function removeNotification(state, notificationToRemoveID) {
    let filteredArray = state.studentDetails.notifications.filter((notification) => {
        return notification._id !== notificationToRemoveID
    });

    return update(state, {studentDetails:
        {
            notifications: {$set: filteredArray}
        }
    })
}

//Eventually this will all update from an API call within the component
function removeBookToRate(state) {
    let localState = JSON.parse(JSON.stringify(state));
    localState.studentDetails.booksToRate.shift();

    return {...state, studentDetails: {booksToRate: localState.studentDetails.booksToRate}}
}

//Toggles the tags being in the serach query or not
function updateFilterTags(state, tagName) {
    //Check if the active filters contains the one we've clicked
    if (state.searchQuery.filters.includes(tagName)) { //For IE support in the future *.includes() can be changed to *.indexOf()
        //Remove tag from query
        let index = state.searchQuery.filters.indexOf(tagName);

        return update(state, {
            searchQuery: {
                filters: {$splice: [[index, 1]]}
            }
        })
    } else {
        //Add the tag to the query
        return update(state, {
            searchQuery: {
                filters: {$push: [tagName]}
            }
        })
    }
}

//Updates the value of the searchTerm in the search query
function updateSearchTerm(state, searchTerm) {
    console.log(searchTerm)

    return update(state, {
        searchQuery: {
            searchTerm: {$set: searchTerm}
        }
    })
}


export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return update(state, {
                currentPage: {$set: action.newCurrentPage}
            })
        case TYPES.REMOVE_NOTIFICATION:
            return removeNotification(state, action.notificationToRemoveID)
        case TYPES.REMOVE_BOOK_TO_RATE:
            return removeBookToRate(state)
        case TYPES.SET_SCANNED_BOOK:
            return update(state, {
                scannedBook: {$set: action.bookID}
            })
        case TYPES.PUSH_ALL_TAGS:
            return update(state, {catalogue:
                {
                    tags: {$set: action.tags}
                }
            })
        case TYPES.PUSH_FILTERED_TAGS:
            return update(state, {
                filteredTags: {$set: action.filteredTags}
            })
        case TYPES.UPDATE_FILTER_TAGS:
            return updateFilterTags(state, action.tagName)
        case TYPES.UPDATE_SEARCH_TERM:
            return updateSearchTerm(state, action.searchTerm)
        default:
            return state
    }
}
