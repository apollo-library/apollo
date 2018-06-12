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
    catalogue: {
        books: [],
        filterList: []
    },
    filterTerms: {
        searchTerm: "",
        selectedFilters: [],
        filteredFilters: []
    },
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



function updateFilterList(state, data, action) {
    if (action === "add") {
        console.log(state.filterTerms)
        return update(state, {filterTerms:
            {
                selectedFilters: {$push: [data]}
            }
        })

    } else if (action === "remove") {
        let filterIndex = state.filterTerms.selectedFilters.indexOf(data)
        console.log(state.filterTerms)
        return update(state, {filterTerms:
            {
                selectedFilters: {$splice: [[filterIndex, 1]]}
            }
        })

    } else if (action === "search") {
        console.log("setting redux state to: " + data)
        console.log(state.filterTerms)
        return update(state, {filterTerms:
            {
                searchTerm: {$set: data}
            }
        })
    } else {
        return {...state}
    }
}

function filterFilterList(state, filterListTerm) {
    let filteredFilters = []
    filteredFilters = state.catalogue.filterList.filter((filter) => {
        return filter.name.toLowerCase().indexOf(filterListTerm.toLowerCase()) > -1
    });

    return update(state, {filterTerms:
        {
            filteredFilters: {$set: filteredFilters}
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
        case TYPES.GET_FILTER_LIST:
            return update(state, {catalogue:
                {
                    filterList: {$set: action.filterTags}
                }
            })
        case TYPES.UPDATE_FILTER_LIST:
            return updateFilterList(state, action.id, action.action)
        case TYPES.SET_SCANNED_BOOK:
            return update(state, {
                scannedBook: {$set: action.bookID}
            })
        case TYPES.SET_CATALOGUE_BOOKS:
        let test = [{title: "First title"}, {title: "Second title"}]
            return update(state, {catalogue:
                {
                    books: {$set: action.books}
                }
            })
        case TYPES.FILTER_FILTER_LIST:
            return filterFilterList(state, action.filterListTerm)
        default:
            return state
    }
}
