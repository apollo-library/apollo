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
                id: "id1",
                text: "Filter 1"
            },
            {
                id: "id2",
                text: "Filter 2"
            },
            {
                id: "id3",
                text: "Filter 3"
            },
            {
                id: "id4",
                text: "Filter 4"
            },
            {
                id: "id5",
                text: "Filter 5"
            },
            {
                id: "id6",
                text: "Filter 6"
            },
            {
                id: "id7",
                text: "Filter 7"
            },
            {
                id: "id8",
                text: "Filter 8"
            },
            {
                id: "id9",
                text: "Filter 9"
            },
            {
                id: "id10",
                text: "Filter 10"
            },
            {
                id: "id11",
                text: "Filter 11"
            },
            {
                id: "id12",
                text: "Filter 12"
            },
            {
                id: "id13",
                text: "Filter 13"
            },
            {
                id: "id14",
                text: "Filter 14"
            },
            {
                id: "id15",
                text: "Filter 15"
            },
            {
                id: "id16",
                text: "Filter 16"
            },
            {
                id: "id17",
                text: "Filter 17"
            },
            {
                id: "id18",
                text: "Filter 18"
            },
            {
                id: "id19",
                text: "Filter 19"
            },
            {
                id: "id20",
                text: "Filter 20"
            }
        ]
    },
    filterTerms: {
        searchTerm: "",
        selectedFilters: []
    }
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
        default:
            return state
    }
}
