export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
    REMOVE_BOOK_TO_RATE: 'REMOVE_BOOK_TO_RATE',
    SET_SCANNED_BOOK: 'SET_SCANNED_BOOK',
    PUSH_ALL_TAGS: 'PUSH_ALL_TAGS',
    PUSH_FILTERED_TAGS: 'PUSH_FILTERED_TAGS',
    UPDATE_FILTER_TAGS: 'UPDATE_FILTER_TAGS',
    UPDATE_FILTER_TAGS_STATE: 'UPDATE_FILTER_TAGS_STATE',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM',
    PUSH_CATALOGUE_BOOKS: 'PUSH_CATALOGUE_BOOKS',
    RESET_CATALOGUE_BOOKS: 'RESET_CATALOGUE_BOOKS',
    RESET_SEARCH_QUERY: 'RESET_SEARCH_QUERY',

    TOGGLE_NOTIFICATIONS: 'TOGGLE_NOTIFICATIONS',
    HIDE_NOTIFICATIONS: 'HIDE_NOTIFICATIONS',
    TOGGLE_ACCOUNT: 'TOGGLE_ACCOUNT',
    HIDE_ACCOUNT: 'HIDE_ACCOUNT',
    SET_SUCCESS_SCREEN: 'SET_SUCCESS_SCREEN',
    UNSET_SUCCESS_SCREEN: 'UNSET_SUCCESS_SCREEN',

    PUSH_USERS: 'PUSH_USERS',
    RESET_FILTERED_USERS: 'RESET_FILTERED_USERS'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage }),
    removeNotification: (notificationToRemoveID) => ({ type: TYPES.REMOVE_NOTIFICATION, notificationToRemoveID }),
    removeBookToRate: () => ({ type: TYPES.REMOVE_BOOK_TO_RATE }),
    setScannedBook: (bookID) => ({type: TYPES.SET_SCANNED_BOOK, bookID}),
    pushAllTags: (tags) => ({type: TYPES.PUSH_ALL_TAGS, tags}),
    pushFilteredTags: (filteredTags) => ({type: TYPES.PUSH_FILTERED_TAGS, filteredTags}),
    updateFilterTags: (tagName) => ({type: TYPES.UPDATE_FILTER_TAGS, tagName}),
    updateFilterTagsState: (tagName) => ({type: TYPES.UPDATE_FILTER_TAGS_STATE, tagName}),
    updateSearchTerm: (searchTerm) => ({type: TYPES.UPDATE_SEARCH_TERM, searchTerm}),
    pushCatalogueBooks: (books) => ({type: TYPES.PUSH_CATALOGUE_BOOKS, books}),
    resetCatalogueBooks: () => ({type: TYPES.RESET_CATALOGUE_BOOKS}),
    resetSearchQuery: () => ({type: TYPES.RESET_SEARCH_QUERY}),

    toggleNotifications: () => ({type: TYPES.TOGGLE_NOTIFICATIONS}),
    hideNotifications: () => ({type: TYPES.HIDE_NOTIFICATIONS}),
    toggleAccount: () => ({type: TYPES.TOGGLE_ACCOUNT}),
    hideAccount: () => ({type: TYPES.HIDE_ACCOUNT}),
    setSuccessScreen: () => ({type: TYPES.SET_SUCCESS_SCREEN}),
    unsetSuccessScreen: () => ({type: TYPES.UNSET_SUCCESS_SCREEN}),

    pushUsers: (users) => ({type: TYPES.PUSH_USERS, users}),
    resetFilteredUsers: () => ({type: TYPES.RESET_FILTERED_USERS})
}
