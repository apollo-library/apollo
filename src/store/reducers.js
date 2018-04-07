import { TYPES } from './actions'

const initialStates = {
    currentPage: '',
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
            dueDate: "2018-05-03T18:25:43.511Z",
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
    studentDetails: {
        concatName: "Joe Bloggs",
        latestBookTitle: "Rocket Propulsion Elements",
        latestBookAuthor: "George Paul Sutton",
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
        ]
    },
    booksDueSoon: [
        {
            _id: "rieuoqp",
            title: "Rocket Propulsion Elements 1",
            author: "George Paul Sutton 1",
            dueDate: "2018-05-06T18:25:43.511Z"
        },
        {
            _id: "nvmcxb",
            title: "Rocket Propulsion Elements 2",
            author: "George Paul Sutton 2",
            dueDate: "2018-05-06T18:25:43.511Z"
        },
        {
            _id: "fhjaop",
            title: "Rocket Propulsion Elements 3",
            author: "George Paul Sutton 3",
            dueDate: "2018-05-06T18:25:43.511Z"
        },
        {
            _id: "htjrwn",
            title: "Rocket Propulsion Elements 4",
            author: "George Paul Sutton 4",
            dueDate: "2018-05-06T18:25:43.511Z"
        }
    ]
}

function removeNotification(state, notificationToRemoveID) {
    let filteredArray = state.notifications.filter((notification) => {
        return notification._id !== notificationToRemoveID
    });
    return Object.assign({}, state, { notifications: filteredArray });
}

function removeBookToRate(state) {
    let updatedBooksToRate = state.studentDetails.booksToRate.shift();
    return Object.assign({}, state, { booksToRate: updatedBooksToRate });
}

export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return Object.assign({}, state, { currentPage: action.newCurrentPage })
        case TYPES.REMOVE_NOTIFICATION:
            return removeNotification(state, action.notificationToRemoveID)
        case TYPES.REMOVE_BOOK_TO_RATE:
            return removeBookToRate(state)
        default:
            return state
    }
}
