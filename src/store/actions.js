export const TYPES = {
    UPDATE_CURRENT_PAGE: 'UPDATE_CURRENT_PAGE'
}

export const actions = {
    updateCurrentPage: (newCurrentPage) => ({ type: TYPES.UPDATE_CURRENT_PAGE, newCurrentPage })
}
