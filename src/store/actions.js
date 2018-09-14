export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
    REMOVE_BOOK_TO_RATE: 'REMOVE_BOOK_TO_RATE',
    SET_SCANNED_BOOK: 'SET_SCANNED_BOOK',
    PUSH_ALL_TAGS: 'PUSH_ALL_TAGS',
    PUSH_FILTERED_TAGS: 'PUSH_FILTERED_TAGS',
    UPDATE_FILTER_TAGS: 'UPDATE_FILTER_TAGS',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM',
    PUSH_CATALOGUE_BOOKS: 'PUSH_CATALOGUE_BOOKS',

    TOGGLE_NOTIFICATIONS: 'TOGGLE_NOTIFICATIONS',
    HIDE_NOTIFICATIONS: 'HIDE_NOTIFICATIONS',
    TOGGLE_ACCOUNT: 'TOGGLE_ACCOUNT',
    HIDE_ACCOUNT: 'HIDE_ACCOUNT',
    SET_SCAN_SEARCH_TERM: 'SET_SCAN_SEARCH_TERM',
    RESET_SCAN_TAB: 'RESET_SCAN_TAB',
    ADD_SCAN_TAB: 'ADD_SCAN_TAB',
    SET_SCAN_ERROR: 'SET_SCAN_ERROR'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage }),
    removeNotification: (notificationToRemoveID) => ({ type: TYPES.REMOVE_NOTIFICATION, notificationToRemoveID }),
    removeBookToRate: () => ({ type: TYPES.REMOVE_BOOK_TO_RATE }),
    setScannedBook: (bookID) => ({type: TYPES.SET_SCANNED_BOOK, bookID}),
    pushAllTags: (tags) => ({type: TYPES.PUSH_ALL_TAGS, tags}),
    pushFilteredTags: (filteredTags) => ({type: TYPES.PUSH_FILTERED_TAGS, filteredTags}),
    updateFilterTags: (tagName) => ({type: TYPES.UPDATE_FILTER_TAGS, tagName}),
    updateSearchTerm: (searchTerm) => ({type: TYPES.UPDATE_SEARCH_TERM, searchTerm}),
    pushCatalogueBooks: (books) => ({type: TYPES.PUSH_CATALOGUE_BOOKS, books}),

    toggleNotifications: () => ({type: TYPES.TOGGLE_NOTIFICATIONS}),
    hideNotifications: () => ({type: TYPES.HIDE_NOTIFICATIONS}),
    toggleAccount: () => ({type: TYPES.TOGGLE_ACCOUNT}),
    hideAccount: () => ({type: TYPES.HIDE_ACCOUNT}),
    setScanSearchTerm: (scanSearchTerm) => ({type: TYPES.SET_SCAN_SEARCH_TERM, scanSearchTerm}),
    resetScanTab: () => ({type: TYPES.RESET_SCAN_TAB}),
    addScanTab: (tabToAdd) => ({type: TYPES.ADD_SCAN_TAB, tabToAdd}),
    setScanError: (scanError) => ({type: TYPES.SET_SCAN_ERROR, scanError})
}
