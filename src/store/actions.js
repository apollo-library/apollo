export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
    REMOVE_BOOK_TO_RATE: 'REMOVE_BOOK_TO_RATE',
    UPDATE_FILTER_LIST: 'UPDATE_FILTER_LIST',
    GET_SCANNED_BOOK: 'GET_SCANNED_BOOK',
    RETURN_BOOK: 'RETURN_BOOK',

    TOGGLE_NOTIFICATIONS: 'TOGGLE_NOTIFICATIONS',
    HIDE_NOTIFICATIONS: 'HIDE_NOTIFICATIONS',
    TOGGLE_ACCOUNT: 'TOGGLE_ACCOUNT',
    HIDE_ACCOUNT: 'HIDE_ACCOUNT',
    SET_SCAN_STATE: 'SET_SCAN_STATE'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage }),
    removeNotification: (notificationToRemoveID) => ({ type: TYPES.REMOVE_NOTIFICATION, notificationToRemoveID }),
    removeBookToRate: () => ({ type: TYPES.REMOVE_BOOK_TO_RATE }),
    updateFilterList: (id, action) => ({ type: TYPES.UPDATE_FILTER_LIST, id, action}),
    getScannedBook: (bookID) => ({type: TYPES.GET_SCANNED_BOOK, bookID}),
    returnBook: () => ({type: TYPES.RETURN_BOOK}),

    toggleNotifications: () => ({type: TYPES.TOGGLE_NOTIFICATIONS}),
    hideNotifications: () => ({type: TYPES.HIDE_NOTIFICATIONS}),
    toggleAccount: () => ({type: TYPES.TOGGLE_ACCOUNT}),
    hideAccount: () => ({type: TYPES.HIDE_ACCOUNT}),
    setScanState: (value) => ({type: TYPES.SET_SCAN_STATE, value})
}
