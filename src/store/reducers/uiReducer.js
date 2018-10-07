import { TYPES } from '../actions'

import update from 'immutability-helper';


/*
    These states are mainly for handling UI states that are global
    across the whole appliaction or are specific to an individual
    page but need to be accesssed from multiple components
*/

const initialStates = {
    notificationPopupActive: false,
    accountPopupActive: false,
    successScreenState: false,
    scanReset: true
}


export const ui = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_NOTIFICATIONS:
            return update(state, {
                notificationPopupActive: {$set: !state.notificationPopupActive}
            })
        case TYPES.HIDE_NOTIFICATIONS:
            return update(state, {
                notificationPopupActive: {$set: false}
            })
        case TYPES.TOGGLE_ACCOUNT:
            return update(state, {
                accountPopupActive: {$set: !state.accountPopupActive}
            })
        case TYPES.HIDE_ACCOUNT:
            return update(state, {
                accountPopupActive: {$set: false}
            })
        case TYPES.TOGGLE_SUCCESS_SCREEN:
            /* let newState = update(state, {
                successScreenState: {$set: !state.successScreenState}
            })

            return newState = update(newState, {
                scanReset: {$set: false}
            }) */
            return update(state, {
                successScreenState: {$set: !state.successScreenState}
            })
        case TYPES.SET_SCAN_RESET:
            return update(state, {
                scanReset: {$set: true}
            })
        default:
            return state
    }
}
