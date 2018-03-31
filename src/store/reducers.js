import { TYPES } from './actions'

const initialStates = {
    currentPage: '/'
}

export const data = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.UPDATE_CURRENT_PAGE:
            return Object.assign({}, state, { currentPage: action.newCurrentPage })
        default:
            return state
    }
}
