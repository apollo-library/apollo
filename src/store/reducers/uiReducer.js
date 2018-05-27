import { TYPES } from '../actions'

/*
    These states are mainly for handling UI states that are global
    across the whole appliaction or are specific to an individual
    page but need to be accesssed from multiple components
*/

const initialStates = {
    notificationPopupActive: false,
    accountPopupActive: false
}

function toggleNotifications(state) {
    let localState = state;
    localState.notificationPopupActive = !localState.notificationPopupActive;

    return {...state, localState};
}

function hideNotifications(state) {
    let localState = state;
    localState.notificationPopupActive = false;

    return {...state, localState};
}

function toggleAccount(state) {
    let localState = state;
    localState.accountPopupActive = !localState.accountPopupActive;

    return {...state, localState};
}

function hideAccount(state) {
    let localState = state;
    localState.accountPopupActive = false;

    return {...state, localState};
}

export const ui = (state = initialStates, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_NOTIFICATIONS:
            return toggleNotifications(state)
        case TYPES.HIDE_NOTIFICATIONS:
            return hideNotifications(state)
        case TYPES.TOGGLE_ACCOUNT:
            return toggleAccount(state)
        case TYPES.HIDE_ACCOUNT:
            return hideAccount(state)
        default:
            return state
    }
}
