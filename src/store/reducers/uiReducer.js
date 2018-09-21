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
        default:
            return state
    }
}
