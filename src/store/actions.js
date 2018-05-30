export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
    REMOVE_BOOK_TO_RATE: 'REMOVE_BOOK_TO_RATE',
    GET_FILTER_LIST: 'GET_FILTER_LIST',
    UPDATE_FILTER_LIST: 'UPDATE_FILTER_LIST',
    SET_SCANNED_BOOK: 'SET_SCANNED_BOOK',

    TOGGLE_NOTIFICATIONS: 'TOGGLE_NOTIFICATIONS',
    HIDE_NOTIFICATIONS: 'HIDE_NOTIFICATIONS',
    TOGGLE_ACCOUNT: 'TOGGLE_ACCOUNT',
    HIDE_ACCOUNT: 'HIDE_ACCOUNT',
    SET_SCAN_SEARCH_TERM: 'SET_SCAN_SEARCH_TERM',
    ADD_SCAN_TAB: 'ADD_SCAN_TAB'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage }),
    removeNotification: (notificationToRemoveID) => ({ type: TYPES.REMOVE_NOTIFICATION, notificationToRemoveID }),
    removeBookToRate: () => ({ type: TYPES.REMOVE_BOOK_TO_RATE }),
    getFilterList: (filterTags) => ({type: TYPES.GET_FILTER_LIST, filterTags}),
    updateFilterList: (id, action) => ({type: TYPES.UPDATE_FILTER_LIST, id, action}),
    setScannedBook: (bookID) => ({type: TYPES.SET_SCANNED_BOOK, bookID}),

    toggleNotifications: () => ({type: TYPES.TOGGLE_NOTIFICATIONS}),
    hideNotifications: () => ({type: TYPES.HIDE_NOTIFICATIONS}),
    toggleAccount: () => ({type: TYPES.TOGGLE_ACCOUNT}),
    hideAccount: () => ({type: TYPES.HIDE_ACCOUNT}),
    setScanSearchTerm: (scanSearchTerm) => ({type: TYPES.SET_SCAN_SEARCH_TERM, scanSearchTerm}),
    addScanTab: (tabToAdd) => ({type: TYPES.ADD_SCAN_TAB, tabToAdd})
}
