export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage }),
    removeNotification: (notificationToRemoveIndex) => ({ type: TYPES.REMOVE_NOTIFICATION, notificationToRemoveIndex })
}
