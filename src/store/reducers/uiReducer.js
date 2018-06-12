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

    scanSearchTerm: "",
    /*
        0 = Initial state, just the search bar at the top of the page
        1 = WITHDRAW. Show options for selecting a student and the due date
        2 = RENEW. Show option for selecting how many weeks to renew book for
        3 = Thank you message before automatically moving on back to initial state
        4 = Error
    */
    scanStatesToShow: [0],
    scanError: ""
}


function addScanTab(state, tabToAdd) {
    let canAddTab = true;

    for (let i = 0; i < state.scanStatesToShow.length; i++) {
        if (state.scanStatesToShow[i] === tabToAdd) {
            canAddTab = false;
        }
    }

    if (canAddTab) {
        return update(state, {
         scanStatesToShow: {$push: [tabToAdd]}
      })
    }
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
        case TYPES.SET_SCAN_SEARCH_TERM:
            return update(state, {
                scanSearchTerm: {$set: action.scanSearchTerm}
            })
        case TYPES.RESET_SCAN_TAB:
            return update(state, {
                scanStatesToShow: {$set: [0]}
            })
        case TYPES.ADD_SCAN_TAB:
            return addScanTab(state, action.tabToAdd)
        case TYPES.SET_SCAN_ERROR:
            return update(state, {
                scanError: {$set: action.scanError}
            })
        default:
            return state
    }
}
