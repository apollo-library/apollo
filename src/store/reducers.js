import { TYPES } from './actions'

const initialStates = {
    currentPage: '',
    notifications: [
        {
            actionDate: "2018-04-05T10:25:43.511Z",
            dueDate: "2018-04-06T18:25:43.511Z",
            action: "overdue",
            title: "Rocket Propulsion Elements",
            author: "George Paul Sutton"
        },
        {
            actionDate: "2018-04-04T18:25:43.511Z",
            dueDate: "2018-04-06T18:25:43.511Z",
            action: "renew",
            title: "Rocket Propulsion Elements",
            author: "George Paul Sutton"
        },
        {
            actionDate: "2018-04-04T18:25:43.511Z",
            dueDate: "2018-04-03T18:25:43.511Z",
            action: "return",
            title: "Rocket Propulsion Elements",
            author: "George Paul Sutton"
        },
        {
            actionDate: "2018-04-04T18:25:43.511Z",
            dueDate: "2018-04-08T18:25:43.511Z",
            action: "withdraw",
            title: "Rocket Propulsion Elements",
            author: "George Paul Sutton"
        }
    ]
}

function removeNotification(state, notificationToRemoveIndex) {
    let filteredArray = state.notifications.filter((notification) => {
        return state.notifications.indexOf(notification) !== notificationToRemoveIndex
    });
    return Object.assign({}, state, { notifications: filteredArray })

}

export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return Object.assign({}, state, { currentPage: action.newCurrentPage })
        case TYPES.REMOVE_NOTIFICATION:
            return removeNotification(state, action.notificationToRemoveIndex)
        default:
            return state
    }
}
